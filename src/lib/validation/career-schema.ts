import { z } from "zod";

export const careerApplicationSchema = z.object({
  firstName: z.string().trim().min(2, "Ad en az 2 karakter olmalıdır"),
  lastName: z.string().trim().min(2, "Soyad en az 2 karakter olmalıdır"),
  email: z.string().trim().email("Geçerli bir e-posta adresi girin"),
  phone: z.string().trim().min(10, "Geçerli bir telefon numarası girin"),
  coverNote: z.string().trim().max(2000, "Ön yazı 2000 karakteri geçemez").optional(),
  kvkkConsent: z.literal(true, {
    errorMap: () => ({ message: "Devam etmek için KVKK Aydınlatma Metni'ni onaylamanız gerekir" }),
  }),
});

export type CareerApplicationValues = z.infer<typeof careerApplicationSchema>;

export const ACCEPTED_CV_TYPE = "application/pdf";
export const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
