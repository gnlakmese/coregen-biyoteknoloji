import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { Input } from "@/components/ui/input";

function SettingField({ label, value, pending = false }: { label: string; value: string; pending?: boolean }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <Input value={value} disabled className={pending ? "text-muted-foreground" : ""} />
    </div>
  );
}

export default function AdminSettingsPage() {
  return (
    <div className="max-w-2xl">
      <AdminPageHeader
        title="Ayarlar"
        description="Site geneli iletişim bilgileri ve yapılandırma. Şu an salt okunur — kaydetme, Ayarlar veritaban tablosu kurulduğunda aktif olacak."
      />

      <div className="space-y-8">
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <h3 className="font-display text-sm font-semibold text-foreground">Marka</h3>
          <SettingField label="Site Adı" value="CoreGen Biyoteknoloji" />
          <SettingField label="Konum" value="Mersin, Türkiye" />
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <h3 className="font-display text-sm font-semibold text-foreground">İletişim Bilgileri</h3>
          <SettingField label="Adres" value="Henüz eklenmedi (açık karar — PRD)" pending />
          <SettingField label="Telefon" value="Henüz eklenmedi (açık karar — PRD)" pending />
          <SettingField label="E-posta" value="Henüz eklenmedi (açık karar — PRD)" pending />
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <h3 className="font-display text-sm font-semibold text-foreground">Sosyal Medya</h3>
          <SettingField label="Instagram" value="Henüz eklenmedi" pending />
          <SettingField label="LinkedIn" value="Henüz eklenmedi" pending />
          <SettingField label="Facebook" value="Henüz eklenmedi" pending />
        </div>
      </div>
    </div>
  );
}
