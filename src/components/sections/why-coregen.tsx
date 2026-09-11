import { Reveal } from "@/components/ui/reveal";
import { whyCoreGen } from "@/content/homepage";
import { iconMap } from "@/lib/icon-map";

export function WhyCoreGen() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container relative z-10">
        <Reveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-extrabold tracking-[0.2em] uppercase text-[#C2185B]">
              Neden CoreGen?
            </h2>

            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0B1F4D]">
              Araştırmanızın güvenilir çözüm ortağı
            </h3>
          </div>
        </Reveal>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyCoreGen.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <Reveal
                key={item.title}
                delay={Math.min(index * 0.05, 0.3)}
              >
                <div className="flex gap-5 group">
                  {/* İkon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#C2185B] transition-all duration-300 group-hover:bg-[#C2185B] group-hover:text-white group-hover:border-[#C2185B] group-hover:shadow-[0_0_20px_rgba(194,24,91,0.25)]">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>

                  {/* İçerik */}
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-[#0B1F4D] transition-colors duration-300 group-hover:text-[#C2185B]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}