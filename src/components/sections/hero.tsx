import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const labItems = [
  "Laboratuvar Cihazları",
  "PCR & qPCR Kitleri",
  "Hücre Hatları",
  "Primer ve Problar",
  "DNA & RNA İzolasyon Kitleri",
  "Hücre Kültürü Sarfları",
  "Enzimler ve Tamponlar",
  "Yeni Nesil Dizileme (NGS) Kitleri",
  "Protein Analiz Reaktifleri",
  "Plastik Sarf Malzemeleri"
];

export function Hero() {
  return (
    <section className="relative flex flex-col min-h-screen justify-between overflow-hidden bg-indigo-950 pt-28 lg:pt-36">
      
      {/* ARKA PLAN GÖRSELİ VE LACİVERT FİLTRE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/KANSER-scaled.jpg" 
          alt="CoreGen Biyoteknoloji"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-indigo-900/60 to-indigo-950/40" />
      </div>

      {/* Kayan şerit (Marquee) animasyon stilleri */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* İÇERİK ALANI */}
      <div className="container relative z-10 flex-1 flex flex-col justify-center py-8">
        <div className="max-w-3xl space-y-5">

          <Reveal delay={0.08}>
            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              <span className="text-white drop-shadow-md block">
                Mersin'in İlk ve Tek Biyoteknoloji ve Genetik <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-400 to-primary">AR-GE</span> Laboratuvarı!
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200 max-w-xl font-normal drop-shadow-md">
              PCR'dan yeni nesil dizilemeye, biyoinformatik analizden laboratuvar sarf malzemelerine kadar araştırmalarınız için uçtan uca çözüm ortaklığı.
            </p>
          </Reveal>

          <Reveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-900/40 border border-indigo-500/30 backdrop-blur-md shadow-lg">
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(219,39,119,1)]" />
              <span className="font-mono uppercase flex items-baseline mt-[2px]">
                <span className="text-white font-bold text-xs sm:text-sm tracking-[0.2em] mr-2">
                  COREGEN
                </span>
                <span className="text-indigo-200 text-[10px] sm:text-xs tracking-[0.15em]">
                  BİYOTEKNOLOJİ · MERSİN
                </span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              {/* Hizmetleri Keşfet Butonu - Artık sade ve beyaz (arkasındaki pembe ışık kaldırıldı) */}
              <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:text-white text-sm sm:text-base font-semibold px-8 h-12 sm:h-14 bg-indigo-950/40 backdrop-blur-md transition-all hover:scale-105">
                <Link href="/hizmetler">
                  <span className="flex items-center">
                    Hizmetleri Keşfet
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              
              {/* Teklif Talep Et Butonu */}
              <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:text-white text-sm sm:text-base font-medium px-8 h-12 sm:h-14 bg-indigo-950/40 backdrop-blur-md transition-all hover:scale-105">
                <Link href="/teklif-sepeti">Teklif Talep Et</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* KAYAN ŞERİT (MARQUEE) - SAYFANIN EN ALTINDA SABİT */}
      <div className="relative z-20 w-full bg-indigo-950/85 backdrop-blur-md border-t border-white/15 py-3.5 overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.8)] mt-auto">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-indigo-950 to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-indigo-950 to-transparent z-30 pointer-events-none" />

        <div className="animate-marquee flex items-center">
          {[...labItems, ...labItems, ...labItems, ...labItems].map((item, index) => (
            <div key={index} className="flex items-center px-8">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(219,39,119,0.9)] mr-3" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.12em] text-gray-100 uppercase whitespace-nowrap cursor-default hover:text-primary transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}