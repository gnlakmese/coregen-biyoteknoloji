"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ShoppingCart, MessageCircle, Users, GraduationCap, Calendar, 
  CheckCircle2, FileText, CreditCard, ChevronLeft 
} from "lucide-react";

const egitimDetaylari = {
  "metagenomik": {
    title: "Metagenomik Analizlere Giriş Eğitimi",
    description: "Mikrobiyom dünyasını keşfet, verini anlamlı hale getir. 16S rRNA ve Shotgun metagenomik analiz süreçlerini sıfırdan öğrenin.",
    rawContent: `🧬 Metagenomik Analizlere Giriş Eğitimi

📅 Tarih: 5–6 Eylül 2026
🕐 Saat: 12.00–17.00
💻 Eğitim: Online – Canlı
⏱️ Süre: 10 saat
🎓 Seviye: Başlangıç / Orta
📜 Katılım: Eğitim sonunda katılım sertifikası

Eğitimde neler öğreneceksiniz?

•⁠  ⁠Metagenomik nedir? Temel kavramlar
•⁠  ⁠16S rRNA dizileme ve Shotgun Metagenomik arasındaki farklar
•⁠  ⁠Metagenomik çalışma tasarımı
•⁠  ⁠Numune seçimi, DNA izolasyonu ve kütüphane hazırlama
•⁠  ⁠Sekanslama teknolojileri ve NGS veri yapısı
•⁠  ⁠FASTQ dosyalarının yapısı
•⁠  ⁠Kalite kontrol ve kalite skorları
•⁠  ⁠Adapter ve düşük kaliteli dizilerin temizlenmesi
•⁠  ⁠QIIME 2 ile temel metagenomik analiz
•⁠  ⁠Taksonomik sınıflandırma
•⁠  ⁠Alpha ve Beta çeşitlilik analizleri
•⁠  ⁠Mikrobiyal toplulukların karşılaştırılması
•⁠  ⁠Filogenetik analizlere giriş
•⁠  ⁠Diferansiyel bolluk analizlerine giriş
•⁠  ⁠Shotgun metagenomik verilerinde fonksiyonel analiz mantığı
•⁠  ⁠Metagenomik sonuçların biyolojik olarak yorumlanması
•⁠  ⁠Grafik ve sonuçların okunması
•⁠  ⁠Gerçek veri üzerinden uygulamalı analiz

🎯 Eğitim sonunda

Katılımcıların bir metagenomik projenin numune aşamasından NGS verisine, kalite kontrolünden taksonomik ve çeşitlilik analizlerine kadar temel analiz sürecini anlayabilmesi ve elde edilen sonuçları bilimsel olarak yorumlayabilmesi hedeflenmektedir.

Kimler katılabilir?
Biyoloji, moleküler biyoloji ve genetik, biyoteknoloji, biyomühendislik, tıp, veterinerlik, mikrobiyoloji, genetik ve biyoinformatik alanlarında çalışan/öğrenim görenler ile metagenomik alanına giriş yapmak isteyen herkes katılabilir.`,
    instructorName: "Gönül Akmeşe",
    price: "5.605 ₺",
    features: ["10 Saat (5-6 Eylül)", "Online (Canlı) Eğitim", "Başlangıç / Orta Seviye", "Katılım Sertifikası"],
  },
  "coregen-genetik-akademisi": {
    title: "CoreGen Genetik Akademisi: Sertifikalı Genetik Eğitim Serisi",
    description: "Genetik biliminin 12 farklı alanında uzmanlaşacağınız, uygulamalı ve sertifikalı kapsamlı eğitim serisi.",
    rawContent: `🧬 CoreGen Genetik Akademisi | Sertifikalı Genetik Eğitim Serisi

Genetik biliminin farklı alanlarında kendinizi geliştirmeye hazır mısınız?
CoreGen Biyoteknoloji tarafından hazırlanan CoreGen Genetik Akademisi, genetik alanında bilgi ve yetkinlik kazanmak isteyen öğrenciler, akademisyenler, araştırmacılar ve sağlık profesyonelleri için hazırlanmış kapsamlı, sertifikalı ve uygulama odaklı bir eğitim serisidir.
Her ay düzenlenecek eğitimlerde genetiğin farklı bir alt dalı ele alınacak, katılımcılar teorik bilgilerle birlikte uygulamalı içeriklerle de desteklenecektir.

📅 Eğitim Takvimi
🧬 1. Genetiğe Giriş
📅 26 Eylül 2026 Cumartesi- 12.00 - 15.00
👶 2. Üreme Genetiği
📅 31 Ekim 2026 Cumartesi- 12.00 - 15.00
💊 3. Farmakogenetik
📅 28 Kasım 2026 Cumartesi- 12.00 - 15.00
🧫 4. Sitogenetik (Uygulamalı)
Teorik Eğitim
📅 26 Aralık 2026 Cumartesi- 12.00 - 14.00
Uygulama Eğitimi
📅 27 Aralık 2026 Pazar- 12.00 - 14.00
🧪 5. Moleküler Genetik
📅 30 Ocak 2027 Cumartesi- 12.00 - 15.00
🧠 6. Nörogenetik
📅 27 Şubat 2027 Cumartesi- 12.00 - 15.00
🩺 7. Kanser Genetiği
📅 27 Mart 2027- 12.00 - 15.00
🦠 8. Mikrobiyal Genetik
📅 24 Nisan 2027- 12.00 - 15.00
🌱 9. Bitki Genetiği
📅 29 Mayıs 2027- 12.00 - 15.00
🐄 10. Veteriner Genetiği
📅 26 Haziran 2027- 12.00 - 15.00
🧬 11. Epigenetik
📅 31 Temmuz 2027- 12.00 - 15.00
🩻 12. Klinik Genetik
📅 28 Ağustos 2027- 12.00 - 15.00

🎓 Eğitim Formatı
✔ Online Canlı Eğitim ✔ Teorik eğitimler 3 saat ✔ Uygulamalı eğitimler 2 Saat
✔ Eğitim kayıt altına alınmaktadır ve tüm katılımcılar, 2 ay boyunca erişim sağlayabilir.

📜 Sertifika
Her eğitim sonunda katılımcılara;
✅ CoreGen Biyoteknoloji Onaylı Katılım Sertifikası verilecektir.
🏅 10 veya daha fazla eğitimi tamamlayan katılımcılarımıza ayrıca;
CoreGen Biyoteknoloji Onaylı Genetik Akademisi Uzmanlık Sertifikası düzenlenecektir.

👩‍🔬 Kimler Katılabilir?
- Moleküler Biyoloji ve Genetik, Biyoloji, Biyoteknoloji, Tıp, Eczacılık, Veterşner Fakültesi, Diş Hekimliği Fakültesi, Sağlık Bilimleri Fakültesi öğrencileri ve mezunları
- Akademisyenler
- Araştırmacılar ve
- Genetik alanına ilgi duyan herkes

💰 Eğitim Ücretleri
🔹 1.500 TL
Avantajlı Eğitim Paketleri
✅ 3 Eğitim Paketi: 3.000 TL
✅ 5 Eğitim Paketi: 5.000 TL
✅ 10 veya üzeri eğitim: 10.000 TL
📌 İndirimli paketlerden yararlanabilmek için WhatsApp üzerinden bizimle iletişime geçerek size özel indirim kodunuzu talep etmeniz gerekmektedir.

💳 Ödeme Seçenekleri
✔ Kredi Kartı
✔ Havale / EFT
✔ Kredi kartına 12 taksit imkânı
Kayıt Linki: https://lnkd.in/dzegDtbH 

📞 0552 220 7270 | 0538 071 4635

🧬 CoreGen Genetik Akademisi
Bilimi Öğren • Kendini Geliştir • Yetkinliğini Belgele

* Her ay yeni bir genetik alanını keşfedin, alanında uzmanlaşın ve CoreGen Biyoteknoloji'nin hazırladığı bu kapsamlı eğitim serisiyle kariyerinize değer katın.
🎥 2 ay kayıt erişimi, 📜 şirket onaylı sertifika, 🔬 uygulamalı eğitimler ve 🎓 uzmanlık sertifikası ile genetik yolculuğunuza güçlü bir başlangıç yapın.`,
    instructorName: "Gönül Akmeşe",
    price: "1.500 ₺",
    features: ["Online Canlı Eğitim", "Her modül 3 saat teorik + 2 saat uygulama", "2 Ay kayıt erişimi", "Genetik Akademisi Uzmanlık Sertifikası (10+ Eğitim)"],
  },
  "sitogenetik": {
    title: "Sitogenetik ve Sanal Uygulamalı Karyotipleme Eğitimi",
    description: "Kromozom yapısını öğrenin, gerçek vaka örnekleri üzerinden sanal karyotipleme uygulamaları yaparak becerinizi geliştirin.",
    rawContent: `Sitogenetik ve Sanal Uygulamalı Karyotipleme Eğitimi
Kromozom yapısını ve sitogenetik analiz prensiplerini öğrenin, gerçek vaka örnekleri üzerinden sanal karyotipleme uygulamaları yaparak kromozomları değerlendirme becerinizi geliştirin.
Bu eğitim, sitogenetik ve karyotipleme konusunda temel–orta düzey bilgi edinmek isteyen öğrenciler, araştırmacılar ve biyoloji/genetik alanında çalışanlar için hazırlanmıştır.

Eğitim İçeriği
1. Sitogenetiğe Giriş
Sitogenetik nedir?
Kromozomların yapısı ve organizasyonu
Ökromatin ve heterokromatin
Sentromer, telomer ve kromozom kolları
Kromozomların sınıflandırılması

2. İnsan Kromozomları
22 otozom ve cinsiyet kromozomları
Kromozom grupları
Kromozomların boyut ve bant özellikleri
Metasentrik, submetasentrik ve akrosentrik kromozomlar
Normal erkek ve kadın karyotipi

3. Karyotipleme Prensipleri
Karyotip ve karyogram kavramları
Hücre kültürü ve metafaz mantığı
Kromozom görüntüleme
G-bantlama prensibi
Kromozomların tanımlanmasında kullanılan temel özellikler

4. Sanal Karyotipleme Uygulaması
Sanal karyotipleme platformunun kullanımı
Metafaz görüntülerinin incelenmesi
Kromozomların morfolojik özelliklerine göre eşleştirilmesi
1–22 ve X/Y kromozomlarının düzenlenmesi
Karyogram oluşturma
Sonuçların kontrol edilmesi

5. Kromozomal Anomaliler
Sayısal anomaliler: Monozomi, trizomi, poliploidi
Yapısal anomaliler: Delesyon, duplikasyon, inversiyon, translokasyon

6. Uygulamalı Vaka Analizleri
Normal kadın karyotipi
Normal erkek karyotipi
Trizomi 21
Trizomi 18
Trizomi 13
45,X
47,XXY
Örnek vakalar üzerinden karyotipleme ve yorumlama

7. Karyotip Sonucunun Yazılması
Karyotip gösteriminin temel mantığı
Kromozom sayısının belirtilmesi
Cinsiyet kromozomlarının gösterimi
Sayısal anomalilerin gösterimi
Örnek sonuçların yorumlanması

Eğitim Sonunda
Eğitimi tamamlayan katılımcılar;
- İnsan kromozomlarını temel özellikleriyle tanıyabilecek,
- Kromozomları morfolojik özelliklerine göre ayırt edebilecek,
- Karyotip ve karyogram arasındaki farkı anlayabilecek,
- Sanal ortamda kromozom eşleştirme ve karyotipleme yapabilecek,
- Normal ve anormal karyotipleri karşılaştırabilecek,
- Temel sayısal kromozom anomalilerini tanıyabilecek,
- Karyotip sonuçlarının temel gösterimini okuyup yorumlayabilecektir.
 
Eğitim Formatı
Format: Video Eğitim
Seviye: Başlangıç – Orta
Süre: 4–5 saat
Erişim: 2 ay
Uygulama: Sanal karyotipleme + vaka örnekleri
Belgelendirme: Katılım sertifikası
Eğitim videolarına bilgisayar, tablet veya telefon üzerinden dilediğiniz yerden erişebilirsiniz.
Not: Eğitim araştırma ve eğitim amaçlıdır; klinik sitogenetik tanı eğitimi veya klinik raporlama yetkinliği kazandırmayı amaçlamaz.
 
SINIRLI SÜRE ÖZEL FİYAT
5.493 TL yerine 2.553 TL

Bu fırsattan yararlanmak ve kayıt hakkında bilgi almak için:
WhatsApp: 0552 220 7270
WhatsApp: 0538 071 4635
CoreGen Biyoteknoloji
www.coregenbiyoteknoloji.com
info@coregenbiyoteknoloji.com`,
    instructorName: "Gönül Akmeşe",
    price: "2.553 ₺",
    features: ["Video Eğitim (4-5 Saat)", "Sanal karyotipleme + vaka örnekleri", "2 ay erişim süresi", "Katılım sertifikası"],
  },
  "biyoinformatik-101": {
    title: "Biyoinformatik 101: Temel Biyoinformatik ve Veri Tabanları",
    description: "Biyoinformatik okuryazarlığı ve dijital veri mimarisine sağlam bir giriş yapın. Veritabanları ve algoritmik mantık.",
    rawContent: `Biyoinformatik 101: Temel Biyoinformatik ve Veri Tabanları Eğitimi
1. Modül: Biyoinformatik Okuryazarlığı ve Dijital Veri Mimarisi
2. Modül: Küresel Kütüphaneler (Biyolojik Veritabanları)
3. Modül: Algoritmik Mantık - Hizalamanın Doğası
4. Modül: BLAST ve Heuristik (Sezgisel) Arama
5. Modül: Çoklu Dizi Hizalama (MSA) ve Evrimsel Bakış
6. Modül: Veriden Yoruma`,
    instructorName: "Gönül Akmeşe",
    price: "2.956 ₺",
    features: ["Kapsamlı Video Eğitim", "Biyolojik Veritabanları Pratiği", "Evrimsel Analiz Temelleri", "Sertifikalı"],
  },
  "uygulamali-primer-tasarimi": {
    title: "Uygulamalı Primer Tasarımı Eğitimi",
    description: "PCR ve qPCR çalışmaları için in-silico araçlar kullanarak spesifik ve verimli primer tasarımı eğitimi.",
    rawContent: `Uygulamalı Primer Tasarımı Eğitimi

- Primer Nedir? Neden Gereklidir?
- Primer Tasarımında Teknik Noktalar Nelerdir?
- Primer uzunluğu ve spesifiklik ayarları.
- Primer Tasarlama Araçları ve Kullanımı.
- Sipariş Sürecinde Kritik Kontroller.
- Uygulama Örneği.
- Sertifika Projesi: Hedef gen sekansı tasarımı ve raporlama.

* Sertifika için ödev başarısı en az %70 olmalıdır.`,
    instructorName: "Gönül Akmeşe",
    price: "1.928 ₺",
    features: ["Digital Araç Kullanımı", "Uygulama Örneği", "Sertifika Projesi", "Ömür Boyu Erişim"],
  },
  "biyoinformatik-bootcamp": {
    title: "Sıfırdan Biyoinformatik Bootcamp",
    description: "Biyoinformatiğe sağlam bir başlangıç artık çok daha kolay! Galaxy platformundan IGV'ye, RNA-Seq'ten metagenomik analize kadar temel konular.",
    rawContent: `🧬 Bilgi herkese açık olmalı.

Bilim, yalnızca belirli kişilerin ulaşabildiği bir ayrıcalık olmamalı.

Biz CoreGen Akademi olarak inanıyoruz ki; bir öğrencinin, araştırmacının ya da genç bir bilim insanının biyoinformatiğe başlamak için maddi engellerle karşılaşmaması gerekir.

Bu nedenle sizlere bir Yaz Tatili Hediyesi hazırladık. 🎁

🎓 CoreGen Yaz Akademisi
Sıfırdan Biyoinformatik Bootcamp

📅 29-30 Ağustos 2026
⏰ 2 Gün | Toplam 10 Saat
💻 Canlı Online Eğitim

🟢 Canlı Katılım Tamamen Ücretsiz!

Eğitime katılmak isteyen herkes herhangi bir ücret ödemeden canlı olarak eğitime katılabilecek.

Bootcamp boyunca;

🧬 Biyoinformatiğe giriş
🧬 Galaxy Platformu ile analiz mantığı
🧬 IGV (Integrative Genomics Viewer)
🧬 Klinik veritabanları
🧬 DNA ve RNA veritabanları
🧬 RNA-Seq analizine giriş
🧬 Metagenomik analizine giriş
🧬 Klinik veri analizine giriş
🧬 Omics dünyasına genel bakış

gibi konular üzerinden biyoinformatik dünyasına güçlü bir başlangıç yapacağız.

⭐ CoreGen Premium Katılım Paketi – 990 TL

Premium Katılım Paketi ile;

✅ Katılım Sertifikası
✅ Eğitim kayıtlarına sınırsız erişim
✅ Eğitim materyalleri
✅ Kullanılan kaynaklar ve dosyalar

sizlerle paylaşılacaktır.

🎁 Bir sürprizimiz daha var!

İki gün boyunca canlı eğitime eksiksiz katılan tüm katılımcılarımıza, CoreGen Akademi tarafından düzenlenecek tüm ücretli eğitimlerde geçerli 1.500 TL değerinde indirim kodu hediye edeceğiz.

Çünkü biz, emek veren insanların ödüllendirilmesi gerektiğine inanıyoruz.

Bu bootcamp yalnızca bir eğitim değil;

Biyoinformatiğe ilgi duyan öğrencileri, araştırmacıları ve akademisyenleri aynı çatı altında buluşturacak bir bilim topluluğunun ilk adımı olacak.

Eğer siz de biyoinformatiğe sağlam bir başlangıç yapmak istiyorsanız, aramıza katılın.

📲 Canlı katılım için WhatsApp grubuna dahil oolabilirsiniz Sertifika ve eğitim kaydı avantajlarıyla Premium kayıt için 0552 220 7270’e mesaj gönderebilirsiniz. 

📞 https://chat.whatsapp.com/Ls8nHQ7KAUZH6iFSVNZNXN?mode=gi_t 

📌 Kontenjan sınırlıdır.`,
    instructorName: "Gönül Akmeşe",
    price: "Ücretsiz / 990 ₺",
    features: ["2 Gün / Toplam 10 Saat", "Canlı Online Eğitim", "1 Yıl Kayıt Erişimi (Premium)", "Eğitim Materyalleri"],
  }
};

export default function EgitimDetayPage() {
  const params = useParams();
  const id = params.id as string;
  
  const egitim = egitimDetaylari[id as keyof typeof egitimDetaylari] || egitimDetaylari["metagenomik"];

  const handleAddToCart = () => {
    alert("Eğitim sepete eklendi! PayTR ödeme sayfasına yönlendiriliyor...");
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-800">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        
        <Link href="/egitimler" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-pink-600 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> Eğitimlere Dön
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
              <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-cyan-600 bg-cyan-50 px-3 py-1.5 rounded-full mb-4">
                Sertifikalı Eğitim
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                {egitim.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-8 border-b border-slate-100 pb-8">
                <div className="flex items-center gap-2 text-sm text-slate-600 bg-red-50 text-red-600 px-4 py-2 rounded-xl border border-red-100">
                  <Users className="w-4 h-4" />
                  <span className="font-bold">Kontenjan Dolmak Üzere!</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-4 py-2 rounded-xl">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="font-semibold">Sertifikalı Program</span>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Eğitim Detayları</h3>
                <div className="text-slate-700 leading-relaxed text-sm bg-slate-50 p-6 rounded-2xl border border-slate-100 whitespace-pre-wrap font-medium">
                  {egitim.rawContent}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 shrink-0 bg-pink-50 rounded-2xl flex items-center justify-center border-2 border-pink-100">
                <GraduationCap className="w-10 h-10 text-pink-500" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Eğitmen</span>
                <h3 className="text-xl font-bold text-slate-900">{egitim.instructorName}</h3>
                <p className="text-sm font-semibold text-pink-600 mb-4">Tıbbi Genetik Bilim Uzmanı (MSc.) | Biyoteknoloji Uzmanı</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Selçuk Üniversitesi Biyoteknoloji ve Tıbbi Genetik Yüksek Lisans mezunu. Moleküler biyoloji, klinik genetik ve biyoinformatik veri analizi alanlarında uzmanlaşmış CoreGen Biyoteknoloji kurucusu.
                </p>
                <button className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-colors">
                  <FileText className="w-4 h-4" /> Eğitmen CV'sini İncele
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-2xl shadow-slate-200/50 sticky top-32">
              <div className="text-center mb-6">
                <p className="text-sm text-slate-500 font-semibold mb-1">Eğitim Ücreti</p>
                <p className="text-4xl font-extrabold text-slate-900">{egitim.price}</p>
              </div>

              <div className="space-y-3 mb-8">
                {egitim.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <button onClick={handleAddToCart} className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold text-sm transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> Sepete Ekle / Satın Al
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pb-2">
                  <CreditCard className="w-4 h-4" /> 256-bit SSL & PayTR Güvencesiyle
                </div>
                <a href="https://wa.me/905522207270?text=Merhaba,%20eğitimleriniz%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp'tan Bilgi Al
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}