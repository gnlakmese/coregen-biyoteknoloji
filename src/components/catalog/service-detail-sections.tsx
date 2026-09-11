import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Accordion } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whyCoreGen } from "@/content/homepage";
import { iconMap } from "@/lib/icon-map";
import type { ServiceContent, ServiceFaq } from "@/types/service";

export function ServiceInfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
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

export function ServiceWorkflow({ steps }: { steps: string[] }) {
  return (
    <div className="space-y-5">
      <h2 className="font-display text-xl font-semibold text-foreground">İş Akışı</h2>
      <ol className="space-y-0">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
              {!isLast && (
                <span aria-hidden="true" className="absolute left-[15px] top-8 h-full w-px bg-border" />
              )}
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-xs font-medium text-primary">
                {index + 1}
              </span>
              <span className="pt-1 text-sm font-medium text-foreground">{step}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function ServiceFaqSection({ faqs }: { faqs: ServiceFaq[] }) {
  if (faqs.length === 0) return null;
  return (
    <div className="space-y-5">
      <h2 className="font-display text-xl font-semibold text-foreground">Sık Sorulan Sorular</h2>
      <Accordion items={faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))} />
    </div>
  );
}

export function RelatedServices({ services }: { services: ServiceContent[] }) {
  if (services.length === 0) return null;
  return (
    <div className="space-y-5">
      <h2 className="font-display text-xl font-semibold text-foreground">İlgili Hizmetler</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/hizmetler/${service.slug}`} className="group block h-full">
            <Card className="h-full transition-colors group-hover:border-primary/40">
              <CardHeader className="space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {service.category}
                </p>
                <CardTitle className="text-base">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  İncele
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Hizmet detay sayfalarında kurumsal güven oluşturan "Neden CoreGen?"
 * bölümü. Homepage'deki aynı `whyCoreGen` veri kaynağını yeniden kullanır
 * (veri çoğaltmasından kaçınmak için) — yalnızca kompakt bir düzenle
 * hizmet sayfası bağlamına uyarlanır.
 */
export function ServiceWhyCoreGen() {
  return (
    <div className="space-y-5">
      <h2 className="font-display text-xl font-semibold text-foreground">Neden CoreGen?</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {whyCoreGen.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={item.title} className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
