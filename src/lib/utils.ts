import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind sınıflarını koşullu birleştirir ve çakışan utility'leri
 * (ör. iki farklı `px-*`) doğru şekilde çözer.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TURKISH_CHAR_MAP: Record<string, string> = {
  ç: "c",
  Ç: "c",
  ğ: "g",
  Ğ: "g",
  ı: "i",
  İ: "i",
  ö: "o",
  Ö: "o",
  ş: "s",
  Ş: "s",
  ü: "u",
  Ü: "u",
};

/**
 * Türkçe metinden URL/anchor-safe bir slug üretir. Kategori adları gibi
 * elle yazılmış kısa Türkçe başlıkları, sayfa içi çapa (id) veya URL
 * segmenti olarak kullanmak için.
 */
export function slugify(text: string): string {
  const normalized = text.replace(/[çÇğĞıİöÖşŞüÜ]/g, (char) => TURKISH_CHAR_MAP[char] ?? char);
  return normalized
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
