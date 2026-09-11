import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/sections/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredServices } from "@/content/homepage";
import { iconMap } from "@/lib/icon-map";

export function FeaturedServices() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Laboratuvar Hizmetleri"
            title="Öne çıkan hizmetlerimiz"
            description="Moleküler biyolojiden biyoinformatiğe, araştırmanızın en sık ihtiyaç duyduğu hizmetleri keşfedin."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={Math.min(index * 0.04, 0.28)}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
                    <CardHeader className="space-y-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-base">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3 pt-0">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                        Detaylı Bilgi
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Tüm Hizmetleri Görüntüleyin
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
