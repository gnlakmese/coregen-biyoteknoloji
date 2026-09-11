import { Reveal } from "@/components/ui/reveal";
import { CheckCircle2, ClipboardList, FileText, Microscope, Search } from "lucide-react";

const steps = [
  {
    step: "ADIM 1",
    title: "Talep",
    description: "İhtiyacınızı Teklif Sepeti veya ilgili hizmet sayfası üzerinden iletirsiniz.",
    icon: ClipboardList,
  },
  {
    step: "ADIM 2",
    title: "Teknik Değerlendirme",
    description: "Talebiniz, uygun yöntem ve kapsamın belirlenmesi için uzman ekibimizce değerlendirilir.",
    icon: Search,
  },
  {
    step: "ADIM 3",
    title: "Teklif",
    description: "Değerlendirme sonrasında size özel teklif hazırlanır ve iletilir.",
    icon: FileText,
  },
  {
    step: "ADIM 4",
    title: "Analiz / Ürün Temini",
    description: "Onaylanan kapsamda laboratuvar analizi veya ürün tedarik süreci yürütülür.",
    icon: Microscope,
  },
  {
    step: "ADIM 5",
    title: "Raporlama / Teslimat",
    description: "Sonuçlar anlaşılır bir raporla veya siparişiniz uygun şekilde teslim edilir.",
    icon: CheckCircle2,
  },
];

export function ProcessTimeline() {
  return (
    <section className="relative bg-[#f8fafc] py-24 lg:py-32 overflow-hidden">
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="mx-auto max-w-2xl text-center space-y-4 mb-20">
          <Reveal>
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[#db2775] bg-[#db2775]/10 px-3.5 py-1.5 rounded-full border border-[#db2775]/20">
              Çalışma Süreci
            </span>
          </Reveal>
          
          <Reveal delay={0.08}>
            <h2 className="text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl lg:text-5xl">
              Talepten teslimata şeffaf bir süreç
            </h2>
          </Reveal>
        </div>

        {/* Süreç Adımları */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index * 0.08}>
                <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#db2775]/40 hover:shadow-xl hover:shadow-[#db2775]/5 flex flex-col h-full">
                  
                  {/* Üst Kısım: Adım ve İkon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold tracking-wider text-[#db2775]">
                      {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-950 text-[#db2775] transition-colors group-hover:bg-[#db2775] group-hover:text-white shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Metinler */}
                  <h3 className="mb-2 text-lg font-bold text-indigo-950 transition-colors group-hover:text-[#db2775]">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  {/* Alt ince dekoratif çizgi */}
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#db2775]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}