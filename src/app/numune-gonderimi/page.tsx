import Link from "next/link";
import { 
  CheckCircle2, 
  AlertTriangle, 
  MapPin, 
  Phone, 
  Mail,
  ShieldCheck,
  ClipboardList
} from "lucide-react";

export const metadata = {
  title: "Numune Gönderim Rehberi | CoreGen Biyoteknoloji",
  description: "Moleküler analizleriniz için numunelerinizi laboratuvarımıza güvenle ulaştırma ve hazırlama rehberi.",
};

export default function NumuneGonderimiPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 text-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Üst Başlık */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-pink-600 bg-pink-50 px-3.5 py-1.5 rounded-full mb-4">
            Operasyonel Kılavuz
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Numune Gönderim <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-600">Rehberi</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Doğru analiz kadar, o analize uygun şekilde hazırlanmış numune de başarılı bir çalışma için kritik öneme sahiptir.
          </p>
        </div>

        {/* 1. Giriş Uyarısı */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm mb-12">
          <div className="flex items-start gap-4">
            <div className="bg-pink-100 text-pink-600 p-3 rounded-2xl shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">1. Giriş: Numune Göndermeden Önce Bilmeniz Gerekenler</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                CoreGen Biyoteknoloji olarak, yürüttüğünüz bilimsel araştırmaların ve ticari projelerin başarısının en temel yapı taşının, yüksek kaliteli ve doğru şekilde hazırlanmış numuneler olduğunu biliyoruz. Moleküler biyoloji dünyasında <strong className="text-slate-900">&quot;çöp girerse, çöp çıkar&quot; (garbage in, garbage out)</strong> ilkesi temeldir; yani ne kadar gelişmiş bir analiz teknolojisi kullanırsak kullanalım, elde edilecek sonuçların güvenilirliği tamamen numunenizin kalitesine ve laboratuvarımıza ulaşana kadar korunan bütünlüğüne bağlıdır.
              </p>
              <div className="bg-pink-50/60 border-l-4 border-pink-500 p-4 rounded-r-xl text-pink-900 text-sm font-medium">
                Projenize başlamadan ve numunelerinizi kargolamadan önce CoreGen Biyoteknoloji ekibiyle iletişime geçerek analiz türünüzü ve numune gereksinimlerinizi doğrulamanız, sürecin hatasız işlemesi için en önemli adımdır.
              </div>
            </div>
          </div>
        </div>

        {/* 2. Hangi Bilgileri Vermeliyim? */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <ClipboardList className="w-6 h-6 text-cyan-600" />
            2. Numune Göndermeden Önce Hangi Bilgileri Vermeliyim?
          </h2>
          <p className="text-slate-600 mb-6 text-sm">
            Çalışmanızın en doğru şekilde planlanabilmesi için numunenizle birlikte aşağıdaki bilgileri bizimle paylaşmanızı rica ediyoruz. <span className="text-pink-600 font-medium">Lütfen kişisel sağlık verileri veya proje ile ilgisi olmayan hassas bilgileri paylaşmaktan kaçınınız.</span>
          </p>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <strong className="text-slate-900 block mb-1 font-bold">İletişim Bilgileri</strong>
              <p className="text-slate-600">Ad-Soyad, Kurum/Üniversite/Laboratuvar, E-posta, Telefon.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <strong className="text-slate-900 block mb-1 font-bold">Proje Bilgileri</strong>
              <p className="text-slate-600">Proje adı, kısa araştırma amacı.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <strong className="text-slate-900 block mb-1 font-bold">Analiz Talebi</strong>
              <p className="text-slate-600">İstenen hizmet (Örn: WES, RNA-Seq, RT-qPCR vb.).</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <strong className="text-slate-900 block mb-1 font-bold">Numune Detayları & Geçmişi</strong>
              <p className="text-slate-600">Numune türü, sayısı, kaynağı, saklama koşulu ve dondurma-çözme bilgisi.</p>
            </div>
          </div>
        </div>

        {/* 3 & 4. Numune Türleri ve Gereksinimler Tablosu */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">3 & 4. Kabul Edilebilir Numune Türleri ve Analiz Gereksinimleri</h2>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed">
            CoreGen Biyoteknoloji; DNA, RNA, biyolojik sıvılar/dokular ve metagenomik çevresel örnekler gibi geniş bir yelpazede kabul sağlamaktadır. Aşağıdaki tablo temel gereksinimleri özetlemektedir:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left text-slate-700">
              <thead className="bg-slate-100 text-slate-900 font-extrabold uppercase text-xs">
                <tr>
                  <th className="px-6 py-4 border-b">Analiz / Tür</th>
                  <th className="px-6 py-4 border-b border-l">Temel Gereksinim</th>
                  <th className="px-6 py-4 border-b border-l">Önemli Noktalar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">DNA İzolasyonu</td>
                  <td className="px-6 py-4 border-l">Doku / Kan / Hücre</td>
                  <td className="px-6 py-4 border-l">Taze veya dondurulmuş (mümkünse taze gönderim)</td>
                </tr>
                <tr className="border-b bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">RNA İzolasyonu</td>
                  <td className="px-6 py-4 border-l">Taze Doku</td>
                  <td className="px-6 py-4 border-l">RNA koruyucu solüsyon, RNase kontaminasyonuna dikkat</td>
                </tr>
                <tr className="border-b bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">RT-qPCR</td>
                  <td className="px-6 py-4 border-l">cDNA / RNA</td>
                  <td className="px-6 py-4 border-l">Yüksek saflık, primer tasarımı ile uyum</td>
                </tr>
                <tr className="border-b bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Sanger Dizileme</td>
                  <td className="px-6 py-4 border-l">PCR ürünü / Plazmid</td>
                  <td className="px-6 py-4 border-l">İstenen konsantrasyon, temizlenmiş (clean-up) ürün</td>
                </tr>
                <tr className="border-b bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">WGS / WES</td>
                  <td className="px-6 py-4 border-l">Genomik DNA</td>
                  <td className="px-6 py-4 border-l">Yüksek bütünlük, fragmentasyon derecesi kritik</td>
                </tr>
                <tr className="border-b bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">RNA-Seq</td>
                  <td className="px-6 py-4 border-l">Total RNA</td>
                  <td className="px-6 py-4 border-l">Yüksek RIN değeri, degradasyondan korunmalı</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Metagenomik</td>
                  <td className="px-6 py-4 border-l">Çevresel Örnekler</td>
                  <td className="px-6 py-4 border-l">Stabilizasyon, kontaminasyon riski yüksek</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4 italic">
            * Not: Kesin miktar, konsantrasyon ve tampon koşulları analize göre değişir; bizimle görüşmeden net değerler üzerinde çalışmayınız.
          </p>
        </div>

        {/* 5, 6, 7, 8. Detaylı Gönderim Kuralları */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-pink-600">5. İzole DNA Gönderimi</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>• DNA&apos;nın hangi izolasyon yöntemiyle (kolon, bead, organik) elde edildiğini belirtin.</li>
              <li>• Konsantrasyon ve saflık ölçüm değerlerini (NanoDrop/Qubit) bilgi formuna ekleyin.</li>
              <li>• Freeze-thaw (dondurma-çözme) döngüsü yaşayıp yaşamadığını bildirin.</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-cyan-600">6. RNA Gönderimi</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>• RNA&apos;nızı mutlaka RNase-free tüplerde ve soğuk zincirde muhafaza edin.</li>
              <li>• Taşıma sırasında RNA bütünlüğünü (RIN değeri) koruyacak yöntemleri uygulamadan önce bize danışın.</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-cyan-600">7. Doku ve Hücre Numuneleri</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>• <strong className="text-slate-800">Taze/Dondurulmuş:</strong> Mümkünse -80°C&apos;de saklanmış numuneleri tercih ediyoruz.</li>
              <li>• <strong className="text-slate-800">Fikse Edilmiş:</strong> FFPE (parafin blok) gibi örnekler için özel protokoller gerekir.</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-pink-600">8. Metagenomik Numune Gönderimi</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>• Örnekleri topladıktan hemen sonra stabilize edin.</li>
              <li>• Kontaminasyonu önlemek için tüm toplama ekipmanlarının steril olduğundan emin olun.</li>
              <li>• Çevresel örneklerde negatif kontrol (blank) örneklerinizi ayrıca belirleyin.</li>
            </ul>
          </div>
        </div>

        {/* 9, 10, 11. Etiketleme ve Kontrol Listesi */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">9, 10 & 11. Numune Etiketleme ve Kontrol Listesi</h2>
          
          <div className="space-y-4 text-slate-600 text-sm mb-8">
            <p>• Lütfen her tüpü benzersiz bir numune kodu (Örn: <strong className="text-slate-900 font-mono">CG-001, CG-002</strong>) ile etiketleyin.</p>
            <p>• Tüp üzerine kişisel sağlık bilgisi (hasta adı vb.) <strong className="text-pink-600">yazmayın</strong>.</p>
            <p>• Etiketin tüpe sağlam yapıştığından ve soğukta düşmeyeceğinden emin olun.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 text-base">Gönderim Öncesi Kontrol Listesi (Checklist)</h3>
            <div className="grid gap-3 md:grid-cols-2 text-sm text-slate-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> Analiz türü doğrulandı.</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> Numune etiketleri yapıştırıldı.</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> Kodlar bilgi formuyla eşleşiyor.</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> Miktar/Kalite bilgisi mevcut.</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> Saklama koşulları teyit edildi.</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> Kargo/Gönderim yöntemi CoreGen ile netleştirildi.</div>
            </div>
          </div>
        </div>

        {/* 12, 13, 14, 15. Süreç ve Sık Yapılan Hatalar */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">12 & 13. Gönderim ve Teslimat Süreci</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-600">
              <li><strong className="text-slate-800">İletişim:</strong> Projenizi bize anlatın.</li>
              <li><strong className="text-slate-800">Onay:</strong> Numune gereksinimlerini doğrulatın.</li>
              <li><strong className="text-slate-800">Etiketleme & Form:</strong> Tüpleri kodlayın, formu doldurun.</li>
              <li><strong className="text-slate-800">Kargo & Teyit:</strong> Numuneniz ulaştığında biz sizi bilgilendireceğiz.</li>
            </ol>
            <p className="text-xs text-slate-500 mt-4">
              * Numuneniz laboratuvarımıza ulaştığında kod eşleşmesi, fiziksel bütünlük ve kalite kontrol (QC) testleri yapılır. Uygunsa süreç başlatılır. Uygun değilse çalışmaya başlamadan önce sizi derhal bilgilendiririz.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm border-l-4 border-l-pink-500">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-pink-600 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> 15. Sık Yapılan Hatalar
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>❌ Etiketsiz numune göndermek.</li>
              <li>❌ Kodların formla eşleşmemesi.</li>
              <li>❌ Saklama koşullarını ve geçmişini gizlemek.</li>
              <li>❌ Yetersiz miktarda DNA/RNA göndermek.</li>
              <li>❌ Kargo süresince soğuk zinciri korumamak.</li>
              <li>❌ İletişim kurmadan doğrudan kargo yapmak.</li>
            </ul>
          </div>
        </div>

        {/* Laboratuvar İletişim / Adres Kutusu (Sadece Tek ve Sorunsuz Proje Değerlendir Butonu) */}
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-pink-600/20 blur-3xl rounded-full" />
          <div className="relative z-10 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-extrabold mb-4">CoreGen Biyoteknoloji Laboratuvarı</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Numunelerinizin kargolanması veya teslimatı öncesinde her türlü teknik destek için ekibimizle iletişime geçebilirsiniz.
              </p>
              <div className="space-y-3 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <span>Çiftlikköy Mah. Mimar Sinan Cad. No:24 Paradise Sitesi A Blok K:1 D:18 Yenişehir, Mersin</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>0552 220 7270</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>info@coregenbiyoteknoloji.com</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center md:items-end">
              <Link 
                href="/proje-degerlendirme" 
                className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all hover:scale-105 shadow-lg shadow-pink-600/30 w-full md:w-auto text-center"
              >
                Projemi Değerlendir & Teklif Al
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}