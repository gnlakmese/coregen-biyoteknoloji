"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

function QuoteConfirmationContent() {
  const searchParams = useSearchParams();
  const quoteNumber = searchParams.get("q");

  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <CheckCircle2 className="h-7 w-7" />
      </div>

      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-magenta">
          Talebiniz Alındı
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Teşekkürler, teklif talebiniz iletildi
        </h1>
        {quoteNumber && (
          <p className="font-mono text-sm text-muted-foreground">
            Referans Numaranız: <span className="font-semibold text-foreground">{quoteNumber}</span>
          </p>
        )}
        <p className="mx-auto max-w-md text-muted-foreground">
          Ekibimiz talebinizi değerlendirip 24–48 saat içinde e-posta veya
          telefon ile size dönüş yapacaktır.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/">
            Ana Sayfaya Dön
            <ArrowRight />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/urunler">Diğer Ürünlere Göz Atın</Link>
        </Button>
      </div>
    </div>
  );
}

export default function QuoteConfirmationPage() {
  return (
    <Suspense fallback={null}>
      <QuoteConfirmationContent />
    </Suspense>
  );
}
