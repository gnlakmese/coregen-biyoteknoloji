/**
 * Prisma Seed Script
 * ============================================================================
 * Bu script, projede şu ana kadar statik TypeScript dosyalarında
 * (`src/content/*.ts`) ve dosya-tabanlı admin override sisteminde
 * (`data/products-overrides.json`) tutulan TÜM gerçek içeriği veritabanına
 * aktarır. Bu, aylarca süren içerik geliştirme sürecinin (14 hizmet, 70
 * ürün — DLAB dahil, 3 blog yazısı) gerçek bir veritabanı göçüdür (migration),
 * örnek/sahte veri değildir.
 *
 * Çalıştırma: `npm run prisma:seed` (veya `npx prisma db seed`)
 * Not: Script idempotent'tir — tekrar çalıştırıldığında önce mevcut
 * verileri temizler (deleteMany), böylece güvenle tekrar çalıştırılabilir.
 */
import fs from "node:fs";
import path from "node:path";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

import { services, serviceCategoryOutline } from "../src/content/services";
import { products as staticProducts, productCategories } from "../src/content/products";
import { blogPosts } from "../src/content/blog";
import { jobPostings } from "../src/content/career";
import type { ProductContent } from "../src/types/product";

const prisma = new PrismaClient();

function readProductOverrides(): ProductContent[] {
  const overridesPath = path.join(process.cwd(), "data", "products-overrides.json");
  if (!fs.existsSync(overridesPath)) return [];
  return JSON.parse(fs.readFileSync(overridesPath, "utf-8"));
}

/** Statik ürünler + admin override'ları birleştirir (override aynı slug'da statik kaydın yerine geçer). */
function getMergedProducts(): ProductContent[] {
  const overrides = readProductOverrides();
  const overrideSlugs = new Set(overrides.map((p) => p.slug));
  const baseline = staticProducts.filter((p) => !overrideSlugs.has(p.slug));
  return [...baseline, ...overrides];
}

async function main() {
  console.log("Seed başlıyor...\n");

  // --------------------------------------------------------------------
  // Temizlik (idempotent yeniden çalıştırma için — bağımlılık sırasına göre)
  // --------------------------------------------------------------------
  await prisma.quoteItem.deleteMany();
  await prisma.quote.deleteMany();
  await prisma.applicant.deleteMany();
  await prisma.jobPosting.deleteMany();
  await prisma.serviceFaq.deleteMany();
  await prisma.blogFaq.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.blogCategory.deleteMany();
  await prisma.service.deleteMany();
  await prisma.serviceCategory.deleteMany();
  await prisma.product.deleteMany();
  await prisma.productCategory.deleteMany();
  await prisma.contactMessage.deleteMany();
  await prisma.activityLog.deleteMany();
  await prisma.user.deleteMany();

  // --------------------------------------------------------------------
  // Ürün Kategorileri (4)
  // --------------------------------------------------------------------
  const categoryIdBySlug = new Map<string, string>();
  for (const category of productCategories) {
    const created = await prisma.productCategory.create({
      data: {
        slug: category.slug,
        name: category.name,
        description: category.description,
        subCategories: [...category.subCategories],
      },
    });
    categoryIdBySlug.set(category.slug, created.id);
  }
  console.log(`✓ ${productCategories.length} ürün kategorisi eklendi`);

  // --------------------------------------------------------------------
  // Ürünler (statik + DLAB admin override'ları birleştirilmiş — 70 ürün)
  // --------------------------------------------------------------------
  const mergedProducts = getMergedProducts();
  let productCount = 0;
  for (const product of mergedProducts) {
    const categoryEntry = productCategories.find((c) => c.name === product.category);
    if (!categoryEntry) {
      console.warn(`  ⚠ "${product.slug}" için kategori bulunamadı: ${product.category}`);
      continue;
    }
    const categoryId = categoryIdBySlug.get(categoryEntry.slug)!;

    await prisma.product.create({
      data: {
        slug: product.slug,
        name: product.name,
        brand: product.brand ?? null,
        subCategory: product.subCategory,
        imageUrl: product.imageUrl ?? null,
        shortDescription: product.shortDescription,
        description: product.description,
        technicalSpecs: product.technicalSpecs as object,
        usageAreas: product.usageAreas,
        relatedProductSlugs: product.relatedProductSlugs,
        categoryId,
      },
    });
    productCount++;
  }
  console.log(`✓ ${productCount} ürün eklendi (statik + DLAB admin eklentileri dahil)`);

  // --------------------------------------------------------------------
  // Hizmet Kategorileri (7)
  // --------------------------------------------------------------------
  const serviceCategoryIdByName = new Map<string, string>();
  for (const category of serviceCategoryOutline) {
    const created = await prisma.serviceCategory.create({
      data: {
        slug: category.category
          .toLocaleLowerCase("tr-TR")
          .replace(/ı/g, "i")
          .replace(/ğ/g, "g")
          .replace(/ü/g, "u")
          .replace(/ş/g, "s")
          .replace(/ö/g, "o")
          .replace(/ç/g, "c")
          .replace(/\s+/g, "-"),
        name: category.category,
        description: category.description,
      },
    });
    serviceCategoryIdByName.set(category.category, created.id);
  }
  console.log(`✓ ${serviceCategoryOutline.length} hizmet kategorisi eklendi`);

  // --------------------------------------------------------------------
  // Hizmetler (14) + SSS'ler
  // --------------------------------------------------------------------
  for (const service of services) {
    const categoryId = serviceCategoryIdByName.get(service.category);
    if (!categoryId) {
      console.warn(`  ⚠ "${service.slug}" için kategori bulunamadı: ${service.category}`);
      continue;
    }

    await prisma.service.create({
      data: {
        slug: service.slug,
        name: service.name,
        heroDescription: service.heroDescription,
        description: service.description,
        applicationAreas: service.applicationAreas,
        subServices: service.subServices ?? [],
        workflowSteps: service.workflowSteps,
        deliverables: service.deliverables,
        advantages: service.advantages,
        suitableFor: service.suitableFor,
        relatedServiceSlugs: service.relatedServiceSlugs,
        categoryId,
        faqs: {
          create: service.faqs.map((faq, index) => ({
            question: faq.question,
            answer: faq.answer,
            sortOrder: index,
          })),
        },
      },
    });
  }
  console.log(`✓ ${services.length} hizmet eklendi (SSS'leriyle birlikte)`);

  // --------------------------------------------------------------------
  // Blog Kategorileri + Yazılar (3) + SSS'ler
  // --------------------------------------------------------------------
  const blogCategoryNames = Array.from(new Set(blogPosts.map((p) => p.category)));
  const blogCategoryIdByName = new Map<string, string>();
  for (const categoryName of blogCategoryNames) {
    const created = await prisma.blogCategory.create({
      data: {
        slug: categoryName
          .toLocaleLowerCase("tr-TR")
          .replace(/ı/g, "i")
          .replace(/ğ/g, "g")
          .replace(/ü/g, "u")
          .replace(/ş/g, "s")
          .replace(/ö/g, "o")
          .replace(/ç/g, "c")
          .replace(/\s+/g, "-"),
        name: categoryName,
      },
    });
    blogCategoryIdByName.set(categoryName, created.id);
  }

  for (const post of blogPosts) {
    const categoryId = blogCategoryIdByName.get(post.category)!;
    const relatedServiceRecords = await prisma.service.findMany({
      where: { slug: { in: post.relatedServiceSlugs } },
      select: { id: true },
    });

    await prisma.blogPost.create({
      data: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        readingTimeMinutes: post.readingTimeMinutes,
        sections: post.sections as object,
        table: (post.table as object) ?? undefined,
        infographicSuggestion: post.infographicSuggestion,
        sources: post.sources,
        publishedAt: new Date(post.publishedAt),
        categoryId,
        faqs: {
          create: post.faqs.map((faq, index) => ({
            question: faq.question,
            answer: faq.answer,
            sortOrder: index,
          })),
        },
        relatedServices: {
          connect: relatedServiceRecords.map((s) => ({ id: s.id })),
        },
      },
    });
  }
  console.log(`✓ ${blogPosts.length} blog yazısı eklendi (${blogCategoryNames.length} kategori, SSS'leriyle birlikte)`);

  // --------------------------------------------------------------------
  // Kariyer — Açık Pozisyonlar
  // --------------------------------------------------------------------
  for (const job of jobPostings) {
    await prisma.jobPosting.create({
      data: {
        slug: job.slug,
        title: job.title,
        department: job.department,
        location: job.location,
        employmentType: job.employmentType,
        summary: job.summary,
        description: job.description,
        requirements: job.requirements,
      },
    });
  }
  console.log(`✓ ${jobPostings.length} açık pozisyon eklendi`);

  // --------------------------------------------------------------------
  // Admin Kullanıcı (Gönül Akmeşe)
  // --------------------------------------------------------------------
  const adminEmail = "gonulakmese@coregenbiyoteknoloji.com";
  const adminPassword = await bcrypt.hash("Akmese.2434", 10);

  await prisma.user.create({
    data: {
      email: adminEmail,
      passwordHash: adminPassword,
      name: "Gönül Akmeşe",
      role: "SUPER_ADMIN",
      isActive: true,
    },
  });
  console.log(`✓ Admin kullanıcı başarıyla oluşturuldu: ${adminEmail}`);

  console.log("\nSeed tamamlandı. ✅");
}

main()
  .catch((error) => {
    console.error("Seed sırasında hata oluştu:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });