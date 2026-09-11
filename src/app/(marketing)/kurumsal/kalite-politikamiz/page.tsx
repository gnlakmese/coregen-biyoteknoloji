import { ShieldCheck, Target, Lock, FlaskConical, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "Kalite Politikamız | CoreGen Biyoteknoloji",
  description: "CoreGen Biyoteknoloji'nin bilimsel etik, veri güvenliği ve laboratuvar standartları.",
};

export default function KalitePolitikamizPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-800">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        
        {/* Üst Başlık */}
        <div className="text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-600 bg-cyan-50 px-3.5 py-1.5 rounded-full mb-4">
            Standartlarımız
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Kalite <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600">Politikamız</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bilimsel süreçlerde sıfır hata prensibi, uluslararası standartlara uyum ve mutlak veri güvenliği en temel ilkelerimizdir.
          </p>
        </div>

        {/* Ana Kalite Metni */}
        <div className="bg-white/95 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-cyan-50 text-cyan-600 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Kurumsal Taahhüdümüz</h2>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg">
            <p>
              CoreGen Biyoteknoloji olarak; moleküler genetik, biyoinformatik analizler ve Ar-Ge hizmetleri sunarken bilimsel etiği ve güvenilirliği operasyonlarımızın merkezinde tutuyoruz. 
            </p>
            <p>
              Gerek laboratuvar (wet-lab) süreçlerimizde gerekse hesaplamalı (dry-lab) veri analizlerimizde, akademik ve endüstriyel paydaşlarımıza <strong>en yüksek doğruluk oranına sahip</strong>, tekrarlanabilir ve uluslararası standartlarla uyumlu sonuçlar sunmayı taahhüt ederiz.
            </p>
          </div>
        </div>

        {/* 4 Ana İlke Kartları */}
        <div className="grid gap-8 md:grid-cols-2">
          
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
            <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bilimsel Mükemmeliyet</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tüm test, analiz ve eğitim süreçlerimizde güncel literatürü ve kanıta dayalı bilimsel yöntemleri kullanır, laboratuvar protokollerimizde uluslararası kalite standartlarını uygularız.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
            <div className="shrink-0 w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Veri Gizliliği ve Güvenliği</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hizmet sunduğumuz kişi, kurum ve projelere ait genetik verileri, analiz sonuçlarını ve fikri mülkiyet haklarını üst düzey güvenlik protokolleriyle ve gizlilik sözleşmeleriyle (NDA) koruruz.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
            <div className="shrink-0 w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sürekli İyileştirme (KAIZEN)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hizmet kalitemizi sürekli ölçer ve geliştiririz. Geri bildirimleri iş süreçlerimize entegre ederek hem BioAcademy eğitimlerimizde hem de CoreGen Ar-Ge hizmetlerinde daima daha iyisini hedefleriz.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
            <div className="shrink-0 w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Eğitim ve Liyakat</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ekibimizin bilimsel yetkinliğini sürekli güncel tutarız. Uzmanlığın ve liyakatin gücüne inanarak, hem kendi iç süreçlerimizde hem de sağladığımız dış eğitimlerde en yüksek standardı sunarız.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}