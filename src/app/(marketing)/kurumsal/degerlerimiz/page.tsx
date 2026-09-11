import type { Metadata } from "next";

import { CorporateHero } from "@/components/corporate/corporate-hero";
import { ValueGrid } from "@/components/corporate/value-grid";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { degerlerimiz } from "@/content/corporate";

const PAGE_TITLE = "Değerlerimiz";
const PAGE_DESCRIPTION =
  "Bilimsel güvenilirlik, kalite, yenilikçilik, şeffaflık, sürekli gelişim ve iş birliği — CoreGen Biyoteknoloji'nin çalışma anlayışını yönlendiren temel değerler.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/kurumsal/degerlerimiz" },
  openGraph: {
    title: `${PAGE_TITLE} | CoreGen Biyoteknoloji`,
    description: PAGE_DESCRIPTION,
    url: "/kurumsal/degerlerimiz",
    type: "website",
  },
};

export default function ValuesPage() {
  return (
    <>
      <CorporateHero
        eyebrow="Kurumsal"
        title="Değerlerimiz"
        description="Her projede bizi yönlendiren temel ilkeler."
        breadcrumbLabel="Değerlerimiz"
      />

      <section className="py-14 lg:py-20">
        <div className="container max-w-3xl">
          <Reveal>
            <ValueGrid items={degerlerimiz} />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
