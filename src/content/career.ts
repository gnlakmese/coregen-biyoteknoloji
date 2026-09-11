import type { JobPosting } from "@/types/career";

/**
 * Açık Pozisyonlar
 * --------------------------------------------------------------------------
 * Kasıtlı olarak BOŞ bırakıldı — tıpkı `content/blog.ts`'teki gibi. CoreGen
 * tarafından paylaşılmış gerçek bir açık pozisyon listesi olmadığı için
 * burada sahte pozisyon adı/departman/gereksinim uydurulmadı (bkz. Marka
 * Analiz Raporu'nun "hayalet içerik" eleştirisi). `/kurumsal/kariyer`
 * sayfası bu dizi boşken "şu an açık pozisyon yok, genel başvuru
 * yapabilirsiniz" durumunu gösterir ve doğrudan Genel Başvuru formuna
 * yönlendirir — bu form gerçek ve tam işlevseldir.
 *
 * Gerçek pozisyonlar eklendiğinde bu diziye kayıt eklemek yeterlidir
 * (veya ileride Prisma JobPosting sorgusu bu dosyanın yerini alır);
 * liste ve detay sayfası bileşenlerinde değişiklik gerekmez.
 *
 * Örnek kayıt şekli:
 * {
 *   slug: "biyoinformatik-uzmani",
 *   title: "Biyoinformatik Uzmanı",
 *   department: "Ar-Ge",
 *   location: "Mersin",
 *   employmentType: "Tam Zamanlı",
 *   summary: "...",
 *   description: ["..."],
 *   requirements: ["..."],
 * }
 */
export const jobPostings: JobPosting[] = [];

export function getJobPostingBySlug(slug: string): JobPosting | undefined {
  return jobPostings.find((job) => job.slug === slug);
}
