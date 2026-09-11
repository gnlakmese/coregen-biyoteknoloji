import Link from "next/link";
import { ArrowUpRight, Hourglass } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { slugify } from "@/lib/utils";
import type { ServiceCategoryOutline } from "@/types/service";

export function ServiceCategorySection({
  category,
  delay = 0,
}: {
  category: ServiceCategoryOutline;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div id={slugify(category.category)} className="scroll-mt-24 rounded-xl border border-border bg-card p-6 sm:p-8">
        <div className="mb-6 max-w-lg space-y-1.5">
          <h2 className="font-display text-xl font-semibold text-foreground">{category.category}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
        </div>

        <ul className="flex flex-wrap gap-2.5">
          {category.items.map((item) =>
            item.slug ? (
              <li key={item.name}>
                <Link
                  href={`/hizmetler/${item.slug}`}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {item.name}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
                </Link>
              </li>
            ) : (
              <li key={item.name}>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
                  {item.name}
                  <span className="inline-flex items-center gap-1 text-xs">
                    <Hourglass className="h-3 w-3" />
                    İçerik hazırlanıyor
                  </span>
                </span>
              </li>
            ),
          )}
        </ul>
      </div>
    </Reveal>
  );
}
