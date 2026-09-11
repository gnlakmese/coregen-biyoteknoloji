/**
 * Teklif durumu — bu enum şimdiden tanımlanıyor çünkü Prisma şeması
 * kurulduğunda Quote modelinin `status` alanı birebir bu değerleri
 * kullanacak. Admin Paneli (durum güncelleme arayüzü) bu fazın kapsamı
 * dışında; yalnızca veri modeli hazırlanıyor.
 */
export type QuoteStatus = "Bekliyor" | "Hazırlanıyor" | "Gönderildi" | "Tamamlandı" | "İptal Edildi";

export type QuoteCartItem = {
  productSlug: string;
  productName: string;
  category: string;
  subCategory: string;
  quantity: number;
  note?: string;
};

export type QuoteFormData = {
  firstName: string;
  lastName: string;
  institution: string;
  department?: string;
  phone: string;
  email: string;
  city?: string;
  note?: string;
  kvkkConsent: boolean;
};

export type QuoteSubmission = {
  quoteNumber: string;
  status: QuoteStatus;
  items: QuoteCartItem[];
  contact: QuoteFormData;
  submittedAt: string; // ISO 8601
};
