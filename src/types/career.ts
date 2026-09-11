export type JobPosting = {
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  summary: string;
  description: string[];
  requirements: string[];
};

/**
 * Başvuru durumu — Prisma şeması kurulduğunda JobApplication modelinin
 * `status` alanı birebir bu değerleri kullanacak. Admin Paneli (durum
 * güncelleme arayüzü) bu fazın kapsamı dışında; yalnızca veri modeli
 * hazırlanıyor (Teklif modülündeki QuoteStatus ile aynı yaklaşım).
 */
export type ApplicationStatus = "Yeni" | "İnceleniyor" | "Mülakat" | "Reddedildi" | "İşe Alındı";

export type CareerApplicationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverNote?: string;
  kvkkConsent: boolean;
};
