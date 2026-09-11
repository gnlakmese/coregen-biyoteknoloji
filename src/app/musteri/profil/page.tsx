"use client";

import { useEffect, useState } from "react";
import { User, Mail, Phone, Building, Briefcase, BookOpen, FileText, LogOut } from "lucide-react";
import Link from "next/link";

export default function MusteriProfilPage() {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    try {
      const userStr = localStorage.getItem("coregen_user");
      if (userStr) {
        setUser(JSON.parse(userStr));
      }
      const savedQuotes = JSON.parse(localStorage.getItem("coregen_quotes") || "[]");
      setOrders(savedQuotes);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("coregen_user");
    window.location.href = "/admin/giris";
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Üst Profil Kartı */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-pink-100 text-pink-700 font-black text-2xl flex items-center justify-center shadow-inner">
              {user?.name ? user.name.charAt(0).toUpperCase() : "M"}
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                {user?.role || "Müşteri / Araştırmacı"}
              </span>
              <h1 className="text-2xl font-black text-slate-900 mt-1">{user?.name || "Değerli Müşterimiz"}</h1>
              <p className="text-xs text-slate-500">{user?.email || "E-posta belirtilmedi"}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors border border-rose-100"
          >
            <LogOut className="w-4 h-4" /> Güvenli Çıkış
          </button>
        </div>

        {/* Detay Bilgiler ve Modüller */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Sol Kolon: Hesap Bilgileri */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
              <User className="w-4 h-4 text-pink-600" /> Hesap Bilgileri
            </h3>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="truncate">{user?.email || "-"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{user?.phone || "Telefon belirtilmedi"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{user?.institution || "Kurum belirtilmedi"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{user?.department || "Departman belirtilmedi"}</span>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Siparişler, Talepler ve Eğitimler */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Teklif ve Sipariş Talepleri */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-pink-600" /> Teklif ve Hizmet Taleplerim
              </h3>
              
              {orders.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-xs bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  Henüz verilmiş bir teklif talebiniz bulunmuyor. <br />
                  <Link href="/teklif-sepeti" className="text-pink-600 font-bold hover:underline mt-1 inline-block">
                    Hemen Teklif Oluştur →
                  </Link>
                </div>
              ) : (
                <div className="space-y-2">
                  {orders.map((order, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-slate-900 block">{order.title || "Özel Analiz / Hizmet Talebi"}</span>
                        <span className="text-[10px] text-slate-500">Tarih: {order.date || "Bugün"}</span>
                      </div>
                      <span className="bg-pink-100 text-pink-700 px-2.5 py-1 rounded-lg font-bold text-[10px]">
                        Değerlendiriliyor
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Eğitimler */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-pink-600" /> Eğitimlerim ve Sertifikalarım
              </h3>
              <div className="text-center py-8 text-slate-400 text-xs bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                Aktif katıldığınız online eğitim veya bootcamp bulunmuyor. <br />
                <Link href="/egitimler" className="text-pink-600 font-bold hover:underline mt-1 inline-block">
                  Eğitimleri İncele →
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}