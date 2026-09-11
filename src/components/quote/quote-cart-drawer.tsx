"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShoppingCart, X } from "lucide-react";

import { QuoteItemRow } from "@/components/quote/quote-item-row";
import { useQuoteCart } from "@/components/quote/quote-cart-context";
import { Button } from "@/components/ui/button";
import { transitionBase } from "@/lib/motion";

export function QuoteCartDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { items, itemCount } = useQuoteCart();

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onOpenChange(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitionBase}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Teklif sepeti"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-background shadow-xl"
          >
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5">
              <span className="flex items-center gap-2 font-display text-base font-semibold">
                <ShoppingCart className="h-4 w-4" />
                Teklif Sepeti {itemCount > 0 && `(${itemCount})`}
              </span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Sepeti kapat"
                onClick={() => onOpenChange(false)}
              >
                <X />
              </Button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <ShoppingCart className="h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
                <p className="text-sm text-muted-foreground">Sepetiniz henüz boş.</p>
                <Button variant="outline" size="sm" onClick={() => onOpenChange(false)} asChild>
                  <Link href="/urunler">Ürünleri İnceleyin</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 divide-y divide-border overflow-y-auto px-5">
                  {items.map((item) => (
                    <QuoteItemRow key={item.productSlug} item={item} compact />
                  ))}
                </div>

                <div className="shrink-0 space-y-3 border-t border-border p-5">
                  <Button className="w-full" onClick={() => onOpenChange(false)} asChild>
                    <Link href="/teklif-sepeti/form">
                      Teklif Talebini Gönder
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)} asChild>
                    <Link href="/teklif-sepeti">Sepeti Görüntüle</Link>
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
