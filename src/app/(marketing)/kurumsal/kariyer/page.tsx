"use client";

import { useState } from "react";
import { Briefcase, FileUp, CheckCircle, Sparkles, Dna } from "lucide-react";

export default function KariyerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24">
      
      {/* Aydınlık, Renkli ve Ana Sayfa Stiliyle Uyumlu Banner */}
      <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-pink-600 bg-pink-50 px-3.5 py-1.5 rounded-full mb-4">
          CoreGen Ekibi
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Geleceği Birlikte <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-600">Tasarlayalım</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Bilimsel meraki ve teknik uzmanlığı bir arada tutan dinamik ekibimizin bir parçası olun.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Pozisyon Bilgisi */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 text-center shadow-sm border border-slate-100 mb-12">
          <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Şu an açık pozisyon bulunmuyor</h3>
          <p className="text-slate-600 text-base max-w-lg mx-auto">
            Özgeçmişinizi bize ulaştırabilirsiniz. Uygun bir pozisyon açıldığında başvurunuzu memnuniyetle değerlendireceğiz.
          </p>
        </div>

        {/* Başvuru Formu */}
        <div className="relative bg-white/80 backdrop-blur-2xl border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center">
              <Dna className="w-[800px] h-[800px] text-pink-600 animate-pulse" />
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-cyan-50 text-cyan-700 rounded-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Genel Başvuru Formu</h3>
              <p className="text-xs text-slate-500">Bilgilerinizi ve özgeçmişinizi ekleyerek yetenek havuzumuza katılın.</p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-green-50 rounded-3xl p-8 text-center border border-green-100">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-green-900">Başvurunuz Alındı!</h4>
              <p className="text-green-700 text-sm mt-2">Özgeçmişiniz insan kaynakları ekibimiz tarafından incelenmek üzere kaydedilmiştir.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6 relative z-10">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Ad Soyad *</label>
                  <input required type="text" placeholder="Adınız Soyadınız" className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm focus:ring-2 focus:ring-pink-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">E-posta Adresi *</label>
                  <input required type="email" placeholder="ornek@email.com" className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm focus:ring-2 focus:ring-pink-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Telefon Numarası *</label>
                  <input required type="tel" placeholder="05XX XXX XX XX" className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm focus:ring-2 focus:ring-pink-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Uzmanlık / İlgi Alanı *</label>
                  <input required type="text" placeholder="Örn: Moleküler Biyoloji" className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm focus:ring-2 focus:ring-pink-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Ön Yazı / Mesajınız</label>
                <textarea rows={3} placeholder="Ekibimize katılarak neler yapabileceğinizden bahsedin..." className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm focus:ring-2 focus:ring-pink-500 outline-none"></textarea>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase">Özgeçmiş Yükle (PDF, DOC, DOCX, TXT - Max 1GB) *</label>
                <div className="border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center bg-slate-50 hover:border-pink-500 transition-all cursor-pointer">
                  <FileUp className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-600">Dosyanızı buraya sürükleyin ya da seçmek için tıklayın</p>
                  <p className="text-xs text-slate-400 mt-1">İzin verilen formatlar: .pdf, .doc, .docx, .txt (Maksimum 1GB)</p>
                  <input required type="file" accept=".pdf,.doc,.docx,.txt" className="mt-4 text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 cursor-pointer mx-auto block" />
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-pink-600 to-cyan-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-pink-600/20 hover:opacity-95 transition-all">
                Genel Başvuru Gönder
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}