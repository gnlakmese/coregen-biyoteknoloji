"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, FlaskConical, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/components/quote/quote-cart-context";
import { cn } from "@/lib/utils";
import type { ProductContent } from "@/types/product";

/**
 * Ürün görseli yerine tutucu (placeholder)
 * --------------------------------------------------------------------------
 * Gerçek ürün görselleri (Product Catalog dokümanına göre AI ile üretilmiş,
 * beyaz arka planlı, marka logosuz render) henüz eklenmedi — bu bilinçli
 * bir kapsam kararı, kırık/görsel yer tutucu yerine tutarlı, markaya uygun
 * bir ikon alanı kullanılıyor. Görseller hazır olduğunda bu bileşen bir
 * `<Image>` etiketiyle değiştirilecek, ProductCard'ı kullanan sayfalarda
 * değişiklik gerekmeyecek.
 */
export function ProductImagePlaceholder({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center bg-brand-tint/50 text-primary", className)}>
      <FlaskConical className="h-8 w-8" strokeWidth={1.5} />
    </div>
  );
}

/**
 * "Teklife Ekle" butonu, global Teklif Sepeti state'ine (Context +
 * localStorage) bağlıdır. Ürün zaten sepetteyse "Eklendi" durumunu
 * gösterir; tekrar tıklamak miktarı bir artırır.
 */
export function AddToQuoteButton({ product, compact = false }: { product: ProductContent; compact?: boolean }) {
  const { items, addItem } = useQuoteCart();
  const inCart = items.some((item) => item.productSlug === product.slug);

  return (
    <Button
      type="button"
      size={compact ? "sm" : "default"}
      variant={inCart ? "secondary" : "default"}
      onClick={(event) => {
        event.preventDefault();
        addItem({
          productSlug: product.slug,
          productName: product.name,
          category: product.category,
          subCategory: product.subCategory,
        });
      }}
      aria-label={`${product.name} teklife ekle`}
      className="w-full"
    >
      {inCart ? (
        <>
          <Check />
          Eklendi
        </>
      ) : (
        <>
          <Plus />
          Teklife Ekle
        </>
      )}
    </Button>
  );
}

export function ProductCard({ product, view = "grid" }: { product: ProductContent; view?: "grid" | "list" }) {
  const href = `/urunler/${product.slug}`;

  if (view === "list") {
    return (
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 sm:flex-row sm:items-center">
        <Link href={href} className="shrink-0">
          {product.imageUrl ? (
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
              <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
            </div>
          ) : (
            <ProductImagePlaceholder className="h-20 w-20 rounded-lg sm:h-16 sm:w-16" />
          )}
        </Link>
        <div className="flex-1 space-y-1">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {product.subCategory}
            {product.brand && <span className="text-brand-magenta"> · {product.brand}</span>}
          </p>
          <Link href={href}>
            <h3 className="font-display text-sm font-semibold text-foreground hover:text-primary">
              {product.name}
            </h3>
          </Link>
          <p className="line-clamp-1 text-sm text-muted-foreground">{product.shortDescription}</p>
        </div>
        <div className="w-full sm:w-40">
          <AddToQuoteButton product={product} compact />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
      <Link href={href}>
        {product.imageUrl ? (
          <div className="relative h-40 w-full overflow-hidden">
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
          </div>
        ) : (
          <ProductImagePlaceholder className="h-40 w-full" />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="w-fit rounded-full bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary-foreground">
            {product.subCategory}
          </span>
          {product.brand && (
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-magenta">
              {product.brand}
            </span>
          )}
        </div>
        <Link href={href}>
          <h3 className="font-display text-sm font-semibold text-foreground hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>
        <div className="pt-2">
          <AddToQuoteButton product={product} />
        </div>
      </div>
    </div>
  );
}
