import { AdminEmptyState } from "@/components/admin/admin-empty-state";
import { AdminPageHeader } from "@/components/admin/admin-page-header";

export default function AdminAnalyticsPage() {
  return (
    <div>
      <AdminPageHeader title="Analytics" description="Ziyaretçi ve dönüşüm verileri." />
      <AdminEmptyState
        title="Analytics sağlayıcısı henüz bağlı değil"
        description="Google Analytics 4 / Search Console entegrasyonu, Dağıtım (deployment) aşamasında kurulacak. Bağlandığında bu modülde sayfa görüntüleme, teklif dönüşüm hunisi ve trafik kaynağı özetleri gösterilecek."
      />
    </div>
  );
}
