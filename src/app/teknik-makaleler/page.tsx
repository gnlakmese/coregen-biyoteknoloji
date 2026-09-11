import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Database, BookOpen, ArrowRight, FlaskConical } from "lucide-react";

const articles = [
  {
    title: "What is next generation sequencing?",
    source: "PubMed Central",
    pmid: "PMC3841808",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3841808/",
    image: "/images/What is next generation sequencing?.jpg",
    category: "Derleme Makale",
  },
  {
    title: "Whole-genome sequencing is more powerful than whole-exome sequencing for detecting exome variants",
    source: "PubMed Central",
    pmid: "PMC4418901",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4418901/",
    image: "/images/Whole-genome sequencing is more powerful than whole-exome sequencing for detecting exome variants.jpg",
    category: "Araştırma Makalesi",
  },
  {
    title: "An evaluation of RNA-seq differential analysis methods",
    source: "PubMed Central",
    pmid: "PMC9480998",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9480998/",
    image: "/images/An evaluation of RNA-seq differential analysis methods.png",
    category: "Metodoloji",
  },
  {
    title: "Genomic data file formats FASTQ BAM VCF",
    source: "GeneBe Docs",
    pmid: "Rehber Doküman",
    url: "https://docs.genebe.net/docs/handbook/file-formats/",
    image: "/images/genomic data file formats FASTQ BAM VCF.jpeg",
    category: "Biyoinformatik Rehberi",
  }
];

export const metadata = {
  title: "Teknik Makaleler | CoreGen Biyoteknoloji",
  description: "Moleküler biyoloji ve biyoinformatik alanındaki uluslararası teknik makaleler ve rehberler.",
};

export default function TeknikMakalelerPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Üst Başlık Alanı */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Teknik <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Makaleler</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Uluslararası literatürden seçilmiş, biyoteknoloji ve genomik alanındaki en güncel akademik makaleler ve teknik rehberler.
          </p>
        </div>

        {/* Makale Kartları (Konuşma Balonu Stili) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-20">
          {articles.map((article, index) => (
            <a 
              key={index} 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              
              {/* Görsel Alanı */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                {article.image ? (
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">Görsel Yüklenemedi</div>
                )}
                
                {/* Sağ Üst PubMed / Kaynak Rozeti */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <Database className="w-3.5 h-3.5 text-cyan-600" />
                  {article.source}
                </div>
              </div>

              {/* İçerik Alanı */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5 text-cyan-700 bg-cyan-50 px-3 py-1.5 rounded-full font-bold">
                    <BookOpen className="w-3.5 h-3.5" />
                    {article.category}
                  </span>
                  <span className="font-mono bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">
                    ID: {article.pmid}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 line-clamp-3 group-hover:text-cyan-600 transition-colors leading-snug">
                  {article.title}
                </h2>
                
                <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-cyan-600 transition-colors mt-auto">
                  Makaleyi Oku <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Hizmetlerimize Yönlendiren Profesyonel CTA (Call to Action) Alanı */}
        <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 rounded-[2.5rem] p-10 md:p-14 overflow-hidden shadow-2xl border border-blue-900/50 mt-12">
          {/* Arka plan süslemesi (Pembe ve Lacivert Parlamalar) */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-pink-600/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 flex items-center justify-center md:justify-start gap-3">
                <FlaskConical className="w-8 h-8 text-pink-500" />
                Bilimsel projeleriniz için destek mi arıyorsunuz?
              </h3>
              <p className="text-blue-100/80 text-lg leading-relaxed">
                Literatürdeki en güncel yöntemleri laboratuvarımıza taşıyoruz. Yeni Nesil Dizileme, Biyoinformatik Veri Analizi ve Moleküler Biyoloji hizmetlerimizle projenizi hayata geçirin.
              </p>
            </div>
            
            <Link 
              href="/hizmetler" 
              className="shrink-0 flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-pink-500/30 border border-pink-500/20"
            >
              Hizmetleri İncele <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}