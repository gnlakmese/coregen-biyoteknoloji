export type ServiceRequestStatus =
  | "Yeni"
  | "Kayıt Oluşturuldu"
  | "Kargo Bekleniyor"
  | "İnceleniyor"
  | "Tamamlandı"
  | "İptal Edildi";

export type ServiceRequestFormData = {
  fullName: string;
  institutionAndRole: string;
  phone: string;
  address: string;
  invoiceDate?: string;
  deviceBrandModelSerial: string;
  problemDescription: string;
  accessoriesIncluded: string;
  usedInMicrobiology: boolean;
  note?: string;
  kvkkConsent: boolean;
};
