import { AdminEmptyState } from "@/components/admin/admin-empty-state";
import { AdminPageHeader } from "@/components/admin/admin-page-header";

export default function AdminMediaPage() {
  return (
    <div>
      <AdminPageHeader title="Medya Kütüphanesi" description="Yüklenen görsel ve dosyaların merkezi yönetimi." />
      <AdminEmptyState
        title="Dosya depolama servisi henüz bağlı değil"
        description="Ürün/hizmet görselleri, CV dosyaları gibi yüklemeler için bir depolama sağlayıcısı (S3 / Cloudinary / Vercel Blob) kararı hâlâ açık — bu, PRD'de belirtilen açık kararlardan biri. Sağlayıcı seçildiğinde bu modül aktif hale gelecek."
      />
    </div>
  );
}
