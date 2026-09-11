import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";

export function CorporateHero({
  eyebrow,
  title,
  description,
  breadcrumbLabel,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbLabel: string;
}) {
  return (
    <section className="border-b border-border bg-brand-tint/40 py-14 lg:py-20">
      <div className="container space-y-5">
        <Breadcrumb items={[{ label: "Kurumsal", href: "/kurumsal/hakkimizda" }, { label: breadcrumbLabel }]} />
        <Reveal>
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-magenta">{eyebrow}</p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
            {description && <p className="leading-relaxed text-muted-foreground">{description}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
