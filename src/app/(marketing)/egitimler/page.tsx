"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight, BookOpen, AlertCircle, PlayCircle, Radio, Megaphone } from "lucide-react";

// Admin panelinden gelecek duyuruların listesi
const mockDuyurular = [
  "🔥 Bu Ayın Özel Oturumu: Epigenetik Perspektif Eğitimine Kayıtlar Başladı!",
  "📢 CoreGen Genetik Akademi 2026 Eğitim Takvimi Güncellendi.",
  "💡 Sıfırdan Biyoinformatik Bootcamp İçin Son Şans!",
  "🚀 Metagenomik Analizlere Giriş Eğitimi Erken Kayıt Fırsatı Devam Ediyor."
];

const mockEgitimler = [
  {
    id: "metagenomik",
    title: "Metagenomik Analizlere Giriş Eğitimi",
    description: "Mikrobiyom dünyasını keşfet, verini anlamlı hale getir. 16S rRNA ve Shotgun metagenomik analiz süreçlerini sıfırdan öğrenin.",
    price: "5.605 ₺",
    image: "/images/metagenomik analizler .png", 
    isDigital: false,
  },
  {
    id: "coregen-genetik-akademisi",
    title: "CoreGen Genetik Akademisi: Sertifikalı Genetik Eğitim Serisi",
    description: "Genetik biliminin 12 farklı alanında uzmanlaşacağınız, uygulamalı ve sertifikalı kapsamlı eğitim serisi.",
    price: "1.500 ₺ / Ay",
    image: "/images/coregen genetik akademisi.png",
    isDigital: false,
  },
  {
    id: "sitogenetik",
    title: "Sitogenetik ve Sanal Uygulamalı Karyotipleme Eğitimi",
    description: "Kromozom yapısını öğrenin, gerçek vaka örnekleri üzerinden sanal karyotipleme uygulamaları yaparak becerinizi geliştirin.",
    price: "2.553 ₺",
    image: "/images/sitogenetik sanal uygulama .png",
    isDigital: true,
  },
  {
    id: "biyoinformatik-101",
    title: "Biyoinformatik 101: Temel Biyoinformatik ve Veri Tabanları",
    description: "Biyoinformatik okuryazarlığı ve dijital veri mimarisine sağlam bir giriş yapın. Veritabanları ve algoritmik mantık.",
    price: "2.956 ₺",
    image: "/images/biyoinformatik 101.jpeg",
    isDigital: true,
  },
  {
    id: "uygulamali-primer-tasarimi",
    title: "Uygulamalı Primer Tasarımı Eğitimi",
    description: "PCR ve Real-Time PCR (qPCR) çalışmaları için in-silico araçlar kullanarak spesifik ve verimli primer tasarımı eğitimi.",
    price: "1.928 ₺",
    image: "/images/primer tasarımı eğitimi.jpeg",
    isDigital: true,
  },
  {
    id: "biyoinformatik-bootcamp",
    title: "Sıfırdan Biyoinformatik Bootcamp",
    description: "Biyoinformatiğe sağlam bir başlangıç! Galaxy platformundan IGV'ye, RNA-Seq'ten metagenomik analize temel konular.",
    price: "Ücretsiz / 990 ₺",
    image: "/images/biyoinformatik bootcamp .png",
    isDigital: false,
  }
];

export default function EgitimlerPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24 text-slate-800 overflow-hidden">
      
      {/* CSS Animasyonu (Kayan Yazı İçin) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* BÜYÜK VE PREMİUM DUYURU BANDI (MARQUEE) */}
      <div className="relative w-full bg-slate-900 border-y border-pink-500/20 py-5 mt-8 flex items-center shadow-2xl">
        
        {/* Sol Taraftaki Sabit 'Duyurular' Etiketi (Fade Efektli) */}
        <div className="absolute left-0 z-10 bg-gradient-to-r from-slate-900 via-slate-900 to-transparent w-64 h-full flex items-center pl-6 pointer-events-none">
          <span className="flex items-center gap-2 text-pink-500 font-extrabold uppercase tracking-widest text-sm bg-pink-500/10 px-4 py-2 rounded-full border border-pink-500/20 backdrop-blur-md">
            <Megaphone className="w-5 h-5 animate-pulse" /> DUYURULAR
          </span>
        </div>

        {/* Kayan Yazılar */}
        <div className="w-full overflow-hidden pl-64">
          <div className="animate-scroll flex items-center gap-16 text-lg font-medium tracking-wide text-slate-200 cursor-default">
            {/* Diziyi iki kez yazdırıyoruz ki animasyon kesintisiz (sonsuz) dönsün */}
            {[...mockDuyurular, ...mockDuyurular].map((duyuru, index) => (
              <span key={index} className="flex items-center gap-6 whitespace-nowrap hover:text-white transition-colors">
                 {duyuru}
                 <span className="text-cyan-500/40 text-2xl">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-12 mt-16">
        
        <div className="text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-pink-600 bg-pink-50 px-3.5 py-1.5 rounded-full mb-4">
            CoreGen Genetik Akademi
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-600">Eğitimler</span>
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockEgitimler.map((egitim) => (
            <div key={egitim.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <Image src={egitim.image} alt={egitim.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-slate-900 text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-sm z-10">
                  {egitim.price}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative z-10 bg-white">
                
                {egitim.isDigital ? (
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase text-purple-700 bg-purple-50 px-2.5 py-1.5 rounded-lg mb-3 w-max border border-purple-100">
                    <PlayCircle className="w-3.5 h-3.5" /> Dijital Eğitim (Video)
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg mb-3 w-max border border-emerald-100">
                    <Radio className="w-3.5 h-3.5 animate-pulse" /> Canlı Eğitim
                  </div>
                )}

                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 leading-snug group-hover:text-pink-600 transition-colors">
                  {egitim.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6 line-clamp-3">
                  {egitim.description}
                </p>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center justify-center text-xs border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-1.5 bg-red-50 text-red-600 px-4 py-1.5 rounded-full font-bold w-full justify-center">
                      <AlertCircle className="w-4 h-4 animate-pulse" />
                      Kontenjan Dolmak Üzere!
                    </div>
                  </div>

                  <Link 
                    href={`/egitimler/${egitim.id}`} 
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white py-3.5 rounded-2xl font-bold text-sm transition-colors border border-slate-200 hover:border-slate-900"
                  >
                    Detayları İncele <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}