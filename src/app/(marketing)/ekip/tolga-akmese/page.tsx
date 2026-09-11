import Image from "next/image";
import Link from "next/link";
import { Briefcase, Mail, ArrowRight, Target, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Tolga Akmeşe - İş Geliştirme Uzmanı | CoreGen Biyoteknoloji",
};

export default function TolgaAkmeseProfilPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-800">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Profil Başlığı */}
        <div className="bg-white/95 backdrop-blur-xl border border-pink-100/80 rounded-[2.5rem] p-10 shadow-2xl shadow-pink-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-pink-500/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="shrink-0">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-slate-50 shadow-xl">
                <Image 
                  src="/images/iş-geliştirme.jpeg" 
                  alt="Tolga Akmeşe" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                <Briefcase className="w-3.5 h-3.5" /> İş Geliştirme Uzmanı
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900">Tolga Akmeşe</h1>
              <p className="text-lg text-slate-600 font-medium">Stratejik Planlama ve Kurumsal İlişkiler</p>
              
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                CoreGen Biyoteknoloji'nin büyüme stratejilerinde, kurumsal ortaklıklarında ve iş geliştirme süreçlerinde aktif rol alarak yenilikçi projelerin sektörel entegrasyonuna destek vermektedir.
              </p>

              <div className="pt-4 flex justify-center md:justify-start">
                {/* İŞTE BURASI TOLGA'NIN İLETİŞİM FORMUNA (Senin oluşturduğun klasöre) GİDER */}
                <Link 
                  href="/ekip/tolga-akmese/iletisim" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-cyan-600 hover:opacity-95 text-white px-8 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-pink-600/20"
                >
                  <Mail className="w-4 h-4" /> Tolga Akmeşe ile İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Uzmanlık Alanları */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Kurumsal Ortaklıklar</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Akademik ve endüstriyel paydaşlarla uzun vadeli iş birlikleri geliştirerek CoreGen'in hizmet ağını genişletir.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Proje & Teklif Yönetimi</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Gelen araştırma projeleri için ticari operasyonları optimize eder ve özel teklif süreçlerini yönetir.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}