"use client";

import { useState } from "react";
import { Send, FileUp, CheckCircle, FlaskConical } from "lucide-react";

export default function ProjeDegerlendirmePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 text-slate-800">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-pink-600 bg-pink-50 px-3.5 py-1.5 rounded-full mb-4">
            CoreGen Bilimsel Destek
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Proje Değerlendirme ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-600">Teklif Formu</span>
          </h1>
          <p className="text-slate-600 text-base">
            Projenizi, numune detaylarınızı ve analiz taleplerinizi bizimle paylaşın; uzman ekibimiz en kısa sürede size geri dönüş yapsın.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-12 text-center shadow-sm space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Talebiniz Alındı!</h2>
            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
              Proje detaylarınız CoreGen Biyoteknoloji laboratuvar ekibine iletildi. En kısa sürede inceleyip sizinle iletişime geçeceğiz.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 inline-block bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              Yeni Form Gönder
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-8">
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-2 flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-pink-600" /> 1. İletişim Bilgileri
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Ad Soyad *</label>
                  <input required type="text" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:border-pink-600" placeholder="Prof. Dr. / Dr. / Araştırmacı Adı" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Kurum / Üniversite / Laboratuvar *</label>
                  <input required type="text" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:border-pink-600" placeholder="Örn: Mersin Üniversitesi" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">E-posta Adresi *</label>
                  <input required type="email" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:border-pink-600" placeholder="ornek@universite.edu.tr" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Telefon Numarası *</label>
                  <input required type="tel" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:border-pink-600" placeholder="05XX XXX XX XX" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-2">2. Proje Bilgileri ve Amaç</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Proje Adı *</label>
                  <input required type="text" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:border-pink-600" placeholder="Projenizin başlığı" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Talep Edilen Analiz / Hizmet *</label>
                  <input required type="text" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:border-pink-600" placeholder="Örn: WES, RNA-Seq, RT-qPCR vb." />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Araştırma Amacı ve Kısa Özet *</label>
                <textarea required rows={3} className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:border-pink-600" placeholder="Projenizin temel hedefini kısaca açıklayınız..."></textarea>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-2">3. Numune Detayları ve Geçmişi</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Numune Türü *</label>
                  <input required type="text" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:border-pink-600" placeholder="Örn: Genomik DNA / Taze Doku" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Numune Sayısı *</label>
                  <input required type="text" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:border-pink-600" placeholder="Örn: 24 adet" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Saklama Koşulu *</label>
                  <input required type="text" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:border-pink-600" placeholder="Örn: -80°C" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Numune Geçmişi ve Özel Talepler</label>
                <textarea rows={2} className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:border-pink-600" placeholder="Daha önce uygulanan işlemler, dondurma-çözme sayısı veya özel beklentileriniz..."></textarea>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase">Proje Dosyası veya Numune Formu Yükle (İsteğe Bağlı)</label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-pink-500 transition-colors bg-slate-50">
                <FileUp className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-600 font-medium">Excel, PDF veya protokol dosyalarınızı buraya sürükleyin ya da seçin</p>
                <input type="file" className="mt-2 text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 cursor-pointer" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-500 text-white py-4 rounded-2xl font-bold text-base transition-all shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2"
            >
              Proje Talebini Gönder <Send className="w-4 h-4" />
            </button>

          </form>
        )}

      </div>
    </div>
  );
}