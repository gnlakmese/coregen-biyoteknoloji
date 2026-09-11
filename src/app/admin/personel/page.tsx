"use client";

import { useState, useEffect } from "react";
import { Users, UserPlus, Mail, Shield, CheckCircle2, Lock, FileText, ShoppingBag, MessageSquare, Briefcase } from "lucide-react";

export default function AdminPersonelPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [adSoyad, setAdSoyad] = useState("");
  const [soyisim, setSoyisim] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Sayfa yüklendiğinde oturum açan kullanıcıyı ve kayıtlı personelleri localStorage'dan al
  useEffect(() => {
    try {
      const activeUserStr = localStorage.getItem("coregen_user");
      if (activeUserStr) {
        setCurrentUser(JSON.parse(activeUserStr));
      }

      const storedStaff = localStorage.getItem("coregen_staff_list");
      if (storedStaff) {
        setUsers(JSON.parse(storedStaff));
      } else {
        // Varsayılan başlangıç personelleri
        const defaultStaff = [
          {
            id: "1",
            name: "Tolga Akmeşe",
            email: "tolgaakmese@coregenbiyoteknoloji.com",
            role: "STAFF",
            createdAt: new Date().toLocaleDateString()
          }
        ];
        setUsers(defaultStaff);
        localStorage.setItem("coregen_staff_list", JSON.stringify(defaultStaff));
      }
    } catch (e) {
      console.error("Veri yükleme hatası:", e);
    }
  }, []);

  // Personel Ekleme Fonksiyonu
  const handleAddStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adSoyad || !email || !soyisim) return;

    // Belirlediğin Kural: Soyisim.2434 (İlk harf büyük)
    const formattedSoyisim = soyisim.charAt(0).toLocaleUpperCase("tr-TR") + soyisim.slice(1).toLocaleLowerCase("tr-TR");
    const generatedPassword = `${formattedSoyisim}.2434`;

    const newStaffMember = {
      id: Date.now().toString(),
      name: adSoyad,
      email: email,
      role: "STAFF",
      createdAt: new Date().toLocaleDateString()
    };

    const updatedUsers = [newStaffMember, ...users];
    setUsers(updatedUsers);
    localStorage.setItem("coregen_staff_list", JSON.stringify(updatedUsers));

    setSuccessMessage(`Personel başarıyla eklendi! Geçici Şifre: ${generatedPassword}`);
    setAdSoyad("");
    setSoyisim("");
    setEmail("");

    setTimeout(() => setSuccessMessage(""), 6000);
  };

  const isPersonnel = currentUser?.role === "Personel" || currentUser?.email?.includes("tolga");

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
          {isPersonnel ? "Personel Çalışma Paneli" : "Personel ve Yetki Yönetimi"}
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          {isPersonnel 
            ? "CoreGen Biyoteknoloji operasyonel görüntüleme ve yönetim alanı (Salt Okunur / Yetkili Modül)." 
            : "CoreGen Biyoteknoloji bünyesindeki çalışanların hesaplarını yönetin ve yeni personel ekleyin."}
        </p>
      </div>

      {successMessage && (
        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs p-3 rounded-xl font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> {successMessage}
        </div>
      )}

      {/* PERSONEL İÇİN ÖZEL KISITLANMIŞ / YETKİLİ GÖRÜNÜMÜ */}
      {isPersonnel ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-sm">Müşteri Mesajları</h3>
            <p className="text-xs text-gray-400">Gelen iletişim formlarını ve destek taleplerini görüntüle.</p>
            <span className="inline-block text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded font-bold">Aktif Modül</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-sm">Teklifler / Talepler</h3>
            <p className="text-xs text-gray-400">İlettiğin teklifleri ve müşteri fiyat taleplerini incele.</p>
            <span className="inline-block text-[10px] text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded font-bold">Aktif Modül</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-sm">Hizmet Listesi (Salt Okunur)</h3>
            <p className="text-xs text-gray-400">Mevcut biyoteknoloji hizmetlerini listele (Ekleme/Düzenleme kapalı).</p>
            <span className="inline-block text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded font-bold">Görüntüleme Modu</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-sm">Ürün Listesi (Salt Okunur)</h3>
            <p className="text-xs text-gray-400">Katalog ürünlerini incele (Yeni ürün ekleme yetkisi kısıtlıdır).</p>
            <span className="inline-block text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">Görüntüleme Modu</span>
          </div>
        </div>
      ) : (
        /* ADMIN İÇİN TAM YETKİLİ PERSONEL YÖNETİMİ VE EKLEME FORMU */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Sol Taraf: Yeni Personel Ekleme Formu */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 shadow-2xl space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <UserPlus className="w-5 h-5 text-cyan-400" /> Yeni Personel Tanımla
            </h2>
            <p className="text-xs text-gray-400">
              Şifre otomatik olarak <span className="text-pink-400 font-bold">Soyisim.2434</span> kuralına göre oluşturulur.
            </p>

            <form onSubmit={handleAddStaff} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Ad Soyad</label>
                <input
                  type="text"
                  value={adSoyad}
                  onChange={(e) => setAdSoyad(e.target.value)}
                  required
                  placeholder="Örn: Ahmet Yılmaz"
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Soyisim (Şifre Kuralı İçin)</label>
                <input
                  type="text"
                  value={soyisim}
                  onChange={(e) => setSoyisim(e.target.value)}
                  required
                  placeholder="Örn: Yilmaz"
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">CoreGen E-posta Adresi</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="ahmet.yilmaz@coregenbiyoteknoloji.com"
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                Personel Hesabı Oluştur
              </button>
            </form>
          </div>

          {/* Sağ Taraf: Kayıtlı Personel Listesi */}
          <div className="lg:col-span-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 shadow-2xl space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Users className="w-5 h-5 text-pink-400" /> Aktif Hesaplar ({users.length})
            </h2>

            <div className="space-y-3">
              {users.map((user) => (
                <div 
                  key={user.id} 
                  className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-pink-500/30"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{user.name || "İsimsiz Kullanıcı"}</span>
                      <span className="text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-full border bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                        {user.role}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Mail className="w-3.5 h-3.5 text-purple-400" /> {user.email}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Aktif
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}