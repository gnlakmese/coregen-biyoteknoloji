"use client";

import { useState } from "react";
import { Send, CheckCircle2, Info, AlertTriangle, Microscope, Beaker, FileText, Activity, Dna, Layers, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";

const ALL_SERVICES = [
  "Nükleik Asit ve Protein İzolasyonu", "Primer / Prob Tasarımı", "Jel Elektroforezi", "NanoDrop / Qubit Miktar Tayini",
  "PCR Analizi", "qPCR / RT-qPCR", "Sanger Dizileme", "WGS / WES / Targeted Sequencing", "RNA-Seq", 
  "Shotgun Metagenomics", "16S rRNA Analizi", "Western Blot", "ELISA", "Rekombinant Protein", 
  "Biyoinformatik Hizmetleri", "Oksidatif Stres / Biyokimya / Spesifik Testler", "İmmünohistokimya (IHC)", 
  "Hücre Kültürü Analizleri", "Proje Danışmanlığı", "Yerinde Hizmet", "Eğitim Hizmetleri", 
  "Deney Tasarımı", "İstatistiksel Analiz", "Bilimsel Raporlama / Yayın Danışmanlığı"
];

export default function TeklifFormPage() {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/teklif-sepeti/onay");
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-800">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 blur-[100px] rounded-full pointer-events-none -z-10" />
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-pink-600 bg-pink-50 px-4 py-2 rounded-full mb-6 border border-pink-100">
            Laboratuvar & Analiz Platformu
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Kapsamlı Teklif Sepeti
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Araştırma projeleriniz için en uygun yöntemi ve fiyatlandırmayı belirleyebilmemiz için lütfen aşağıdaki detaylı formu doldurun.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          
          {/* BÖLÜM 1: ORTAK MÜŞTERİ BİLGİLERİ */}
          <div className="p-8 md:p-12 border-b border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-50 to-transparent rounded-bl-full -z-10" />
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span className="bg-gradient-to-r from-pink-600 to-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">1</span> 
              Müşteri / Kurum Bilgileri
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Ad Soyad</label><input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Unvan / Akademik Derece</label><input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Kurum / Firma</label><input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Bölüm / Anabilim Dalı</label><input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Telefon</label><input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">E-posta</label><input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all" /></div>
              <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Şehir</label><input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all" /></div>
              <div className="space-y-2 md:col-span-2"><label className="text-xs font-bold text-slate-500 uppercase">Fatura Bilgileri (Opsiyonel)</label><input type="text" placeholder="Vergi Dairesi / VKN / Adres" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all" /></div>
              
              <div className="md:col-span-3 space-y-3 mt-4">
                <label className="text-xs font-bold text-slate-500 uppercase block border-b pb-2">Teklifin Kullanılacağı Proje Türü</label>
                <div className="flex flex-wrap gap-4">
                  {["Bireysel / Özel Çalışma", "BAP", "TÜBİTAK", "TÜSEB", "Üniversite Projesi", "Firma AR-GE Projesi", "Diğer"].map(t => (
                    <label key={t} className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
                      <input type="radio" name="projeTuru" className="w-4 h-4 text-cyan-600 focus:ring-cyan-500" /> {t}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BÖLÜM 2: HİZMET SEÇİMİ */}
          <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-900 relative">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">2</span> 
              Hizmet Seçimi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {ALL_SERVICES.map((hizmet) => (
                <label key={hizmet} className={`cursor-pointer flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 ${selectedServices.includes(hizmet) ? 'bg-pink-500/20 border-pink-500' : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'}`}>
                  <input type="checkbox" className="hidden" checked={selectedServices.includes(hizmet)} onChange={() => toggleService(hizmet)} />
                  <div className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border ${selectedServices.includes(hizmet) ? 'bg-pink-500 border-pink-500' : 'border-slate-600'}`}>
                    {selectedServices.includes(hizmet) && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className={`text-sm font-semibold leading-tight ${selectedServices.includes(hizmet) ? 'text-white' : 'text-slate-300'}`}>{hizmet}</span>
                </label>
              ))}
            </div>
          </div>

          {/* DİNAMİK ALANLAR (Sadece hizmet seçilince açılır) */}
          {selectedServices.length > 0 && (
            <div className="p-8 md:p-12 space-y-12 bg-slate-50/50">
              
              {/* ORTAK NUMUNE BİLGİLERİ (Danışmanlık/Eğitim harici hizmetler için) */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 bg-gradient-to-b from-cyan-400 to-blue-500 h-full" />
                <h3 className="text-xl font-extrabold text-slate-800 mb-6 flex items-center gap-2"><Beaker className="w-6 h-6 text-cyan-600" /> Ortak Numune Bilgileri</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Numune Tipi</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none">
                      <option>Kan / Serum / Plazma</option><option>Doku / Hücre / Lizat</option><option>DNA / RNA / Protein</option><option>Bakteri / Mantar / Bitki</option><option>Dışkı / Su / Toprak / Swab</option><option>Diğer</option>
                    </select>
                  </div>
                  <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Toplam Numune Sayısı</label><input type="number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none" /></div>
                  <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Grup / Tekrar Sayısı</label><input type="text" placeholder="Örn: 4 grup, her grupta 3 biyolojik tekrar" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none" /></div>
                  <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Hacim / Konsantrasyon</label><input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none" /></div>
                  <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Saklama Koşulu / Mevcut Sıcaklık</label><input type="text" placeholder="-80°C, RT vb." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none" /></div>
                  <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase">Biyolojik Materyal Türü</label><input type="text" placeholder="İnsan, Sıçan, Fare, E.coli vb." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none" /></div>
                  
                  <div className="md:col-span-3 bg-rose-50 border border-rose-200 rounded-xl p-5 flex gap-4 mt-4">
                    <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-rose-900 mb-1">Potansiyel Biyolojik Risk veya Özel Güvenlik Durumu Var mı?</p>
                      <div className="flex gap-4 mt-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-rose-800"><input type="radio" name="bioRisk" value="hayir" /> Hayır, standart numune.</label>
                        <label className="flex items-center gap-2 text-sm font-medium text-rose-800"><input type="radio" name="bioRisk" value="evet" /> Evet (Lütfen açıklayınız)</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DİNAMİK HİZMET MODÜLLERİ */}
              
              {selectedServices.includes("Nükleik Asit ve Protein İzolasyonu") && (
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="bg-pink-50 p-4 rounded-xl mb-6 border border-pink-100 flex gap-3">
                    <Info className="w-6 h-6 text-pink-600 shrink-0" />
                    <p className="text-sm text-pink-900"><strong>İzolasyon Analizi:</strong> Biyolojik örneklerden (doku, kan, hücre) yüksek saflıkta DNA, RNA veya protein elde edilmesidir. Sonraki (downstream) genetik ve proteomik analizlerinizin (PCR, NGS, Western Blot) başarısı doğrudan izolasyon kalitesine bağlıdır.</p>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Nükleik Asit ve Protein İzolasyonu Detayları</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2"><label className="text-xs font-bold text-slate-500">İzole Edilecek Materyal</label>
                      <select className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm"><option>DNA</option><option>Total RNA</option><option>miRNA</option><option>Protein</option></select>
                    </div>
                    <div className="space-y-2"><label className="text-xs font-bold text-slate-500">İstenen Nihai Kullanım (Downstream)</label>
                      <select className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm"><option>PCR / qPCR</option><option>NGS</option><option>Sanger</option><option>Western Blot</option><option>ELISA</option><option>Diğer</option></select>
                    </div>
                    <div className="space-y-2 md:col-span-2"><label className="text-xs font-bold text-slate-500">Ekstrakt Teslim Şekli ve Kalite Kontrol (QC)</label>
                      <div className="flex flex-wrap gap-4 mt-1">
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Sadece İzolasyon</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> NanoDrop / Qubit ile QC</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Jel Analizi</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Bioanalyzer (RIN)</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> İzolasyon + Downstream Analiz</label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedServices.includes("Primer / Prob Tasarımı") && (
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="bg-cyan-50 p-4 rounded-xl mb-6 border border-cyan-100 flex gap-3">
                    <Dna className="w-6 h-6 text-cyan-600 shrink-0" />
                    <p className="text-sm text-cyan-900"><strong>Primer/Prob Tasarımı:</strong> PCR ve qPCR reaksiyonlarında hedef geni spesifik olarak çoğaltmak/tespit etmek için yapılan in-silico tasarım işlemidir. İfade analizleri ve patojen tespiti için kritik öneme sahiptir.</p>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Primer / Prob / Oligonükleotid Tasarımı</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Hedef Gen / Bölge Adı (Örn: TP53)" className="bg-slate-50 border rounded-lg px-3 py-2 text-sm" />
                    <input type="text" placeholder="Gen ID / RefSeq / Ensembl ID (Varsa)" className="bg-slate-50 border rounded-lg px-3 py-2 text-sm" />
                    <div className="space-y-1"><label className="text-xs font-bold text-slate-500">İstenen Uygulama</label>
                      <select className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm"><option>Standart PCR</option><option>RT-qPCR (SYBR)</option><option>RT-qPCR (TaqMan)</option><option>Multiplex PCR</option><option>Sanger</option></select>
                    </div>
                    <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Boya / Prob Tercihi (TaqMan için)</label>
                      <input type="text" placeholder="FAM, HEX, Cy5 vb." className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div className="md:col-span-2 flex gap-4 text-sm mt-2">
                      <label className="flex items-center gap-1"><input type="checkbox" /> Referans Gen Gerekiyor</label>
                      <label className="flex items-center gap-1"><input type="checkbox" /> Multiplex Çalışma Yapılacak</label>
                    </div>
                  </div>
                </div>
              )}

              {selectedServices.includes("qPCR / RT-qPCR") && (
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm border-l-4 border-l-pink-500">
                  <div className="bg-pink-50 p-4 rounded-xl mb-6 border border-pink-100 flex gap-3">
                    <Activity className="w-6 h-6 text-pink-600 shrink-0" />
                    <p className="text-sm text-pink-900"><strong>qPCR / RT-qPCR:</strong> Genlerin hücre içindeki ekspresyon (ifade) seviyelerini kantitatif (nicel) olarak ölçer veya patojen (virüs/bakteri) varlığını tespit eder. ∆∆Ct yöntemi ile hastalık/tedavi mekanizmaları araştırılır.</p>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">qPCR / RT-qPCR Deney Detayları</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Araştırma Amacı (Gen ekspresyonu, Patojen vb.)" className="bg-slate-50 border rounded-lg px-3 py-2 text-sm" />
                    <input type="text" placeholder="Hedef Genler & Referans Genler" className="bg-slate-50 border rounded-lg px-3 py-2 text-sm" />
                    <div className="md:col-span-2 space-y-2 mt-2">
                      <label className="text-xs font-bold text-slate-500 block">Teknik ve Metodolojik Detaylar</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> İzolasyon Gerekli</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> cDNA Sentezi Gerekli</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Primerler Hazır/Mevcut</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> ∆∆Ct Analizi İstiyorum</label>
                      </div>
                    </div>
                    <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Metot</label>
                      <select className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm"><option>SYBR Green</option><option>TaqMan / Prob</option></select>
                    </div>
                    <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Kantifikasyon Türü</label>
                      <select className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm"><option>Göreceli (Relative - ∆∆Ct)</option><option>Mutlak (Absolute - Standart Eğri)</option></select>
                    </div>
                  </div>
                </div>
              )}

              {selectedServices.includes("RNA-Seq") && (
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="bg-indigo-50 p-4 rounded-xl mb-6 border border-indigo-100 flex gap-3">
                    <Layers className="w-6 h-6 text-indigo-600 shrink-0" />
                    <p className="text-sm text-indigo-900"><strong>RNA-Seq (Transkriptom):</strong> Tüm genom düzeyinde gen ifade profillerini dizileyerek ortaya çıkarır. Hastalık mekanizmaları, ilaç hedefleri ve gelişim biyolojisi araştırmalarında kullanılır. Sadece dizileme veya veri analizi dahil seçilebilir.</p>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">RNA-Seq (Transkriptom) Parametreleri</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Kütüphane Tipi</label>
                      <select className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm"><option>PolyA (mRNA-Seq)</option><option>Total RNA-Seq (rRNA depleted)</option><option>Small RNA / miRNA</option><option>Single-Cell RNA-Seq</option></select>
                    </div>
                    <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Beklenen Okuma (Read) Derinliği</label>
                      <input type="text" placeholder="Örn: 20-30 Milyon Read" className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div className="md:col-span-2 space-y-2 mt-2">
                      <label className="text-xs font-bold text-slate-500 block">İstenen Biyoinformatik Analiz Kapsamı</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Sadece Ham Veri (FASTQ)</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Diferansiyel Ekspresyon Analizi</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> GO / KEGG Pathway Analizi</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Heatmap / PCA Çizimleri</label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedServices.includes("Western Blot") && (
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm border-l-4 border-l-cyan-500">
                  <div className="bg-cyan-50 p-4 rounded-xl mb-6 border border-cyan-100 flex gap-3">
                    <FileText className="w-6 h-6 text-cyan-600 shrink-0" />
                    <p className="text-sm text-cyan-900"><strong>Western Blot:</strong> Spesifik proteinlerin miktarını ve moleküler ağırlığını antikorlar kullanarak tespit eder. Kanser, sinyal yolakları ve biyobelirteç doğrulama çalışmalarında protein ekspresyonunun altın standardıdır.</p>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Western Blot Analiz Detayları</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Hedef Protein(ler)" className="bg-slate-50 border rounded-lg px-3 py-2 text-sm" />
                    <input type="text" placeholder="Housekeeping Protein (GAPDH, Beta-actin vb.)" className="bg-slate-50 border rounded-lg px-3 py-2 text-sm" />
                    <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Antikor Durumu</label>
                      <select className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm"><option>Antikor laboratuvar tarafından temin edilsin</option><option>Antikorları kendim göndereceğim</option></select>
                    </div>
                    <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Kantitatif Densitometri</label>
                      <select className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm"><option>İsteniyor (Görüntü + Veri Grafiği)</option><option>Sadece Bant Görüntüsü Yeterli</option></select>
                    </div>
                    <div className="md:col-span-2 mt-2">
                      <label className="text-xs font-bold text-slate-500 block">Çalışma Döngüsü (Güvenilirlik için Duplike önerilir)</label>
                      <div className="flex gap-4 mt-1">
                        <label className="text-sm flex items-center gap-1"><input type="radio" name="wb-rep" /> Tekil</label>
                        <label className="text-sm flex items-center gap-1"><input type="radio" name="wb-rep" /> Duplike</label>
                        <label className="text-sm flex items-center gap-1"><input type="radio" name="wb-rep" /> Triplike</label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedServices.includes("Biyoinformatik Hizmetleri") && (
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="bg-purple-50 p-4 rounded-xl mb-6 border border-purple-100 flex gap-3">
                    <Microscope className="w-6 h-6 text-purple-600 shrink-0" />
                    <p className="text-sm text-purple-900"><strong>Biyoinformatik Veri Analizi:</strong> Kendi ürettiğiniz veya dışarıdan aldığınız ham omik verilerinin (FASTQ, BAM, VCF) işlenmesi, filtrelenmesi ve biyolojik/istatistiksel olarak anlamlı grafiklere (Heatmap, PCA) dönüştürülmesi hizmetidir.</p>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Biyoinformatik Veri Analiz Talebi</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Mevcut Veri Formatı</label>
                      <input type="text" placeholder="FASTQ, BAM, VCF, Count Matrix vb." className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Referans Genom / Organizma</label>
                      <input type="text" placeholder="Örn: hg38, mm10" className="w-full bg-slate-50 border rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div className="md:col-span-2 space-y-2 mt-2">
                      <label className="text-xs font-bold text-slate-500 block">İstenen Analiz Adımları</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Quality Control (QC)</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Alignment (Hizalama)</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Variant Calling (SNP)</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Functional Enrichment</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Filogenetik Analiz</label>
                        <label className="text-sm flex items-center gap-1"><input type="checkbox" /> Alpha/Beta Diversity</label>
                      </div>
                    </div>
                    <div className="md:col-span-2 mt-2">
                      <label className="text-xs font-bold text-slate-500 block mb-1">Beklenen Biyolojik Soru / Hipotez Nedir?</label>
                      <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none min-h-[80px]" placeholder="Örn: Tümör ve sağlıklı doku arasındaki diferansiyel genleri bulmak istiyorum..." />
                    </div>
                  </div>
                </div>
              )}

              {/* Diğer Kalan Hizmetler İçin Jenerik Ama Detaylı Kutu (WGS, Shotgun, İstatistik, IHC vb.) */}
              {selectedServices.some(s => !["Nükleik Asit ve Protein İzolasyonu", "Primer / Prob Tasarımı", "qPCR / RT-qPCR", "RNA-Seq", "Western Blot", "Biyoinformatik Hizmetleri"].includes(s)) && (
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm border-t-4 border-t-slate-800">
                  <div className="bg-slate-100 p-4 rounded-xl mb-6 flex gap-3">
                    <BookOpen className="w-6 h-6 text-slate-700 shrink-0" />
                    <p className="text-sm text-slate-700">Seçtiğiniz diğer spesifik analizler (Dizileme, İstatistik, Biyokimya, Patoloji vb.) için projenizin metodolojik detaylarını ve beklentilerinizi lütfen aşağıda net bir şekilde belirtiniz.</p>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Ek Analizler ve Danışmanlık Detayları</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2 space-y-1">
                      <label className="text-xs font-bold text-slate-500">Seçili Diğer Hizmetlere Ait Özel Gereksinimler (Kullanılacak kit, antikor, cihaz, analiz paketi vb.)</label>
                      <textarea required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none min-h-[120px]" placeholder="Örn (IHC): Parafin bloklar gönderilecek, P53 antikor boyaması ve skorlama isteniyor.
Örn (Biyokimya): LC-MS/MS ile D vitamini profili ölçülecek.
Örn (Danışmanlık): TÜBİTAK 1001 için deney tasarımı desteği talep ediyorum..." />
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ALT BÖLÜM: GÖNDER */}
          <div className="p-8 md:p-12 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-slate-400 text-sm max-w-lg">
              <p className="font-bold text-white mb-1">Teklifiniz Hazırlanıyor</p>
              Talebiniz uzman biyolog ve mühendislerimiz tarafından incelenecek ve projenize en uygun metodoloji ile 24-48 saat içinde resmi fiyat teklifine dönüştürülecektir.
            </div>
            <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-cyan-600 hover:scale-105 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-pink-600/20 text-lg">
              <Send className="w-5 h-5" /> Resmi Teklif İste
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}