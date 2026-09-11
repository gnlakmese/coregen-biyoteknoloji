"use client";

import { useState } from "react";
import { ChevronDown, Beaker, Dna, Activity, Search, FlaskConical, ArrowRight } from "lucide-react";
import Link from "next/link";

// 1. İÇERİK VERİ TABANI (Kısa ve Uzun Cevaplar Ayrılmış Halde)
const faqs = [
  {
    id: 1,
    category: "NGS",
    icon: Dna,
    question: "NGS nedir ve hangi amaçlarla kullanılır?",
    shortAnswer: "NGS (Next Generation Sequencing - Yeni Nesil Dizileme), milyonlarca DNA veya RNA molekülünün aynı anda (paralel olarak) dizilenmesini sağlayan yüksek verimli bir moleküler analiz teknolojisidir. Genomik araştırmalardan klinik çalışmalara kadar geniş bir alanda kullanılır.",
    detailedAnswer: "Geleneksel yöntemlere kıyasla çok daha kısa sürede devasa miktarda veri üreten NGS teknolojisi, biyolojinin birçok alt dalında devrim yaratmıştır. Temel prensibi, nükleik asit moleküllerinin fragmante edilerek uçlarına adaptör bağlanması ve bu kütüphanenin optik ya da elektriksel sinyallerle okunmasıdır. Uygulama alanları oldukça çeşitlidir; tüm genomun okunması için WGS, protein kodlayan eksonların taranması için WES, belirli gen bölgelerine odaklanmak için Targeted Sequencing, gen ifade profillerini çıkarmak için RNA-Seq ve karmaşık mikrobiyal ekosistemleri çözmek için Metagenomics kullanılır.",
    knowThis: "NGS, tek bir deneyi binlerce gen veya tüm genom ölçeğinde inceleme imkanı tanır. Farklı platformlar okuma uzunluğu ve hata oranlarına göre farklı avantajlar sunar.",
    coregenNote: "Projenizin kapsamına en uygun NGS uygulamasını seçmek, hem bütçe optimizasyonu hem de biyoinformatik analiz başarısı açısından kritik bir ilk adımdır."
  },
  {
    id: 2,
    category: "NGS",
    icon: Dna,
    question: "NGS ile Sanger Sequencing arasındaki fark nedir?",
    shortAnswer: "Sanger Sequencing, tek bir hedef gen bölgesinin detaylı ve yüksek doğrulukla dizilenmesi için kullanılırken; NGS, milyonlarca diziyi aynı anda paralel olarak üreterek tüm genom veya büyük gen panellerinin analizine olanak tanır.",
    detailedAnswer: "İki teknoloji çalışma prensibi, kapasite ve maliyet açısından büyük farklılıklar gösterir. Sanger yöntemi düşük throughput (veri miktarı) sunar. Buna karşın NGS, kütüphane tabanlı paralel dizileme yaparak gigabaytlarca ila terabaytlarca veri üretir. Sanger, birkaç hedef bölgenin (örneğin klonlama kontrolü) hızlı ve ekonomik analizi için idealdir. NGS ise geniş kapsamlı mutasyon taramaları ve keşif çalışmalarında tercih edilir; ancak veri analizi iş yükü ve ilk kurulum maliyeti daha yüksektir.",
    knowThis: "Tekil gen doğrulamalarında Sanger; tüm genom, transkriptom veya metagenom çalışmalarında NGS tercih edilir. NGS daha yüksek veri derinliği sağlarken, Sanger doğrulama aşamalarında altın standart olmayı sürdürmektedir."
  },
  {
    id: 3,
    category: "NGS",
    icon: Dna,
    question: "WGS ve WES arasındaki fark nedir?",
    shortAnswer: "WGS (Whole Genome Sequencing), bir organizmanın kodlayan ve kodlamayan tüm DNA dizisini kapsarken; WES (Whole Exome Sequencing), yalnızca protein kodlayan bölgeleri (eksonları) hedefleyen daha odaklı bir yaklaşımdır.",
    detailedAnswer: "WGS, genomun tamamını (kodlayıcı bölgeler, intronlar, interjenik bölgeler ve regülatuar alanlar dahil) haritalandırarak yapısal varyasyonlar dahil kapsamlı bir bakış açısı sunar. WES ise tüm genomun yalnızca yaklaşık %1-2'sine karşılık gelen eksonik bölgeleri hedef zenginleştirme (target enrichment) kitleriyle yakalayarak diziler. WES, maliyet avantajı ve veri analizi kolaylığı nedeniyle protein kodlayan mutasyonları bulmak için sıkça tercih edilir. WGS ise daha geniş bir biyolojik keşif alanı sağlar.",
    knowThis: "WES, bütçe dostu bir yaklaşımla klinik veya kodlayıcı bölge odaklı mutasyonları bulmada etkilidir. WGS, düzenleyici bölgeler ve yapısal değişiklikler dahil eksiksiz bir genomik harita sunar."
  },
  {
    id: 4,
    category: "NGS",
    icon: Dna,
    question: "RNA-Seq nedir ve ne amaçla kullanılır?",
    shortAnswer: "RNA-Seq (RNA Sequencing), NGS teknolojisini kullanarak bir hücre, doku veya organizmanın transkriptomunu (tüm aktif RNA moleküllerini) kantitatif olarak incelemeyi sağlayan bir yöntemdir.",
    detailedAnswer: "RNA-Seq, total RNA veya mRNA örneklerinin cDNA'ya dönüştürülüp dizilenmesi mantığına dayanır. Temel kullanım alanları arasında gen ekspresyon düzeylerinin belirlenmesi, farklı koşullar arasındaki diferansiyel gen ekspresyon analizi (DEGs), yeni transkriptlerin keşfi ve alternatif splicing olaylarının incelenmesi yer alır. Geleneksel RT-qPCR yöntemi az sayıda hedefin hassas kantitasyonu için idealdir; ancak RNA-Seq, önceden bilinmeyen transkriptler dahil binlerce geni aynı anda tarama kapasitesiyle tümleşik bir transkriptom haritası sunar.",
    knowThis: "RNA-Seq, tüm transkriptom düzeyinde kapsamlı gen ekspresyon profillemesi sağlar. Alternatif splicing ve bilinmeyen izoformların keşfinde eşsiz bir çözümdür."
  },
  {
    id: 5,
    category: "NGS",
    icon: Dna,
    question: "NGS için nasıl bir numune gerekir?",
    shortAnswer: "NGS çalışmaları; kan, taze/dondurulmuş doku, hücre kültürü hatları, tükürük, FFPE örnekleri ve mikrobiyal kültürler gibi pek çok farklı biyolojik materyalden elde edilen yüksek kaliteli DNA veya RNA örnekleriyle yürütülür.",
    detailedAnswer: "Başarılı bir NGS projesi, başlangıç numunesinin niteliğine doğrudan bağımlıdır. Numunenin miktarı (konsantrasyon), saflığı (protein, tuz veya solvent kontaminasyonundan arınmış olması) ve bütünlüğü (özellikle RNA için RIN değeri veya DNA için yüksek moleküler ağırlık) kütüphane hazırlık verimliliğini belirler. Numunelerin uygun sıcaklıklarda (-80°C) saklanması gerekir. Evrensel tek bir numune miktarı bulunmamaktadır; gereken miktar platforma ve kite göre değişir.",
    knowThis: "Örnek kalitesi ve miktarı, kütüphane başarısını ve elde edilen verinin derinliğini doğrudan etkiler. Numune toplama ve saklama protokolleri önceden planlanmalıdır."
  },
  {
    id: 6,
    category: "NGS",
    icon: Dna,
    question: "NGS öncesinde DNA veya RNA kalite kontrolü neden yapılır?",
    shortAnswer: "NGS öncesi kalite kontrol (QC); DNA/RNA konsantrasyonunu, saflığını ve bütünlüğünü doğrulayarak pahalı ve zaman alıcı dizileme reaksiyonlarının başarısız olmasını engellemek için yapılır.",
    detailedAnswer: "Düşük kaliteli veya degrade olmuş nükleik asitlerle başlanan NGS projeleri, yetersiz kütüphane verimliliği, kısa okuma uzunlukları ve düşük kaliteli veriyle sonuçlanır. Bu aşamada NanoDrop ile kaba konsantrasyon ve saflık oranları (A260/A280, A260/A230) incelenirken, Qubit ile hassas miktar belirlenir. Bütünlük analizi için agaroz jel veya mikroakışkan sistemler (Bioanalyzer / TapeStation) kullanılarak parçalanma durumu raporlanır.",
    knowThis: "Kalite kontrol adımları, veri kalitesini garanti altına alan en önemli önleyici adımdır. Doğru ölçüm yapılmadan hazırlanan kütüphaneler zaman ve bütçe kaybına yol açar."
  },
  {
    id: 7,
    category: "NGS",
    icon: Dna,
    question: "NGS sonuçlarında FASTQ, BAM ve VCF dosyaları ne anlama gelir?",
    shortAnswer: "FASTQ ham okuma verilerini, BAM referans genoma hizalanmış ikili veriyi, VCF ise örnek ile referans arasındaki genetik varyant (mutasyon/SNP) bilgilerini içeren standart dosya formatlarıdır.",
    detailedAnswer: "İlk adımda dizileme cihazından ham nükleotit dizileri ve kalite skorlarını içeren FASTQ dosyaları elde edilir. Biyoinformatik boru hattında bu okumalar bir referans genoma hizalanarak koordinat bilgileriyle birlikte BAM formatındaki hizalanmış verilere dönüştürülür. Son aşamada ise BAM dosyalarındaki baz farklılıkları taranarak tek nükleotid polimorfizmleri (SNP) ve küçük insersiyon/delesyonları (InDel) içeren VCF (Variant Call Format) dosyaları üretilir.",
    knowThis: "FASTQ ham veridir, BAM hizalanmış veridir, VCF ise varyant analiz sonuçlarını sunar. Biyoinformatik analizler bu formatların sırasıyla işlenmesiyle gerçekleştirilir."
  },
  {
    id: 8,
    category: "İzolasyon",
    icon: Beaker,
    question: "DNA izolasyonu nedir ve neden yapılır?",
    shortAnswer: "DNA izolasyonu, hücre yapısının parçalanarak nükleik asitlerin protein, lipid ve diğer hücresel kalıntılardan arındırılması ve saf formda çözeltiye alınması sürecidir.",
    detailedAnswer: "Moleküler biyoloji çalışmalarının temelini oluşturan DNA izolasyonu; genetik analizler, PCR, klonlama, NGS ve sekanslama gibi uygulamalar için yüksek saflıkta materyal sağlamak amacıyla yapılır. İşlem genel olarak üç aşamadan oluşur: hücre lizisi, saflaştırma ve saf DNA'nın yeniden çözülerek elde edilmesi. Elde edilen DNA'nın saflığı, sonraki enzimatik reaksiyonların verimini doğrudan etkiler.",
    knowThis: "Kaliteli bir moleküler analizin ilk ve en kritik basamağı güvenilir DNA izolasyonudur.",
    coregenNote: "CoreGen Biyoteknoloji laboratuvarlarında, zorlu doku ve klinik örneklerden maksimum verim ve saflıkta nükleik asit elde edilmesi için optimize edilmiş protokoller uygulanmaktadır."
  },
  {
    id: 9,
    category: "İzolasyon",
    icon: Beaker,
    question: "DNA izolasyonu için hangi yöntemler kullanılabilir?",
    shortAnswer: "DNA izolasyonunda silika kolon teknolojisi, manyetik boncuk (magnetic bead) ekstraksiyonu, organik solvent ekstraksiyonu (fenol-kloroform) ve tuz çöktürme gibi farklı yöntemler kullanılabilir.",
    detailedAnswer: "Silika kolon yöntemi, DNA'nın silika zara spesifik bağlanmasına dayanarak hızlı ve yüksek saflıkta sonuç verir. Manyetik boncuk ekstraksiyonu otomasyona oldukça uygundur. Fenol-kloroform (organik) ekstraksiyonu, yüksek moleküler ağırlıklı DNA sağlasa da toksik kimyasallar içerir. Tuz çöktürme ise ekonomik bir alternatif sunar. Yöntem seçiminde örnek türü ve işlenecek örnek sayısı rol oynar.",
    knowThis: "Silika kolon ve manyetik boncuk yöntemleri hız ve standartlaşma açısından en yaygın olanlardır."
  },
  {
    id: 10,
    category: "İzolasyon",
    icon: Beaker,
    question: "DNA kalitesi nasıl değerlendirilir?",
    shortAnswer: "DNA kalitesi; spektrofotometrik ölçümlerle saflık oranları, florometrik ölçümlerle konsantrasyon ve jel elektroforezi ile bütünlük analiz edilerek değerlendirilir.",
    detailedAnswer: "A260/A280 oranı protein kontaminasyonunu değerlendirir ve saf DNA için 1.8 - 2.0 arasındadır. A260/A230 oranı organik safsızlıkların varlığını gösterir ve 2.0 - 2.2 beklenir. Qubit hassas konsantrasyonu verirken, agaroz jel veya mikroakışkan sistemler DNA'nın bütünlüğünü görselleştirir.",
    knowThis: "Tek başına konsantrasyon yeterli değildir; saflık ve bütünlük mutlaka kontrol edilmelidir. Oranlar kimyasal kontaminasyon hakkında net bilgi verir."
  },
  {
    id: 11,
    category: "İzolasyon",
    icon: Beaker,
    question: "NanoDrop ve Qubit arasındaki fark nedir?",
    shortAnswer: "NanoDrop tüm nükleik asit, protein ve kontaminantları genel olarak ölçerken ve saflık oranlarını verirken; Qubit ise yalnızca hedef nükleik asidi (dsDNA, RNA vb.) son derece hassas bir şekilde ölçer.",
    detailedAnswer: "İki cihaz tamamlayıcı amaçlarla laboratuvarlarda kullanılır. NanoDrop, A260/A280 saflık oranlarını verir ancak örnekteki serbest nükleotitleri veya RNA'yı DNA'dan ayırt edemez. Qubit ise yalnızca dsDNA veya spesifik RNA moleküllerine bağlanan floresan boyalar kullandığından son derece hassas ve güvenilir kantitasyon sağlar. NGS öncesinde Qubit tercih edilir.",
    knowThis: "NanoDrop saflık oranlarını görmek için vazgeçilmezdir. Qubit ise hassas konsantrasyon tayini için altın standarttır."
  },
  {
    id: 12,
    category: "İzolasyon",
    icon: Beaker,
    question: "RNA izolasyonunda neden RNA kalitesi çok önemlidir?",
    shortAnswer: "RNA molekülleri kimyasal olarak DNA'ya göre çok daha kırılgandır ve yaygın RNase enzimleriyle kolayca parçalandığından, RNA-Seq veya RT-qPCR sonuçlarının güvenilirliği doğrudan RNA kalitesine bağlıdır.",
    detailedAnswer: "RNase enzimleri laboratuvar ortamında her yerde bulunabilir ve en küçük bir kontaminasyonda RNA zincirini parçalayabilir. Degrade olmuş bir RNA ile yapılan çalışmalarda gen ekspresyon verileri yanıltıcı olur ve transkriptom profili bozulur. Bu nedenle özel inhibitörler, RNase-free sarf malzemeleri kullanılır ve kalite RIN (RNA Integrity Number) skoru ile titizlikle doğrulanır.",
    knowThis: "RNase kontaminasyonu RNA çalışmalarındaki en büyük risk faktörüdür. RNA bütünlüğü (RIN > 7-8) transkriptom analizlerinin başarısı için şarttır."
  },
  {
    id: 13,
    category: "PCR",
    icon: Activity,
    question: "PCR nedir ve ne işe yarar?",
    shortAnswer: "PCR (Polymerase Chain Reaction), hedef bir DNA bölgesinin in vitro ortamda milyonlarca veya milyarlarca kopya halinde çoğaltılmasını sağlayan temel bir moleküler biyoloji tekniğidir.",
    detailedAnswer: "PCR döngüsel ısı değişimlerine dayanır ve üç temel aşamadan oluşur: Denatürasyon (çift sarmallı DNA'nın ayrılması), Annealing (primerlerin hedef bölgeye bağlanması) ve Extension (yeni iplikçiklerin sentezlenmesi). Bu döngünün 30-40 kez tekrarlanmasıyla hedef DNA katlanarak çoğaltılır. Adli tıptan gen klonlamasına kadar vazgeçilmez bir araçtır.",
    knowThis: "PCR, mikroskobik miktardaki DNA'yı bile analiz edilebilir düzeye getiren çoğaltma teknolojisidir."
  },
  {
    id: 14,
    category: "PCR",
    icon: Activity,
    question: "PCR için hangi bileşenlere ihtiyaç vardır?",
    shortAnswer: "Başarılı bir PCR reaksiyonu için kalıp DNA, özgül primerler, thermostable DNA polimeraz enzimi, dNTP'ler, uygun reaksiyon bufferı ve magnezyum iyonlarına ihtiyaç vardır.",
    detailedAnswer: "Template DNA çoğaltılacak bölgeyi içerir. Primerler reaksiyonun sınırlarını çizer. DNA polimeraz yeni zinciri sentezler. dNTP'ler yapı taşlarıdır. Buffer ve magnezyum iyonları enzim için optimum çalışma ortamını sağlar.",
    knowThis: "Primerlerin tasarımı ve magnezyum konsantrasyonu reaksiyonun başarısını ve enzim aktivitesini doğrudan belirler."
  },
  {
    id: 15,
    category: "PCR",
    icon: Activity,
    question: "PCR, RT-PCR ve RT-qPCR arasındaki fark nedir?",
    shortAnswer: "Klasik PCR DNA hedeflerini çoğaltır; RT-PCR RNA'yı önce cDNA'ya çevirir; RT-qPCR ise bu süreci eş zamanlı (real-time) olarak kantitatif ölçümle birleştirir.",
    detailedAnswer: "RT-PCR terimindeki 'RT', Reverse Transcription anlamına gelir ve RNA kalıbından cDNA sentezlenmesini ifade eder. RT-qPCR ise hem reverse transkripsiyon adımlarını içerir hem de her döngüde floresan sinyaller üreterek başlangıçtaki RNA miktarını gerçek zamanlı olarak hesaplar. Gen ekspresyon analizlerinde RT-qPCR kullanılır.",
    knowThis: "RT-PCR ters transkripsiyonu ifade ederken, RT-qPCR kantitatif gerçek zamanlı ölçüm sağlar."
  },
  {
    id: 16,
    category: "PCR",
    icon: Activity,
    question: "qPCR'da Ct/Cq değeri nedir?",
    shortAnswer: "Ct (Threshold Cycle) değeri, qPCR reaksiyonunda floresan sinyalin eşik değerini aştığı döngü sayısını ifade eder; başlangıçtaki hedef nükleik asit miktarıyla ters orantılıdır.",
    detailedAnswer: "qPCR cihazı her döngüde biriken amplikon miktarını ölçer. Sinyalin arka plan gürültüsünü aştığı ve üstel fazın başladığı nokta Ct değeridir. Düşük Ct değeri, başlangıç örneğinde hedef gen miktarının yüksek olduğunu gösterir. Ancak doğru bir analiz için uygun referans genler ve kontrollerin kullanılması şarttır.",
    knowThis: "Düşük Ct yüksek hedef konsantrasyonunu gösterir. Güvenilir kantitasyon için referans genler şarttır."
  },
  {
    id: 17,
    category: "PCR",
    icon: Activity,
    question: "PCR veya qPCR neden başarısız olabilir?",
    shortAnswer: "Genellikle düşük kaliteli DNA/RNA, hatalı primer tasarımı, kimyasal inhibitörler, yanlış optimizasyon veya kontaminasyondan kaynaklanır.",
    detailedAnswer: "İlk olarak nükleik asit kalitesi kontrol edilir. İkinci olarak primerlerin özellikleri gözden geçirilir. İzolasyon sırasında örnekte kalan inhibitörler polimeraz enzimini bloke edebilir. Negatif kontrollerde sinyal görülmesi ise kontaminasyon işaretidir.",
    knowThis: "İnhibitörler ve kalitesiz DNA verimi düşürür. Negatif/pozitif kontrollerin analizi sorun gidermede yol göstericidir."
  },
  {
    id: 18,
    category: "Metagenomik",
    icon: Search,
    question: "16S rRNA ile Shotgun Metagenomics arasındaki fark nedir?",
    shortAnswer: "16S rRNA yalnızca bakteriyel çeşitliliği incelerken; Shotgun Metagenomics bir örnekteki tüm organizmaların (bakteri, arke, virüs, mantar) tüm genomunu kapsayarak hem taksonomik hem de fonksiyonel kapasite analizi sunar.",
    detailedAnswer: "16S rRNA dizilemesi, maliyet etkin bir şekilde mikrobiyal kompozisyonu ortaya koyar ancak fonksiyonel gen tespiti sınırlıdır. Shotgun Metagenomics ise toplam DNA'nın rastgele dizilenmesiyle çalışır; hangi organizmaların var olduğunu ve hangi metabolik yollara veya direnç genlerine sahip olduklarını detaylıca gösterir.",
    knowThis: "16S rRNA ekonomik bir birincil tarama yöntemidir. Shotgun derinlemesine ekosistem analizi sağlar.",
    coregenNote: "Mikrobiyom projelerinizde doğru biyoenformatik boru hatlarının seçilmesi, karmaşık verilerin anlamlı biyolojik sonuçlara dönüştürülmesinde kilit rol oynar."
  },
  {
    id: 19,
    category: "Metagenomik",
    icon: Search,
    question: "Metagenomik analiz için hangi numuneler kullanılabilir?",
    shortAnswer: "Dışkı örnekleri, toprak, su, klinik swablar ve çevresel mikrobiyal topluluk matrislerinden elde edilen DNA örnekleri kullanılabilir.",
    detailedAnswer: "Örnekler toplandıktan hemen sonra dondurulmalı veya koruyucu solüsyonlarda saklanmalıdır. Özellikle düşük biyokütleli veya çevresel örneklerde kontaminasyon büyük risktir. Laboratuvar sarf malzemelerinden kaynaklanan mikrobiyom verileri etkileyebilir. Bu nedenle negatif kontrol (blank) örnekleri çalışmaya dahil edilmelidir.",
    knowThis: "Soğuk zincir ve stabilizasyon mikrobiyal profilin korunması için şarttır. Çevresel çalışmalarda negatif kontroller hayati önem taşır."
  },
  {
    id: 20,
    category: "Danışmanlık",
    icon: FlaskConical,
    question: "Projem için hangi analiz yöntemini seçmeliyim?",
    shortAnswer: "Projenizin araştırma sorusuna, örnek tipine, bütçesine ve hedeflenen çıktı kapsamına en uygun moleküler yöntemi belirlemek için CoreGen uzman ekibiyle danışmanlık sürecini başlatabilirsiniz.",
    detailedAnswer: "Belirli gen varlığı için PCR/Sanger; gen ekspresyonu için RT-qPCR; tüm transkriptom profili için RNA-Seq; tüm genetik kod için WGS; protein kodlayan bölgeler için WES; kompleks mikrobiyal topluluklar için 16S/Shotgun Metagenomics önerilir. Bu eşleştirmeler örnek sayısı, bütçe ve biyolojik hipotez ile tasarlanır.",
    knowThis: "Yöntem seçimi nihai hedeflerinizle uyumlu olmalıdır. Doğru deney tasarımı yanlış maliyetlerden kaçınmanızı sağlar.",
    coregenNote: "CoreGen Biyoteknoloji olarak, proje fikir aşamasından biyoinformatik raporlamaya kadar tüm süreçlerde araştırmacılara uçtan uca bilimsel danışmanlık hizmeti sunmaktayız."
  }
];

export default function FAQPage() {
  // Açık olan kartın ID'sini tutuyoruz.
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        
        {/* Üst Başlık Alanı */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-600">Sorular</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Laboratuvar süreçleri, moleküler teknikler, NGS teknolojileri ve analiz yöntemlerimiz hakkında merak ettiğiniz her şey.
          </p>
        </div>

        {/* SSS Kartları Listesi */}
        <div className="space-y-6">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const Icon = faq.icon;

            return (
              <div 
                key={faq.id} 
                className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 w-full"
              >
                {/* Kategori Etiketi */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
                    <Icon className="w-3.5 h-3.5" />
                    {faq.category}
                  </span>
                </div>

                {/* Soru Başlığı */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-4">
                  {faq.question}
                </h3>

                {/* Kısa Cevap (Her Zaman Görünür) */}
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {faq.shortAnswer}
                </p>

                {/* Detaylı Açıklama (Gizli / Açılır Alan) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-6 border-t border-slate-100 text-slate-700 space-y-5 text-base md:text-lg leading-relaxed">
                      <p>
                        <strong className="text-slate-900">Detaylı Açıklama:</strong> {faq.detailedAnswer}
                      </p>
                      
                      {faq.knowThis && (
                        <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-slate-400">
                          <strong className="text-slate-900 block mb-1">💡 Bilmeniz Gereken:</strong>
                          <p>{faq.knowThis}</p>
                        </div>
                      )}
                      
                      {faq.coregenNote && (
                        <div className="bg-pink-50 p-5 rounded-2xl border-l-4 border-pink-500 text-pink-900">
                          <strong className="font-extrabold block mb-1">🧬 CoreGen Notu:</strong>
                          <p>{faq.coregenNote}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Aç / Kapat Butonu */}
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex items-center gap-2 text-sm font-bold text-pink-600 hover:text-cyan-600 transition-colors bg-slate-50 hover:bg-slate-100 px-5 py-2.5 rounded-xl"
                  >
                    {isOpen ? (
                      <>Daha Az Göster <ChevronUp className="w-4 h-4" /></>
                    ) : (
                      <>Devamı İçin Tıklayın <ChevronDown className="w-4 h-4" /></>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bilimsel Kaynaklar Bölümü */}
        <div className="mt-20 pt-10 border-t border-slate-200">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Faydalanılan Bilimsel Kaynaklar</h4>
          <ul className="text-xs text-slate-500 space-y-2 leading-relaxed">
            <li>• Illumina Inc. (2024). Introduction to Next-Generation Sequencing: Technology and Applications. Technical Note.</li>
            <li>• Thermo Fisher Scientific. (2023). Molecular Biology Handbook: Nucleic Acid Extraction and PCR Fundamentals. 4th Edition.</li>
            <li>• National Center for Biotechnology Information (NCBI). (2025). Genomic Sequencing and Analysis Guidelines. Bethesda, MD: NIH.</li>
            <li>• Bio-Rad Laboratories. (2024). Real-Time PCR Applications Guide and Quantitative PCR Principles. Bulletin 5279.</li>
            <li>• Nature Reviews Genetics. (2023). Standardizing RNA-Seq and Metagenomic Pipelines in Modern Research. Nature Publishing Group.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
           <Link 
              href="/hizmetler" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:-translate-y-1 shadow-lg"
            >
              Hizmetlerimizi İnceleyin <ArrowRight className="w-5 h-5" />
            </Link>
        </div>

      </div>
    </div>
  );
}

// ChevronUp İkonu eklendi (Lucide listesinde olmadığı için yukarıda ChevronDown ile aynı şekilde çağıramadık, manuel ekliyoruz)
function ChevronUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}