"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Loader2 } from "lucide-react";

export default function OdemePage() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sayfa yüklendiğinde arka plandan PayTR token'ı iste
    const fetchToken = async () => {
      try {
        const res = await fetch("/api/paytr", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "musteri@ornek.com",
            amount: 1500, // Örnek Eğitim Fiyatı
            basket: [["CoreGen Genetik Akademisi", "1500.00", 1]], 
          }),
        });
        
        const data = await res.json();
        if (data.token) {
          setToken(data.token);
        }
      } catch (error) {
        console.error("Token alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-800">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-10">
          <ShieldCheck className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Güvenli Ödeme Noktası</h1>
          <p className="text-slate-600">
            Ödemeniz 256-bit SSL ve PayTR güvencesiyle korunmaktadır. Kredi kartı bilgileriniz sistemlerimizde saklanmaz.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-4 min-h-[600px] flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center gap-3 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin text-pink-600" />
              <p className="font-medium text-sm">Güvenli bağlantı kuruluyor...</p>
            </div>
          ) : token ? (
            <iframe
              src={`https://www.paytr.com/odeme/guvenli/${token}`}
              id="paytriframe"
              style={{ width: "100%", height: "600px", border: "none" }}
            />
          ) : (
            <div className="text-red-500 font-bold text-center">
              Ödeme altyapısına bağlanırken bir hata oluştu. Lütfen sayfayı yenileyin.
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}