"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Phone, MapPin, Calendar, FileText, Award, Plus, X, CreditCard, Upload } from "lucide-react";

const initialProfiles = [
  {
    name: "Tolga Akmeşe",
    role: "İş Geliştirme Uzmanı",
    gorev: "İş Geliştirme ve Operasyon Sorumlusu",
    email: "tolgaakmese@coregenbiyoteknoloji.com",
    telefon: "0538 071 4635",
    adres: "CoreGen Biyoteknoloji Ar-Ge Laboratuvarı, Mersin",
    kanGrubu: "A Rh+",
    dogumGunu: "15.05.1998",
    isBaslangic: "05.02.2026",
    image: "/images/is-gelistirme.jpeg",
    cv: "CoreGen Biyoteknoloji bünyesinde iş geliştirme, kurumsal partnerlikler, operasyon yönetimi ve müşteri ilişkileri koordinasyonunu yürütmektedir.",
    responsibilities: [
      { title: "İş Geliştirme & Satış", desc: "Kurumsal laboratuvar partnerlikleri ve müşteri ilişkileri yönetimi." },
      { title: "Operasyon & Lojistik", desc: "Numune sevkiyat süreçleri ve tedarik zinciri koordinasyonu." }
    ]
  },
  {
    name: "Gönül Akmeşe",
    role: "Yönetici (Admin) & Kurucu",
    gorev: "Kurucu - Baş Araştırmacı - Eğitmen",
    unvan: "Tıbbi Genetik Bilim Uzmanı (MSc.) & Biyoteknoloji Uzmanı",
    email: "gonulakmese@coregenbiyoteknoloji.com",
    telefon: "0552 220 7270",
    adres: "CoreGen Biyoteknoloji Ar-Ge Laboratuvarı, Mersin",
    kanGrubu: "0 Rh+",
    dogumGunu: "30.09.1996",
    isBaslangic: "05.02.2026",
    image: "/images/kurucu.png",
    cv: "Selçuk University Medical Genetics (MSc.) ve Biotechnology mezunu. CoreGen Biyoteknoloji ve BioAcademy kurucusu. Moleküler klonlama, gen düzenleme ve biyoinformatik pipeline geliştirme alanlarında öncü çalışmalar yürütmektedir.",
    responsibilities: [
      { title: "Ar-Ge & Laboratuvar", desc: "Moleküler tanı, NGS analizi ve rekombinant protein projelerinin yönetimi." },
      { title: "Eğitim & Danışmanlık", desc: "BioAcademy platformu üzerinden biyoinformatik ve genetik eğitimlerinin verilmesi." }
    ]
  }
];

export default function AdminProfilesPage() {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Yeni Personel Form State'leri
  const [formName, setFormName] = useState("");
  const [formSurname, setFormSurname] = useState("");
  const [formRole, setFormRole] = useState("Laboratuvar Uzmanı");
  const [formTc, setFormTc] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formBlood, setFormBlood] = useState("A Rh+");
  const [formBirth, setFormBirth] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formWorkEmail, setFormWorkEmail] = useState("");
  const [formStartDate, setFormStartDate] = useState("05.02.2026");
  const [formImage, setFormImage] = useState("/images/kurucu.png");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Yerel geçici URL oluşturma
      setFormImage(URL.createObjectURL(file));
    }
  };

  const handleAddPerson = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formSurname) return;

    const newProfile = {
      name: `${formName} ${formSurname}`,
      role: formRole,
      gorev: formRole,
      email: formWorkEmail || formEmail,
      telefon: formPhone,
      tcNo: formTc,
      adres: formAddress || "CoreGen Biyoteknoloji, Mersin",
      kanGrubu: formBlood,
      dogumGunu: formBirth,
      isBaslangic: formStartDate,
      image: formImage,
      cv: `${formName} ${formSurname}, CoreGen Biyoteknoloji bünyesinde ${formRole} olarak görev yapmaktadır.`,
      responsibilities: [
        { title: "Laboratuvar Operasyon", desc: "Kurum içi teknik projeler ve analiz süreçleri." }
      ]
    };

    setProfiles(prev => [newProfile, ...prev]);
    setIsModalOpen(false);

    // Formu sıfırla
    setFormName("");
    setFormSurname("");
    setFormTc("");
    setFormPhone("");
    setFormAddress("");
    setFormBirth("");
    setFormEmail("");
    setFormWorkEmail("");
    setFormImage("/images/kurucu.png");
    alert("Yeni personel başarıyla sisteme eklendi!");
  };

  return (
    <div className="space-y-8 text-slate-800 pb-16">
      {/* Üst Başlık */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <span className="text-[10px] uppercase font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
            Kurumsal Ekip Yönetimi
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">Personel ve Yönetici Profilleri</h1>
          <p className="text-xs text-slate-500 mt-1">CoreGen Biyoteknoloji bünyesindeki tüm yetkili ve uzman kadro bilgileri.</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-3 rounded-xl text-xs transition-all shadow-md shadow-pink-600/20 shrink-0"
        >
          <Plus className="w-4 h-4" /> Yeni Personel Ekle
        </button>
      </div>

      {/* Profil Kartları Listesi */}
      <div className="space-y-8">
        {profiles.map((profile: any, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-md grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Sol Özet Kolonu */}
            <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-pink-100 bg-slate-100 shrink-0">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                  unoptimized
                />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100 inline-block mb-1">
                  {profile.role}
                </span>
                <h2 className="text-xl font-bold text-slate-900">{profile.name}</h2>
                <p className="text-xs font-semibold text-pink-700">{profile.gorev}</p>
                <p className="text-[11px] text-slate-500">{profile.email}</p>
              </div>

              <div className="w-full pt-4 border-t border-slate-100 space-y-3 text-left text-xs">
                <div className="flex items-center gap-3 text-slate-700">
                  <Calendar className="w-4 h-4 text-pink-600 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">İşe Başlama / Doğum Günü</span>
                    <span className="font-semibold text-slate-900">{profile.isBaslangic} <span className="text-slate-400 font-normal">({profile.dogumGunu})</span></span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-4 h-4 text-pink-600 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Telefon / Kan Grubu</span>
                    <span className="font-semibold text-slate-900">{profile.telefon} <span className="text-pink-600 font-bold ml-1">({profile.kanGrubu})</span></span>
                  </div>
                </div>

                {profile.tcNo && (
                  <div className="flex items-center gap-3 text-slate-700">
                    <CreditCard className="w-4 h-4 text-pink-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">TC Kimlik No</span>
                      <span className="font-semibold text-slate-900">{profile.tcNo}</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="w-4 h-4 text-pink-600 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Adres</span>
                    <span className="font-semibold text-slate-900">{profile.adres}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Detay Kolonu */}
            <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
                  <h3 className="font-bold text-xs text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-pink-600" /> Profesyonel Özgeçmiş & Biyografi
                  </h3>
                  <p className="text-xs lg:text-sm text-slate-600 leading-relaxed">
                    {profile.cv}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-xs text-slate-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-pink-600" /> Kurumsal Sorumluluk ve Görev Alanları
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {profile.responsibilities.map((resp: any, i: number) => (
                      <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                        <span className="text-pink-600 font-bold block">{resp.title}</span>
                        <p className="text-slate-500">{resp.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>CoreGen Biyoteknoloji Personel Sicil No: CG-{idx + 101}</span>
                <span className="text-pink-600 font-semibold">Aktif Sicil Kaydı</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* YENİ PERSONEL EKLEME MODALI */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 lg:p-8 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                  İK & Personel Kaydı
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 mt-1">Yeni Personel / Uzman Ekle</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddPerson} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">İsim *</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Örn: Ahmet"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Soyisim *</label>
                  <input
                    type="text"
                    required
                    value={formSurname}
                    onChange={(e) => setFormSurname(e.target.value)}
                    placeholder="Örn: Yılmaz"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Unvan / Görev</label>
                  <input
                    type="text"
                    value={formRole}
                    onChange={(e) => setFormRole(e.target.value)}
                    placeholder="Örn: Biyoteknoloji Uzmanı"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">TC Kimlik No</label>
                  <input
                    type="text"
                    maxLength={11}
                    value={formTc}
                    onChange={(e) => setFormTc(e.target.value)}
                    placeholder="11 haneli TC No"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Telefon Numarası</label>
                  <input
                    type="text"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="05XX XXX XX XX"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Kan Grubu</label>
                  <select
                    value={formBlood}
                    onChange={(e) => setFormBlood(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  >
                    <option value="A Rh+">A Rh+</option>
                    <option value="A Rh-">A Rh-</option>
                    <option value="B Rh+">B Rh+</option>
                    <option value="B Rh-">B Rh-</option>
                    <option value="AB Rh+">AB Rh+</option>
                    <option value="AB Rh-">AB Rh-</option>
                    <option value="0 Rh+">0 Rh+</option>
                    <option value="0 Rh-">0 Rh-</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Doğum Günü</label>
                  <input
                    type="text"
                    value={formBirth}
                    onChange={(e) => setFormBirth(e.target.value)}
                    placeholder="GG.AA.YYYY"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Kişisel E-posta</label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="kisisel@gmail.com"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">İş E-postası</label>
                  <input
                    type="email"
                    value={formWorkEmail}
                    onChange={(e) => setFormWorkEmail(e.target.value)}
                    placeholder="isim@coregenbiyoteknoloji.com"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">İşe Başlama Tarihi</label>
                  <input
                    type="text"
                    value={formStartDate}
                    onChange={(e) => setFormStartDate(e.target.value)}
                    placeholder="05.02.2026"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
                
                {/* DOSYA YÜKLEME İLE FOTOĞRAF EKLEME ALANI */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 text-pink-600" /> Profil Fotoğrafı Dosyası Yükle
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 cursor-pointer"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Adres Bilgisi</label>
                <textarea
                  rows={2}
                  value={formAddress}
                  onChange={(e) => setFormAddress(e.target.value)}
                  placeholder="İkametgah / Laboratuvar adresi..."
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs transition-all shadow-md shadow-pink-600/20"
                >
                  Personeli Kaydet
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}