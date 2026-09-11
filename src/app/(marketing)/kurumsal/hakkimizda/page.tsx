import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, MapPin, HeartHandshake, Award, ArrowRight, Lightbulb, Compass, Briefcase } from "lucide-react";

export const metadata = {
  title: "Hakkımızda & Ekibimiz | CoreGen Biyoteknoloji",
  description: "CoreGen Biyoteknoloji'nin kuruluş hikayesi, misyonu, vizyonu, değerleri ve kurucu kadromuz hakkında bilgiler.",
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-800">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Üst Başlık */}
        <div className="text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-pink-600 bg-pink-50 px-3.5 py-1.5 rounded-full mb-4">
            Kurumsal Bilgiler
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Hakkımızda ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-600">Vizyonumuz</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bilimsel mükemmeliyeti, yenilikçi laboratuvar tekniklerini ve erişilebilir biyoteknolojik çözümleri aynı çatı altında buluşturuyoruz.
          </p>
        </div>

        {/* Hikayemiz */}
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-pink-50 text-pink-600 rounded-xl">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Hikayemiz</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            CoreGen Biyoteknoloji, moleküler biyoloji ve genetik alanındaki güncel gelişmeleri, akademik araştırmacılara ve sektöre en doğru şekilde entegre etmek amacıyla Mersin Yenişehir merkezli olarak kurulmuştur. Bilimsel öğrenme platformumuz CoreGen Genetik Akademi ile birlikte, teorik bilgiyi pratik laboratuvar becerileriyle buluşturan öncü bir ekosistem yaratmaktayız.
          </p>
        </div>

        {/* Misyon & Vizyon */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm">
            <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Misyonumuz</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Biyoteknoloji ve moleküler genetik alanında yüksek kaliteli çözümler sunmak, bilimsel eğitimi herkes için erişilebilir kılmak ve araştırmacılara güvenilir laboratuvar altyapısı sağlamak.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm">
            <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Vizyonumuz</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Bölgesel ve ulusal düzeyde biyoteknolojik Ar-Ge ve eğitim faaliyetlerine yön veren, yenilikçi projelerin ve nitelikli bilim insanlarının buluşma noktası olan lider bir kurum olmak.
            </p>
          </div>
        </div>

        {/* 3'lü Kartlar (Neden CoreGen? Neden Mersin? Değerlerimiz) */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Neden CoreGen?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yüksek kaliteli veri üretimi, titiz kalite kontrol protokolleri ve uçtan uca biyoinformatik destekle projelerinizi güvenle geleceğe taşıyoruz.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Neden Mersin?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Akdeniz bölgesinin dinamik yapısını bilimsel inovasyonla birleştirerek, bölgedeki akademik ve klinik paydaşlara hızlı, yerinde ve kesintisiz hizmet sunuyoruz.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Değerlerimiz</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Şeffaflık, bilimsel dürüstlük, sürekli öğrenme ve veri güvenliği temel ilkelerimiz olup her çalışmamızda önceliğimizdir.
              </p>
            </div>
          </div>
        </div>

        {/* Ekip Kadromuz (Genişletilmiş Beyaz Kutular ve Grimsi/Pembemsi Efekt) */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Yönetim ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-600">Ekibimiz</span>
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            
            {/* 1. Kurucu Kartı (Gönül Akmeşe - Beyaz Zemin) */}
            <div className="bg-white/95 backdrop-blur-xl border border-pink-100/80 text-slate-800 rounded-[2.5rem] p-10 shadow-2xl shadow-pink-500/5 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-pink-500/5 blur-3xl rounded-full pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-center">
                  <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-pink-100 shadow-lg bg-slate-100">
                    <Image 
                      src="/images/kurucu.png" 
                      alt="Gönül Akmeşe - Kurucu" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                    <Award className="w-3.5 h-3.5" /> Kurucu & Yönetici
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Gönül Akmeşe
                  </h3>
                  <span className="text-xs font-semibold text-pink-600 block">Tıbbi Genetik MSc. | Biyoteknoloji Uzmanı </span>
                </div>

                <div className="space-y-3 text-slate-600 text-sm leading-relaxed text-center">
                  <p>
                    Selçuk Üniversitesi Biyoteknoloji Lisans (2021) ve Tıp Fakültesi Tıbbi Genetik Yüksek Lisans (2025) mezunu olan Gönül Akmeşe, moleküler biyoloji, klinik genetik ve biyoinformatik alanlarında uzmanlaşmıştır.
                  </p>
                  <p>
                    Moleküler klonlama, NGS veri analizi, protein saflaştırma ve genom düzenleme teknolojileri üzerine kurduğu teknik altyapıyı; sektöre yön veren <strong className="text-slate-900">CoreGen Biyoteknoloji</strong> ve bilimsel öğrenme platformu <strong className="text-slate-900">CoreGen Genetik Akademi</strong> çatısı altında birleştirerek Mersin&apos;de bilimsel araştırmalara öncülük etmektedir.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-center relative z-10">
                <Link 
                  href="/iletisim" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 hover:opacity-95 text-white px-8 py-3 rounded-2xl font-bold text-xs transition-all shadow-lg shadow-pink-600/20"
                >
                  İletişime Geç <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. İş Geliştirme Uzmanı Kartı (Tolga Akmeşe - Beyaz Zemin) */}
            <div className="bg-white/95 backdrop-blur-xl border border-pink-100/80 text-slate-800 rounded-[2.5rem] p-10 shadow-2xl shadow-pink-500/5 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-pink-500/5 blur-3xl rounded-full pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-center">
                  <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-pink-100 shadow-lg bg-slate-100">
                    <Image 
                      src="/images/iş-geliştirme.jpeg" 
                      alt="Tolga Akmeşe - İş Geliştirme Uzmanı" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                    <Briefcase className="w-3.5 h-3.5" /> İş Geliştirme Uzmanı
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Tolga Akmeşe
                  </h3>
                  <span className="text-xs font-semibold text-pink-600 block">Stratejik Planlama ve Kurumsal İlişkiler</span>
                </div>

                <div className="space-y-3 text-slate-600 text-sm leading-relaxed text-center">
                  <p>
                    CoreGen Biyoteknoloji&apos;nin büyüme stratejilerinde, kurumsal ortaklıklarında ve iş geliştirme süreçlerinde aktif rol alarak yenilikçi projelerin sektörel entegrasyonuna destek vermektedir.
                  </p>
                  <p>
                    Akademik ve endüstriyel iş birliklerinin genişletilmesi, müşteri ilişkileri yönetimi ve ticari operasyonların optimize edilmesi süreçlerinde profesyonel katkı sağlamaktadır.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-center relative z-10">
                <Link 
                  href="/ekip/tolga-akmese/iletisim" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 hover:opacity-95 text-white px-8 py-3 rounded-2xl font-bold text-xs transition-all shadow-lg shadow-pink-600/20"
                >
                  İletişime Geç <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}