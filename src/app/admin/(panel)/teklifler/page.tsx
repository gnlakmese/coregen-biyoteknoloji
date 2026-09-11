"use client";

import { useState } from "react";
import { FileText, Users, Share2, Eye, Download, X, CheckCircle2 } from "lucide-react";

// Örnek Gelen Talepler Veriseti (Personel Paylaşımı ve Dahili Notlar Dahil)
const initialRequests = [
  {
    id: "TEK-001",
    date: "28 Ağu 2026",
    clientName: "Doç. Dr. Selim Kaya",
    institution: "Hacettepe Üniversitesi",
    email: "selimkaya@hacettepe.edu.tr",
    phone: "0532 555 4433",
    projectType: "TÜBİTAK 1001",
    services: ["WESTERN BLOT", "RT-PCR"],
    status: "Yeni Talep (Bekliyor)",
    assignedStaff: "Atanmadı",
    internalNote: "TÜBİTAK projesi için acil ön fiyatlandırma yapılacak.",
    technicalAnswers: {
      "Numune Türü": "Protein / Hücre Lizatı",
      "Numune Sayısı": "24 adet",
      "Hedef Protein": "p53, GAPDH",
      "Antikor Durumu": "Müşteri sağlayacak",
      "Jel Tipi": "SDS-PAGE"
    },
    uploadedFiles: [
      { name: "protein_ornek_listesi.xlsx", size: "128 KB", type: "Excel" },
      { name: "protokol_dokumani.pdf", size: "1.2 MB", type: "PDF" }
    ],
    proformaAmount: "14.500 TRY"
  },
  {
    id: "TEK-002",
    date: "27 Ağu 2026",
    clientName: "Uzman Biyolog Ayşe Yılmaz",
    institution: "Biyoteknoloji Enstitüsü",
    email: "ayse.yilmaz@enstitu.edu.tr",
    phone: "0533 444 2211",
    projectType: "BAP Projesi",
    services: ["HÜCRE KÜLTÜRÜ", "KOLORİMETRİK / ELISA"],
    status: "İncelemede",
    assignedStaff: "Gönül Akmeşe",
    internalNote: "Kit maliyetleri hesaplanarak laboratuvar onayına sunuldu.",
    technicalAnswers: {
      "Hücre Hattı": "MCF-7",
      "Test Süresi": "48 Saat",
      "Kit Durumu": "CoreGen sağlayacak",
      "Tekrar Sayısı": "Triplikat (n=3)"
    },
    uploadedFiles: [
      { name: "elisa_parametreleri.pdf", size: "850 KB", type: "PDF" }
    ],
    proformaAmount: "22.000 TRY"
  },
  {
    id: "TEK-003",
    date: "25 Ağu 2026",
    clientName: "Dr. Mehmet Demir",
    institution: "Klinik Araştırmalar Merkezi",
    email: "mehmet.demir@klinik.org",
    phone: "0555 123 4567",
    projectType: "Kurumsal AR-GE",
    services: ["PATOLOJİ / IHC", "ICP-MS / LC-MS"],
    status: "Onaylandı / Projeye Dönüştü",
    assignedStaff: "Tolga Akmeşe",
    internalNote: "Ön ödeme alındı, numune kabul lojistiği başlatıldı.",
    technicalAnswers: {
      "Numune Türü": "Parafin Blok (FFPE)",
      "Numune Sayısı": "50 blok",
      "İstenen Boyama": "H&E ve İmmünohistokimya"
    },
    uploadedFiles: [
      { name: "klinik_numune_manifestosu.xlsx", size: "2.4 MB", type: "Excel" }
    ],
    proformaAmount: "45.000 TRY"
  }
];

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState(initialRequests);
  const [selectedRequest, setSelectedRequest] = useState<any | null>(null);
  const [filterStatus, setFilterStatus] = useState("Tümü");

  const [staffTarget, setStaffTarget] = useState("Gönül Akmeşe");
  const [noteInput, setNoteInput] = useState("");

  const filteredRequests = requests.filter(req => {
    if (filterStatus === "Tümü") return true;
    return req.status.includes(filterStatus);
  });

  const updateStatus = (id: string, newStatus: string) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
    if (selectedRequest && selectedRequest.id === id) {
      setSelectedRequest((prev: any) => ({ ...prev, status: newStatus }));
    }
  };

  const handleShareWithStaff = () => {
    if (!selectedRequest) return;
    setRequests(prev => prev.map(r => r.id === selectedRequest.id ? { 
      ...r, 
      assignedStaff: staffTarget,
      internalNote: noteInput ? noteInput : r.internalNote 
    } : r));
    
    setSelectedRequest((prev: any) => ({ 
      ...prev, 
      assignedStaff: staffTarget,
      internalNote: noteInput ? noteInput : prev.internalNote 
    }));

    alert(`Talep başarıyla ${staffTarget} adlı personele dahili notlarla birlikte paylaştırıldı!`);
  };

  return (
    <div className="space-y-6 text-slate-800">
      {/* Üst Başlık */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <span className="text-[10px] uppercase font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
            CRM & Talep Yönetimi
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">Teklifler ve Proje Talepleri</h1>
          <p className="text-xs text-slate-500 mt-1">Müşterilerden gelen analiz taleplerini inceleyin ve laboratuvar personeline paylaştırın.</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-center">
            <span className="text-[10px] text-slate-400 block font-bold">Toplam Talep</span>
            <span className="text-sm font-extrabold text-slate-900">{requests.length}</span>
          </div>
          <div className="bg-pink-50 border border-pink-100 px-4 py-2 rounded-xl text-center">
            <span className="text-[10px] text-pink-600 block font-bold">Aktif Atama Bekleyen</span>
            <span className="text-sm font-extrabold text-pink-700">{requests.filter(r => r.assignedStaff === "Atanmadı").length}</span>
          </div>
        </div>
      </div>

      {/* Ana Liste ve Tablo Kartı */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <h3 className="font-bold text-sm text-slate-900">Gelen Proje ve Analiz Talepleri</h3>
          
          <div className="flex items-center gap-2">
            {["Tümü", "Yeni Talep", "İncelemede", "Onaylandı"].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filterStatus === st ? "bg-pink-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[11px] uppercase font-bold text-slate-400 border-b border-slate-100">
                <th className="pb-3 px-3">Talep No & Tarih</th>
                <th className="pb-3 px-3">Kurum / Kişi Bilgisi</th>
                <th className="pb-3 px-3">Hizmet / Proje</th>
                <th className="pb-3 px-3">Sorumlu Personel</th>
                <th className="pb-3 px-3">Durum</th>
                <th className="pb-3 px-3 text-right">Aksiyonlar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredRequests.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-3">
                    <span className="font-bold text-pink-600 block">{req.id}</span>
                    <span className="text-[11px] text-slate-400">{req.date}</span>
                  </td>
                  <td className="py-3.5 px-3">
                    <span className="font-bold text-slate-900 block">{req.clientName}</span>
                    <span className="text-[11px] text-slate-500">{req.institution}</span>
                  </td>
                  <td className="py-3.5 px-3">
                    <span className="inline-block bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-bold mb-1">{req.projectType}</span>
                    <div className="flex flex-wrap gap-1">
                      {req.services.map((srv: string, i: number) => (
                        <span key={i} className="text-[10px] text-pink-700 bg-pink-50 px-1.5 py-0.5 rounded font-medium">{srv}</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-3">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold ${
                      req.assignedStaff === "Atanmadı" ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-slate-100 text-slate-800"
                    }`}>
                      <Users className="w-3 h-3 text-pink-600" /> {req.assignedStaff}
                    </span>
                  </td>
                  <td className="py-3.5 px-3">
                    <select
                      value={req.status}
                      onChange={(e) => updateStatus(req.id, e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl px-3 py-1.5 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-600"
                    >
                      <option value="Yeni Talep (Bekliyor)">Yeni Talep (Bekliyor)</option>
                      <option value="İncelemede">İncelemede</option>
                      <option value="Onaylandı / Projeye Dönüştü">Onaylandı / Projeye Dönüştü</option>
                      <option value="İptal Edildi">İptal Edildi</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <button
                      onClick={() => {
                        setSelectedRequest(req);
                        setStaffTarget(req.assignedStaff !== "Atanmadı" ? req.assignedStaff : "Gönül Akmeşe");
                        setNoteInput(req.internalNote || "");
                      }}
                      className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-pink-50 hover:text-pink-600 text-slate-700 font-semibold px-3.5 py-2 rounded-xl transition-colors shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" /> Detaylar & Personel Paylaşımı
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DETAY VE PERSONEL PAYLAŞIM MODALI */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full p-6 lg:p-8 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                  Talep Detay & Personel Görevlendirme Paneli
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 mt-1">{selectedRequest.id} — {selectedRequest.clientName}</h2>
                <p className="text-xs text-slate-500">{selectedRequest.institution} | Proforma Tutarı: <span className="font-bold text-slate-900">{selectedRequest.proformaAmount}</span></p>
              </div>
              <button
                onClick={() => setSelectedRequest(null)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Müşterinin Doldurduğu Teknik Yanıtlar */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Müşterinin Girdiği Teknik Bilgiler</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {Object.entries(selectedRequest.technicalAnswers).map(([key, val]: [string, any], idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-[10px] font-bold text-slate-400 block">{key}</span>
                    <span className="text-xs font-bold text-slate-900">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Müşterinin Yüklediği Dosyalar */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Yüklenen Müşteri Dosyaları</h3>
              <div className="space-y-2">
                {selectedRequest.uploadedFiles.map((file: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-pink-600" />
                      <span className="font-bold text-slate-900">{file.name}</span>
                      <span className="text-[10px] text-slate-400">({file.size})</span>
                    </div>
                    <button 
                      onClick={() => alert(`"${file.name}" indiriliyor...`)}
                      className="inline-flex items-center gap-1 bg-white border border-slate-200 hover:bg-pink-50 hover:text-pink-600 text-slate-700 px-3 py-1.5 rounded-xl font-semibold transition-colors shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" /> İndir
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* PERSONELE PAYLAŞTIRMA VE GÖREVLENDİRME ALANI */}
            <div className="bg-pink-50/60 border border-pink-100 rounded-2xl p-5 space-y-4">
              <h3 className="text-xs font-bold text-pink-900 uppercase tracking-wider flex items-center gap-2">
                <Share2 className="w-4 h-4 text-pink-600" /> Kurum İçi Personele Paylaştır / Görevlendir
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Sorumlu Personel Seçimi</label>
                  <select
                    value={staffTarget}
                    onChange={(e) => setStaffTarget(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-600"
                  >
                    <option value="Gönül Akmeşe">Gönül Akmeşe (Kurucu / Baş Araştırmacı)</option>
                    <option value="Tolga Akmeşe">Tolga Akmeşe (İş Geliştirme Uzmanı)</option>
                    <option value="Ar-Ge Lab Ekibi">Ar-Ge Laboratuvar Ekibi</option>
                    <option value="Biyoinformatik Birimi">Biyoinformatik Analiz Birimi</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Personele Özel Dahili Not / Talimat</label>
                  <input
                    type="text"
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    placeholder="Örn: Numune konsantrasyonunu kontrol et."
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  onClick={handleShareWithStaff}
                  className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md shadow-pink-600/20"
                >
                  <CheckCircle2 className="w-4 h-4" /> Görevlendir ve Personele Aktar
                </button>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedRequest(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                Kapat
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}