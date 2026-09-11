import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative bg-[#f8fafc] py-24 lg:py-32 overflow-hidden">
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Büyük Şık Beyaz Kart */}
        <Reveal>
          <div className="relative rounded-3xl border border-slate-200/80 bg-white p-10 sm:p-16 lg:p-20 shadow-xl shadow-slate-200/50 text-center overflow-hidden">
            
            {/* Dekoratif hafif arka plan ışıltısı */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#db2775]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-950/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              
              <Reveal>
                <h2 className="text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl lg:text-5xl leading-tight">
                  Projeniz için doğru çözümü birlikte planlayalım.
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="text-base text-slate-600 sm:text-lg max-w-xl mx-auto">
                  İhtiyacınıza uygun hizmet ve ürünleri belirleyip size özel bir teklif hazırlayalım.
                </p>
              </Reveal>

              {/* Butonlar */}
              <Reveal delay={0.16}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  
                  {/* Teklif Talep Et Butonu (Canlı Pembe, Hafif Gölgeli) */}
                  <Button 
                    size="lg" 
                    asChild 
                    className="w-full sm:w-auto bg-[#db2775] text-white hover:bg-[#be185d] font-bold text-base px-8 h-14 shadow-lg shadow-[#db2775]/25 border-none transition-all hover:scale-105"
                  >
                    <Link href="/teklif-sepeti">
                      <span className="flex items-center">
                        Teklif Talep Et
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </span>
                    </Link>
                  </Button>
                  
                  {/* İletişime Geç Butonu (Şık Lacivert Çerçeveli/Arkaplanlı) */}
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild 
                    className="w-full sm:w-auto border-slate-300 text-indigo-950 hover:bg-slate-50 hover:text-[#db2775] font-semibold text-base px-8 h-14 shadow-sm transition-all hover:scale-105"
                  >
                    <Link href="/iletisim">
                      <span className="flex items-center">
                        <MessageSquare className="mr-2 h-5 w-5 text-[#db2775]" />
                        İletişime Geç
                      </span>
                    </Link>
                  </Button>

                </div>
              </Reveal>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}