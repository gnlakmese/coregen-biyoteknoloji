import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { ProductCard } from "@/components/catalog/product-card";
import type { ProductContent, ProductSpec } from "@/types/product";

export function ProductSpecsTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-semibold text-foreground">Teknik Özellikler</h2>
      <dl className="divide-y divide-border rounded-lg border border-border">
        {specs.map((spec) => (
          <div key={spec.label} className="grid grid-cols-2 gap-4 px-5 py-3 text-sm">
            <dt className="text-muted-foreground">{spec.label}</dt>
            <dd className="font-medium text-foreground">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ProductUsageAreas({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-semibold text-foreground">Kullanım Alanları</h2>
      <ul className="grid gap-2.5 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RelatedProducts({ products }: { products: ProductContent[] }) {
  if (products.length === 0) return null;
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-foreground">İlgili Ürünler</h2>
        <Link
          href="/urunler"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          Tüm Ürünler
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} view="grid" />
        ))}
      </div>
    </div>
  );
}
