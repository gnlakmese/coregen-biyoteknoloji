"use client";

import { useState } from "react";
import { Mail, Inbox, Send, Star, Plus, Trash2, Reply, Paperclip, CheckCircle2, User, X, Download } from "lucide-react";

// Örnek CRM Mesaj Veriseti (Dosya Ekleri Dahil)
const initialMessages = [
  {
    id: 1,
    sender: "Tolga Akmeşe",
    role: "İş Geliştirme Uzmanı",
    recipient: "Gönül Akmeşe",
    subject: "TÜBİTAK 1001 Proje Teklifi ve Numune Kabulü",
    snippet: "Hacettepe Üniversitesi'nden gelen TEK-001 numaralı talep için numune ön kabul şartları incelendi...",
    content: "Merhaba Gönül,\n\nHacettepe Üniversitesi'nden gelen TEK-001 numaralı talep için numune ön kabul şartları incelendi. Protein lizatı numunelerinin soğuk zincirde laboratuvara ulaştığı doğrulandı. Ekteki protokole göz atabilir misin?\n\nİyi çalışmalar,\nTolga Akmeşe",
    attachments: [
      { name: "numune_kabul_protokolu.pdf", size: "1.4 MB" }
    ],
    date: "Bugün, 16:40",
    read: false,
    starred: true,
    folder: "inbox"
  },
  {
    id: 2,
    sender: "Ar-Ge Laboratuvar Ekibi",
    role: "Laboratuvar Operasyon",
    recipient: "Gönül Akmeşe",
    subject: "HPLC Cihazı Kalibrasyon Raporu",
    snippet: "Analitik kromatografi ünitesinde bulunan HPLC sistemi için haftalık basınç ve akış hızı testi tamamlandı...",
    content: "Sayın Kurucumuz,\n\nAnalitik kromatografi ünitesinde bulunan HPLC sistemi için haftalık basınç ve akış hızı testi başarıyla tamamlanmıştır. Rapor ektedir.\n\nSaygılarımızla,\nAr-Ge Laboratuvar Ekibi",
    attachments: [
      { name: "hplc_kalibrasyon_2026.pdf", size: "2.1 MB" }
    ],
    date: "Dün, 14:15",
    read: true,
    starred: false,
    folder: "inbox"
  },
  {
    id: 3,
    sender: "Gönül Akmeşe",
    role: "Kurucu / Baş Araştırmacı",
    recipient: "Tolga Akmeşe",
    subject: "BioAcademy Ağustos Kampı Kayıtları",
    snippet: "Ağustos ayında gerçekleştireceğimiz Sıfırdan Biyoinformatik Bootcamp kayıt istatistikleri oldukça iyi...",
    content: "Merhaba Tolga,\n\nAğustos ayında gerçekleştireceğimiz Sıfırdan Biyoinformatik Bootcamp kayıt istatistikleri oldukça iyi gidiyor. Katılımcı rehberini eke ekliyorum.\n\nSevgiler,\nGönül Akmeşe",
    attachments: [
      { name: "biyoinformatik_bootcamp_rehber.pdf", size: "4.5 MB" }
    ],
    date: "28 Ağu",
    read: true,
    starred: true,
    folder: "sent"
  }
];

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [activeFolder, setActiveFolder] = useState<"inbox" | "sent" | "starred">("inbox");
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);
  
  // Yeni Mesaj Modalı State'leri (Dosya Ekleme Destekli)
  const [isNewMessageOpen, setIsNewMessageOpen] = useState(false);
  const [newRecipient, setNewRecipient] = useState("Tolga Akmeşe (İş Geliştirme Uzmanı)");
  const [newSubject, setNewSubject] = useState("");
  const [newContent, setNewContent] = useState("");
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  const filteredMessages = messages.filter(msg => {
    if (activeFolder === "inbox") return msg.folder === "inbox";
    if (activeFolder === "sent") return msg.folder === "sent";
    if (activeFolder === "starred") return msg.starred;
    return true;
  });

  const toggleStar = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setMessages(prev => prev.map(m => m.id === id ? { ...m, starred: !m.starred } : m));
  };

  const deleteMessage = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setMessages(prev => prev.filter(m => m.id !== id));
    if (selectedMessage?.id === id) setSelectedMessage(null);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachedFiles(prev => [...prev, ...Array.from(e.target.files as FileList)]);
    }
  };

  const removeAttachedFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSendNewMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubject.trim() || !newContent.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "Gönül Akmeşe",
      role: "Kurucu / Yönetici",
      recipient: newRecipient,
      subject: newSubject,
      snippet: newContent.substring(0, 80) + "...",
      content: newContent,
      attachments: attachedFiles.map(f => ({ name: f.name, size: `${(f.size / 1024).toFixed(1)} KB` })),
      date: "Şimdi",
      read: true,
      starred: false,
      folder: "sent"
    };

    setMessages(prev => [newMessage, ...prev]);
    setIsNewMessageOpen(false);
    setNewSubject("");
    setNewContent("");
    setAttachedFiles([]);
    alert("Mesaj ve ekli dosyalar başarıyla gönderildi!");
  };

  return (
    <div className="space-y-6 text-slate-800">
      {/* Üst Başlık */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <span className="text-[10px] uppercase font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
            Kurum İçi CRM İletişim
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">Mesajlaşma Sistemi</h1>
          <p className="text-xs text-slate-500 mt-1">Dosya ekleme destekli dahili personel ve departman haberleşme ağı.</p>
        </div>

        <button
          onClick={() => setIsNewMessageOpen(true)}
          className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-3 rounded-xl text-xs transition-all shadow-md shadow-pink-600/20 shrink-0"
        >
          <Plus className="w-4 h-4" /> Yeni Mesaj Oluştur
        </button>
      </div>

      {/* Ana CRM Arayüzü */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Sol Klasör Menüsü */}
        <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-md space-y-2 h-fit">
          <button
            onClick={() => setActiveFolder("inbox")}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
              activeFolder === "inbox" ? "bg-pink-600 text-white shadow-md shadow-pink-600/20" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <Inbox className="w-4 h-4" /> Gelen Kutusu
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeFolder === "inbox" ? "bg-pink-700 text-white" : "bg-slate-100 text-slate-600"}`}>
              {messages.filter(m => m.folder === "inbox").length}
            </span>
          </button>

          <button
            onClick={() => setActiveFolder("sent")}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
              activeFolder === "sent" ? "bg-pink-600 text-white shadow-md shadow-pink-600/20" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <Send className="w-4 h-4" /> Gönderilenler
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeFolder === "sent" ? "bg-pink-700 text-white" : "bg-slate-100 text-slate-600"}`}>
              {messages.filter(m => m.folder === "sent").length}
            </span>
          </button>

          <button
            onClick={() => setActiveFolder("starred")}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
              activeFolder === "starred" ? "bg-pink-600 text-white shadow-md shadow-pink-600/20" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <Star className="w-4 h-4" /> Yıldızlı Mesajlar
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeFolder === "starred" ? "bg-pink-700 text-white" : "bg-slate-100 text-slate-600"}`}>
              {messages.filter(m => m.starred).length}
            </span>
          </button>
        </div>

        {/* Sağ Mesaj Listesi ve İçerik Alanı */}
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-3xl p-6 shadow-md space-y-6">
          {selectedMessage ? (
            /* Mesaj Detay Görünümü */
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="text-xs font-bold text-pink-600 hover:underline mb-2 block"
                  >
                    ← Mesaj Listesine Dön
                  </button>
                  <h2 className="text-xl font-extrabold text-slate-900">{selectedMessage.subject}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => toggleStar(selectedMessage.id, e)}
                    className={`p-2 rounded-xl border transition-colors ${selectedMessage.starred ? "bg-amber-50 border-amber-200 text-amber-500" : "bg-slate-50 border-slate-200 text-slate-400"}`}
                  >
                    <Star className="w-4 h-4 fill-current" />
                  </button>
                  <button
                    onClick={(e) => deleteMessage(selectedMessage.id, e)}
                    className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 font-bold flex items-center justify-center text-sm">
                    {selectedMessage.sender[0]}
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 text-xs block">{selectedMessage.sender} <span className="text-slate-400 font-normal">({selectedMessage.role})</span></span>
                    <span className="text-[11px] text-slate-500">Alıcı: {selectedMessage.recipient}</span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{selectedMessage.date}</span>
              </div>

              <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line p-2">
                {selectedMessage.content}
              </div>

              {/* Mesaj İçindeki Dosya Ekleri */}
              {selectedMessage.attachments && selectedMessage.attachments.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Paperclip className="w-3.5 h-3.5 text-pink-600" /> Ekli Dosyalar ({selectedMessage.attachments.length})
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedMessage.attachments.map((att: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-xs">
                        <span className="font-bold text-slate-800">{att.name} <span className="text-[10px] text-slate-400 font-normal">({att.size})</span></span>
                        <button
                          onClick={() => alert(`"${att.name}" indiriliyor...`)}
                          className="p-1.5 bg-white border border-slate-200 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsNewMessageOpen(true);
                    setNewSubject("Ynt: " + selectedMessage.subject);
                    setNewRecipient(selectedMessage.sender);
                  }}
                  className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-sm"
                >
                  <Reply className="w-3.5 h-3.5" /> Yanıtla
                </button>
              </div>
            </div>
          ) : (
            /* Mesaj Listesi */
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-3">
                {activeFolder === "inbox" && "Gelen Kutusu"}
                {activeFolder === "sent" && "Gönderilen Mesajlar"}
                {activeFolder === "starred" && "Yıldızlı Mesajlar"}
                {" "}({filteredMessages.length})
              </h3>

              <div className="divide-y divide-slate-100">
                {filteredMessages.length === 0 ? (
                  <div className="text-center py-16 space-y-2">
                    <Mail className="w-10 h-10 text-slate-300 mx-auto" />
                    <p className="text-xs text-slate-500">Bu klasörde mesaj bulunmuyor.</p>
                  </div>
                ) : (
                  filteredMessages.map((msg) => (
                    <div
                      key={msg.id}
                      onClick={() => setSelectedMessage(msg)}
                      className={`flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer hover:bg-slate-50 ${
                        !msg.read && activeFolder === "inbox" ? "bg-pink-50/40 font-semibold" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <button onClick={(e) => toggleStar(msg.id, e)} className={`shrink-0 ${msg.starred ? "text-amber-500" : "text-slate-300 hover:text-slate-400"}`}>
                          <Star className="w-4 h-4 fill-current" />
                        </button>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-xs truncate">{activeFolder === "sent" ? `Alıcı: ${msg.recipient}` : msg.sender}</span>
                            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">{msg.role}</span>
                            {msg.attachments && msg.attachments.length > 0 && (
                              <Paperclip className="w-3 h-3 text-pink-600 shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-slate-800 font-semibold truncate pt-0.5">{msg.subject}</p>
                          <p className="text-[11px] text-slate-400 truncate">{msg.snippet}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[11px] text-slate-400">{msg.date}</span>
                        <button onClick={(e) => deleteMessage(msg.id, e)} className="text-slate-300 hover:text-rose-600 p-1">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* YENİ MESAJ OLUŞTURMA MODALI (DOSYA YÜKLEME DESTEKLİ) */}
      {isNewMessageOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 lg:p-8 shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-lg font-extrabold text-slate-900">Yeni Kurum İçi Mesaj</h2>
              <button onClick={() => setIsNewMessageOpen(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-rose-50 hover:text-rose-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSendNewMessage} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Alıcı Personel / Departman</label>
                <select
                  value={newRecipient}
                  onChange={(e) => setNewRecipient(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-600"
                >
                  <option value="Tolga Akmeşe (İş Geliştirme Uzmanı)">Tolga Akmeşe (İş Geliştirme Uzmanı)</option>
                  <option value="Ar-Ge Laboratuvar Ekibi">Ar-Ge Laboratuvar Ekibi</option>
                  <option value="Biyoinformatik Analiz Birimi">Biyoinformatik Analiz Birimi</option>
                  <option value="Tüm Kurum Ekibi">Tüm Kurum Ekibi</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Konu Başlığı</label>
                <input
                  type="text"
                  required
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  placeholder="Mesaj konusu..."
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Mesaj İçeriği</label>
                <textarea
                  rows={4}
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>

              {/* DOSYA YÜKLEME ALANI */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Paperclip className="w-3.5 h-3.5 text-pink-600" /> Dosya Eki (Opsiyonel)
                </label>
                <input
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 cursor-pointer"
                />

                {attachedFiles.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 block">Seçilen Dosyalar:</span>
                    {attachedFiles.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-slate-50 px-3 py-1.5 rounded-xl text-xs border border-slate-200">
                        <span className="font-medium text-slate-800 truncate">{file.name}</span>
                        <button type="button" onClick={() => removeAttachedFile(idx)} className="text-rose-600 hover:text-rose-700 p-0.5">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsNewMessageOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md shadow-pink-600/20"
                >
                  <Send className="w-3.5 h-3.5" /> Mesajı Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}