"use client";

import { useState, useEffect } from "react";
import { User, Package, FlaskConical, FileText, MessageSquare, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TolgaPanelPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    try {
      const activeUserStr = localStorage.getItem("coregen_user");
      if (activeUserStr) {
        setCurrentUser(JSON.parse(activeUserStr));
      } else {
        // Oturum yoksa varsayılan Tolga bilgisi ata
        const tolgaUser = {
          name: "Tolga Akmeşe",
          email: "tolgaakmese@coregenbiyoteknoloji.com",
          role: "Personel"
        };
        setCurrentUser(tolgaUser);
      }
    } catch (e) {
      console.error("Oturum okuma hatası:", e);
    }
  }, []);

  return (
    <div className="space-y-8 p-6 max-w-6xl mx-auto">
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
          CoreGen Biyoteknoloji - Personel Operasyon Paneli
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-2">
          Hoş Geldiniz, {currentUser?.name || "Tolga Akmeşe"}
        </h1>
        <p className="text-slate-500 text-xs mt-1">
          Bu panel üzerinden müşteri mesajlarını yönetebilir, teklifleri inceleyebilir ve ürün/hizmet kataloglarını görüntüleyebilirsiniz.
        </p>
      </div>

      {/* HIZLI ERİŞİM MODÜLLERİ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Mesajlar Modülü */}
        <Link 
          href="/admin/mesajlar"
          className="bg-white border border-slate-200 hover:border-pink-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Müşteri Mesajları</h3>
          <p className="text-xs text-slate-500">Gelen iletişim formlarını ve destek taleplerini okuyun ve yanıtlayın.</p>
          <div className="flex items-center gap-1 text-xs font-bold text-pink-600 pt-2">
            <span>Mesajlara Git</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Teklifler Modülü */}
        <Link 
          href="/admin/teklifler"
          className="bg-white border border-slate-200 hover:border-pink-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Teklifler ve Talepler</h3>
          <p className="text-xs text-slate-500">İlettiğiniz teklifleri ve müşteri fiyat taleplerini inceleyin, durum güncelleyin.</p>
          <div className="flex items-center gap-1 text-xs font-bold text-purple-600 pt-2">
            <span>Teklifleri Gör</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Hizmetler Modülü */}
        <Link 
          href="/admin/hizmetler"
          className="bg-white border border-slate-200 hover:border-pink-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
            <FlaskConical className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Hizmet Listesi</h3>
          <p className="text-xs text-slate-500">Mevcut biyoteknoloji hizmetlerini ve detaylarını görüntüleyin.</p>
          <div className="flex items-center gap-1 text-xs font-bold text-cyan-600 pt-2">
            <span>Hizmetleri İncele</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Ürünler Modülü */}
        <Link 
          href="/admin/urunler"
          className="bg-white border border-slate-200 hover:border-pink-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <Package className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Ürünler ve Cihazlar</h3>
          <p className="text-xs text-slate-500">Katalog ürünlerini ve laboratuvar cihaz listesini inceleyin.</p>
          <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 pt-2">
            <span>Ürünleri Gör</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Profiller Modülü */}
        <Link 
          href="/admin/profiller"
          className="bg-white border border-slate-200 hover:border-pink-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Kullanıcı Profilleri</h3>
          <p className="text-xs text-slate-500">Sisteme kayıtlı müşteri ve kurum profillerini görüntüleyin.</p>
          <div className="flex items-center gap-1 text-xs font-bold text-blue-600 pt-2">
            <span>Profillere Git</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

      </div>
    </div>
  );
}