import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
// Hizmetler ayrı sayfaya taşındığı için FeaturedServices burada yok
import { ProductCategoriesShowcase } from "@/components/sections/product-categories-showcase";
import { WhyCoreGen } from "@/components/sections/why-coregen";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { BlogSection } from "@/components/sections/blog-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-hidden">
      
      {/* 
        ==================================================================
        DİNAMİK HÜCRE VE MOLEKÜL ARKA PLANI (CoreGen Pembe Konsepti)
        ==================================================================
      */}
      <div className="absolute inset-0 w-full h-[1200px] pointer-events-none -z-10 overflow-hidden bg-background">
        
        {/* Yumuşak pembe parlamalar (Derinlik hissi için) */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[30%] -right-20 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[150px]" />

        {/* SVG ile çizilmiş süzülen hücreler (Eksozom, Vezikül ve Plazmid formları) */}
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g stroke="hsl(var(--primary) / 0.15)" fill="none">
            
            {/* Sol Üst - Büyük Hücre / Eksozom (Hafif dönme efekti) */}
            <circle cx="10%" cy="25%" r="90" strokeWidth="1.5" strokeDasharray="6 6" className="animate-[spin_40s_linear_infinite]" />
            <circle cx="10%" cy="25%" r="40" strokeWidth="2" stroke="hsl(var(--primary) / 0.2)" />
            <circle cx="10%" cy="25%" r="12" fill="hsl(var(--primary) / 0.08)" className="animate-pulse" />

            {/* Sağ Alt - Bölünen Hücre / Çift Çekirdek */}
            <circle cx="85%" cy="70%" r="140" strokeWidth="0.5" />
            <circle cx="82%" cy="70%" r="50" strokeWidth="1" stroke="hsl(var(--primary) / 0.2)" />
            <circle cx="88%" cy="70%" r="45" strokeWidth="1" stroke="hsl(var(--primary) / 0.15)" />

            {/* Orta Üst - Mikro Veziküller */}
            <circle cx="50%" cy="15%" r="25" strokeWidth="1" />
            <circle cx="50%" cy="15%" r="6" fill="hsl(var(--primary) / 0.15)" />

            {/* Sağ Üst - Plazmid Halkası */}
            <circle cx="78%" cy="20%" r="50" strokeWidth="1" strokeDasharray="2 4" />
            <circle cx="78%" cy="20%" r="46" strokeWidth="0.5" />

            {/* Sol Alt - Serbest Hücre */}
            <circle cx="20%" cy="80%" r="70" strokeWidth="0.5" />
            <circle cx="20%" cy="80%" r="20" strokeWidth="1.5" stroke="hsl(var(--primary) / 0.1)" />

            {/* Moleküler Bağlantı Çizgileri (Ağ/Network Hissi) */}
            <line x1="10%" y1="25%" x2="50%" y2="15%" strokeWidth="0.5" opacity="0.6" />
            <line x1="78%" y1="20%" x2="50%" y2="15%" strokeWidth="0.5" opacity="0.6" />
            <line x1="85%" y1="70%" x2="20%" y2="80%" strokeWidth="0.2" opacity="0.4" />
            
          </g>
        </svg>
      </div>
      {/* ================================================================== */}

      <Hero />
      <ProductCategoriesShowcase />
      <WhyCoreGen />
      <ProcessTimeline />
      <BlogSection />
      <CtaSection />
      
    </main>
  );
}