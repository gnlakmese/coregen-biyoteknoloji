import { AdminDataTable, type AdminTableColumn } from "@/components/admin/admin-data-table";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { Button } from "@/components/ui/button";
import { blogPosts, plannedBlogTopics } from "@/content/blog";
import type { BlogPost } from "@/types/blog";

const columns: AdminTableColumn<BlogPost>[] = [
  { header: "Başlık", cell: (post) => <span className="font-medium">{post.title}</span> },
  { header: "Kategori", cell: (post) => post.category },
  { header: "Yayın Tarihi", cell: (post) => new Date(post.publishedAt).toLocaleDateString("tr-TR") },
  { header: "Okuma Süresi", cell: (post) => `${post.readingTimeMinutes} dk` },
];

export default function AdminBlogPage() {
  return (
    <div>
      <AdminPageHeader
        title="Blog"
        description={`${blogPosts.length} yayınlanmış yazı, ${plannedBlogTopics.length} yazı planlanıyor.`}
        action={
          <Button size="sm" disabled title="Veritabanı kurulduğunda aktif olacak">
            Yeni Yazı Ekle
          </Button>
        }
      />

      <AdminDataTable columns={columns} rows={blogPosts} getRowKey={(post) => post.slug} />

      <div className="mt-6 rounded-xl border border-border bg-card p-5">
        <p className="mb-3 text-sm font-medium text-foreground">Planlanan Konular (SEO Yol Haritası)</p>
        <div className="flex flex-wrap gap-2">
          {plannedBlogTopics.map((topic) => (
            <span key={topic} className="rounded-full border border-dashed border-border px-3 py-1 text-xs text-muted-foreground">
              {topic}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Bu tablo şu an salt okunur — düzenleme/yeni yazı ekleme Veritabanı Şeması
        adımında aktif olacaktır (ürün formundakine benzer bir yaklaşımla).
      </p>
    </div>
  );
}
