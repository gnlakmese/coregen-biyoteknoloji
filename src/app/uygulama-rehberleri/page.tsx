"use client";

import { Dna } from "lucide-react";

export default function UygulamaRehberleriPage() {
  const progress = 44; // Sabit ilerleme oranı

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 text-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-700 bg-cyan-50 px-3.5 py-1.5 rounded-full mb-4">
          Bilgi Merkezi
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Uygulama <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-600">Rehberleri</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
          Laboratuvar protokolleri, PCR optimizasyon adımları, kütüphane hazırlama kılavuzları ve adım adım moleküler biyoloji uygulama rehberleri.
        </p>

        {/* Sabit %44 İlerleme Kutusu */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm max-w-xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <Dna className="w-8 h-8 animate-spin" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900">Kapsamlı Uygulama Kılavuzu</h3>
          
          <p className="text-pink-600 font-bold text-base tracking-wide">
            Yakında burada sizlerle olacak.
          </p>

          {/* DNA İlerleme Çubuğu ve Ucunda Daha Büyük DNA Emojisi */}
          <div className="space-y-3 pt-4">
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-visible p-0.5 border border-slate-200 relative">
              <div 
                className="bg-gradient-to-r from-pink-600 via-cyan-500 to-blue-600 h-full rounded-full relative flex items-center justify-end"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                {/* Ucundaki DNA emojisi boyutu büyütüldü (text-xl) */}
                <span className="absolute -right-4 text-xl animate-bounce select-none">
                  🧬
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-slate-500 pt-2">
              <span className="flex items-center gap-1 text-pink-600">
                <Dna className="w-4 h-4 animate-bounce" /> DNA Sarmalı Sentezleniyor...
              </span>
              <span>%{progress}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}