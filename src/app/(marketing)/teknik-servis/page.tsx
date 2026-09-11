import { Wrench, Settings, Activity, Laptop, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Teknik Servis | CoreGen Biyoteknoloji",
  description: "Laboratuvar cihazları ve biyoinformatik altyapılar için profesyonel teknik destek ve bakım hizmetleri.",
};

export default function TeknikServisPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-800">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        
        {/* Üst Başlık (Makaleler sayfasındaki gibi renkli) */}
        <div className="text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-600 bg-cyan-50 px-3.5 py-1.5 rounded-full mb-4">
            7/24 Teknik Destek
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Teknik <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Servis</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Laboratuvar süreçlerinizin kesintiye uğramaması için donanım ve yazılım altyapınıza uzman teknik destek sağlıyoruz.
          </p>
        </div>

        {/* Grid Kartlar (SSS Görselindeki Tasarım) */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Kart 1 - Donanım */}
          <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-3 py-1.5 rounded-md">
                  <Settings className="w-3.5 h-3.5" /> Kurulum & Kalibrasyon
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Cihaz Kurulumu</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Yeni alınan laboratuvar cihazlarının (PCR, Santrifüj, Görüntüleme sistemleri vb.) laboratuvar ortamına uygun şekilde kurulması ve uluslararası standartlara göre ilk kalibrasyonlarının yapılması.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50">
              <Link href="/iletisim" className="text-xs font-bold text-pink-500 group-hover:text-pink-600 flex items-center gap-1 transition-colors">
                Destek Talebi Oluştur <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Kart 2 - Yazılım */}
          <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md">
                  <Laptop className="w-3.5 h-3.5" /> Biyoinformatik
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Yazılım Altyapı Desteği</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                NGS veri analizi sunucularının kurulumu, Linux tabanlı analiz pipeline'larının (hatlarının) optimizasyonu ve karşılaşabileceğiniz yazılımsal sorunların uzaktan veya yerinde hızlıca giderilmesi.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50">
              <Link href="/iletisim" className="text-xs font-bold text-pink-500 group-hover:text-pink-600 flex items-center gap-1 transition-colors">
                Destek Talebi Oluştur <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Kart 3 - Arıza */}
          <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1.5 rounded-md">
                  <Activity className="w-3.5 h-3.5" /> Acil Müdahale
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Arıza Tespiti ve Onarım</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Laboratuvar cihazlarında meydana gelen beklenmedik donanımsal arızaların hızlı tespiti ve orijinal yedek parça temini ile garantili onarım hizmeti. Projelerinizin aksamaması önceliğimizdir.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50">
              <Link href="/iletisim" className="text-xs font-bold text-pink-500 group-hover:text-pink-600 flex items-center gap-1 transition-colors">
                Destek Talebi Oluştur <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Kart 4 - Bakım */}
          <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-md">
                  <Wrench className="w-3.5 h-3.5" /> Düzenli Servis
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Periyodik Bakım Anlaşmaları</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Cihazlarınızın ömrünü uzatmak, arızaları önceden engellemek ve analiz sonuçlarının doğruluğunu güvence altına almak için yıllık veya altı aylık düzenli koruyucu bakım paketleri.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50">
              <Link href="/iletisim" className="text-xs font-bold text-pink-500 group-hover:text-pink-600 flex items-center gap-1 transition-colors">
                Destek Talebi Oluştur <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}