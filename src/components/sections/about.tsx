import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section className="py-20 bg-[#050515] relative overflow-hidden">
      {/* Ortadan yayılan hafif CoreGen pembesi parlama efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center space-y-8 px-4">
        
        <Reveal>
          <h2 className="text-sm font-extrabold tracking-[0.2em] text-primary uppercase drop-shadow-sm">
            Hakkımızda
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            CoreGen Kimdir?
          </h3>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium drop-shadow-sm">
            CoreGen Biyoteknoloji, bilimsel erişilebilirliği artırmak, etik standartları en üst düzeyde korumak ve ulusal biyoteknoloji ekosistemini ileriye taşımak misyonuyla Mersin'de kurulmuş yenilikçi bir bilim üssüdür.
          </p>
        </Reveal>
        
        <Reveal delay={0.3}>
          <p className="text-base md:text-lg leading-relaxed text-gray-500">
            Odak noktamız yalnızca belirli gen düzenleme teknolojileriyle sınırlı değildir. Moleküler biyoloji, genetik, genomik ve biyoinformatik alanlarında çalışan araştırmacılara ve laboratuvarlara uçtan uca, güvenilir çözümler sunuyoruz. Modern altyapımızla bilimin ışığında geleceği şekillendiren projelerinizin en güçlü destekçisiyiz.
          </p>
        </Reveal>
        
      </div>
    </section>
  );
}