"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCw, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Hata izleme servisi (ör. Sentry) bağlandığında burada raporlanacak.
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <TriangleAlert className="h-6 w-6" />
      </div>
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Beklenmeyen Hata
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Bir şeyler ters gitti
        </h1>
        <p className="mx-auto max-w-md text-muted-foreground">
          Sayfa yüklenirken bir hata oluştu. Tekrar deneyebilir veya ana
          sayfaya dönebilirsiniz.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button onClick={() => reset()}>
          Tekrar Dene
          <RotateCw />
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Ana Sayfaya Dön</Link>
        </Button>
      </div>
    </div>
  );
}
