import { z } from "zod";

export const serviceRequestSchema = z.object({
  fullName: z.string().trim().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  institutionAndRole: z.string().trim().min(2, "Firma/Kurum adı ve göreviniz zorunludur"),
  phone: z.string().trim().min(10, "Geçerli bir telefon numarası girin"),
  address: z.string().trim().min(5, "Adres zorunludur"),
  invoiceDate: z.string().trim().optional(),
  deviceBrandModelSerial: z.string().trim().min(2, "Cihazın markası/modeli ve seri numarası zorunludur"),
  problemDescription: z.string().trim().min(5, "Lütfen yaşadığınız problemi açıklayın"),
  accessoriesIncluded: z.string().trim().min(1, "Bu alan zorunludur — aksesuar yoksa \"Yok\" yazabilirsiniz"),
  usedInMicrobiology: z.enum(["evet", "hayir"]),
  note: z.string().trim().max(1000).optional(),
  kvkkConsent: z.literal(true, {
    errorMap: () => ({ message: "Devam etmek için KVKK Aydınlatma Metni'ni onaylamanız gerekir" }),
  }),
});

export type ServiceRequestValues = z.infer<typeof serviceRequestSchema>;
