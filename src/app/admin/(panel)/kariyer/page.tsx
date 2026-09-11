"use client";

import { useState } from "react";
import { Search, Filter, Download, ExternalLink, UserCircle, Clock, CheckCircle2, XCircle, Briefcase } from "lucide-react";

const initialApplicants = [
  {
    id: 1,
    name: "Elif Yılmaz",
    position: "Moleküler Biyolog",
    date: "25 Ağu 2026",
    linkedin: "linkedin.com/in/elifyilmaz",
    status: "yeni",
    experience: "3 Yıl",
    education: "ODTÜ Moleküler Biyoloji ve Genetik",
  },
  {
    id: 2,
    name: "Caner Kılıç",
    position: "Biyoinformatik Uzmanı",
    date: "24 Ağu 2026",
    linkedin: "linkedin.com/in/canerkilic",
    status: "degerlendiriliyor",
    experience: "1 Yıl",
    education: "Hacettepe Biyomühendislik",
  },
  {
    id: 3,
    name: "Zeynep Demir",
    position: "Laboratuvar Teknikeri",
    date: "20 Ağu 2026",
    linkedin: "",
    status: "reddedildi",
    experience: "Yeni Mezun",
    education: "Ankara Üni. Tıbbi Laboratuvar",
  }
];

export default function KariyerHavuzuPage() {
  const [applicants, setApplicants] = useState(initialApplicants);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "yeni": 
        return <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-200"><Clock className="w-3.5 h-3.5" /> Yeni Başvuru</span>;
      case "degerlendiriliyor": 
        return <span className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold border border-amber-200"><UserCircle className="w-3.5 h-3.5" /> Değerlendiriliyor</span>;
      case "reddedildi": 
        return <span className="flex items-center gap-1.5 bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-xs font-bold border border-rose-200"><XCircle className="w-3.5 h-3.5" /> Olumsuz</span>;
      default: 
        return null;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Üst İstatistik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center"><Briefcase className="w-6 h-6" /></div>
          <div><p className="text-sm font-semibold text-slate-500">Toplam Başvuru</p><p className="text-2xl font-extrabold text-slate-900">34</p></div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><Clock className="w-6 h-6" /></div>
          <div><p className="text-sm font-semibold text-slate-500">Yeni Gelenler</p><p className="text-2xl font-extrabold text-slate-900">12</p></div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center"><UserCircle className="w-6 h-6" /></div>
          <div><p className="text-sm font-semibold text-slate-500">Mülakat Aşamasında</p><p className="text-2xl font-extrabold text-slate-900">4</p></div>
        </div>
      </div>

      {/* Başvuru Tablosu */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        
        <div className="p-5 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
          <h3 className="font-bold text-slate-900 text-lg">Kariyer Havuzu (CV)</h3>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Aday veya pozisyon ara..." className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 outline-none w-64 transition-all" />
            </div>
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" /> Filtrele
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-bold">Aday Bilgileri</th>
                <th className="px-6 py-4 font-bold">Başvurulan Pozisyon</th>
                <th className="px-6 py-4 font-bold">Eğitim & Tecrübe</th>
                <th className="px-6 py-4 font-bold">Durum</th>
                <th className="px-6 py-4 font-bold text-right">CV & İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {applicants.map((applicant) => (
                <tr key={applicant.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900 text-base">{applicant.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{applicant.date}</div>
                    {applicant.linkedin && (
                      <a href={`https://${applicant.linkedin}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 mt-2 hover:underline">
                        <ExternalLink className="w-3 h-3" /> LinkedIn Profili
                      </a>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-800">{applicant.position}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-700">{applicant.education}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{applicant.experience} Tecrübe</div>
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      defaultValue={applicant.status}
                      className="text-xs font-bold rounded-lg px-2 py-1.5 border border-slate-200 outline-none cursor-pointer bg-white text-slate-700 hover:bg-slate-50"
                    >
                      <option value="yeni">Yeni Başvuru</option>
                      <option value="degerlendiriliyor">Değerlendiriliyor</option>
                      <option value="reddedildi">Olumsuz (Red)</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors">
                      <Download className="w-4 h-4" /> CV İndir
                    </button>
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