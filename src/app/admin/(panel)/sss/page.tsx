import { AdminDataTable, type AdminTableColumn } from "@/components/admin/admin-data-table";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { services } from "@/content/services";

type FaqRow = { question: string; serviceName: string; serviceSlug: string };

const allFaqs: FaqRow[] = services.flatMap((service) =>
  service.faqs.map((faq) => ({
    question: faq.question,
    serviceName: service.name,
    serviceSlug: service.slug,
  })),
);

const columns: AdminTableColumn<FaqRow>[] = [
  { header: "Soru", cell: (row) => <span className="font-medium">{row.question}</span> },
  { header: "İlişkili Hizmet", cell: (row) => row.serviceName },
];

export default function AdminFaqPage() {
  return (
    <div>
      <AdminPageHeader
        title="Sık Sorulan Sorular"
        description={`Hizmet sayfalarına gömülü toplam ${allFaqs.length} soru-cevap (bkz. content/services.ts).`}
      />

      <AdminDataTable columns={columns} rows={allFaqs} getRowKey={(row) => `${row.serviceSlug}-${row.question}`} />

      <p className="mt-4 text-xs text-muted-foreground">
        SSS içerikleri şu an her hizmetin kendi veri kaydına gömülü (bağımsız bir SSS
        modülü değil). Bağımsız, genel bir SSS koleksiyonu (Bilgi Merkezi &gt; SSS
        sayfası) ihtiyacı olursa, Veritabanı Şeması adımında ayrı bir <code>FAQ</code>{" "}
        tablosuna taşınabilir.
      </p>
    </div>
  );
}
