"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  FlaskConical, Plus, Trash2, Settings, FileText, 
  DollarSign, Sliders, CheckCircle2, Save, ArrowLeft, Layers 
} from "lucide-react";

type CustomQuestion = {
  id: string;
  title: string;
  type: string;
  required: boolean;
  showInProforma: boolean;
  affectsPrice: boolean;
};

export default function AdminServiceCreatePage() {
  const router = useRouter();
  
  // 1. Temel Hizmet Bilgileri State'leri
  const [serviceName, setServiceName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [detailDesc, setDetailDesc] = useState("");
  const [serviceCode, setServiceCode] = useState("");
  const [isActive, setIsActive] = useState(true);

  // 2. Aktif Edilecek Modül / Soru Grupları (Toggle Sistemi)
  const [activeModules, setActiveModules] = useState({
    sampleInfo: true,
    workInfo: true,
    experimentalDesign: false,
    molecularGenetics: false,
    qpcrWork: false,
    proteinWestern: false,
    elisaKit: false,
    sequencing: false,
    rnaWork: false,
    metagenomics: false,
    bioinformatics: false,
    phylogenetics: false,
    pathologyStain: false,
    cellCulture: false,
    transfection: false,
    proliferation: false,
    biochemical: false,
    consulting: false,
    education: false,
    statistics: false,
    reporting: true,
    timing: true,
    pricing: true,
    extraFees: true,
  });

  // 27. Dosya Yükleme Alanları
  const [fileUploadFields, setFileUploadFields] = useState<Array<{ name: string; desc: string; required: boolean; proforma: boolean }>>([
    { name: "Örnek Veri / Dosya", desc: "Analiz edilecek ham veri veya dosya", required: false, proforma: true }
  ]);

  // 28. Dinamik "Yeni Soru Ekle" Sistemi
  const [customQuestions, setCustomQuestions] = useState<CustomQuestion[]>([]);
  const [newQTitle, setNewQTitle] = useState("");
  const [newQType, setNewQType] = useState("text");

  const handleModuleToggle = (key: keyof typeof activeModules) => {
    setActiveModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const addCustomQuestion = () => {
    if (!newQTitle.trim()) return;
    setCustomQuestions(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: newQTitle,
        type: newQType,
        required: false,
        showInProforma: true,
        affectsPrice: false,
      }
    ]);
    setNewQTitle("");
  };

  const removeCustomQuestion = (id: string) => {
    setCustomQuestions(prev => prev.filter(q => q.id !== id));
  };

  const handleSave = (status: "draft" | "active") => {
    // Kaydetme simülasyonu ve yönlendirme
    alert(`Hizmet başarıyla "${status === "active" ? "Aktif" : "Taslak"}" olarak kaydedildi!`);
    router.push("/admin/hizmetler");
    router.router?.refresh();
  };

  return (
    <div className="space-y-8 text-slate-800 pb-16">
      {/* Üst Başlık */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <span className="text-[10px] uppercase font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
            Hizmet Form Oluşturucu
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">Yeni Hizmet ve Teknik Soru Formu Tasarla</h1>
          <p className="text-xs text-slate-500 mt-1">Bu hizmet için müşteriden toplanacak tüm teknik parametreleri ve proforma kurallarını belirleyin.</p>
        </div>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl text-xs transition-colors shrink-0"
        >
          <ArrowLeft className="w-4 h-4" /> Geri Dön
        </button>
      </div>

      {/* 1. HİZMET BİLGİLERİ */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-md space-y-6">
        <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <FlaskConical className="w-4 h-4 text-pink-600" /> 1. Temel Hizmet Bilgileri
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Hizmet Adı *</label>
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder="Örn: Whole Genome Sequencing (WGS)"
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Hizmet Kodu</label>
            <input
              type="text"
              value={serviceCode}
              onChange={(e) => setServiceCode(e.target.value)}
              placeholder="Örn: CG-WGS-01"
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700">Kısa Açıklama</label>
          <input
            type="text"
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
            placeholder="Katalog listelerinde görünecek özet açıklama..."
            className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700">Detaylı Hizmet Açıklaması</label>
          <textarea
            rows={4}
            value={detailDesc}
            onChange={(e) => setDetailDesc(e.target.value)}
            placeholder="Hizmetin kapsamı, metodolojisi ve detayları..."
            className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-bold text-slate-700">Hizmet Aktif / Yayında mı?</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isActive} onChange={() => setIsActive(!isActive)} className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
          </label>
        </div>
      </div>

      {/* 2. HİZMET İÇİN AKTİFLEŞTİRİLECEK TEKNİK MODÜLLER (ÇOK ÖNEMLİ KURAL) */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-md space-y-6">
        <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <Layers className="w-4 h-4 text-pink-600" /> 2. Bu Hizmet İçin Kullanılacak Soru ve Modül Seçimi
        </h2>
        <p className="text-xs text-slate-500">Bu hizmete talep oluştururken müşterinin hangi form bölümlerini doldurmasını istiyorsanız seçin:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {Object.entries({
            sampleInfo: "Numune Bilgileri (Tür, Miktar, Saklama Koşulu)",
            workInfo: "Çalışma Bilgileri (Amaç, Hedef, Gen/Protein)",
            experimentalDesign: "Deney Tasarımı (Gruplar, Tekrarlar, Kontroller)",
            molecularGenetics: "Moleküler / Genetik Çalışmalar (İzolasyon, Primer)",
            qpcrWork: "qPCR / RT-PCR Çalışmaları",
            proteinWestern: "Protein / Western Blot Çalışmaları",
            elisaKit: "ELISA / Kit Tabanlı Çalışmalar",
            sequencing: "Dizileme Çalışmaları (NGS / Sanger)",
            rnaWork: "RNA Tabanlı Çalışmalar (RIN, Ekspresyon)",
            metagenomics: "Metagenomik Çalışmalar (16S / Shotgun)",
            bioinformatics: "Biyoinformatik Analizler",
            phylogenetics: "Filogenetik Çalışmalar",
            pathologyStain: "Patoloji / Boyama Çalışmaları",
            cellCulture: "Hücre Çalışmaları ve Hatları",
            transfection: "Transfeksiyon / Genetik Mühendisliği",
            proliferation: "Proliferasyon / Migrasyon Testleri",
            biochemical: "Biyokimyasal / Analit Testleri",
            consulting: "Danışmanlık / Proje Hizmetleri",
            education: "Eğitim Tipi Hizmetler",
            statistics: "İstatistiksel Analiz Raporlaması",
            reporting: "Raporlama ve Teslimat Tercihleri",
            timing: "Zamanlama ve Teslim Tarihi",
            pricing: "Fiyatlandırma ve Birim Matrisi",
            extraFees: "Ek Ücretler (Soğuk zincir, Acil vb.)"
          }).map(([key, label]) => {
            const isChecked = activeModules[key as keyof typeof activeModules];
            return (
              <label 
                key={key} 
                className={`flex items-center gap-3 p-3 rounded-2xl border text-xs font-semibold cursor-pointer transition-all ${
                  isChecked ? "bg-pink-50/50 border-pink-200 text-slate-900" : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                }`}
              >
                <input 
                  type="checkbox" 
                  checked={isChecked} 
                  onChange={() => handleModuleToggle(key as keyof typeof activeModules)}
                  className="rounded text-pink-600 focus:ring-pink-500 w-4 h-4" 
                />
                <span className="leading-tight">{label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 27. DOSYA YÜKLEME ALANLARI TANIMLAMA */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-md space-y-6">
        <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <FileText className="w-4 h-4 text-pink-600" /> 3. Müşteriden İstenen Dosya Yükleme Alanları
        </h2>
        <p className="text-xs text-slate-500">Müşterinin bu hizmeti alırken yüklemesini istediğiniz özel dosyalar (Örn: FASTA, FASTQ, Protokol PDF'i vb.):</p>

        <div className="space-y-3">
          {fileUploadFields.map((field, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs">
              <span className="font-bold text-slate-900 flex-1">{field.name} — <span className="text-slate-500 font-normal">{field.desc}</span></span>
              <span className="bg-pink-100 text-pink-700 px-2.5 py-1 rounded-md font-bold text-[10px]">Proformaya Aktar</span>
            </div>
          ))}
        </div>
      </div>

      {/* 28. DİNAMİK YENİ SORU EKLEME SİSTEMİ */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-md space-y-6">
        <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <Sliders className="w-4 h-4 text-pink-600" /> 4. Dinamik Özel Soru Ekleme (Özel Parametreler)
        </h2>
        <p className="text-xs text-slate-500">Yukarıdaki standart modüller dışında bu hizmete özel anında yeni soru veya girdi alanı ekleyin:</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            value={newQTitle}
            onChange={(e) => setNewQTitle(e.target.value)}
            placeholder="Soru Başlığı (Örn: Özel Cihaz Tercihiniz)"
            className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600 sm:col-span-2"
          />
          <select
            value={newQType}
            onChange={(e) => setNewQType(e.target.value)}
            className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
          >
            <option value="text">Kısa Metin</option>
            <option value="textarea">Uzun Metin</option>
            <option value="number">Sayısal Değer</option>
            <option value="select">Tek Seçim</option>
            <option value="multiselect">Çoklu Seçim</option>
            <option value="file">Dosya Yükleme</option>
            <option value="boolean">Evet / Hayır</option>
          </select>
        </div>

        <button
          onClick={addCustomQuestion}
          className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md shadow-pink-600/20"
        >
          <Plus className="w-4 h-4" /> Soru Listesine Ekle
        </button>

        {customQuestions.length > 0 && (
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-bold text-slate-700">Eklenen Özel Sorular:</h3>
            <div className="space-y-2">
              {customQuestions.map((q) => (
                <div key={q.id} className="flex items-center justify-between bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs">
                  <div>
                    <span className="font-bold text-slate-900">{q.title}</span>
                    <span className="text-[10px] text-pink-600 bg-pink-50 border border-pink-100 ml-2 px-2 py-0.5 rounded-md font-semibold">{q.type}</span>
                  </div>
                  <button onClick={() => removeCustomQuestion(q.id)} className="text-rose-600 hover:text-rose-700 p-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 24. FİYATLANDIRMA VE PROFORMA KURALLARI */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-md space-y-6">
        <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-pink-600" /> 5. Fiyatlandırma ve Proforma Entegrasyonu
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Fiyatlandırma Birimi</label>
            <select className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900">
              <option>Numune Başına</option>
              <option>Test Başına</option>
              <option>Proje Bazlı (Özel Teklif)</option>
              <option>Saatlik / Günlük</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Birim Fiyat ($ / ₺)</label>
            <input type="number" placeholder="0.00" className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Para Birimi</label>
            <select className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900">
              <option>TRY (₺)</option>
              <option>USD ($)</option>
              <option>EUR (€)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 31. KAYDETME BUTONLARI */}
      <div className="flex flex-wrap items-center justify-end gap-3 pt-4">
        <button
          onClick={() => handleSave("draft")}
          className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
        >
          Taslak Kaydet
        </button>

        <button
          onClick={() => handleSave("active")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs transition-all shadow-md shadow-pink-600/20"
        >
          <Save className="w-4 h-4" /> Hizmeti Kaydet ve Aktifleştir
        </button>
      </div>
    </div>
  );
}