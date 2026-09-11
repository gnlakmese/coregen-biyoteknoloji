"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dna, Microscope, FileBarChart2, TestTube2, Activity, ChevronRight, BookOpen, Layers } from "lucide-react";

// GÖRSEL İSİMLERİNE GÖRE TAM EŞLEŞTİRİLMİŞ HİZMET KATEGORİLERİ
const hizmetKategorileri = [
  {
    kategoriAdi: "MOLEKÜLER BİYOLOJİ",
    ikon: <Dna className="w-6 h-6 text-emerald-600" />,
    hizmetler: [
      { id: "nukleik-asit-protein-izolasyonu", isim: "Nükleik Asit ve Protein İzolasyonu", aciklama: "Yüksek saflıkta DNA, RNA ve protein eldesi.", image: "/hizmet-gorselleri/Nukleik-asit-izolasyonu.jpeg" },
      { id: "primer-tasarimi", isim: "Primer ve Oligonükleotid Tasarımı", aciklama: "Spesifik in-silico primer ve prob tasarımı.", image: "/hizmet-gorselleri/primer-probe-ve-oligonuk...zi.webp" },
      { id: "jel-elektroforezi", isim: "Jel Elektroforezi", aciklama: "Nükleik asit fragment analizi ve yürütme.", image: "/hizmet-gorselleri/gel-elektroforezi.jpeg" },
      { id: "miktar-tayini", isim: "Miktar Tayini (NanoDrop ve Qubit)", aciklama: "Hassas nükleik asit konsantrasyon ölçümü.", image: "/hizmet-gorselleri/miktari-tayini.jpeg" },
      { id: "pcr-analizi", isim: "PCR Analizi", aciklama: "Standart PCR gen amplifikasyonu.", image: "/hizmet-gorselleri/pcr-analizi.jpeg" },
      { id: "rt-pcr", isim: "Gerçek Zamanlı PCR (qPCR)", aciklama: "Kantitatif gen ekspresyon ve patojen analizi.", image: "/hizmet-gorselleri/rt-pcr.jpeg" },
    ]
  },
  {
    kategoriAdi: "DİZİLEME HİZMETLERİ",
    ikon: <Layers className="w-6 h-6 text-blue-600" />,
    hizmetler: [
      { id: "sanger-dizileme", isim: "Sanger Dizileme", aciklama: "Geleneksel hedefli dizi ve klon doğrulama.", image: "/hizmet-gorselleri/sanger-dizileme.png" },
      { id: "wgs", isim: "Whole Genome Sequencing (WGS)", aciklama: "Tüm genom dizileme ve varyant tespiti.", image: "/hizmet-gorselleri/wgs-analizi.jpeg" },
      { id: "wes", isim: "Whole Exome Sequencing (WES)", aciklama: "Tüm ekzom ve klinik varyant analizi.", image: "/hizmet-gorselleri/wes-analizi.jpeg" },
      { id: "targeted-sequencing", isim: "Targeted Sequencing", aciklama: "Hedef bölge ve panel dizileme.", image: "/hizmet-gorselleri/targeted-seq-analizi.jpeg" },
      { id: "rna-seq", isim: "Transkriptom Analizi (RNA-Seq)", aciklama: "Kapsamlı gen ifade ve regülasyon analizi.", image: "/hizmet-gorselleri/rna-seq.jpeg" },
      { id: "shotgun-metagenomics", isim: "Shotgun Metagenomics", aciklama: "Tüm mikrobiyom genetik profilleme.", image: "/hizmet-gorselleri/Shotgun-metagenome-analizi.jpg" },
      { id: "16s-rrna", isim: "16S rRNA Analizi", aciklama: "Bakteriyel taksonomik sınıflandırma.", image: "/hizmet-gorselleri/16s-rrna-analizi.jpeg" },
    ]
  },
  {
    kategoriAdi: "PROTEİN ANALİZLERİ",
    ikon: <Activity className="w-6 h-6 text-rose-600" />,
    hizmetler: [
      { id: "western-blot", isim: "Western Blot Analizi", aciklama: "Spesifik protein ekspresyonu tespiti.", image: "/hizmet-gorselleri/western bloth analizi.jpeg" },
      { id: "elisa-test-analizleri", isim: "ELISA Analizi", aciklama: "Kantitatif antijen ve hormon ölçümü.", image: "/hizmet-gorselleri/elisa-analizi.jpeg" },
      { id: "rekombinant-protein-analizi", isim: "Rekombinant Protein Analizi", aciklama: "Protein saflaştırma ve karakterizasyon.", image: "/hizmet-gorselleri/rekombinant-protein-...lizi.webp" },
    ]
  },
  {
    kategoriAdi: "BİYOİNFORMATİK",
    ikon: <FileBarChart2 className="w-6 h-6 text-purple-600" />,
    hizmetler: [
      { id: "ngs-veri-analizi", isim: "NGS Veri Analizi", aciklama: "Ham dizileme (FASTQ) verilerinin işlenmesi.", image: "/hizmet-gorselleri/ngs-veri-analizi.jpeg" },
      { id: "rna-seq-analizi", isim: "RNA-Seq Analizi", aciklama: "Diferansiyel ifade ve regülasyon analizi.", image: "/hizmet-gorselleri/rna-seq-veri-analizi.jpeg" },
      { id: "diferansiyel-ekspresyon", isim: "Diferansiyel Gen Ekspresyonu", aciklama: "Gruplar arası gen ifade karşılaştırması.", image: "/hizmet-gorselleri/differansiyel-gen-analizi.jpeg" },
      { id: "varyant-analizi", isim: "Varyant Analizi", aciklama: "Klinik ve somatik mutasyon (SNP/Indel) keşfi.", image: "/hizmet-gorselleri/varyant-analizi.jpeg" },
      { id: "filogenetik-analiz", isim: "Filogenetik Analiz", aciklama: "Evrimsel ilişki ve soy ağacı oluşturma.", image: "/hizmet-gorselleri/Filogenetik-analiz.jpg" },
      { id: "metagenomik-veri-analizi", isim: "Metagenomik Veri Analizi", aciklama: "Mikrobiyom çeşitlilik (Alpha/Beta) analizi.", image: "/hizmet-gorselleri/16s-rrna-veri-analizi.jpeg" },
    ]
  },
  {
    kategoriAdi: "BİYOKİMYA",
    ikon: <TestTube2 className="w-6 h-6 text-orange-500" />,
    hizmetler: [
      { id: "oksidatif-stres-analizleri", isim: "Oksidatif Stres Analizleri", aciklama: "TOS/TAS ve redoks profili tayini.", image: "/hizmet-gorselleri/oksidatif-stres.jpeg" },
      { id: "biyokimya-test-analizleri", isim: "Biyokimya Test Analizleri", aciklama: "Karaciğer, böbrek ve temel metabolik enzim testleri.", image: "/hizmet-gorselleri/biyokimya-testleri.jpeg" },
      { id: "spesifik-test-analizleri", isim: "Spesifik Test Analizleri", aciklama: "ICP-MS ve LC-MS/MS ile vitamin ve metal ölçümü.", image: "/hizmet-gorselleri/spesifik-test-analizleri.webp" },
    ]
  },
  {
    kategoriAdi: "PATOLOJİ",
    ikon: <Microscope className="w-6 h-6 text-pink-600" />,
    hizmetler: [
      { id: "immunohistokimya", isim: "İmmünohistokimya (IHC)", aciklama: "Doku kesitlerinde spesifik antijen boyama ve görüntüleme.", image: "/hizmet-gorselleri/immunohistokimya-test.jpeg" },
    ]
  },
  {
    kategoriAdi: "HÜCRE KÜLTÜRÜ",
    ikon: <Activity className="w-6 h-6 text-cyan-600" />,
    hizmetler: [
      { id: "hucre-kulturu-analizleri", isim: "Hücre Kültürü Analizleri", aciklama: "Hücre canlılık, toksisite ve in vitro migrasyon testleri.", image: "/hizmet-gorselleri/hucre-kulturu-analizi.jpeg" },
    ]
  },
  {
    kategoriAdi: "DANIŞMANLIK & BİLİMSEL DESTEK",
    ikon: <BookOpen className="w-6 h-6 text-indigo-600" />,
    hizmetler: [
      { id: "proje-danismanligi", isim: "Proje Danışmanlığı", aciklama: "BAP, TÜBİTAK, TÜSEB proje teknik desteği.", image: "/hizmet-gorselleri/proje-ve-danismanlik .jpeg" },
      { id: "yerinde-hizmodulü", isim: "Yerinde Hizmet Modülü", aciklama: "Kendi laboratuvarınızda uygulamalı destek.", image: "/hizmet-gorselleri/yerinde-hizmet-modulu.jpeg" },
      { id: "kurumsal-egitimler", isim: "Kurumsal ve Akademik Eğitimler", aciklama: "Klinik ve temel bilim araştırmacılarına eğitim.", image: "/hizmet-gorselleri/Kurumsal-akademi...imler.jpeg" },
      { id: "deney-tasarimi", isim: "Deney Tasarımı", aciklama: "Optimum laboratuvar iş akışının belirlenmesi.", image: "/hizmet-gorselleri/Deney-tasarimi.jpeg" },
      { id: "istatistiksel-analiz", isim: "İstatistiksel Analiz", aciklama: "Biyolojik verilerin analizi ve grafiklendirilmesi.", image: "/hizmet-gorselleri/istatistik-analizi.png" },
      { id: "bilimsel-raporlama", isim: "Bilimsel Raporlama", aciklama: "Çalışma sonuçlarının makale formatında sunumu.", image: "/hizmet-gorselleri/bilimsel-raporlama.jpeg" },
      { id: "yayin-danismanligi", isim: "Yayın Danışmanlığı", aciklama: "Akademik yayın hazırlık ve revizyon desteği.", image: "/hizmet-gorselleri/yayin-danismanligi.jpeg" },
    ]
  },
];

export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-600 bg-cyan-50 px-3.5 py-1.5 rounded-full mb-4 border border-cyan-100">
            Laboratuvar & Analiz Hizmetleri
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Kapsamlı <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-600">Bilimsel Çözümler</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Araştırma ve projeleriniz için moleküler biyoloji, hücre kültürü, biyokimya, biyoinformatik ve dizileme alanlarında uçtan uca destek sağlıyoruz.
          </p>
        </div>

        <div className="space-y-16">
          {hizmetKategorileri.map((kategori, index) => (
            <div key={index} className="space-y-8">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-100">
                  {kategori.ikon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{kategori.kategoriAdi}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kategori.hizmetler.map((hizmet) => (
                  <Link 
                    href={`/hizmetler/${hizmet.id}`} 
                    key={hizmet.id}
                    className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Hizmet Görseli */}
                    {hizmet.image && (
                      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                        <Image 
                          src={hizmet.image} 
                          alt={hizmet.isim} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                    )}

                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">
                        {hizmet.isim}
                      </h3>
                      <p className="text-sm text-slate-600 mb-8 leading-relaxed flex-grow">
                        {hizmet.aciklama}
                      </p>
                      <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-cyan-600 transition-colors mt-auto">
                        Detayları İncele <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Teklif İsteme (Admin Panele Düşen Kısım) */}
        <div className="bg-slate-900 rounded-[3rem] p-12 text-center mt-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-0" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Projeniz İçin Teklif Alın</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              BAP, TÜBİTAK, TÜSEB projeleriniz veya özel araştırmalarınız için analiz ihtiyaçlarınızı detaylandırarak laboratuvar formumuzu doldurun.
            </p>
            <Link 
              href="/teklif-sepeti/form" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-cyan-600 hover:opacity-90 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-pink-600/20"
            >
              Detaylı Teklif Formunu Doldur <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
