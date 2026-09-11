"use client";

import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";

import { useQuoteCart } from "@/components/quote/quote-cart-context";
import type { QuoteCartItem } from "@/types/quote";
import { getServiceBySlug } from "@/content/services"; // Eklediğimiz dinamik veri altyapısı

export function QuoteItemRow({ item, compact = false }: { item: QuoteCartItem; compact?: boolean }) {
  const { removeItem, updateQuantity } = useQuoteCart();

  // 1. Sepetteki öğenin detaylarını çekiyoruz (Hizmet ise detaylar gelir, laboratuvar sarf ürünü ise boş döner)
  const serviceDetail = getServiceBySlug(item.productSlug);
  
  // 2. Dinamik Etiket: Jel/Nanodrop için "Adet", diğer analizler için "Numune Adedi", danışmanlık için "Proje" vb. otomatik gelir.
  const unitLabel = serviceDetail?.unitType || "Adet";
  
  // 3. Link Düzeltmesi: Hizmet ise /hizmetler/ slug'ına, değilse /urunler/ slug'ına gider.
  const itemHref = serviceDetail ? `/hizmetler/${item.productSlug}` : `/urunler/${item.productSlug}`;

  return (
    <div className="flex items-start gap-3 py-3">
      <div className="min-w-0 flex-1 space-y-1">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {item.subCategory}
        </p>
        <Link
          href={itemHref}
          className={compact ? "line-clamp-2 text-sm font-medium text-foreground hover:text-primary" : "text-sm font-medium text-foreground hover:text-primary"}
        >
          {item.productName}
        </Link>

        <div className="flex items-center gap-3 pt-1">
          <div className="flex items-center rounded-md border border-border">
            <button
              type="button"
              onClick={() => updateQuantity(item.productSlug, item.quantity - 1)}
              disabled={item.quantity <= 1}
              aria-label="Miktarı azalt"
              className="flex h-7 w-7 items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-7 text-center text-xs font-medium text-foreground">{item.quantity}</span>
            <button
              type="button"
              onClick={() => updateQuantity(item.productSlug, item.quantity + 1)}
              aria-label="Miktarı artır"
              className="flex h-7 w-7 items-center justify-center text-muted-foreground hover:text-foreground"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          
          {/* DİNAMİK BİRİM ETİKETİ (Numune Adedi, Proje, Eğitim veya Adet) BURAYA EKLENDİ */}
          <span className="text-[11px] font-bold text-pink-600/80 uppercase tracking-wider">
            {unitLabel}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => removeItem(item.productSlug)}
        aria-label={`${item.productName} sepetten kaldır`}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-destructive transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}