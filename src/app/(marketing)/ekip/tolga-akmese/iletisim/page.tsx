"use client";

import { useState } from "react";
import { Send, CheckCircle, FileUp, Briefcase } from "lucide-react";

export default function TolgaIletisimPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-800">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        <div className="text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-pink-600 bg-pink-50 px-3.5 py-1.5 rounded-full mb-4">
            Tolga Akmeşe • İş Geliştirme
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Stratejik İş Birliği ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-600">İletişim</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            İş geliştirme süreçleri ve kurumsal ortaklıklar için doğrudan Tolga Akmeşe ile iletişime geçin.
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-xl border border-pink-100/80 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-pink-500/5">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-pink-50 text-pink-600 rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">İş Geliştirme İletişim Formu</h3>
              <p className="text-xs text-slate-500">Bu form doğrudan Tolga Akmeşe'nin özel paneline ve ana yönetime iletilir.</p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-100 rounded-3xl p-8 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
              <h4 className="text-xl font-bold text-green-900">Talebiniz Alındı!</h4>
              <p className="text-green-700 text-sm">İş geliştirme ekibimiz ve Tolga Akmeşe talebinizi inceleyecektir.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">İsim Soyisim *</label>
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
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Kurum / Okul *</label>
                  <input required type="text" placeholder="Şirket veya Kurum Adı" className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm focus:ring-2 focus:ring-pink-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Sınıf / Departman *</label>
                  <input required type="text" placeholder="Departmanınız" className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm focus:ring-2 focus:ring-pink-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Notunuz / Proje Detayı *</label>
                <textarea rows={4} required placeholder="İş birliği detaylarını veya talebinizi belirtin..." className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm focus:ring-2 focus:ring-pink-500 outline-none"></textarea>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase">Dosya Ekle (Opsiyonel)</label>
                <div className="border-2 border-dashed border-slate-200 rounded-3xl p-6 text-center bg-slate-50 hover:border-pink-500 transition-all cursor-pointer">
                  <FileUp className="w-7 h-7 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-600">Teklif veya sunum dosyası yükleyin</p>
                  <input type="file" className="mt-2 text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-pink-50 file:text-pink-700 cursor-pointer mx-auto block" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-cyan-600 hover:opacity-95 text-white py-4 rounded-2xl font-bold text-base transition-all shadow-lg shadow-pink-600/20 flex items-center justify-center gap-2"
              >
                Tolga Akmeşe'ye Gönder <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}