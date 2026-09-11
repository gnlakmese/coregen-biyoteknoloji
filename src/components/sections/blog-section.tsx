import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

// Örnek blog verileri - kendi verilerinle aynen kalabilir
const posts = [
  {
    title: "NGS (Yeni Nesil Dizileme) Teknolojisi Nedir?",
    description: "Sanger dizilemeden farkından iş akışına, uygulama alanlarından biyoinformatik analize kadar Yeni Nesil Dizileme'nin kapsamlı bir anlatımı.",
    date: "1 Temmuz 2026",
    category: "Dizileme",
    href: "/blog/ngs-teknolojisi-nedir",
  },
  {
    title: "DNA İzolasyonu Nasıl Yapılır?",
    description: "Hücre lizizinden saflaştırmaya, izolasyon yöntemlerinden kalite kontrolüne kadar genomik DNA izolasyonunun temel adımları.",
    date: "18 Haziran 2026",
    category: "Moleküler Biyoloji",
    href: "/blog/dna-izolasyonu-nasil-yapilir",
  },
  {
    title: "PCR (Polimeraz Zincir Reaksiyonu) Nedir?",
    description: "PCR'ın temel prensibinden döngü aşamalarına, PCR çeşitlerinden kullanım alanlarına kadar moleküler biyolojinin temel yönteminin kapsamlı bir anlatımı.",
    date: "2 Haziran 2026",
    category: "PCR",
    href: "/blog/pcr-nedir",
  },
];

export function BlogSection() {
  return (
    <section className="relative bg-[#f8fafc] py-24 lg:py-32 overflow-hidden">
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık ve Tüm Yazıları Gör Butonu */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <Reveal>
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[#db2775] bg-[#db2775]/10 px-3.5 py-1.5 rounded-full border border-[#db2775]/20">
                BİLGİ MERKEZİ
              </span>
            </Reveal>
            
            <Reveal delay={0.08}>
              <h2 className="text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl lg:text-5xl">
                Blog'dan son yazılar
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-base text-slate-600 sm:text-lg">
                Moleküler biyoloji ve biyoteknoloji alanında güncel içerikler.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 font-bold text-indigo-950 hover:text-[#db2775] transition-colors group"
            >
              Tüm Yazıları Görüntüle
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Blog Kartları Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <article className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#db2775]/40 hover:shadow-xl hover:shadow-[#db2775]/5 flex flex-col h-full justify-between">
                
                <div className="space-y-4">
                  {/* Kategori ve Tarih */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1 text-[#db2775] font-semibold bg-[#db2775]/10 px-2.5 py-1 rounded-md">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>

                  {/* Başlık */}
                  <h3 className="text-xl font-bold text-indigo-950 transition-colors group-hover:text-[#db2775] leading-snug">
                    <Link href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>

                  {/* Açıklama */}
                  <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {/* Devamını Oku Linki */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-[#db2775] group-hover:translate-x-1 transition-transform">
                  Devamını Oku →
                </div>

                {/* Alt ince dekoratif çizgi */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#db2775]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}