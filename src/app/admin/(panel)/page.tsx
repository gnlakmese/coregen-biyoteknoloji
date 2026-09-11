"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { User, Phone, MapPin, Calendar, ShieldCheck, FileText, Award } from "lucide-react";

export default function AdminProfilePage() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    try {
      const userStr = localStorage.getItem("coregen_user");
      if (userStr) {
        setCurrentUser(JSON.parse(userStr));
      } else {
        setCurrentUser({
          name: "Gönül Akmeşe",
          email: "gonulakmese@coregenbiyoteknoloji.com",
          role: "admin",
          gorev: "Kurucu - Baş Araştırmacı - Eğitmen",
          unvan: "Tıbbi Genetik Bilim Uzmanı (MSc.) & Biyoteknoloji Uzmanı",
          isBaslangic: "05.02.2026",
          telefon: "0552 220 7270",
          adres: "CoreGen Biyoteknoloji Ar-Ge Laboratuvarı, Mersin",
          cv: "Selçuk University Medical Genetics (MSc.) ve Biotechnology mezunu. CoreGen Biyoteknoloji kurucusu. CRISPR, Prime Editing, Recombinant Protein Expression, Affinite Kromatografisi ve CADD (Bilgisayarlı İlaç Tasarımı) alanlarında uzman, BioAcademy kurucusu.",
          image: "/images/kurucu.png"
        });
      }
    } catch (e) {
      // Fallback
    }
  }, []);

  const isTolga = currentUser?.email === "tolgaakmese@coregenbiyoteknoloji.com";

  const profileData = isTolga ? {
    name: "Tolga Akmeşe",
    email: "tolgaakmese@coregenbiyoteknoloji.com",
    role: "İş Geliştirme Uzmanı",
    gorev: "İş Geliştirme ve Operasyon Sorumlusu",
    isBaslangic: "05.02.2026",
    telefon: "0538 071 4635",
    adres: "CoreGen Biyoteknoloji, Mersin",
    cv: "CoreGen Biyoteknoloji bünyesinde iş geliştirme, kurumsal partnerlikler, operasyon yönetimi ve müşteri ilişkileri koordinasyonunu yürütmektedir.",
    image: "/images/is-gelistirme.jpeg"
  } : {
    name: "Gönül Akmeşe",
    email: "gonulakmese@coregenbiyoteknoloji.com",
    role: "Yönetici (Admin)",
    gorev: "Kurucu - Baş Araştırmacı - Eğitmen",
    unvan: "Tıbbi Genetik Bilim Uzmanı (MSc.) & Biyoteknoloji Uzmanı",
    isBaslangic: "05.02.2026",
    telefon: "0552 220 7270",
    adres: "CoreGen Biyoteknoloji, Mersin",
    cv: "Selçuk University Medical Genetics (MSc.) ve Biotechnology mezunu. CoreGen Biyoteknoloji ve BioAcademy kurucusu. Moleküler klonlama, gen düzenleme ve biyoinformatik pipeline geliştirme alanlarında öncü çalışmalar yürütmektedir.",
    image: "/images/kurucu.png"
  };

  return (
    <div className="space-y-8 text-slate-800">
      {/* Üst Başlık */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <span className="text-[10px] uppercase font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
            Kurumsal Kimlik & Personel Profili
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">Yönetici ve Uzman Bilgileri</h1>
        </div>
        <div className="flex items-center gap-2 bg-pink-50 border border-pink-100 px-4 py-2 rounded-xl text-xs font-bold text-pink-700">
          <ShieldCheck className="w-4 h-4 text-pink-600" />
          {profileData.role}
        </div>
      </div>

      {/* Profil Kartı */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sol Kimlik Özet Kartı */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-pink-100 bg-slate-100 shrink-0">
            <Image
              src={profileData.image}
              alt={profileData.name}
              fill
              className="object-cover"
              sizes="112px"
              priority
            />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900">{profileData.name}</h2>
            <p className="text-xs font-semibold text-pink-600">{profileData.gorev}</p>
            <p className="text-[11px] text-slate-500">{profileData.email}</p>
          </div>

          <div className="w-full pt-4 border-t border-slate-100 space-y-3 text-left">
            <div className="flex items-center gap-3 text-xs text-slate-700">
              <Calendar className="w-4 h-4 text-pink-600 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block">İşe Başlama</span>
                <span className="font-semibold text-slate-900">{profileData.isBaslangic}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-700">
              <Phone className="w-4 h-4 text-pink-600 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block">İletişim Telefonu</span>
                <span className="font-semibold text-slate-900">{profileData.telefon}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-700">
              <MapPin className="w-4 h-4 text-pink-600 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block">Lokasyon / Adres</span>
                <span className="font-semibold text-slate-900">{profileData.adres}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Detaylı Özgeçmiş ve Yetkinlikler */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-md space-y-4">
            <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-pink-600" /> Profesyonel Özgeçmiş & Biyografi
            </h3>
            <p className="text-xs lg:text-sm text-slate-600 leading-relaxed">
              {profileData.cv}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-md space-y-4">
            <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-pink-600" /> Kurumsal Yetki ve Sorumluluklar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                <span className="text-pink-600 font-bold block">Ar-Ge & Laboratuvar</span>
                <p className="text-slate-500">Moleküler tanı, NGS analizi ve rekombinant protein projelerinin yönetimi.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                <span className="text-pink-600 font-bold block">Eğitim & Danışmanlık</span>
                <p className="text-slate-500">BioAcademy platformu üzerinden biyoinformatik ve genetik eğitimlerinin verilmesi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}