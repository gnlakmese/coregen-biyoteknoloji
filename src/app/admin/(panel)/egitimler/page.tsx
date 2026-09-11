"use client";

import { useState } from "react";
import { Megaphone, Plus, Trash2, Edit, GraduationCap, PlayCircle, Radio, CheckCircle2 } from "lucide-react";

// Ön yüzdeki verilerin panel simülasyonu
const initialDuyurular = [
  { id: 1, text: "🔥 Bu Ayın Özel Oturumu: Epigenetik Perspektif Eğitimine Kayıtlar Başladı!", isActive: true },
  { id: 2, text: "📢 CoreGen Genetik Akademi 2026 Eğitim Takvimi Güncellendi.", isActive: true },
  { id: 3, text: "💡 Sıfırdan Biyoinformatik Bootcamp İçin Son Şans!", isActive: true },
  { id: 4, text: "🚀 Metagenomik Analizlere Giriş Eğitimi Erken Kayıt Fırsatı Devam Ediyor.", isActive: false }
];

const initialEgitimler = [
  { id: 1, title: "Sıfırdan Biyoinformatik Bootcamp", type: "Canlı Eğitim", price: "990 ₺", status: "Aktif" },
  { id: 2, title: "CoreGen Genetik Akademisi", type: "Canlı Eğitim", price: "1.500 ₺", status: "Aktif" },
  { id: 3, title: "Sitogenetik ve Sanal Karyotipleme", type: "Video Eğitim", price: "2.553 ₺", status: "Aktif" },
];

export default function EgitimDuyuruPage() {
  const [duyurular, setDuyurular] = useState(initialDuyurular);
  const [egitimler, setEgitimler] = useState(initialEgitimler);

  return (
    <div className="space-y-8">
      
      {/* DUYURU (MARQUEE) YÖNETİMİ */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-pink-600" /> Kayan Duyuru Bandı (Marquee)
            </h3>
            <p className="text-sm text-slate-500 mt-1">Ana sayfadaki üst bantta kayan yazıları buradan yönetebilirsiniz.</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
            <Plus className="w-4 h-4" /> Yeni Duyuru Ekle
          </button>
        </div>

        <div className="p-6">
          <ul className="space-y-3">
            {duyurular.map((duyuru) => (
              <li key={duyuru.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${duyuru.isActive ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-300'}`} />
                  <span className={`text-sm font-medium ${duyuru.isActive ? 'text-slate-700' : 'text-slate-400 line-through'}`}>
                    {duyuru.text}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:text-blue-600 bg-white border border-slate-200 rounded-lg transition-colors" title="Düzenle">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-rose-600 bg-white border border-slate-200 rounded-lg transition-colors" title="Sil">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* EĞİTİM YÖNETİMİ */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-600" /> Eğitim & Sertifika Programları
            </h3>
            <p className="text-sm text-slate-500 mt-1">Sitede listelenen video veya canlı eğitimlerinizi düzenleyin.</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
            <Plus className="w-4 h-4" /> Yeni Eğitim Oluştur
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-bold">Eğitim Adı</th>
                <th className="px-6 py-4 font-bold">Eğitim Tipi</th>
                <th className="px-6 py-4 font-bold">Fiyat</th>
                <th className="px-6 py-4 font-bold">Durum</th>
                <th className="px-6 py-4 font-bold text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {egitimler.map((egitim) => (
                <tr key={egitim.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-800">{egitim.title}</td>
                  <td className="px-6 py-4">
                    {egitim.type === "Canlı Eğitim" ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                        <Radio className="w-3.5 h-3.5" /> Canlı Eğitim
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                        <PlayCircle className="w-3.5 h-3.5" /> Video Eğitim
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-700">{egitim.price}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Yayında
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-600 bg-white border border-slate-200 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-rose-600 bg-white border border-slate-200 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}