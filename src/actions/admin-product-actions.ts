"use server";

import fs from "node:fs/promises";
import path from "node:path";
import { revalidatePath } from "next/cache";

import {
  getProductBySlug,
  PRODUCT_UPLOADS_DIR,
  PRODUCT_UPLOADS_PUBLIC_PATH,
  upsertProduct,
} from "@/lib/product-store";
import { slugify } from "@/lib/utils";
import type { ProductContent } from "@/types/product";

export type SaveProductResult = { success: true; slug: string } | { success: false; error: string };

const ACCEPTED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp"];
const MAX_IMAGE_SIZE_BYTES = 8 * 1024 * 1024; // 8MB

function parseLines(value: FormDataEntryValue | null): string[] {
  if (typeof value !== "string") return [];
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseSpecs(value: FormDataEntryValue | null) {
  return parseLines(value).map((line) => {
    const [label, ...rest] = line.split(":");
    return { label: (label ?? "").trim(), value: rest.join(":").trim() };
  });
}

function categorySlugFromName(categoryName: string): string {
  const map: Record<string, string> = {
    "Laboratuvar Sarf Malzemeleri": "laboratuvar-sarf-malzemeleri",
    "PCR Kitleri": "pcr-kitleri",
    "Kimyasallar ve Reaktifler": "kimyasallar-ve-reaktifler",
    "Laboratuvar Cihazları": "laboratuvar-cihazlari",
  };
  return map[categoryName] ?? "";
}

/**
 * ÖNEMLİ / ŞEFFAFLIK NOTU: Görsel dosyası, gerçekten sunucunun
 * `public/uploads/products/` klasörüne yazılır (bkz. `lib/product-store.ts`
 * başındaki not — bu yalnızca dosya sistemi kalıcı olan ortamlarda
 * güvenilir çalışır, serverless dağıtımda Veritabanı Şeması + bulut
 * depolama adımı gerekir).
 */
export async function saveProduct(formData: FormData): Promise<SaveProductResult> {
  const name = (formData.get("name") as string)?.trim();
  const category = formData.get("category") as string;
  const subCategory = (formData.get("subCategory") as string)?.trim();
  const brand = (formData.get("brand") as string)?.trim();
  const shortDescription = (formData.get("shortDescription") as string)?.trim();
  const existingSlug = formData.get("existingSlug") as string | null;

  if (!name || !category || !subCategory || !shortDescription) {
    return { success: false, error: "Ürün adı, kategori, alt kategori ve kısa açıklama zorunludur." };
  }

  const slug = existingSlug || slugify(name);
  const existing = await getProductBySlug(slug);

  let imageUrl = existing?.imageUrl;
  const imageFile = formData.get("image") as File | null;

  if (imageFile && imageFile.size > 0) {
    if (!ACCEPTED_IMAGE_TYPES.includes(imageFile.type)) {
      return { success: false, error: "Görsel yalnızca PNG, JPEG veya WebP formatında olabilir." };
    }
    if (imageFile.size > MAX_IMAGE_SIZE_BYTES) {
      return { success: false, error: "Görsel boyutu 8 MB'ı geçemez." };
    }

    await fs.mkdir(PRODUCT_UPLOADS_DIR, { recursive: true });
    const extension = imageFile.type === "image/png" ? "png" : imageFile.type === "image/webp" ? "webp" : "jpg";
    const fileName = `${slug}-${Date.now()}.${extension}`;
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    await fs.writeFile(path.join(PRODUCT_UPLOADS_DIR, fileName), buffer);
    imageUrl = `${PRODUCT_UPLOADS_PUBLIC_PATH}/${fileName}`;
  }

  const product: ProductContent = {
    slug,
    category,
    subCategory,
    name,
    brand: brand || undefined,
    imageUrl,
    shortDescription,
    description: parseLines(formData.get("description")),
    technicalSpecs: parseSpecs(formData.get("technicalSpecs")),
    usageAreas: parseLines(formData.get("usageAreas")),
    relatedProductSlugs: existing?.relatedProductSlugs ?? [],
  };

  await upsertProduct(product);

  revalidatePath("/urunler");
  revalidatePath(`/urunler/kategori/${categorySlugFromName(category)}`);
  revalidatePath(`/urunler/${slug}`);
  revalidatePath("/admin/urunler");

  return { success: true, slug };
}
