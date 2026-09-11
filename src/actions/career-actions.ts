"use server";

import fs from "node:fs/promises";
import path from "node:path";

import { prisma } from "@/lib/prisma";
import { careerApplicationSchema } from "@/lib/validation/career-schema";

export type SubmitApplicationResult = { success: true } | { success: false; error: string };

const CV_UPLOADS_DIR = path.join(process.cwd(), "public", "uploads", "cvs");
const CV_UPLOADS_PUBLIC_PATH = "/uploads/cvs";

/**
 * Kariyer Başvurusu Gönderimi — Prisma Sürümü
 * --------------------------------------------------------------------------
 * Artık Applicant kaydı gerçekten PostgreSQL'e yazılıyor ve CV dosyası
 * gerçekten `public/uploads/cvs/` klasörüne kaydediliyor (ürün
 * görselleriyle aynı dosya-tabanlı kalıcılık deseni — bkz.
 * `lib/product-store.ts` başındaki not: yalnızca dosya sistemi kalıcı
 * olan ortamlarda güvenilir çalışır, serverless'ta bulut depolama
 * gerekir).
 *
 * Kalan tek bağımlılık: e-posta servis sağlayıcısı (adaya "başvurunuz
 * alındı" e-postası göndermek için — PRD'de hâlâ açık karar).
 */
export async function submitCareerApplication(
  data: unknown,
  cvFile: File | null,
  jobPostingSlug?: string,
): Promise<SubmitApplicationResult> {
  const parsed = careerApplicationSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Form bilgileri eksik veya hatalı." };
  }

  let cvFileUrl: string | null = null;
  if (cvFile && cvFile.size > 0) {
    await fs.mkdir(CV_UPLOADS_DIR, { recursive: true });
    const fileName = `${Date.now()}-${parsed.data.firstName}-${parsed.data.lastName}.pdf`
      .toLocaleLowerCase("tr-TR")
      .replace(/[^a-z0-9.-]/g, "-");
    const buffer = Buffer.from(await cvFile.arrayBuffer());
    await fs.writeFile(path.join(CV_UPLOADS_DIR, fileName), buffer);
    cvFileUrl = `${CV_UPLOADS_PUBLIC_PATH}/${fileName}`;
  }

  const jobPosting = jobPostingSlug
    ? await prisma.jobPosting.findUnique({ where: { slug: jobPostingSlug }, select: { id: true } })
    : null;

  await prisma.applicant.create({
    data: {
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      cvFileUrl,
      coverNote: parsed.data.coverNote || null,
      kvkkConsent: parsed.data.kvkkConsent,
      jobPostingId: jobPosting?.id ?? null,
    },
  });

  // TODO(E-posta sağlayıcısı kararı): adaya "başvurunuz alındı" e-postası gönder.

  return { success: true };
}
