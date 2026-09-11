"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CareerApplicationForm } from "@/components/careers/career-application-form";

/**
 * `useSearchParams` kullanımı nedeniyle bu sayfa client component; statik
 * metadata burada tanımlanamaz. Başvuru formu kişisel veri içerdiği ve
 * doğası gereği indekslenmesi gerekmeyen bir sayfa olduğu için bu, SEO
 * açısından bir kayıp değildir (kariyer listeleme ve pozisyon detay
 * sayfaları zaten indekslenebilir server component'lerdir).
 */
function ApplicationFormContent() {
  const searchParams = useSearchParams();
  const jobTitle = searchParams.get("pozisyon") ?? undefined;

  return (
    <>
      <section className="border-b border-border bg-brand-tint/40 py-14 lg:py-20">
        <div className="container space-y-5">
          <Breadcrumb
            items={[
              { label: "Kurumsal", href: "/kurumsal/hakkimizda" },
              { label: "Kariyer", href: "/kurumsal/kariyer" },
              { label: "Başvuru" },
            ]}
          />
          <Reveal>
            <div className="max-w-2xl space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-magenta">
                Kariyer
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {jobTitle ? "Pozisyona Başvurun" : "Genel Başvuru"}
              </h1>
              <p className="leading-relaxed text-muted-foreground">
                Bilgilerinizi ve CV&apos;nizi paylaşın, ekibimiz
                değerlendirip size dönüş yapsın.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container max-w-xl">
          <CareerApplicationForm jobTitle={jobTitle} />
        </div>
      </section>
    </>
  );
}

export default function CareerApplicationPage() {
  return (
    <Suspense fallback={null}>
      <ApplicationFormContent />
    </Suspense>
  );
}
