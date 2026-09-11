import { notFound } from "next/navigation";

import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { ProductForm } from "@/components/admin/product-form";
import { getProductBySlug } from "@/lib/product-store";

export default async function EditProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <AdminPageHeader title={`Düzenle: ${product.name}`} description="Ürün bilgilerini güncelleyin veya görseli değiştirin." />
      <ProductForm product={product} />
    </div>
  );
}
