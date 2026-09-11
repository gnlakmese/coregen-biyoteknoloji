import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ApplicationConfirmationPage() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <CheckCircle2 className="h-7 w-7" />
      </div>

      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-magenta">
          Başvurunuz Alındı
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Teşekkürler, başvurunuz iletildi
        </h1>
        <p className="mx-auto max-w-md text-muted-foreground">
          Ekibimiz başvurunuzu değerlendirip uygun bir pozisyon olduğunda
          sizinle iletişime geçecektir.
        </p>
      </div>

      <Button asChild>
        <Link href="/">
          Ana Sayfaya Dön
          <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}
