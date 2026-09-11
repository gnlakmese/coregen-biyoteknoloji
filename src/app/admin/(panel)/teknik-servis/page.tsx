import { AdminDataTable, type AdminTableColumn } from "@/components/admin/admin-data-table";
import { AdminEmptyState } from "@/components/admin/admin-empty-state";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { prisma } from "@/lib/prisma";
import type { ServiceRequest } from "@prisma/client";

const columns: AdminTableColumn<ServiceRequest>[] = [
  { header: "Referans No", cell: (r) => <span className="font-mono text-xs">{r.requestNumber}</span> },
  { header: "Ad Soyad", cell: (r) => <span className="font-medium">{r.fullName}</span> },
  { header: "Cihaz", cell: (r) => r.deviceBrandModelSerial },
  { header: "Telefon", cell: (r) => r.phone },
  {
    header: "Durum",
    cell: (r) => (
      <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
        {r.status}
      </span>
    ),
  },
  { header: "Tarih", cell: (r) => new Date(r.createdAt).toLocaleDateString("tr-TR") },
];

export default async function AdminServiceRequestsPage() {
  const requests = await prisma.serviceRequest.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <AdminPageHeader
        title="Teknik Servis Talepleri"
        description={`${requests.length} talep — /teknik-servis formundan gelen gerçek kayıtlar.`}
      />

      {requests.length > 0 ? (
        <AdminDataTable columns={columns} rows={requests} getRowKey={(r) => r.id} />
      ) : (
        <AdminEmptyState
          title="Henüz talep yok"
          description="Teknik Servis Formu üzerinden gönderilen talepler burada gerçek zamanlı görüntülenecek."
        />
      )}
    </div>
  );
}
