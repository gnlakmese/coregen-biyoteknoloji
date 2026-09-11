import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { productCategories } from "@/content/homepage";

export function ProductCategoriesShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-[#f8fafc] text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      {/* Arka plan aydınlatması */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Başlık Alanı */}
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Laboratuvar Ürünleri
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Ürün kategorilerini keşfedin
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Kategori üzerinden ihtiyacınıza uygun ürünleri belirleyip Teklif Sistemi üzerinden talep oluşturabilirsiniz.
            </p>
          </div>
          
          <Link
            href="/urunler"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group"
          >
            <span>Tüm Kategorileri Görüntüle</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </Reveal>

        {/* Görsel Destekli Kartlar Grid Yapısı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <Reveal key={category.title} delay={Math.min(index * 0.06, 0.24)}>
              <Link
                href={category.href}
                className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-slate-200/60 overflow-hidden"
              >
                {/* Ürün Görseli Alanı */}
                <div className="relative h-44 w-full rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden mb-6 flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent z-10 pointer-events-none" />
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold leading-snug text-slate-900 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Alt Aksiyon */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">
                    Teklif Oluştur
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all group-hover:bg-primary group-hover:text-white group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}