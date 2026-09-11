import { Reveal } from "@/components/ui/reveal";
import { iconMap } from "@/lib/icon-map";

export type ValueGridItem = {
  icon: string;
  title: string;
  description: string;
};

export function ValueGrid({ items }: { items: readonly ValueGridItem[] }) {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
      {items.map((item, index) => {
        const Icon = iconMap[item.icon];
        return (
          <Reveal key={item.title} delay={Math.min(index * 0.05, 0.3)}>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
