import Link from "next/link";
import { ArrowRight, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <SearchX className="h-6 w-6" />
      </div>
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Hata 404
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mx-auto max-w-md text-muted-foreground">
          Bu sayfa taşınmış, kaldırılmış veya henüz yayınlanmamış olabilir.
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
          <Link href="/hizmetler">Hizmetleri İnceleyin</Link>
        </Button>
      </div>
    </div>
  );
}
