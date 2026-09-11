import { z } from "zod";

export const quoteFormSchema = z.object({
  firstName: z.string().trim().min(2, "Ad en az 2 karakter olmalıdır"),
  lastName: z.string().trim().min(2, "Soyad en az 2 karakter olmalıdır"),
  institution: z.string().trim().min(2, "Kurum adı zorunludur"),
  department: z.string().trim().optional(),
  phone: z
    .string()
    .trim()
    .min(10, "Geçerli bir telefon numarası girin"),
  email: z.string().trim().email("Geçerli bir e-posta adresi girin"),
  city: z.string().trim().optional(),
  note: z.string().trim().max(1000, "Not 1000 karakteri geçemez").optional(),
  kvkkConsent: z.literal(true, {
    errorMap: () => ({ message: "Devam etmek için KVKK Aydınlatma Metni'ni onaylamanız gerekir" }),
  }),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
