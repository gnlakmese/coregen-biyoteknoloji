import { AdminDataTable, type AdminTableColumn } from "@/components/admin/admin-data-table";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { services } from "@/content/services";
import { products } from "@/content/products";

type SeoRow = { path: string; schema: string };

const staticPages: SeoRow[] = [
  { path: "/hizmetler", schema: "—" },
  { path: "/urunler", schema: "—" },
  { path: "/kurumsal/hakkimizda", schema: "—" },
  { path: "/kurumsal/kariyer", schema: "—" },
];

const serviceRows: SeoRow[] = services.map((s) => ({
  path: `/hizmetler/${s.slug}`,
  schema: "Service, BreadcrumbList, FAQPage",
}));

const productRows: SeoRow[] = products.map((p) => ({
  path: `/urunler/${p.slug}`,
  schema: "Product, BreadcrumbList",
}));

const allRows = [...staticPages, ...serviceRows, ...productRows];

const columns: AdminTableColumn<SeoRow>[] = [
  { header: "Sayfa", cell: (row) => <span className="font-mono text-xs">{row.path}</span> },
  { header: "JSON-LD Şema", cell: (row) => row.schema },
];

export default function AdminSeoPage() {
  return (
    <div>
      <AdminPageHeader
        title="SEO Genel Bakış"
        description={`${allRows.length} sayfa canonical URL ve metadata ile yayında.`}
      />

      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">sitemap.xml</p>
          <p className="mt-1 text-sm font-medium text-destructive">Henüz oluşturulmadı</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">robots.txt</p>
          <p className="mt-1 text-sm font-medium text-destructive">Henüz oluşturulmadı</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">Organization Şeması</p>
          <p className="mt-1 text-sm font-medium text-destructive">Henüz eklenmedi</p>
        </div>
      </div>

      <AdminDataTable columns={columns} rows={allRows} getRowKey={(row) => row.path} />

      <p className="mt-4 text-xs text-muted-foreground">
        Hizmet ve ürün detay sayfalarında JSON-LD şeması, canonical URL ve OpenGraph
        metadata zaten aktif. Site geneli <code>sitemap.ts</code>/<code>robots.ts</code>{" "}
        ve <code>Organization</code> şeması ayrı bir SEO Katmanı görevi olarak
        planlanmıştı — bu admin görünümü mevcut durumu şeffaf şekilde gösteriyor.
      </p>
    </div>
  );
}
