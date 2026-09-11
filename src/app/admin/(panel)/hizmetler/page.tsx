import Link from "next/link";
import { Plus } from "lucide-react";
import { AdminDataTable, type AdminTableColumn } from "@/components/admin/admin-data-table";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { Button } from "@/components/ui/button";
import { serviceCategoryOutline, services } from "@/content/services";

type OutlineRow = { name: string; category: string; slug: string | null };

const pendingCount = serviceCategoryOutline.reduce(
  (sum, category) => sum + category.items.filter((item) => item.slug === null).length,
  0,
);

const allRows: OutlineRow[] = serviceCategoryOutline.flatMap((category) =>
  category.items.map((item) => ({ name: item.name, category: category.category, slug: item.slug })),
);

const columns: AdminTableColumn<OutlineRow>[] = [
  { header: "Hizmet", cell: (row) => <span className="font-semibold text-slate-900">{row.name}</span> },
  { header: "Kategori", cell: (row) => <span className="text-slate-600">{row.category}</span> },
  {
    header: "Durum",
    cell: (row) =>
      row.slug ? (
        <span className="inline-flex rounded-md bg-pink-50 px-2.5 py-1 text-[11px] font-bold text-pink-600 border border-pink-100">
          Yayında
        </span>
      ) : (
        <span className="inline-flex rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500 border border-slate-200">
          İçerik hazırlanıyor
        </span>
      ),
  },
];

export default function AdminServicesPage() {
  return (
    <div className="space-y-6 text-slate-800">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <span className="text-[10px] uppercase font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
            Hizmet Kataloğu Yönetimi
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">Hizmetler</h1>
          <p className="text-xs text-slate-500 mt-1">
            {services.length} hizmet yayında, {pendingCount} hizmet içerik bekliyor (toplam {allRows.length} planlanan).
          </p>
        </div>
        <Link
          href="/admin/hizmet-olustur"
          className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-3 rounded-xl text-xs transition-all shadow-md shadow-pink-600/20 shrink-0"
        >
          <Plus className="w-4 h-4" /> Yeni Hizmet Ekle
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md overflow-hidden">
        <AdminDataTable columns={columns} rows={allRows} getRowKey={(row) => `${row.category}-${row.name}`} />
      </div>

      <p className="text-xs text-slate-400 px-2">
        &quot;İçerik hazırlanıyor&quot; satırları, kaynak dokümanda doğrulanabilir açıklaması bulunmadığı için bilinçli olarak yayınlanmamış hizmetlerdir (bkz. FAZ 3 içerik politikası).
      </p>
    </div>
  );
}