import type { ServiceContent, ServiceCategoryOutline } from "@/types/service";

// ================= KATEGORİ ANA SAYFALARI İÇİN MERKEZİ VERİ =================
export const serviceCategoriesData: Record<string, any> = {
  "dizileme-hizmetleri": {
    title: "Dizileme Hizmetleri",
    description: "Sanger dizilemeden Yeni Nesil Dizileme (NGS) uygulamalarına kadar araştırma projeleriniz için kapsamlı genomik ve transkriptomik analiz laboratuvar hizmetleri.",
    overview: "Dizileme hizmetleri; genomik varyasyonların saptanması, gen ekspresyon düzeylerinin profillenmesi ve mikrobiyal toplulukların genetik düzeyde incelenmesi amacıyla kullanılan temel yaklaşımlardır. CoreGen Biyoteknoloji, Sanger ve Yeni Nesil Dizileme (NGS) platformlarını araştırma projelerinizin gereksinimlerine göre entegre ederek, hedeflenen tek bir genden tüm genoma kadar uzanan geniş bir yelpazede hizmet sunar.",
    applicationAreas: [
      { title: "Akademik Araştırmalar", desc: "Tez ve yayın projeleri için güvenilir dizileme verisi üretimi." },
      { title: "Biyomedikal Araştırmalar", desc: "Genetik mekanizmaların ve varyasyonların deneysel tespiti." },
      { title: "Genetik Karakterizasyon", desc: "Organizmaların moleküler seviyede detaylı analizi." },
      { title: "AR-GE Çalışmaları", desc: "Biyoteknolojik ürün geliştirme süreçlerinde moleküler doğrulama." }
    ],
    process: [
      { title: "Proje Değerlendirmesi", desc: "Araştırma amacı ve numune yapısının teknik incelenmesi." },
      { title: "Yöntem Planlaması", desc: "Platform (Sanger, NGS) ve derinlik (coverage) gereksinimlerinin belirlenmesi." },
      { title: "Numune Hazırlığı", desc: "DNA/RNA izolasyonu ve kütüphane hazırlık süreçleri." },
      { title: "Dizileme ve QC", desc: "Sequencing işlemi ve elde edilen ham verinin kalite kontrolü." },
      { title: "Veri Değerlendirme", desc: "Biyoinformatik hizalama ve analiz süreçleri." },
      { title: "Raporlama", desc: "Teknik sonuçların veri formatında (FASTQ, VCF) teslimi." }
    ],
    whyCoreGen: "Çalışmalarımız standart test paketleri üzerinden değil, araştırma hedeflerinize uygun dizileme derinliği, okuma uzunluğu ve biyoinformatik analiz gereksinimleri planlanarak yürütülür. Ham veri kalitesinden nihai raporlamaya kadar bilimsel geçerlilik ön planda tutulur.",
    image: "dizileme-analizleri.jpeg"
  },
  "protein-analizleri": {
    title: "Protein Analizleri",
    description: "Hücre ve dokulardan elde edilen proteinlerin ekspresyonu, miktar tayini ve karakterizasyonuna yönelik deneysel analizler.",
    overview: "Protein analizleri, genetik bilginin işlevsel karşılığı olan proteinlerin hücresel süreçlerdeki rolünü anlamak için vazgeçilmezdir. CoreGen Biyoteknoloji; hedef proteinlerin varlığını, göreceli veya mutlak miktarını ve yapısal özelliklerini araştırmak üzere immünolojik (Western Blot, ELISA) ve spektrofotometrik yöntemleri proje bazlı olarak uygular.",
    applicationAreas: [
      { title: "Moleküler Araştırmalar", desc: "Sinyal yolakları ve hücresel mekanizmaların incelenmesi." },
      { title: "İlaç Araştırmaları", desc: "Bileşiklerin protein ekspresyonu üzerindeki etkilerinin tespiti." },
      { title: "Biyoteknoloji", desc: "Rekombinant protein üretim süreçlerinin doğrulanması." },
      { title: "Deneysel Biyoloji", desc: "Biyomarker adaylarının in vitro modellerde test edilmesi." }
    ],
    process: [
      { title: "Teknik Gereksinimler", desc: "Hedef protein, antikor uyumluluğu ve deney tasarımının kontrolü." },
      { title: "Numune Hazırlığı", desc: "Protein izolasyonu ve konsantrasyon ölçümü." },
      { title: "Laboratuvar Süreci", desc: "Elektroforez, transfer veya immünolojik reaksiyon uygulamaları." },
      { title: "Görüntüleme/Ölçüm", desc: "Densitometrik tarama veya absorbans ölçümleri." },
      { title: "Veri Değerlendirme", desc: "Normalizasyon, standart eğri hesabı ve istatistiksel analiz." },
      { title: "Raporlama", desc: "Görüntülerin ve sayısal verilerin teknik rapor formatında sunulması." }
    ],
    whyCoreGen: "Antikor optimizasyonu, doğru loading control seçimi ve tekrarlanabilirlik ilkesiyle hareket ediyoruz. Bant görüntüleri ve ELISA verileri uluslararası yayın standartlarına uygun, objektif istatistiksel yöntemlerle değerlendirilir.",
    image: "protein-analizleri.jpg"
  },
  "biyoinformatik": {
    title: "Biyoinformatik",
    description: "Yüksek hacimli omik (NGS, RNA-Seq) verilerinin istatistiksel, fonksiyonel ve görsel olarak analiz edilip anlamlandırılması.",
    overview: "Modern biyolojik araştırmaların temelini oluşturan devasa veri setleri, anlamlı biyolojik sonuçlara dönüştürülmek için ileri hesaplamalı biyoloji yaklaşımlarına ihtiyaç duyar. CoreGen Biyoteknoloji, ham FASTQ verilerinden yayın kalitesinde görselleştirilmiş diferansiyel gen ekspresyonu, varyant tespiti ve mikrobiyom profilleme analizlerine kadar uçtan uca biyoinformatik çözümler üretir.",
    applicationAreas: [
      { title: "Transkriptomik", desc: "Hastalık modellerinde diferansiyel gen ekspresyon profillerinin çıkarılması." },
      { title: "Genomik Veri Analizi", desc: "Varyant tespiti, anotasyon ve SNP/Indel analizleri." },
      { title: "Mikrobiyom Analizi", desc: "16S veya Shotgun verileri üzerinden taksonomik ve fonksiyonel profilleme." },
      { title: "Veri Görselleştirme", desc: "Akademik yayınlara uygun PCA, Heatmap ve Volcano Plot üretimi." }
    ],
    process: [
      { title: "Veri Değerlendirme", desc: "Mevcut ham verilerin (FASTQ/BAM/VCF) format ve kalite açısından incelenmesi." },
      { title: "Pipeline Seçimi", desc: "Araştırma hedefine uygun referans genom ve yazılım araçlarının belirlenmesi." },
      { title: "Veri İşleme (QC)", desc: "Trimming, filtreleme ve dizileme hatalarının arındırılması." },
      { title: "Analiz Süreci", desc: "Alignment, sayım matrislerinin oluşturulması ve istatistiksel analiz." },
      { title: "Görselleştirme", desc: "Analiz sonuçlarının grafiksel ve tablo formatında akademik düzene sokulması." },
      { title: "Raporlama", desc: "Kullanılan metodolojinin ve biyolojik bulguların raporlanarak teslimi." }
    ],
    whyCoreGen: "Standart, otomatize araçlar kullanmak yerine projenizin hipotezine özel pipeline'lar oluşturuyoruz. Analiz süreçlerinin şeffaf tutulması ve sonuçların biyolojik olarak yorumlanabilir akademik görsellere dönüştürülmesi önceliğimizdir.",
    image: "biyoinformatik-analizler.jpg"
  },
  "danismanlik-ve-bilimsel-destek": {
    title: "Danışmanlık ve Bilimsel Destek",
    description: "Akademik projelerinizin fikir aşamasından, laboratuvar optimizasyonuna ve yayınlanma sürecine kadar kapsamlı bilimsel mentorluk.",
    overview: "Bilimsel araştırmaların başarısı, doğru laboratuvar teknikleri kadar güçlü bir deney tasarımı ve kusursuz istatistiksel değerlendirmelere dayanır. CoreGen Biyoteknoloji, TÜBİTAK/BAP projelerinizin yazımından yerinde laboratuvar hizmetlerine, verilerinizin istatistiksel analizinden yayın hazırlığına kadar akademik standartlarda profesyonel danışmanlık sağlar.",
    applicationAreas: [
      { title: "Proje Başvuruları", desc: "TÜBİTAK, BAP ve diğer AR-GE fonları için proje kurgusu ve bütçelendirme." },
      { title: "İstatistiksel Analiz", desc: "Araştırma verilerinizin doğru test modelleriyle akademik olarak işlenmesi." },
      { title: "Deney Tasarımı", desc: "Maliyet etkin ve istatistiksel gücü yüksek in vitro/in vivo çalışma planlaması." },
      { title: "Yayın ve Raporlama", desc: "Elde edilen bulguların SCI/SCI-E dergi standartlarına uygun hale getirilmesi." }
    ],
    process: [
      { title: "Ön Değerlendirme", desc: "Araştırma hipotezinin, mevcut verilerin veya proje fikrinin incelenmesi." },
      { title: "İhtiyaç Analizi", desc: "Projenin başarılı olması için gereken deneysel veya istatistiksel adımların tespiti." },
      { title: "Planlama", desc: "Zaman çizelgesi, uygulanacak yöntemler ve veri toplama stratejilerinin oluşturulması." },
      { title: "Uygulama", desc: "Danışmanlık, istatistik analizi veya laboratuvar mentorluğunun sağlanması." },
      { title: "Revizyon", desc: "Elde edilen sonuçların veya taslak raporun araştırmacı ile birlikte değerlendirilmesi." },
      { title: "Raporlama/Teslim", desc: "Nihai proje dosyası, makale taslağı veya analiz raporunun sunulması." }
    ],
    whyCoreGen: "Salt ticari bir bakış açısı yerine, projenin bilimsel etiğine ve akademik geçerliliğine odaklanıyoruz. Her proje, alanında uzman yüksek lisans/doktora dereceli kadromuz tarafından derinlemesine incelenir ve uluslararası literatür standartlarında desteklenir.",
    image: "proje-ve-danismanlik.jpeg"
  },
  "biyokimya-ve-patoloji": {
    title: "Biyokimya ve Patoloji",
    description: "Hücresel redoks durumu, metabolik belirteçler ve doku düzeyinde protein ekspresyonlarının yüksek doğrulukla araştırılması.",
    overview: "Hücresel stresi, metabolik yolları ve patolojik değişimleri moleküler ve hücresel düzeyde anlamak, hastalık mekanizmalarını çözmek için kritik öneme sahiptir. CoreGen Biyoteknoloji, oksidatif stres panellerinden immünohistokimyasal doku analizlerine, spesifik vitamin ve eser element ölçümlerinden ELISA tabanlı hormon profillemeye kadar geniş bir yelpazede araştırma analizleri sunar.",
    applicationAreas: [
      { title: "Oksidatif Stres Araştırmaları", desc: "Serbest radikal hasarının ve antioksidan kapasitenin belirlenmesi." },
      { title: "Doku Analizi", desc: "İmmünohistokimya (IHC) ile spesifik protein lokalizasyonlarının incelenmesi." },
      { title: "Metabolik Profiller", desc: "İlaç veya toksin maruziyeti sonrası hücresel metabolizma değişiklikleri." },
      { title: "Biyomedikal Çalışmalar", desc: "Hayvan veya insan kaynaklı spesifik biyobelirteç ölçümleri." }
    ],
    process: [
      { title: "Teknik Ön Görüşme", desc: "Hedef analit, doku türü ve uygun kitlerin belirlenmesi." },
      { title: "Numune Hazırlığı", desc: "Doku kesiti alma, homojenizasyon veya serum ayırma işlemleri." },
      { title: "Analitik Uygulama", desc: "ELISA, kolorimetrik ölçüm veya spesifik IHC boyama süreçleri." },
      { title: "Kalite Kontrol", desc: "Standart eğrilerin, kontrollerin ve boyanma spesifikliğinin değerlendirilmesi." },
      { title: "Veri ve Görüntü Analizi", desc: "Kantitatif sonuç hesaplama ve mikroskobik görüntülerin nicel değerlendirmesi." },
      { title: "Raporlama", desc: "Konsantrasyon tabloları veya yüksek çözünürlüklü doku görüntülerinin teslimi." }
    ],
    whyCoreGen: "Spektrofotometrik ve histolojik verilerde tekrarlanabilirliğe büyük önem veriyoruz. Doğru numune dilüsyon optimizasyonları ve optimize edilmiş antikor titrasyonları ile araştırmalarınızda hatasız (background'sız) ve net sonuçlar sağlıyoruz.",
    image: "biyoikmya-ve-patoloji.webp"
  },
  "hucre-kulturu-analizleri": {
    title: "Hücre Kültürü Analizleri",
    description: "In vitro koşullarda hücre canlılığı, toksisite, proliferasyon, migrasyon ve genetik modifikasyonların projeye özel modellenmesi.",
    overview: "Canlı hücreleri in vitro koşullarda manipüle etmek ve incelemek, ilaç keşfi ve temel biyoloji çalışmalarının başlangıç noktasıdır. CoreGen Biyoteknoloji, steril Sınıf II biyogüvenlik koşullarında; sitotoksisite testlerinden yara iyileşmesi modellerine, gen ekspresyonu için transfeksiyon işlemlerinden hücre içi protein salınım analizlerine kadar uçtan uca in vitro çözümler sunar.",
    applicationAreas: [
      { title: "İlaç Geliştirme", desc: "Yeni bileşiklerin sitotoksik (IC50) etkilerinin ve biyouyumluluğunun tespiti." },
      { title: "Onkolojik Araştırmalar", desc: "Hücre proliferasyonu ve migrasyon (metastaz) kapasitelerinin ölçümü." },
      { title: "Genetik Mühendisliği", desc: "Gen susturma (siRNA) veya over-ekspresyon plazmid aktarım uygulamaları." },
      { title: "Kök Hücre Çalışmaları", desc: "Hücrelerin karakterizasyonu ve in vitro farklılaşma (differentiation) analizleri." }
    ],
    process: [
      { title: "Proje Kurgusu", desc: "Hücre hattı, maruziyet süresi, doz aralığı ve endpointlerin belirlenmesi." },
      { title: "Hücre Kültivasyonu", desc: "Hücrelerin çözülmesi, çoğaltılması ve uygun plate formatında ekilmesi." },
      { title: "Uygulama", desc: "İlaç/bileşik maruziyeti, scratch (çizik) oluşturma veya transfeksiyon işlemi." },
      { title: "Gözlem ve Ölçüm", desc: "Floresan/kolorimetrik ölçümler, zaman ayarlı mikroskobik görüntüleme." },
      { title: "Veri Analizi", desc: "Hücre canlılık oranlarının, migrasyon hızının veya gen ifadesinin hesaplanması." },
      { title: "Raporlama", desc: "Doz-cevap eğrileri, mikroskopi görüntüleri ve istatistiksel sonuçların teslimi." }
    ],
    whyCoreGen: "Hücre hattı optimizasyonu, doğru doz aralıklarının belirlenmesi ve kontaminasyonsuz steril koşullar in vitro çalışmalarımızın temelini oluşturur. Sadece ham veri sunmakla kalmıyor, ilaç etki mekanizmalarını anlamanıza yönelik kapsamlı grafik ve istatistik destekleri sağlıyoruz.",
    image: "hucre-kulturu-analizi.jpg"
  }
};

// ================= ALT HİZMET DETAYLARI (39 HİZMET EKSİKSİZ) =================
export const services: ServiceContent[] = [
  
  // ================= 1. MOLEKÜLER BİYOLOJİ =================
  {
    slug: "nukleik-asit-protein-izolasyonu",
    category: "Moleküler Biyoloji",
    name: "Nükleik Asit ve Protein İzolasyonu",
    heroDescription: "DNA, RNA ve proteinlerin araştırma ve AR-GE çalışmalarında kullanılmak üzere hazırlanması.",
    description: "DNA, RNA ve protein izolasyonu; biyolojik örneklerde bulunan hedef moleküllerin sonraki deneysel analizlerde (PCR, NGS, Western Blot vb.) kullanılmak üzere yüksek verim ve saflıkta elde edilmesini sağlayan temel laboratuvar uygulamalarıdır. CoreGen; örnek türü, hedef molekül, başlangıç materyali ve planlanan downstream uygulamayı dikkate alarak izolasyon süreçlerini proje bazında optimize eder.",
    importance: "İzolasyon sırasında hedef molekülün yeterli konsantrasyonda ve bütünlükte (degredasyona uğramadan) elde edilmesi, sonraki tüm moleküler analizlerin güvenilirliğini ve tekrarlanabilirliğini doğrudan etkiler.",
    deliverables: [
      "Yüksek saflıkta DNA, RNA veya protein ekstraktı",
      "Spektrofotometrik ve florometrik konsantrasyon değerleri",
      "Saflık oranları (A260/A280 ve A260/A230)",
      "Downstream uygulamalara hazır materyal",
      "Teknik kalite değerlendirme raporu"
    ],
    applicationAreas: ["PCR", "qPCR", "RT-qPCR", "Sanger Dizileme", "Yeni Nesil Dizileme (NGS)", "Gen Ekspresyon Analizleri", "Western Blot", "ELISA", "Moleküler Genetik"],
    scope: [
      "Numune kabul ve kabul kriterleri kontrolü",
      "Örnek türüne uygun lizis ve ekstraksiyon",
      "Nükleik asit / protein saflaştırma adımları",
      "NanoDrop ve Qubit ile miktar tayini",
      "Kalite kontrol ve downstream uygunluk değerlendirmesi",
      "Sonuçların raporlanması ve güvenli teslimi"
    ],
    workflowSteps: [
      "1 Numune ve proje gereksinimlerinin teknik incelenmesi",
      "2 Hedef moleküle uygun izolasyon protokolünün seçilmesi",
      "3 Numune hazırlığı ve homojenizasyon",
      "4 Ekstraksiyon ve saflaştırma uygulaması",
      "5 Konsantrasyon, saflık ve bütünlük kontrolü",
      "6 Downstream kullanım için uygun tampona elüsyon ve teslim"
    ],
    requiredInfo: [
      "Örnek türü (kan, doku, hücre kültürü, bitki, bakteri vb.)",
      "Örnek sayısı ve tahmini hacim/ağırlık",
      "İstenen hedef molekül (DNA, RNA veya Protein)",
      "Numunelerin mevcut saklama koşulları",
      "Planlanan downstream uygulama (NGS, qPCR vb.)",
      "Biyolojik ve teknik tekrar gereksinimleri"
    ],
    qualityControl: [
      "Örnek bütünlük (gel electrophoresis / RIN kontrolü)",
      "NanoDrop absorbans saflık oranları kontrolü",
      "Qubit ile hassas konsantrasyon doğrulama",
      "Inhibitör kontaminasyon kontrolü"
    ],
    whyCoreGen: "İzolasyon işlemlerini standart protokollerle geçiştirmek yerine, projenizin sonraki aşamalarını (örn. NGS kütüphane hazırlığı veya hassas qPCR) göz önünde bulundurarak optimize ediyoruz. Materyalin yalnızca izole edilmesini değil, araştırmanız için kusursuz kalitede olmasını garanti ediyoruz.",
    faqs: [
      { question: "DNA ve RNA izolasyon protokolleri aynı mıdır?", answer: "Hayır. Kimyasal yapıları ve RNase/DNase riskleri farklı olduğu için tamamen farklı optimizasyon ve tampon sistemleri gerektirir." },
      { question: "Hangi örneklerden izolasyon yapabilirsiniz?", answer: "Kan, doku, hücre hattı, bitki yaprağı, toprak ve sıvı biyopsi gibi pek çok farklı materyalden projenize özel izolasyon yapılabilmektedir." },
      { question: "İzole edilen RNA doğrudan PCR'da kullanılabilir mi?", answer: "Hayır. RNA doğrudan DNA PCR reaksiyonunda kalıp olamaz; gen ekspresyonu için öncelikle cDNA sentezi (RT adımı) gereklidir." }
    ]
  },
  {
    slug: "primer-tasarimi",
    category: "Moleküler Biyoloji",
    name: "Primer ve Oligonükleotid Tasarımı ve Sentezi",
    heroDescription: "PCR ve qPCR çalışmalarınız için hedefe yönelik primer, probe ve oligonükleotid çözümleri.",
    description: "Primerler PCR tabanlı uygulamalarda hedef DNA bölgesinin amplifikasyonunu başlatan kısa nükleotid dizileridir. Probe'lar ise özellikle probe tabanlı qPCR uygulamalarında hedef dizinin özgül olarak izlenmesine yardımcı olan işaretli oligonükleotidlerdir. CoreGen; hedef gen veya bölgeye yönelik hassas primer/probe tasarımı ve oligonükleotid sentez süreçlerini yürütür.",
    importance: "Primer ve probe tasarımının hedef bölgeye tam uyumlu olması; yanlış bağlanmaları (non-specific amplification) önlemek, primerdimer oluşumunu engellemek ve reaksiyon verimliliğini maksimize etmek için hayati önem taşır.",
    deliverables: [
      "Özelleştirilmiş PCR/qPCR primer çiftleri",
      "TaqMan ve benzeri probe tasarımları",
      "Oligonükleotid nükleotid sekans raporları",
      "Termodinamik parametre analizleri (Tm, GC içeriği)",
      "Sentezlenmiş ve liyofilize/solüsyonda teslim edilen oligolar"
    ],
    applicationAreas: ["Standart PCR", "Real-Time PCR (qPCR)", "RT-qPCR", "Gen Ekspresyonu", "Genotipleme", "Mutasyon Analizi", "Klonlama"],
    scope: [
      "Hedef gen/bölge sekans analizi (NCBI/Ensembl)",
      "In-silico özgüllük (BLAST) kontrolleri",
      "Termodinamik ve hairpin/dimer optimizasyonu",
      "Probe tasarımı (gerekli durumlarda)",
      "Sentez ve saflaştırma koordinasyonu",
      "Teknik tasarım değerlendirme raporu"
    ],
    workflowSteps: [
      "1 Hedef sekans ve organizma bilgilerinin alınması",
      "2 Referans genom üzerinde amplikon bölgesinin tespiti",
      "3 Biyoinformatik araçlarla primer/probe optimizasyonu",
      "4 Özgüllük (BLAST) ve termodinamik testler",
      "5 Müşteri onayı ve sentez planlaması",
      "6 Kalite kontrol ve ürün teslimi"
    ],
    requiredInfo: [
      "Hedef gen adı veya erişim numarası (Accession Number)",
      "Çalışılacak organizma",
      "Kullanılacak reaksiyon türü (SYBR Green, TaqMan, End-point PCR)",
      "İstenen amplikon boyutu aralığı",
      "Özel modifikasyon talepleri (Fluorophore, Quencher, Fosfat vb.)"
    ],
    qualityControl: [
      "In-silico cross-reactivity (BLAST) kontrolü",
      "Tm (Erime ısısı) ve GC oranı optimizasyonu",
      "Hairpin ve self-dimer risk analizi",
      "Sentez miktar ve saflık doğrulaması"
    ],
    whyCoreGen: "Tasarım süreçlerini yalnızca otomatik program çıktılarıyla bırakmıyor; organizmanın genomik yapısını, olası paralog genleri ve reaksiyon koşullarını göz önünde bulundurarak projeye özel optimize ediyoruz.",
    faqs: [
      { question: "Hazır sekansım varsa doğrudan sentezlenebilir mi?", answer: "Evet, kendi tasarladığınız dizileri ileterek doğrudan yüksek saflıkta sentez hizmeti alabilirsiniz." },
      { question: "qPCR için hangi probe sistemleri destekleniyor?", answer: "TaqMan, FRET ve benzeri yaygın prob kimyaları projeye göre planlanabilmektedir." }
    ]
  },
  {
    slug: "jel-elektroforezi",
    category: "Moleküler Biyoloji",
    name: "Jel Elektroforezi",
    heroDescription: "DNA, RNA ve uygun protein örneklerinin ayrılması ve görüntülenmesine yönelik laboratuvar hizmetleri.",
    description: "Jel elektroforezi, biyomoleküllerin (DNA, RNA, protein) elektrik alan altında gözenekli bir jel matriksi içerisinde büyüklüklerine ve yüklerine göre ayrılmasını sağlayan temel analitik laboratuvar yöntemidir.",
    importance: "PCR amplifikasyon ürünlerinin doğrulanması, izolasyon kalite kontrolü, plazmid doğrulaması ve fragment boyut tayini için hızlı ve güvenilir bir görselleşme sağlar.",
    deliverables: [
      "Agaroz veya poliakrilamid jel görüntüleri (TIFF/JPEG)",
      "DNA/RNA fragment boyutu değerlendirmesi",
      "Bant varlığı/yokluğu ve temizlik analizi raporu",
      "Teknik değerlendirme notları"
    ],
    applicationAreas: ["PCR Ürün Kontrolü", "DNA Fragment Analizi", "Plazmid Doğrulama", "İzolasyon Kalite Kontrolü", "Akademik Araştırmalar"],
    scope: [
      "Agaroz/Poliakrilamid jel hazırlama",
      "Numune yükleme ve DNA marker (ladder) kullanımı",
      "Elektroforez optimizasyonu",
      "Nükleik asit boyama (EtBr veya güvenli alternatifler)",
      "UV/Mavi ışık görüntüleme ve arşivleme",
      "Bant analizi ve raporlama"
    ],
    workflowSteps: [
      "1 Numune ve fragment boyutu bilgilerinin alınması",
      "2 Uygun agaroz/jel konsantrasyonunun belirlenmesi",
      "3 Jelin dökülmesi ve kuyucuk optimizasyonu",
      "4 Numunelerin yüklenmesi ve elektroforez yürütülmesi",
      "5 Görüntüleme ve dokümantasyon",
      "6 Sonuçların teknik raporla teslimi"
    ],
    requiredInfo: [
      "Numune türü (PCR ürünü, plazmid, gDNA vb.)",
      "Numune sayısı ve hacmi",
      "Beklenen fragment boyutu (baz çifti - bp)",
      "Tercih edilen jel konsantrasyonu (varsa)"
    ],
    qualityControl: [
      "Doğru DNA Ladder (Marker) kullanımı",
      "Voltaj ve akım optimizasyon kontrolü",
      "Yüksek çözünürlüklü ve net görüntü kalitesi",
      "Negatif kontrol bant durumu kontrolü"
    ],
    whyCoreGen: "Yalnızca bant fotoğrafı sunmakla kalmıyor; primerdimer, non-spesifik ürün veya degredasyon durumlarını uzman gözüyle yorumlayarak sonraki deneyleriniz için yönlendirici teknik değerlendirme sunuyoruz.",
    faqs: [
      { question: "PCR ürünümü direkt gönderebilir miyim?", answer: "Evet, amplifikasyon sonrasında kontrol amaçlı jel elektroforezi planlanabilir." }
    ]
  },
  {
    slug: "nukleik-asitlerde-miktar-tayini",
    category: "Moleküler Biyoloji",
    name: "Nükleik Asitlerde Miktar Tayini (NanoDrop ve Qubit)",
    heroDescription: "DNA ve RNA örneklerinizin konsantrasyon ve uygun olduğunda saflık göstergeleri açısından değerlendirilmesi.",
    description: "Nükleik asitlerde miktar tayini, DNA veya RNA örneklerinin konsantrasyon ve kalite özelliklerinin belirlenmesi amacıyla gerçekleştirilen temel analizlerden biridir. NanoDrop ile absorbans temelli konsantrasyon ve saflık değerlendirmesi yapılırken, Qubit teknolojisi floresan temelli yöntemle hedef moleküle özgü ve çok daha hassas konsantrasyon ölçümü sağlar. Analiz yaklaşımı, örneğin türüne ve planlanan sonraki uygulamaya göre belirlenir.",
    importance: "PCR, qPCR, dizileme, NGS ve diğer moleküler biyoloji uygulamalarında başlangıç materyalinin uygun konsantrasyon ve kalitede olması, deney başarısını ve maliyet etkinliğini doğrudan etkiler.",
    deliverables: [
      "DNA veya RNA konsantrasyon bilgisi (ng/µL)",
      "Nükleik asit saflık oranları (A260/A280 ve A260/A230)",
      "NanoDrop spektrum grafikleri",
      "Qubit fluorometer ile hedefe özgü hassas ölçüm",
      "Örnek uygunluk ve kalite değerlendirme raporu"
    ],
    applicationAreas: ["PCR ve qPCR Hazırlığı", "NGS Kütüphane Kalite Kontrolü", "Sanger Dizileme", "RNA Çalışmaları", "Gen Ekspresyon Analizleri", "Moleküler Biyoloji Araştırmaları"],
    scope: [
      "Numune kabul ve kayıt işlemleri",
      "NanoDrop 260/280 ve 260/230 absorbans analizi",
      "Qubit fluorometer ile hedefe özgü hassas ölçüm",
      "Saflık ve kontaminasyon değerlendirmesi",
      "Downstream uygulama uygunluk raporlaması"
    ],
    workflowSteps: [
      "1 Numunelerin laboratuvar kabulü ve teknik incelenmesi",
      "2 Örnek özelliklerine göre NanoDrop veya Qubit yönteminin seçilmesi",
      "3 Cihaz kalibrasyon kontrolü ve ölçümün gerçekleştirilmesi",
      "4 Spektrum verilerinin ve saflık oranlarının incelenmesi",
      "5 Sonuçların tablo halinde raporlanması"
    ],
    requiredInfo: [
      "Örnek türü (gDNA, total RNA, plazmid, dsDNA vb.)",
      "Örnek sayısı",
      "Her örnekten alınacak hacim (genellikle 1-2 µL)",
      "Örneğin çözündüğü solüsyon (su, TE buffer vb.)",
      "Planlanan sonraki uygulama (NGS, qPCR vb.)"
    ],
    qualityControl: [
      "Cihaz optik ve kalibrasyon kontrolleri",
      "Uygun blank (kör) çözelti kullanımı",
      "Tekrarlanabilirlik kontrolleri",
      "Ölçüm aralığı ve lineerlik doğrulaması"
    ],
    whyCoreGen: "CoreGen'de yalnızca ham rakamsal sonuç iletmekle kalmıyor; elde edilen A260/280 ve A260/230 oranlarını yorumlayarak numunelerinizin fenol, tuz veya protein kontaminasyonu içerip içermediğini ve planlanan analize uygunluğunu detaylıca raporluyoruz.",
    faqs: [
      { question: "NanoDrop ile Qubit arasındaki temel fark nedir?", answer: "NanoDrop tüm nükleik asitleri ve kalıntıları absorbans yoluyla ölçerken; Qubit yalnızca hedef DNA/RNA'ya bağlanan floresan boyalar kullanarak çok daha hassas ve türe özgü ölçüm yapar." },
      { question: "NGS projeleri için hangi yöntem önerilir?", answer: "Yüksek hassasiyet gerektiren NGS kütüphane hazırlıkları için Qubit ölçümü vazgeçilmezdir; saflık kontrolü için ise NanoDrop şarttır." },
      { question: "Ölçüm sonrasında numunelerim tükenir mi?", answer: "Hayır. NanoDrop için 1-2 µL, Qubit için ise çok düşük hacimler yeterlidir; kalan numuneniz eksiksiz olarak size iade edilir." }
    ]
  },
  {
    slug: "pcr-analizi",
    category: "Moleküler Biyoloji",
    name: "PCR Analizi",
    heroDescription: "Hedef DNA bölgelerinin amplifikasyonuna yönelik proje bazlı PCR çalışmaları.",
    description: "PCR analizi, belirli bir DNA bölgesinin kontrollü reaksiyon koşullarında enzimatik olarak çoğaltılması amacıyla kullanılan temel moleküler biyoloji yöntemlerinden biridir. CoreGen'de PCR çalışmaları hedef bölge, organizma, primer durumu, numune sayısı ve deney tasarımı dikkate alınarak titizlikle planlanır.",
    importance: "PCR; genotipleme, klonlama, sekans doğrulama ve genetik karakterizasyon süreçlerinin temel basamağıdır. Doğru optimizasyon, non-spesifik bant oluşumunu önleyerek güvenilir sonuçlar sağlar.",
    deliverables: [
      "Hedef DNA bölgesinin amplifikasyon ürünleri",
      "Agaroz jel elektroforezi görüntüleri",
      "Beklenen amplikon boyut doğrulaması",
      "Deneysel sonuç ve teknik değerlendirme raporu"
    ],
    applicationAreas: ["Moleküler Genetik", "Hedef Gen Çalışmaları", "Genetik Materyal Karakterizasyonu", "Klonlama Öncesi Hazırlık", "Akademik Projeler", "AR-GE"],
    scope: [
      "Numune ve DNA kalite değerlendirmesi",
      "Primer uygunluk ve Tm optimizasyonu",
      "Gradient PCR veya reaksiyon optimizasyonu",
      "PCR amplifikasyon uygulaması",
      "Jel elektroforezi ile ürün kontrolü",
      "Sonuçların raporlanması"
    ],
    workflowSteps: [
      "1 Hedef bölge ve proje gereksinimlerinin incelenmesi",
      "2 DNA kalitesi ve primer durumunun kontrolü",
      "3 Reaksiyon şartlarının ve sıcaklık protokolünün optimizasyonu",
      "4 PCR mastermix hazırlığı ve amplifikasyon",
      "5 Jel elektroforezi ile ürün doğrulama",
      "6 Görsel ve teknik sonuçların raporlanması"
    ],
    requiredInfo: [
      "Örnek türü ve sayısı",
      "Hedef gen veya bölge bilgisi",
      "Organizma",
      "DNA izolasyonunun durumu (hazır mı / yapılacak mı?)",
      "Primer sekansları (müşteri mi sağlayacak / tasarlanacak mı?)",
      "Beklenen amplikon uzunluğu (bp)"
    ],
    qualityControl: [
      "Pozitif kontrol (hedef bölgeyi içeren DNA)",
      "Negatif / No-Template Control (NTC)",
      "Reaksiyon sıcaklık optimizasyon kontrolleri",
      "Jel görüntüleme ve bant kalitesi değerlendirmesi"
    ],
    whyCoreGen: "Reaksiyonlarda ezbere protokoller yerine, hedeflenen bölgenin GC içeriğine ve termodinamik yapısına özel optimizasyonlar (gradient PCR) uyguluyor; her çalışmayı doğru pozitif ve negatif kontrollerle güvenilir kılıyoruz.",
    faqs: [
      { question: "PCR ürünüm dizileme (Sanger) için uygun mu?", answer: "Evet, başarılı amplifikasyon sonrasında ürün doğrudan Sanger dizileme hizmetine yönlendirilebilir." },
      { question: "Kontroller reaksiyona dahil mi?", answer: "Evet, tüm rutin PCR çalışmalarımızda güvenilirlik için negatif ve pozitif kontroller yer alır." }
    ]
  },
  {
    slug: "rt-pcr",
    category: "Moleküler Biyoloji",
    name: "Gerçek Zamanlı PCR (RT-PCR / qPCR)",
    heroDescription: "Hedef nükleik asitlerin ve gen ekspresyonunun gerçek zamanlı PCR tabanlı yöntemlerle araştırılması.",
    description: "Gerçek zamanlı PCR (qPCR), DNA amplifikasyon sürecinin reaksiyon sırasında floresan sinyaller aracılığıyla eş zamanlı (real-time) takip edilmesini sağlayan son derece hassas kantitatif bir moleküler analiz yöntemidir. RNA kaynaklı gen ekspresyonu çalışmalarında RNA önce cDNA'ya dönüştürülür ve ardından qPCR uygulanır (RT-qPCR).",
    importance: "Hedef genlerin göreceli (relative) veya mutlak düzeyde hassas bir şekilde kantifiye edilmesine olanak tanıyarak gen ekspresyon analizleri, patojen tespiti ve biyobelirteç araştırmalarında en çok tercih edilen yaklaşımdır.",
    deliverables: [
      "Ct / Cq (Threshold Cycle) değerleri ham verileri",
      "Amplifikasyon eğrileri (Amplification plots)",
      "Erime eğrileri (Melting curves - SYBR Green için)",
      "Göreceli gen ekspresyon oranları (ΔCt ve ΔΔCt analizleri)",
      "Hedef / referans gen karşılaştırma grafikleri",
      "Kapsamlı istatistiksel teknik rapor"
    ],
    applicationAreas: ["Gen Ekspresyon Analizi", "Moleküler Genetik Araştırmalar", "Biyobelirteç Çalışmaları", "Hücre Kültürü İlaç Yanıtları", "Akademik AR-GE", "Hedef Nükleik Asit Kantifikasyonu"],
    scope: [
      "RNA/DNA örneklerinin miktar ve kalite kontrolü",
      "cDNA sentezleme (Reverse Transcription) optimizasyonu",
      "Primer / Prob uygunluk testleri ve verimlilik kontrolü",
      "qPCR reaksiyon kurulumu (SYBR Green veya TaqMan kimyası)",
      "Referans gen kararlılık analizi",
      "ΔΔCt yöntemiyle göreceli kantifikasyon",
      "İstatistiksel değerlendirme ve grafiksel raporlama"
    ],
    workflowSteps: [
      "1 Deney tasarımının ve hedef genlerin incelenmesi",
      "2 RNA izolasyonu ve RIN/kalite kontrolü (gerekirse)",
      "3 Standartize edilmiş koşullarda cDNA sentezi",
      "4 qPCR plaka tasarımı ve optimizasyonu",
      "5 Gerçek zamanlı amplifikasyon ve optik okuma",
      "6 Ct değerlerinin analizi ve ΔΔCt hesaplamaları",
      "7 Akademik yayına uygun grafiklerin üretilmesi ve raporlama"
    ],
    requiredInfo: [
      "Çalışılacak materyal (DNA mı, RNA mı?)",
      "RNA izolasyonu ve cDNA sentezi hizmete dahil mi?",
      "İncelenecek hedef gen(ler) ve referans (housekeeping) genler",
      "Organizma türü",
      "Deney ve kontrol grubu tanımları (Biyolojik ve teknik tekrar sayıları)",
      "Tercih edilen kimya (SYBR Green veya TaqMan Prob)"
    ],
    qualityControl: [
      "RNA miktar ve bütünlük (RIN) kontrolü",
      "No-Template Control (NTC) kontaminasyon testleri",
      "Teknik tekrarlar arası standart sapma (CV%) kontrolü",
      "Erime eğrisi (Melting curve) analizi ile tek ürün (single peak) teyidi",
      "Primer verimlilik (Efficiency) testleri"
    ],
    whyCoreGen: "Hizmetimiz yalnızca cihaz çıktısı sunmakla kalmaz; MIQE kılavuzlarına tam uyumlu olarak primer verimliliğinin doğrulanmasını, en kararlı referans genin seçilmesini ve ΔΔCt istatistiksel modellerinin projenize özel uygulanmasını kapsar.",
    faqs: [
      { question: "RT-PCR ile qPCR aynı şey midir?", answer: "qPCR gerçek zamanlı nükleik asit miktar tayinidir. RNA'dan yola çıkılarak önce ters transkripsiyon (RT) ile cDNA yapılması ve ardından qPCR uygulanması süreci ise RT-qPCR olarak adlandırılır." },
      { question: "Referans (housekeeping) gen seçimini yapıyor musunuz?", answer: "Evet, çalışacağınız doku veya hücre hattına en uygun referans genin belirlenmesinde teknik destek sağlıyoruz." },
      { question: "Kaç biyolojik tekrar göndermeliyim?", answer: "İstatistiksel anlamlılık (p-değeri güvenilirliği) açısından her grupta en az 3 biyolojik tekrar önerilmektedir." }
    ]
  },

  // ================= 2. DİZİLEME HİZMETLERİ =================
  {
    slug: "sanger-dizileme",
    category: "Dizileme Hizmetleri",
    name: "Sanger Dizileme",
    heroDescription: "DNA dizisinin belirli bölgelerinin doğrulanması ve PCR ürün karakterizasyonu.",
    description: "Sanger dizileme, spesifik bir DNA fragmentinin baz dizilimini belirlemek için kullanılan klasik laboratuvar yöntemidir. Hedef DNA bölgesinin, tasarlanmış primerler kullanılarak enzimatik reaksiyon ve kapiller elektroforez yoluyla yüksek doğrulukla okunmasına dayanır.",
    importance: "Klonlama, mutagenez veya CRISPR gibi çalışmalarda hedeflenen bölgedeki tek bir nükleotid değişiminin tespit edilebilmesi projenin güvenirliği açısından kritiktir. Primer tasarımından okuma yönüne kadar sürecin doğru planlanması okuma kalitesini doğrudan etkiler.",
    deliverables: ["Sekans karakterizasyonu (Ham dizi verisi)", "Kromatogram (ab1 dosyaları)", "FASTA sekans dosyaları", "Varyant doğrulama bilgisi", "Sekans hizalama sonuçları"],
    applicationAreas: ["PCR ürün doğrulama", "Klon doğrulama", "Varyant doğrulama", "Sekans karakterizasyonu", "Akademik araştırmalar", "Biyomedikal AR-GE"],
    scope: ["Numune kabulü", "PCR ürünü saflaştırma", "Dizileme reaksiyonu", "Kapiller elektroforez", "Görüntüleme", "Veri analizi", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Numune ve primer uygunluğunun kontrolü", "Saflaştırma işlemleri", "Uygulama", "Kalite kontrol", "Veri analizi", "Sonuçların değerlendirilmesi", "Raporlama"],
    requiredInfo: ["Örnek türü", "Örnek sayısı", "PCR ürünü hazır mı?", "PCR ürün uzunluğu", "PCR ürünü miktarı/konsantrasyonu", "Primer hazır mı?", "Primer CoreGen tarafından mı sağlanacak?", "Primer sekansı", "Forward / Reverse okuma", "Tek yönlü / çift yönlü dizileme", "Beklenen bölge", "Organizma", "Çalışmanın amacı"],
    qualityControl: ["Numune uygunluğu", "Konsantrasyon kontrolü", "Saflık kontrolü", "Sequencing QC (Read quality)"],
    whyCoreGen: "Standart dizileme işleminin ötesinde, zorlu bölgeler için projeye özel ön işlem ve teknik değerlendirme yaklaşımları uygulayarak araştırma odaklı bir hizmet sunuyoruz.",
    faqs: [
      { question: "Numuneyi nasıl göndermeliyim?", answer: "PCR ürünleri veya plazmidler, uygun soğuk zincir koşullarında ve önerilen konsantrasyon aralıklarında gönderilmelidir." },
      { question: "Primer tarafınızdan sağlanabilir mi?", answer: "Evet, projenizin gereksinimlerine göre primer sentezi CoreGen tarafından sağlanabilir." },
      { question: "Tek yönlü mü çift yönlü mü okuma yapmalıyım?", answer: "Uzun fragmentlerde veya yüksek doğruluk gerektiren varyant doğrulamalarında çift yönlü (F+R) okuma tavsiye edilir." },
      { question: "Sonuçları hangi formatta alırım?", answer: "Ham kromatogram (.ab1) ve metin tabanlı (.fasta) formatlarda teslim edilmektedir." },
      { question: "Analiz raporu hazırlanıyor mu?", answer: "Talep edilmesi halinde referans dizi ile hizalama raporu teknik sonuçlara eklenir." }
    ]
  },
  {
    slug: "wgs",
    category: "Dizileme Hizmetleri",
    name: "Whole Genome Sequencing (WGS)",
    heroDescription: "Genomun geniş kapsamlı dizilenmesi ve varyantların araştırılması.",
    description: "Tüm Genom Dizileme (WGS), bir organizmanın genetik şifresinin kodlayan ve kodlamayan bölgeleriyle birlikte bütünüyle dizilenmesidir. Bu yöntem, tek nükleotid polimorfizmlerinden büyük yapısal varyantlara kadar genomik karakterizasyon çalışmalarında kullanılır.",
    importance: "Bilinmeyen varyantların keşfi ve genomik karakterizasyon çalışmalarında bütüncül bir yaklaşım sunar. Okuma derinliğinin araştırma sorusuna uygun seçilmesi, verinin anlamlılığı için kritiktir.",
    deliverables: ["Ham veri (FASTQ)", "Hizalanmış dosyalar (BAM)", "Varyant dosyaları (VCF)", "Dizileme istatistikleri"],
    applicationAreas: ["Araştırma amaçlı genomik çalışmalar", "Genomik karakterizasyon", "Evrimsel genetik", "Nadir varyant araştırmaları", "Akademik araştırmalar"],
    scope: ["Numune kabulü", "İzolasyon (gerekliyse)", "Konsantrasyon ölçümü", "Kütüphane hazırlığı", "Kalite kontrol", "Dizileme", "Biyoinformatik analiz (opsiyonel)", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Numune uygunluğunun kontrolü", "Deney veya analiz planının oluşturulması", "Uygulama", "Kalite kontrol", "Veri analizi", "Sonuçların değerlendirilmesi", "Raporlama"],
    requiredInfo: ["Organizma", "Örnek türü", "Örnek sayısı", "DNA hazır mı?", "DNA izolasyonu gerekiyor mu?", "DNA miktarı/konsantrasyonu", "DNA kalite bilgisi", "Gruplar", "Biyolojik tekrar", "İstenen sequencing depth", "Read type", "Read length", "Platform tercihi", "Referans genom", "Ham veri teslimi", "Biyoinformatik analiz", "İstenen analizler"],
    qualityControl: ["Numune uygunluğu", "Konsantrasyon kontrolü", "Saflık kontrolü", "DNA kalite kontrolü", "Sequencing QC", "Read quality", "Mapping quality"],
    whyCoreGen: "Projenizin hipotezi üzerine görüşülerek, gereksiz maliyet yaratmayacak en uygun okuma derinliği ve biyoinformatik analiz yapılandırması AR-GE odaklı belirlenir.",
    faqs: [
      { question: "Kaç örnek göndermem gerekiyor?", answer: "Çalışmanın amacına bağlı olarak tek bir örnekten popülasyon ölçeğine kadar kabul edilmektedir." },
      { question: "Numuneler hazır değilse izolasyon yapılabilir mi?", answer: "Evet, CoreGen numune türüne uygun DNA izolasyonunu hizmet kapsamında gerçekleştirebilir." },
      { question: "Hangi okuma derinliğini (coverage) seçmeliyim?", answer: "De novo assembly veya varyant tespiti amaçlarına göre farklı derinlikler (örn. 30x, 50x) önerilir." },
      { question: "Sonuçları hangi formatta alırım?", answer: "Standart olarak FASTQ teslim edilir; biyoinformatik analiz dahilse BAM ve VCF dosyaları da sunulur." },
      { question: "Çalışma ne kadar sürer?", answer: "Örnek sayısına ve platforma bağlı olarak laboratuvar süreci proje başında takvimlendirilir." }
    ]
  },
  {
    slug: "wes",
    category: "Dizileme Hizmetleri",
    name: "Whole Exome Sequencing (WES)",
    heroDescription: "Protein kodlayan bölgelerin ve araştırma amaçlı varyantların ekzon odaklı dizilenmesi.",
    description: "Tüm Ekzom Dizileme (WES), genomun protein kodlayan kısımlarının (ekzomların) zenginleştirilerek dizilenmesidir. Fonksiyonel varyantların araştırılmasında WGS'ye kıyasla daha yüksek okuma derinliğine maliyet-etkin şekilde ulaşılmasını sağlayan genomik karakterizasyon yöntemidir.",
    importance: "Araştırma amaçlı varyantların büyük çoğunluğu protein kodlayan bölgelerde yer aldığından, genomik keşif araştırmalarında hedef odaklı bir araçtır. Hedeflenen bölgelerin doğru yakalanması analizin başarısını belirler.",
    deliverables: ["Ham veri (FASTQ)", "Hizalanmış dosyalar (BAM)", "Varyant dosyaları (VCF)", "Analiz tabloları", "Teknik rapor"],
    applicationAreas: ["Varyant analizi", "Genomik karakterizasyon", "Biyomedikal AR-GE", "Akademik araştırmalar", "Araştırma amaçlı genomik çalışmalar"],
    scope: ["Numune kabulü", "Konsantrasyon ölçümü", "Exome capture ve kütüphane hazırlığı", "Kalite kontrol", "Dizileme", "Biyoinformatik analiz", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Numune uygunluğunun kontrolü", "Deney planının oluşturulması", "Uygulama", "Kalite kontrol", "Veri analizi", "Raporlama"],
    requiredInfo: ["Organizma", "Örnek sayısı", "DNA durumu", "DNA kalite/konsantrasyon", "Biyolojik tekrar", "Exome capture tercihi varsa", "Sequencing depth", "Read type", "Referans genom", "Varyant analizi", "Annotation", "Filtreleme", "Ham veri", "Biyoinformatik analiz", "Raporlama"],
    qualityControl: ["Numune uygunluğu", "Konsantrasyon kontrolü", "Saflık kontrolü", "DNA kalite kontrolü", "Sequencing QC", "Read quality", "Mapping quality"],
    whyCoreGen: "Elde edilen devasa dizileme verisini araştırma hipotezinize uygun özel filtreleme kriterleriyle anlamlı bilimsel verilere dönüştürerek teknik değerlendirme yaklaşımıyla raporluyoruz.",
    faqs: [
      { question: "WES ile WGS arasındaki temel fark nedir?", answer: "WGS tüm genomu incelerken, WES sadece protein kodlayan bölgelere odaklanır ve buraları çok daha derin diziler." },
      { question: "Numuneler hazır değilse izolasyon yapılabilir mi?", answer: "Evet, kan veya doku örneklerinizden araştırma kalitesinde DNA izolasyonu gerçekleştirilebilir." },
      { question: "Varyant filtreleme raporu hazırlanıyor mu?", answer: "Biyoinformatik analiz hizmeti kapsamında talep edilen veritabanlarına göre filtrelenmiş tablolar sunulur." },
      { question: "Sonuçları hangi formatta alırım?", answer: "FASTQ, VCF ve son kullanıcı için Excel/CSV formatında tablolar olarak teslim edilir." },
      { question: "Analizde hangi referans genom kullanılıyor?", answer: "Aksi belirtilmedikçe çalışılan organizmaya ait güncel referans genom versiyonu kullanılır." }
    ]
  },
  {
    slug: "targeted-sequencing",
    category: "Dizileme Hizmetleri",
    name: "Targeted Sequencing",
    heroDescription: "Belirli genlerin, gen bölgelerinin ve varyantların odaklı şekilde dizilenerek araştırılması.",
    description: "Hedefli Dizileme (Targeted Sequencing), sadece araştırma konusu olan spesifik genlerin veya gen bölgelerinin (panellerin) tasarlanarak dizilenmesidir. Araştırma hedeflerinin ultra derin dizileme ile istatistiksel güvenilirliğinin maksimize edilmesini sağlar.",
    importance: "Çalışma maliyetini düşürürken, araştırılan lokuslarda binlerce kat okuma derinliği sağlayarak düşük frekanslı varyantların saptanmasına olanak tanır.",
    deliverables: ["Ham veri (FASTQ)", "Hizalanmış dosyalar (BAM)", "Varyant dosyaları (VCF)", "Kapsama (Coverage) raporu"],
    applicationAreas: ["Belirli genlerin araştırılması", "Varyantların incelenmesi", "Araştırma amaçlı genomik çalışmalar", "Biyomedikal AR-GE", "Deneysel biyoloji"],
    scope: ["Numune kabulü", "Panel tasarımı/tedariki", "Kütüphane hazırlığı", "Dizileme", "Kalite kontrol", "Veri analizi", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Numune uygunluğunun kontrolü", "Deney veya analiz planının oluşturulması", "Uygulama", "Kalite kontrol", "Veri analizi", "Sonuçların değerlendirilmesi", "Raporlama"],
    requiredInfo: ["Hedef gen/genler", "Hedef bölge", "Panel hazır mı?", "Panel tasarımı gerekiyor mu?", "Örnek sayısı", "Örnek türü", "DNA/RNA", "Biyolojik tekrar", "Sequencing depth", "Primer/panel durumu", "Referans genom", "Varyant analizi", "İstenen çıktı"],
    qualityControl: ["Numune uygunluğu", "Konsantrasyon kontrolü", "DNA/RNA kalite kontrolü", "Sequencing QC", "Read quality"],
    whyCoreGen: "Özel araştırma hedeflerinize yönelik özelleştirilmiş (custom) panel tasarımlarının teknik optimizasyonunu yaparak AR-GE odaklı kişiselleştirilmiş hizmet sunuyoruz.",
    faqs: [
      { question: "Panel tasarımı tarafınızdan sağlanabilir mi?", answer: "Evet, araştırmak istediğiniz gen listesini iletmeniz durumunda panel tasarımı projelendirilebilir." },
      { question: "Hedefli dizileme mi WES mi tercih etmeliyim?", answer: "Sadece belirli gen yollarıyla ilgileniyorsanız hedefli dizileme, tüm ekzomu taramak istiyorsanız WES daha uygundur." },
      { question: "Araştırma amaçlı sıvı biyopsi örnekleri çalışılabilir mi?", answer: "Evet, cfDNA tabanlı hedefli dizileme araştırmaları laboratuvarımızda değerlendirilebilir." },
      { question: "Çalışma ne kadar sürer?", answer: "Özel panel tedarik süreleri dahil olmak üzere proje başında net bir planlama yapılır." },
      { question: "Biyoinformatik analiz dahil mi?", answer: "Hizmet kapsamına göre ham veri üretiminin yanı sıra varyant analiz tabloları da sağlanabilmektedir." }
    ]
  },
  {
    slug: "rna-seq",
    category: "Dizileme Hizmetleri",
    name: "Transkriptom Analizi (RNA-Seq)",
    heroDescription: "RNA-Seq ile transkriptom profilleme, alternatif transkriptler ve gen ekspresyonunun araştırılması.",
    description: "RNA-Seq, biyolojik bir örnekteki RNA moleküllerinin yeni nesil dizileme ile sayısallaştırılmasıdır. Belirli bir durumda hangi genlerin aktif olduğunu göstererek diferansiyel ekspresyon ve araştırma amaçlı transkriptom profilleme çalışmalarında kullanılır.",
    importance: "Alternatif transkriptleri, splice varyantlarını ve gen ekspresyon düzeylerini ölçebilme gücü sayesinde hücresel araştırmaların belkemiğidir. RNA bütünlüğünün korunması deney başarısı için kritiktir.",
    deliverables: ["Ham veri (FASTQ)", "Hizalanmış dosyalar (BAM)", "Count (sayım) matrisleri", "Diferansiyel ekspresyon sonuçları", "Analiz grafikleri", "Teknik rapor"],
    applicationAreas: ["Gen ekspresyonunun araştırılması", "Transkriptom profilleme", "Hücresel çalışmalar", "Deneysel biyoloji", "Biyomedikal AR-GE"],
    scope: ["Numune kabulü", "RNA izolasyonu (gerekirse)", "Konsantrasyon ölçümü", "Kütüphane hazırlama", "Kalite kontrol", "Dizileme", "Veri analizi", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Numune / veri uygunluğunun kontrolü", "Deney planının oluşturulması", "Uygulama", "Kalite kontrol", "Veri analizi", "Sonuçların değerlendirilmesi", "Raporlama"],
    requiredInfo: ["Örnek türü", "Örnek sayısı", "RNA hazır mı?", "RNA izolasyonu gerekiyor mu?", "RNA kalite bilgisi", "RIN bilgisi", "Gruplar", "Biyolojik tekrar", "Sequencing depth", "Paired-end / single-end", "Read length", "mRNA / total RNA / diğer", "Library hazırlama", "Referans genom", "Ham veri", "Biyoinformatik analiz", "Diferansiyel ekspresyon", "İstenen analizler"],
    qualityControl: ["Numune uygunluğu", "Konsantrasyon kontrolü", "RNA kalite kontrolü (RIN)", "Sequencing QC", "Read quality", "Biyolojik tekrarların tutarlılığı"],
    whyCoreGen: "Proje bazlı çalışma anlayışıyla, biyolojik tekrarlar arası tutarlılığı ve araştırma amacına en uygun kütüphane hazırlık yöntemini (mRNA veya Total RNA) titizlikle planlıyoruz.",
    faqs: [
      { question: "Numuneler hazır değilse RNA izolasyonu yapılabilir mi?", answer: "Evet, doku veya hücre kültürlerinden RNase-free koşullarda araştırma kalitesinde izolasyon yapılabilmektedir." },
      { question: "mRNA mı yoksa Total RNA mı diziletmeliyim?", answer: "Protein kodlayan genlerle ilgileniyorsanız mRNA; kodlamayan bölgeleri de araştırıyorsanız Total RNA tercih edilmelidir." },
      { question: "Kaç biyolojik tekrar kullanmalıyım?", answer: "İstatistiksel olarak anlamlı veri elde edebilmek için her grupta en az 3 biyolojik tekrar önerilir." },
      { question: "Analiz raporu hazırlanıyor mu?", answer: "Evet, gruplar arası anlamlı ekspresyon farklılıklarını gösteren analiz raporları sunulmaktadır." },
      { question: "Sonuçları hangi formatta alırım?", answer: "FASTQ ham verilerinden, sayım matrislerine ve R grafiği formatlarına kadar çeşitli şekillerde teslim edilir." }
    ]
  },
  {
    slug: "shotgun-metagenomik",
    category: "Dizileme Hizmetleri",
    name: "Shotgun Metagenomics",
    heroDescription: "Mikrobiyal toplulukların geniş kapsamlı incelenmesi, taksonomik ve fonksiyonel profilleme.",
    description: "Shotgun Metagenomics, çevresel veya biyolojik bir örnekteki tüm genetik materyalin hedefsiz olarak dizilenmesidir. Bu yöntem, mikrobiyal toplulukların taksonomik profillemesinin yanı sıra mikrobiyal gen repertuarının araştırılması amacıyla fonksiyonel profilleme sağlar.",
    importance: "Tür ve suş düzeyinde taksonomik çözünürlük ile direnç genleri gibi fonksiyonel genlerin araştırılabilmesi, metagenomik çalışmaların araştırma değerini maksimize eder.",
    deliverables: ["Ham veri (FASTQ)", "Taksonomik profiller", "Fonksiyonel profiller", "Grafikler", "Analiz tabloları", "Teknik rapor"],
    applicationAreas: ["Mikrobiyal toplulukların incelenmesi", "Araştırma amaçlı metagenomik çalışmalar", "Biyoteknoloji", "Biyomedikal araştırmalar", "Akademik araştırmalar"],
    scope: ["Numune kabulü", "DNA izolasyonu", "Kütüphane hazırlığı", "Dizileme", "Host DNA arındırma", "Kalite kontrol", "Veri analizi", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Numune uygunluğunun kontrolü", "Deney veya analiz planının oluşturulması", "Uygulama", "Kalite kontrol", "Veri analizi", "Raporlama"],
    requiredInfo: ["Örnek türü", "Örnek sayısı", "DNA durumu", "DNA kalite/konsantrasyon", "Biyolojik tekrar", "Örnek grupları", "Sequencing depth", "Read type", "Read length", "Host DNA riski", "Taxonomic profiling", "Functional profiling", "Antibiyotik direnç genleri", "Diğer istenen analizler"],
    qualityControl: ["Numune uygunluğu", "DNA kalite kontrolü", "Sequencing QC", "Read quality", "Host DNA kontaminasyon kontrolü"],
    whyCoreGen: "Çevresel veya konak (host) DNA'sı yüksek olan örneklerde, teknik değerlendirme yaklaşımıyla analiz öncesi gerekli in-silico veri temizliğini profesyonelce gerçekleştiriyoruz.",
    faqs: [
      { question: "Shotgun dizileme ile 16S arasındaki fark nedir?", answer: "16S sadece bakterilerin taksonomisini saptarken, Shotgun dizileme tüm organizmaların fonksiyonel genlerini de analiz eder." },
      { question: "Örneklerdeki konak (Host) DNA sorunu nasıl çözülüyor?", answer: "Biyoinformatik analiz sırasında veriler in-silico olarak referans konak genomuna karşı temizlenebilir." },
      { question: "Analiz raporu neleri kapsıyor?", answer: "Taksonomik dağılımlar ve fonksiyonel gen eşleşmeleri rapora dahil edilir." },
      { question: "Numuneler hazır değilse izolasyon yapılabilir mi?", answer: "Araştırma örneklerinden (toprak, sıvı, doku vb.) mikrobiyal DNA izolasyonu gerçekleştirilmektedir." },
      { question: "Sonuçları hangi formatta alırım?", answer: "Ham FASTQ verilerinin yanı sıra taksonomik ve fonksiyonel sayım tabloları sunulur." }
    ]
  },
  {
    slug: "16s-rrna",
    category: "Dizileme Hizmetleri",
    name: "16S rRNA Analizi",
    heroDescription: "Mikrobiyal topluluk profilleme ve çeşitliliğinin 16S rRNA hedef bölgeleri üzerinden taksonomik sınıflandırılması.",
    description: "16S rRNA analizi, bakteri ve arkelerin tanımlanması amacıyla ribozomal RNA geninin hiper-değişken bölgelerinin (örn. V3-V4) PCR ile çoğaltılıp dizilenmesidir. Biyolojik örneklerdeki mikrobiyal yapıyı ve gruplar arası farklılıkları araştırmak için kullanılır.",
    importance: "Çok sayıda örneğin bir arada çalışılmasına olanak tanıyarak büyük kohortlu akademik çalışmalarda mikrobiyal çeşitlilik (alpha ve beta diversity) haritaları oluşturulmasını sağlar.",
    deliverables: ["Ham veri (FASTQ)", "Taksonomik profiller", "Çeşitlilik indeksleri", "Grafikler", "Analiz tabloları", "İstatistiksel sonuçlar"],
    applicationAreas: ["Mikrobiyal topluluk profilleme", "Deneysel biyoloji", "Biyomedikal AR-GE", "Akademik araştırmalar", "Hücresel ve mikrobiyolojik çalışmalar"],
    scope: ["Numune kabulü", "DNA izolasyonu", "Amplifikasyon", "Kütüphane hazırlığı", "Dizileme", "Kalite kontrol", "Veri analizi", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Numune / veri uygunluğunun kontrolü", "Deney planının oluşturulması", "Uygulama", "Kalite kontrol", "Veri analizi", "Sonuçların değerlendirilmesi", "Raporlama"],
    requiredInfo: ["Örnek türü", "Örnek sayısı", "DNA hazır mı?", "DNA izolasyonu gerekiyor mu?", "Bölge tercihi (V1-V9 / V3-V4 vb.)", "Primer durumu", "Organizma/örnek kaynağı", "Biyolojik tekrar", "Sequencing depth", "Taxonomic profiling", "Alpha diversity", "Beta diversity", "Diferansiyel bolluk analizi"],
    qualityControl: ["Numune uygunluğu", "DNA kalite kontrolü", "Sequencing QC", "Read quality", "Deneysel kalite kontrol"],
    whyCoreGen: "Araştırma hedeflerinize uygun hedef bölge seçimi ve modern biyoinformatik analiz pipeline'ları kullanarak bilimsel raporlamaya önem veren bir çalışma yürütüyoruz.",
    faqs: [
      { question: "Hangi hedef bölgeyi (V region) seçmeliyim?", answer: "Çalıştığınız örneğin türüne göre değişir; genel çalışmalar için sıklıkla V3-V4 veya V4 bölgesi tercih edilmektedir." },
      { question: "Primer tarafınızdan sağlanabilir mi?", answer: "Evet, 16S protokollerine uygun universal primer setleri stoklarımızda mevcuttur." },
      { question: "Alpha ve Beta çeşitlilik (diversity) analizi yapılıyor mu?", answer: "Evet, gruplar içi ve gruplar arası mikrobiyal çeşitliliği gösteren analizler teknik rapor kapsamında sunulur." },
      { question: "Farklılık gösteren bakteriler tespit ediliyor mu?", answer: "Hangi taksonların gruplar arasında anlamlı farklılık gösterdiğine dair diferansiyel analizler planlanabilir." },
      { question: "DNA izolasyonunu siz yapabiliyor musunuz?", answer: "Araştırma numunelerinize uygun DNA izolasyon işlemleri laboratuvarımızda yapılmaktadır." }
    ]
  },

  // ================= 3. PROTEİN ANALİZLERİ =================
  {
    slug: "western-blot",
    category: "Protein Analizleri",
    name: "Western Blot Analizi",
    heroDescription: "Protein ekspresyonunun araştırılması için SDS-PAGE, membrana transfer ve antikor temelli tespit.",
    description: "Western Blot Analizi, spesifik hedef proteinlerin araştırılması ve göreceli miktarlarının ölçülmesi işlemidir. Proteinlerin jel elektroforezi ile ayrıştırılması, membrana transfer edilmesi, antikor temelli tespit ve densitometrik normalizasyon prensibine dayanır.",
    importance: "Protein ekspresyon düzeylerindeki farklılıkların veya hücresel yolakların deneysel olarak incelenmesinde kritik bir yöntemdir. Antikor özgüllüğü ve uygun normalizasyon, elde edilen sonucun teknik doğruluğunu belirler.",
    deliverables: ["Görüntüler", "Protein miktarı (göreceli)", "Analiz tabloları", "İstatistiksel sonuçlar", "Grafikler", "Teknik rapor"],
    applicationAreas: ["Protein ekspresyonunun araştırılması", "Hücresel çalışmalar", "İlaç araştırmaları", "Deneysel biyoloji", "Biyomedikal araştırmalar", "Akademik araştırmalar"],
    scope: ["Numune kabulü", "Numune hazırlama", "Protein izolasyonu", "Konsantrasyon ölçümü", "Deney (Elektroforez ve Transfer)", "Görüntüleme", "Kalite kontrol", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Numune uygunluğunun kontrolü", "Deney planının oluşturulması", "Uygulama", "Kalite kontrol", "Veri analizi", "Sonuçların değerlendirilmesi", "Raporlama"],
    requiredInfo: ["Örnek türü", "Örnek sayısı", "Gruplar", "Biyolojik tekrar", "Teknik tekrar", "Protein izolasyonu hazır mı?", "Protein konsantrasyonu", "Hedef protein/proteinler", "Organizma/tür", "Moleküler ağırlık", "Loading control", "Primer antikor hazır mı?", "Antikor marka/katalog no", "Sekonder antikor hazır mı?", "Densitometri/Normalizasyon tercihi"],
    qualityControl: ["Numune uygunluğu", "Konsantrasyon kontrolü", "Pozitif/negatif kontroller", "Deneysel kalite kontrol"],
    whyCoreGen: "Proje bazlı çalışma anlayışıyla antikor optimizasyonları ve doğru densitometrik değerlendirmeler yaparak AR-GE odaklı bilimsel sonuçlar üretiyoruz.",
    faqs: [
      { question: "Antikor tarafınızdan sağlanabilir mi?", answer: "Projenizin niteliğine göre primer antikorlar CoreGen tarafından temin edilebilir." },
      { question: "Numuneler hazır değilse izolasyon yapılabilir mi?", answer: "Evet, doku ve hücre örneklerinizden protein izolasyonu gerçekleştirilmektedir." },
      { question: "Aynı örnekte birden fazla protein bakılabilir mi?", answer: "Farklı moleküler ağırlıklara sahipse çoklu protein analizleri planlanabilir." },
      { question: "Sonuçları hangi formatta alırım?", answer: "Ham görüntüler ile birlikte densitometri tabloları teslim edilir." },
      { question: "Grafik hazırlanıyor mu?", answer: "Evet, gruplar arası farklılıkları gösteren grafikler analiz dahilinde sunulur." }
    ]
  },
  {
    slug: "elisa",
    category: "Protein Analizleri",
    name: "ELISA Analizi",
    heroDescription: "Protein/analit ölçümü, araştırma amaçlı kantifikasyon ve örneklerin karşılaştırılması.",
    description: "ELISA (Enzyme-Linked Immunosorbent Assay), biyolojik numunelerde bulunan hedef protein veya analitlerin araştırma amaçlı kantitatif olarak ölçüldüğü laboratuvar yöntemidir. Bilinen standartlarla oluşturulan standart eğri üzerinden ölçüm yapılır.",
    importance: "Biyobelirteçlerin, sitokinlerin veya metabolitlerin spesifiklikle tespit edilmesini ve deney gruplarının karşılaştırılmasını sağlar. Doğru seyreltme (dilüsyon) analizin güvenirliğini belirler.",
    deliverables: ["Protein miktarı", "Konsantrasyon ölçümleri", "Analiz tabloları", "İstatistiksel sonuçlar", "Grafikler", "Teknik rapor"],
    applicationAreas: ["Protein/analit ölçümü", "Araştırma amaçlı kantifikasyon", "Hücresel çalışmalar", "İlaç araştırmaları", "Biyomedikal araştırmalar", "Akademik araştırmalar"],
    scope: ["Numune kabulü", "Numune hazırlama", "Deney uygulaması", "Standart eğri ölçümü", "Kalite kontrol", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Numune uygunluğunun kontrolü", "Deney planının oluşturulması", "Uygulama", "Kalite kontrol", "Veri analizi", "Sonuçların değerlendirilmesi", "Raporlama"],
    requiredInfo: ["Hedef analit", "Örnek türü", "Örnek sayısı", "Gruplar", "Biyolojik tekrar", "Teknik tekrar", "Organizma", "ELISA kiti hazır mı?", "Kit marka/katalog no", "İstenen kantifikasyon", "Standart eğri", "Kontroller", "İstatistik"],
    qualityControl: ["Numune uygunluğu", "Teknik tekrarlar", "Deneysel kalite kontrol", "Pozitif/negatif kontroller"],
    whyCoreGen: "Hatalı dilüsyonları önlemek için teknik ön değerlendirme yapıyor ve kişiselleştirilebilir analiz desteği sunuyoruz.",
    faqs: [
      { question: "ELISA kiti tarafınızdan sağlanabilir mi?", answer: "Projenizin hedef analitine uygun kitler CoreGen tarafından temin edilebilir." },
      { question: "Numuneyi nasıl göndermeliyim?", answer: "Numune türünüze uygun transfer koşulları teklif aşamasında tarafınıza iletilir." },
      { question: "Standart eğri raporu hazırlanıyor mu?", answer: "Evet, numune konsantrasyonlarının hesaplandığı standart eğri verileri rapora dahil edilir." },
      { question: "Kaç örnek göndermem gerekiyor?", answer: "Projenizin tekrar sayısına ve plaka formatına göre planlama yapılmaktadır." },
      { question: "İstatistiksel analiz yapıyor musunuz?", answer: "Araştırma grupları arasındaki anlamlı farklılıkların tespiti için istatistiksel değerlendirmeler uygulanır." }
    ]
  },
  {
    slug: "rekombinant-protein-analizi",
    category: "Protein Analizleri",
    name: "Rekombinant Protein Analizi",
    heroDescription: "Üretilen proteinlerin karakterizasyonu, saflık durumu ve miktarının doğrulanması.",
    description: "Rekombinant protein analizi, in-vitro olarak üretilmiş proteinlerin fizikokimyasal özelliklerinin araştırılmasıdır. Protein kaynağı, mevcut proteinin saflığı, konsantrasyonu ve hedefin doğrulanması aşamalarını içerir.",
    importance: "Biyoteknolojik uygulamalarda kullanılacak proteinin istenen dizide, bozulmadan ve yeterli saflıkta olduğunun teyit edilmesi, sonraki deneylerin güvenirliği için zorunludur.",
    deliverables: ["Görüntüler", "Protein miktarı", "Konsantrasyon ölçümleri", "Analiz tabloları", "Teknik rapor"],
    applicationAreas: ["Biyoteknoloji", "Moleküler araştırmalar", "Deneysel biyoloji", "AR-GE çalışmaları", "Akademik araştırmalar"],
    scope: ["Numune kabulü", "Konsantrasyon ölçümü", "Kalite kontrol", "Deney (Karakterizasyon)", "Görüntüleme", "Veri analizi", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Numune uygunluğunun kontrolü", "Deney veya analiz planının oluşturulması", "Uygulama", "Kalite kontrol", "Veri analizi", "Raporlama"],
    requiredInfo: ["Protein adı", "Protein kaynağı", "Protein mevcut mu?", "Üretim ihtiyacı", "Protein miktarı", "Saflık", "Konsantrasyon", "Kullanılacak analiz (SDS-PAGE/Western vb.)", "Numune sayısı", "İstenen çıktı"],
    qualityControl: ["Numune uygunluğu", "Konsantrasyon kontrolü", "Saflık kontrolü", "Deneysel kalite kontrol"],
    whyCoreGen: "Ürettiğiniz değerli örnekleri harcamadan, projeye özel teknik değerlendirmelerle hedeflediğiniz karakterizasyonu akademik olarak raporluyoruz.",
    faqs: [
      { question: "Protein üretimi yapıyor musunuz?", answer: "Hizmet kapsamımız mevcut projede üretilmiş olan proteinin analiz ve karakterizasyonuna odaklanmaktadır." },
      { question: "Saflık oranı belirlenebiliyor mu?", answer: "Evet, uygun elektroforetik yöntemler ve görüntü analizi ile göreceli saflık oranları tespit edilebilmektedir." },
      { question: "Hangi doğrulama yöntemleri kullanılıyor?", answer: "SDS-PAGE, spesifik Western Blot ve konsantrasyon ölçümleri uygulanır." },
      { question: "Analiz raporu hazırlanıyor mu?", answer: "Karakterizasyon parametrelerini içeren teknik bir rapor sunulur." },
      { question: "Çalışma ne kadar sürer?", answer: "İstenen analiz yöntemine bağlı olarak kısa süre içinde tamamlanır." }
    ]
  },

  // ================= 4. BİYOİNFORMATİK =================
  {
    slug: "ngs-veri-analizi",
    category: "Biyoinformatik",
    name: "NGS Veri Analizi",
    heroDescription: "Dizileme platformlarından elde edilen ham NGS verilerinin teknik değerlendirilmesi ve analizi.",
    description: "NGS Veri Analizi, dizileme sistemlerinden elde edilen yüksek hacimli omik verilerin kalite kontrolü, referans genoma hizalanması (alignment) ve araştırma amacına yönelik incelenmesi sürecidir.",
    importance: "Ham dizileme verisinin doğruluğunun değerlendirilmesi ve doğru istatistiksel algoritmaların seçilmesi, projenin tüm biyolojik yorumunu doğrudan etkiler.",
    deliverables: ["BAM", "VCF", "Analiz tabloları", "Grafikler", "Teknik rapor"],
    applicationAreas: ["Veri analizi", "Genetik çalışmalar", "Biyomedikal araştırmalar", "Akademik araştırmalar", "Moleküler araştırmalar"],
    scope: ["Veri kabulü", "Kalite kontrol", "Veri analizi", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Veri uygunluğunun kontrolü", "Analiz planının oluşturulması", "Kalite kontrol", "Veri analizi", "Sonuçların değerlendirilmesi", "Raporlama"],
    requiredInfo: ["Veri türü", "Platform", "FASTQ / BAM / VCF", "Örnek sayısı", "Organizma", "Referans genom", "Veri boyutu", "Metadata", "Ham veri mevcut mu?", "Kalite kontrol gereksinimi", "İstenen analiz"],
    qualityControl: ["Veri bütünlüğü", "Read quality", "Mapping quality"],
    whyCoreGen: "Standart otomatize araçlar yerine projenizin hipotezine özel pipeline'lar oluşturuyoruz. Analiz süreçlerinin şeffaf tutulması ve sonuçların biyolojik olarak yorumlanabilir akademik görsellere dönüştürülmesi önceliğimizdir.",
    faqs: [
      { question: "Ham veri dosyalarımı nasıl ulaştırabilirim?", answer: "Teklif formumuzdaki bulut bağlantısı (Drive vb.) alanı üzerinden güvenli bir şekilde paylaşabilirsiniz." },
      { question: "Veri kalitesi uygun değilse ne olur?", answer: "Analiz öncesi yapılan kalite kontrol (QC) adımında verinin uygunluğu değerlendirilir ve raporlanır." },
      { question: "Farklı dizileme platformlarının verileri işlenebiliyor mu?", answer: "Illumina, DNBSEQ vb. farklı platformlara ait FASTQ dosyaları işlenebilmektedir." },
      { question: "Referans genomu ben mi sağlamalıyım?", answer: "Genellikle organizmaya ait en güncel referans tarafımızdan temin edilir, özel referanslar tarafınızdan sağlanabilir." },
      { question: "Grafikler akademik yayına uygun mu?", answer: "Evet, üretilen grafikler bilimsel yayın standartlarına uygundur." }
    ]
  },
  {
    slug: "rna-seq-analizi",
    category: "Biyoinformatik",
    name: "RNA-Seq Analizi",
    heroDescription: "Transkriptomik verilerin hizalanması, ifade sayımı ve araştırma amaçlı analizi.",
    description: "RNA-Seq Analizi, elde edilen FASTQ okumalarının referans genoma veya transkriptoma hizalandıktan sonra genlerin ekspresyon seviyelerinin sayılması ve diferansiyel ifade incelemeleri için uygun veri setlerinin hazırlanması sürecidir.",
    importance: "Gruplar arası gen ifade farklılıklarının anlamlandırılabilmesi için doğru hizalama ve veri normalizasyon adımlarının proje bazlı uygulanması kritik bir öneme sahiptir.",
    deliverables: ["BAM", "Sayım (Count) matrisleri", "Grafikler", "Analiz tabloları", "İstatistiksel sonuçlar", "Teknik rapor"],
    applicationAreas: ["Veri analizi", "Hücresel çalışmalar", "Deneysel biyoloji", "Biyomedikal araştırmalar", "Akademik araştırmalar"],
    scope: ["Veri kabulü", "Kalite kontrol", "Veri analizi", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Veri uygunluğunun kontrolü", "Analiz planının oluşturulması", "Kalite kontrol", "Veri analizi", "Sonuçların değerlendirilmesi", "Raporlama"],
    requiredInfo: ["FASTQ dosyaları", "Örnek sayısı", "Gruplar", "Biyolojik tekrar", "Organizma", "Referans genom", "Referans anotasyon", "Paired-end / single-end", "Read length", "mRNA / total RNA / diğer", "Library hazırlama", "Referans genom", "Ham veri", "Biyoinformatik analiz", "Diferansiyel ekspresyon", "İstenen analizler"],
    qualityControl: ["Veri bütünlüğü", "Read quality", "Mapping quality"],
    whyCoreGen: "Hücresel çalışmalarda elde ettiğiniz verilerin biyolojik tutarlılığını inceleyen teknik değerlendirme aşamalarıyla projenizin değerini artırıyoruz.",
    faqs: [
      { question: "Dosyaları nereye yüklemeliyim?", answer: "Teklif formundaki bulut depolama link alanını kullanarak dosyalarınızı iletebilirsiniz." },
      { question: "Sadece FASTQ dosyası yeterli mi?", answer: "Araştırma amacınız ve grup tanımlarınızı içeren metadata (örnek listesi) bilgisini de iletmeniz gerekir." },
      { question: "Hizalama analizi hangi referansla yapılıyor?", answer: "Organizmaya ait güncel referans genom ve anotasyon dosyaları (GTF/GFF) kullanılarak hizalama yapılır." },
      { question: "Diferansiyel analiz dahil midir?", answer: "Araştırma hedefinize göre diferansiyel analiz hizmet kapsamına eklenebilir." },
      { question: "Sonuçları nasıl inceleyebilirim?", answer: "Sayım tabloları ve istatistiksel sonuçlar anlaşılır veri formatlarında (Excel/CSV) teslim edilir." }
    ]
  },
  {
    slug: "diferansiyel-gen-ekspresyonu",
    category: "Biyoinformatik",
    name: "Diferansiyel Gen Ekspresyonu",
    heroDescription: "Farklı deney grupları arasındaki gen ifade değişimlerinin istatistiksel olarak karşılaştırılması.",
    description: "Diferansiyel Gen Ekspresyonu analizi, farklı biyolojik koşullar veya gruplar arasında genlerin ekspresyon düzeylerindeki değişimlerin istatistiksel ve biyoinformatik yöntemlerle değerlendirilmesini sağlar. RNA-Seq veya uygun gen ekspresyon verileri üzerinden gerçekleştirilen analizlerde anlamlı olarak artan veya azalan genler belirlenebilir.",
    importance: "Gen ekspresyonundaki değişimlerin belirlenmesi, hastalık mekanizmaları, tedavi yanıtları, biyolojik yolaklar ve hücresel süreçlerin araştırılmasına katkı sağlar.",
    deliverables: ["Diferansiyel eksprese gen listeleri", "Up-regulated ve down-regulated genler", "Volcano plot", "Heatmap", "PCA ve örnek dağılım analizleri", "Fonksiyonel zenginleştirme (GO/KEGG) analizleri"],
    applicationAreas: ["RNA-Seq", "Kanser araştırmaları", "Hücre kültürü", "İlaç çalışmaları", "Hastalık modelleri", "Biyobelirteç araştırmaları"],
    scope: ["Veri kalite değerlendirmesi", "Ön işleme", "Sayım ve ekspresyon matrisi değerlendirmesi", "Diferansiyel ekspresyon analizi", "Görselleştirme", "Fonksiyonel yorumlama", "Raporlama"],
    workflowSteps: [
      "1 Araştırma tasarımının değerlendirilmesi",
      "2 Veri ve örnek bilgilerinin kontrolü",
      "3 Kalite kontrol",
      "4 Biyoinformatik analiz",
      "5 İstatistiksel değerlendirme",
      "6 Görselleştirme",
      "7 Biyolojik yorumlama",
      "8 Raporlama"
    ],
    requiredInfo: ["Veri türü", "Organizma", "Grup bilgileri", "Örnek sayısı", "Ham veya işlenmiş veri durumu", "Kontrol ve deney grupları", "Araştırma hipotezi", "İlgilenilen biyolojik süreçler"],
    qualityControl: ["Veri kalite değerlendirmesi", "Örnek dağılım kontrolü", "Teknik uygunluk kontrolleri", "İstatistiksel sonuç değerlendirmesi"],
    whyCoreGen: "CoreGen, diferansiyel gen ekspresyon analizlerini yalnızca gen listesi sunmakla sınırlı tutmayarak biyolojik bağlam ve araştırma sorusuyla ilişkilendirilmiş sonuçlar üretmeyi hedefler.",
    faqs: [
      { question: "RNA-Seq verisini siz analiz edebilir misiniz?", answer: "Evet, ham FASTQ veya sayım matrisleriniz işlenebilir." },
      { question: "Ham FASTQ verisi gerekli mi?", answer: "Analiz tipine göre FASTQ veya hazır count matrisleri kullanılabilir." },
      { question: "Heatmap ve volcano plot hazırlanıyor mu?", answer: "Evet, yayın kalitesinde sunulur." },
      { question: "Sonuçlar yayın için kullanılabilir mi?", answer: "Evet, uluslararası standartlardadır." }
    ]
  },
  {
    slug: "varyant-analizi",
    category: "Biyoinformatik",
    name: "Varyant Analizi",
    heroDescription: "Dizileme verileri üzerinden genetik varyasyonların tespiti, filtrelenmesi ve araştırma amaçlı anotasyonu.",
    description: "Varyant Analizi; hizalanmış dizileme verilerinden (BAM) veya mevcut VCF dosyalarından SNP, Indel gibi genetik değişikliklerin saptanması ve bu varyantların uygun veritabanlarına karşı açıklamalarının (anotasyon) yapılması sürecidir.",
    importance: "Elde edilen binlerce varyant içerisinden projenin araştırma hedefine uyan anlamlı varyasyonların bulunması, doğru filtreleme kriterlerine ve güncel referans kullanımına bağlıdır.",
    deliverables: ["VCF", "Analiz tabloları", "İstatistiksel sonuçlar", "Teknik rapor"],
    applicationAreas: ["Genetik çalışmalar", "Biyomedikal AR-GE", "Moleküler araştırmalar", "Veri analizi", "Akademik araştırmalar"],
    scope: ["Veri kabulü", "Kalite kontrol", "Veri analizi", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Veri uygunluğunun kontrolü", "Analiz planının oluşturulması", "Kalite kontrol", "Veri analizi", "Sonuçların değerlendirilmesi", "Raporlama"],
    requiredInfo: ["Veri formatı (VCF / BAM / FASTQ)", "Organizma", "Referans genom", "Referans versiyonu", "Örnek sayısı", "Variant type", "Variant calling yapılmış mı?", "Annotation", "Filtreleme kriterleri", "İstenen analiz"],
    qualityControl: ["Veri bütünlüğü", "Sequencing QC", "Mapping quality"],
    whyCoreGen: "Hedef odaklı AR-GE anlayışıyla, devasa varyant listelerini araştırma konunuzla ilişkilendirerek filtrelenmiş tablolar sunar.",
    faqs: [
      { question: "Hazır VCF dosyam var, anotasyon yapabilir misiniz?", answer: "Evet, mevcut VCF dosyalarınız proje gereksinimlerinize uygun olarak anote edilebilir." },
      { question: "Hangi veritabanları kullanılıyor?", answer: "İnsan verileri için dbSNP, ClinVar, gnomAD gibi evrensel veritabanları ve organizmaya özel referanslar kullanılır." },
      { question: "Verilerimi nasıl göndermeliyim?", answer: "Teklif formunda yer alan bulut linki alanına dosya bağlantınızı ekleyebilirsiniz." },
      { question: "Sadece belirli genlere bakılabilir mi?", answer: "Evet, ilgilendiğiniz hedef gen listelerine göre özel varyant filtrelemesi yapılabilir." },
      { question: "Analiz sonuçları hangi formatta teslim edilecek?", answer: "VCF dosyaları ve araştırmacıların kolayca inceleyebileceği Excel formatında analiz tabloları sunulur." }
    ]
  },
  {
    slug: "filogenetik-analiz",
    category: "Biyoinformatik",
    name: "Filogenetik Analiz",
    heroDescription: "Organizmaların veya sekansların evrimsel ilişkilerinin biyoinformatik yöntemlerle incelenmesi.",
    description: "Filogenetik Analiz, DNA veya protein dizileri kullanılarak evrimsel akrabalık ilişkilerinin araştırıldığı ve filogenetik ağaçların oluşturulduğu analiz yöntemidir. Sekansların doğru şekilde hizalanması (alignment) ve uygun evrimsel modelin seçilmesi temel prensibidir.",
    importance: "Araştırılan sekanslar arasındaki genetik benzerliklerin istatistiksel modellerle kanıtlanması, tür tespitleri veya evrimsel araştırmaların geçerliliği için esastır.",
    deliverables: ["Sekans sonuçları", "Analiz tabloları", "Grafikler", "İstatistiksel sonuçlar", "Teknik rapor"],
    applicationAreas: ["Genetik çalışmalar", "Deneysel biyoloji", "Veri analizi", "Akademik araştırmalar", "Biyoteknoloji"],
    scope: ["Veri kabulü", "Kalite kontrol", "Veri analizi", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Veri uygunluğunun kontrolü", "Analiz planının oluşturulması", "Uygulama", "Veri analizi", "Raporlama"],
    requiredInfo: ["Sekans dosyaları (FASTA vb.)", "Sekans sayısı", "Organizmalar", "Referans sekanslar", "Alignment hazır mı?", "Filogenetik yöntem tercihi", "Outgroup", "İstenen ağaç formatı", "Bootstrap", "Görselleştirme"],
    qualityControl: ["Veri bütünlüğü", "Deneysel kalite kontrol"],
    whyCoreGen: "Hizalamadan (alignment) ağaç oluşturmaya kadar tüm süreci teknik bir bakış açısıyla tasarlar, Bootstrap gibi yöntemlerle sonuçların istatistiksel güvenirliğini test ederiz.",
    faqs: [
      { question: "FASTA dosyalarımı nasıl iletebilirim?", answer: "Dosyalarınızı veya bulut bağlantınızı teklif formumuzdaki dosya yükleme alanından iletebilirsiniz." },
      { question: "Sekans hizalaması (alignment) tarafınızdan yapılıyor mu?", answer: "Evet, dizi hizalama işlemleri analiz sürecinin bir parçası olarak tarafımızdan gerçekleştirilebilir." },
      { question: "Bootstrap analizi yapıyor musunuz?", answer: "Evet, oluşturulan filogenetik ağaçların güvenilirliğini test etmek için Bootstrap analizleri uygulanır." },
      { question: "Outgroup belirleyebiliyor muyuz?", answer: "Proje gereksinimlerinize uygun olan outgroup'lar çalışma öncesinde belirlenebilir." },
      { question: "Görseller yayın standartlarında mı?", answer: "Üretilen filogenetik ağaç grafikleri akademik araştırmalara uygun çözünürlüktedir." }
    ]
  },
  {
    slug: "metagenomik-veri-analizi",
    category: "Biyoinformatik",
    name: "Metagenomik Veri Analizi",
    heroDescription: "Metagenomik sekans verilerinin taksonomik profilleme, mikrobiyal çeşitlilik ve fonksiyonel özellikleri yönünden incelenmesi.",
    description: "Metagenomik Veri Analizi; 16S amplikon veya Shotgun dizileme verilerinden elde edilen FASTQ dosyalarının kullanılarak, mikrobiyal toplulukların kompozisyonunun ve genetik kapasitelerinin biyoinformatik olarak değerlendirildiği süreçtir.",
    importance: "Doğru veritabanı eşleştirmesi ve veri temizliği (denoising), karmaşık mikrobiyom örneklerinden biyolojik olarak anlamlı çeşitlilik ve diferansiyel bolluk verisi elde edilmesi için gereklidir.",
    deliverables: ["Analiz tabloları", "Grafikler", "İstatistiksel sonuçlar", "Teknik rapor"],
    applicationAreas: ["Veri analizi", "Genetik çalışmalar", "Biyoteknoloji", "Biyomedikal AR-GE", "Akademik araştırmalar"],
    scope: ["Veri kabulü", "Kalite kontrol", "Veri analizi", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje ve teknik bilgilerin değerlendirilmesi", "Veri uygunluğunun kontrolü", "Analiz planının oluşturulması", "Kalite kontrol", "Veri analizi", "Sonuçların değerlendirilmesi", "Raporlama"],
    requiredInfo: ["Veri türü (FASTQ)", "Örnek sayısı", "Gruplar", "Metadata", "Organizma/örnek kaynağı", "Sequencing platformu", "Taxonomic profiling", "Functional profiling", "Alpha/Beta diversity", "Diferansiyel bolluk", "Pathway / AMR"],
    qualityControl: ["Veri bütünlüğü", "Read quality", "Sequencing QC"],
    whyCoreGen: "Salt yazılım çıktıları sunmak yerine, araştırma amacınıza yönelik çeşitlilik analizleri ve grafiklerle (PCoA, Barplot vb.) kişiselleştirilebilir analiz çözümleri üretir.",
    faqs: [
      { question: "Analiz için metadata gerekli mi?", answer: "Evet, gruplar arası istatistiksel karşılaştırmaların yapılabilmesi için örnek bilgilerinizi içeren metadata gereklidir." },
      { question: "Verilerimi nasıl yükleyeceğim?", answer: "Teklif formumuzdaki Google Drive/OneDrive linki alanını kullanarak büyük hacimli dosyalarınızı iletebilirsiniz." },
      { question: "Alpha ve Beta çeşitlilik (diversity) hesaplanıyor mu?", answer: "Metagenomik veri analizi kapsamında istenen çeşitlilik indeksleri değerlendirilebilir." },
      { question: "Fonksiyonel profilleme yapıyor musunuz?", answer: "Shotgun verilerinde pathway, AMR (direnç genleri) gibi fonksiyonel analizler uygulanabilmektedir." },
      { question: "Grafikler akademik raporlamaya uygun mu?", answer: "Evet, üretilen tüm taksonomik ve istatistiksel görseller yayın standartlarına uygundur." }
    ]
  },

  // ================= 5. DANIŞMANLIK VE BİLİMSEL DESTEK =================
  {
    slug: "proje-danismanlik",
    category: "Danışmanlık ve Bilimsel Destek",
    name: "Proje Danışmanlığı",
    heroDescription: "Akademik ve AR-GE projeleriniz için fikir aşamasından yöntem planlamasına kapsamlı destek.",
    description: "Proje Danışmanlığı, araştırma fikirlerinizin uygulanabilir deneysel kurgulara dönüştürülmesi ve teknik gereksinimlerinin belirlenmesi sürecidir. AR-GE fonları ve akademik başvurular için gerekli teknik yöntemlerin planlanmasını kapsar.",
    importance: "Araştırma hedefine uygun laboratuvar analizlerinin ve doğru kontrollerin baştan planlanması, kaynakların verimli kullanımı ve projenin bilimsel geçerliliği için esastır.",
    deliverables: ["Teknik rapor", "Analiz tabloları", "İstatistiksel sonuçlar"],
    applicationAreas: ["AR-GE çalışmaları", "Akademik araştırmalar", "Biyomedikal araştırmalar", "Deneysel biyoloji", "Biyoteknoloji"],
    scope: ["Veri değerlendirme", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / veri değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Yöntem ve çalışma planının oluşturulması", "Raporlama"],
    requiredInfo: ["Proje konusu", "Araştırma amacı", "Hipotez", "Mevcut aşama", "İhtiyaç duyulan destek", "Kullanılacak yöntemler", "Numune/veri durumu", "Beklenen çıktı"],
    qualityControl: ["Deneysel kalite kontrol"],
    whyCoreGen: "Proje bazlı çalışma anlayışımızla akademik araştırmacıların vizyonunu, teknik laboratuvar deneyimimizle birleştiriyoruz.",
    faqs: [
      { question: "Fikir aşamasındaki projeler için danışmanlık veriyor musunuz?", answer: "Evet, araştırma fikrinin deneysel olarak nasıl kurgulanacağı planlanabilir." },
      { question: "Kullanılacak laboratuvar yöntemlerine karar veriyor musunuz?", answer: "Projenin amacına ulaşması için en uygun ve maliyet-etkin yöntemler birlikte belirlenir." },
      { question: "Örnek sayılarını planlayabiliyor muyuz?", answer: "İstatistiksel gücü sağlamak adına doğru örnek ve tekrar sayıları için destek verilmektedir." },
      { question: "Görüşmeler nasıl gerçekleştiriliyor?", answer: "Proje kapsamına göre online veya uygun şartlarda planlanmış toplantılarla yürütülmektedir." },
      { question: "Sonuç olarak ne teslim edilecek?", answer: "Danışmanlık sürecinin sonunda belirlenen planları ve teknik değerlendirmeleri içeren bir rapor sunulur." }
    ]
  },
  {
    slug: "yerinde-hizmet-modulu",
    category: "Danışmanlık ve Bilimsel Destek",
    name: "Yerinde Hizmet Modülü",
    heroDescription: "Laboratuvarınızdaki cihazların kullanımı, optimizasyon ve analiz süreçleri için uzman desteği.",
    description: "Yerinde Hizmet Modülü, araştırma projelerinizdeki deneysel adımların, kurumunuzun altyapısı ve cihazları kullanılarak bir uzman eşliğinde gerçekleştirilmesi veya optimize edilmesi hizmetidir.",
    importance: "Dışarı çıkarılamayan numuneler veya kurum içi cihaz eğitimleri için, deneyimli bir laboratuvar perspektifiyle sorunların anında çözülmesi ve sürecin standartlaştırılması sağlanır.",
    deliverables: ["Teknik rapor", "İstatistiksel sonuçlar", "Analiz tabloları"],
    applicationAreas: ["Deneysel biyoloji", "Biyomedikal AR-GE", "Akademik araştırmalar", "Hücresel çalışmalar", "Biyoteknoloji"],
    scope: ["Veri değerlendirme", "Kalite kontrol", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / veri değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Yöntem ve çalışma planının oluşturulması", "Laboratuvar veya veri analizi süreci", "Kalite kontrol", "Raporlama"],
    requiredInfo: ["Kurum", "Şehir", "Laboratuvar altyapısı", "Hizmetin yapılacağı alan", "İstenen işlem", "Cihaz/ekipman", "Personel durumu", "Tahmini süre", "Tercih edilen tarih", "Teknik ihtiyaçlar"],
    qualityControl: ["Deneysel kalite kontrol"],
    whyCoreGen: "Araştırma laboratuvarlarının dinamiklerini anlıyor, teknik değerlendirme yaklaşımıyla kurumunuzun kaynaklarını en verimli şekilde kullanmanıza yardımcı oluyoruz.",
    faqs: [
      { question: "Hangi şehirlere yerinde destek sağlıyorsunuz?", answer: "Proje kapsamına ve planlamaya bağlı olarak uygun değerlendirmeler yapılmaktadır." },
      { question: "Sadece cihaz kullanımı için destek alabilir miyiz?", answer: "Evet, belirli bir cihazın deney kurgusuna uygun optimizasyonu için destek planlanabilir." },
      { question: "Gerekli sarf malzemelerini biz mi sağlamalıyız?", answer: "Sarf malzemelerinin temini teklif aşamasında laboratuvar altyapınıza göre planlanır." },
      { question: "Analiz sonuçları laboratuvarımızda mı değerlendirilecek?", answer: "Veri değerlendirme işlemleri ihtiyaca göre yerinde veya uzaktan raporlama ile sağlanabilir." },
      { question: "Önceden bir planlama toplantısı yapılıyor mu?", answer: "Hizmetin eksiksiz yürümesi için cihaz ve altyapı durumu önceden görüşülür." }
    ]
  },
  {
    slug: "kurumsal-ve-akademik-egitimler",
    category: "Danışmanlık ve Bilimsel Destek",
    name: "Kurumsal ve Akademik Eğitimler",
    heroDescription: "Araştırma ekiplerinin laboratuvar teknikleri ve veri analizi konularında teorik/uygulamalı eğitimi.",
    description: "Kurumsal ve Akademik Eğitimler, moleküler biyoloji, hücre kültürü veya biyoinformatik veri analizi süreçlerinde araştırmacıların veya kurum personelinin teknik kapasitelerinin artırılmasına yönelik planlanmış eğitimlerdir.",
    importance: "Araştırma laboratuvarlarında çalışan personelin güncel tekniklere ve kalite kontrol prensiplerine hakim olması, üretilen bilimsel verinin güvenilirliği için kritik öneme sahiptir.",
    deliverables: ["Teknik rapor"],
    applicationAreas: ["Akademik araştırmalar", "Biyoteknoloji", "Biyomedikal AR-GE", "Deneysel biyoloji", "Veri analizi"],
    scope: ["Veri değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / numune / veri değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Yöntem ve çalışma planının oluşturulması", "Raporlama"],
    requiredInfo: ["Eğitim konusu", "Katılımcı sayısı", "Katılımcı profili", "Temel / orta / ileri seviye", "Online / yüz yüze", "Eğitim süresi", "Uygulamalı eğitim ihtiyacı", "Tercih edilen tarih"],
    qualityControl: ["Deneysel kalite kontrol"],
    whyCoreGen: "Eğitimler standart paketlerden ziyade, katılımcıların araştırma profiline ve laboratuvarın teknik gereksinimlerine göre kişiselleştirilebilir bir anlayışla kurgulanır.",
    faqs: [
      { question: "Eğitimler uygulamalı (hands-on) olarak veriliyor mu?", answer: "İhtiyaca ve kurum altyapısına göre hem teorik hem uygulamalı eğitimler planlanabilir." },
      { question: "Biyoinformatik eğitimleriniz mevcut mu?", answer: "Veri analizine giriş veya NGS veri işleme süreçlerini kapsayan eğitim desteklerimiz bulunmaktadır." },
      { question: "Online eğitim seçenekleriniz var mı?", answer: "Teorik veya veri analizi eğitimleri online oturumlar şeklinde düzenlenebilmektedir." },
      { question: "Katılımcı profilinin nasıl olması bekleniyor?", answer: "Temel, orta veya ileri seviye araştırmacı profilinize uygun içerik hazırlanır." },
      { question: "Eğitim içeriğine biz karar verebilir miyiz?", answer: "Eğitim konuları, araştırma amaçlarınız doğrultusunda birlikte belirlenebilir." }
    ]
  },
  {
    slug: "deney-tasarimi",
    category: "Danışmanlık ve Bilimsel Destek",
    name: "Deney Tasarımı",
    heroDescription: "Bilimsel hipotezlerinizin sınanması için istatistiksel gücü yüksek araştırma planlarının oluşturulması.",
    description: "Deney Tasarımı, bir araştırma sorusuna yanıt verebilmek için hangi laboratuvar yöntemlerinin kullanılacağının, uygun kontrol gruplarının ve tekrar sayılarının (biyolojik/teknik) metodolojik olarak planlanması sürecidir.",
    importance: "Yanlış kurgulanmış bir deney tasarımı, yüksek bütçeli laboratuvar çalışmalarından elde edilen verilerin istatistiksel olarak anlamsız kalmasına neden olabilir. Doğru tasarım zaman ve kaynak israfını önler.",
    deliverables: ["Teknik rapor", "Analiz tabloları", "İstatistiksel sonuçlar"],
    applicationAreas: ["Akademik araştırmalar", "Biyomedikal araştırmalar", "Moleküler araştırmalar", "Deneysel biyoloji", "İlaç araştırmaları"],
    scope: ["Veri değerlendirme", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / numune / veri değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Yöntem ve çalışma planının oluşturulması", "Kalite kontrol", "Raporlama"],
    requiredInfo: ["Araştırma amacı", "Hipotez", "Gruplar", "Örnek sayısı", "Kontrol grupları", "Tekrar sayısı", "Ölçülecek parametreler", "Mevcut protokol", "Beklenen çıktı"],
    qualityControl: ["Deneysel kalite kontrol"],
    whyCoreGen: "Laboratuvar pratiğine ve istatistiksel geçerliliğe hakimiyetimizle, araştırmalarınızı AR-GE odaklı ve metodolojik olarak güçlü bir yapıya kavuşturuyoruz.",
    faqs: [
      { question: "Örneklem büyüklüğüne (sample size) karar verilmesinde yardımcı oluyor musunuz?", answer: "Evet, beklenen istatistiksel güce göre gerekli örnek sayısı değerlendirilmektedir." },
      { question: "Hangi kontrol gruplarını kullanmam gerektiğine destek alabilir miyim?", answer: "Pozitif, negatif ve no-template gibi gerekli tüm teknik/biyolojik kontroller planlanır." },
      { question: "Laboratuvar yöntemlerini de siz mi belirliyorsunuz?", answer: "Araştırma hedefinize ulaşmak için en uygun laboratuvar teknikleri birlikte saptanır." },
      { question: "Eski bir protokolü revize edebilir miyiz?", answer: "Mevcut araştırma protokolleriniz incelenerek optimize edilmesi sağlanabilir." },
      { question: "Çıktı olarak ne alacağım?", answer: "Deneyinizin metodolojisini, gruplarını ve yöntem adımlarını içeren bir tasarım raporu sunulur." }
    ]
  },
  {
    slug: "istatistiksel-analiz",
    category: "Danışmanlık ve Bilimsel Destek",
    name: "İstatistiksel Analiz",
    heroDescription: "Laboratuvar ve deney verilerinizin akademik araştırmalara uygun istatistiksel testlerle değerlendirilmesi.",
    description: "İstatistiksel Analiz, in vitro veya moleküler düzeyde elde edilmiş laboratuvar verilerinin (qPCR, ELISA, viabilite vb.) uygun testler kullanılarak anlamlandırılması, p-değerlerinin hesaplanması ve analiz edilmesidir.",
    importance: "Bilimsel yayınların kabulünde verilerin doğru istatistiksel yöntemle (parametrik/non-parametrik) sınanması ve düzgün ifade edilmesi vazgeçilmezdir.",
    deliverables: ["İstatistiksel sonuçlar", "Grafikler", "Analiz tabloları", "Teknik rapor"],
    applicationAreas: ["Veri analizi", "Akademik araştırmalar", "Biyomedikal araştırmalar", "Deneysel biyoloji", "Moleküler araştırmalar"],
    scope: ["Veri değerlendirme", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / veri değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Veri değerlendirme", "Sonuçların hazırlanması", "Raporlama"],
    requiredInfo: ["Veri türü", "Örnek sayısı", "Grup sayısı", "Veri formatı", "Kullanılan deney", "İstenen karşılaştırmalar", "Daha önce analiz yapıldı mı?", "Grafik ihtiyacı", "İstatistiksel yöntem tercihi varsa"],
    qualityControl: ["Veri bütünlüğü"],
    whyCoreGen: "Biyolojik bilimler altyapısına sahip olmamız sayesinde; verilerinizi salt rakamlar olarak değil, laboratuvar deneyinin amacına uygun şekilde bilimsel olarak değerlendiriyoruz.",
    faqs: [
      { question: "Hangi istatistiksel testleri uyguluyorsunuz?", answer: "Veri dağılımına (normallik) göre t-test, ANOVA veya uygun non-parametrik testler kullanılır." },
      { question: "Sadece verilerimi göndersem olur mu?", answer: "Verilerin yanı sıra deney gruplarının tanımları (metadata) ve karşılaştırma hedefleriniz gereklidir." },
      { question: "Araştırma makaleleri için grafik hazırlıyor musunuz?", answer: "İhtiyacınıza göre yayın kalitesinde (bar, boxplot, scatter vb.) grafikler oluşturulabilir." },
      { question: "qPCR verilerimi istatistiksel analiz için gönderebilir miyim?", answer: "Evet, Ct verilerinden itibaren ΔΔCt hesaplamaları ve istatistiksel analizi yapılabilmektedir." },
      { question: "Sonuçlar nasıl teslim ediliyor?", answer: "Analiz sonuçları, test detaylarını ve p değerlerini gösteren akademik tablolar halinde sunulur." }
    ]
  },
  {
    slug: "bilimsel-raporlama",
    category: "Danışmanlık ve Bilimsel Destek",
    name: "Bilimsel Raporlama",
    heroDescription: "Elde edilen analiz sonuçlarının projeleriniz veya yayınlarınız için akademik dilde hazırlanması.",
    description: "Bilimsel Raporlama, laboratuvarda veya biyoinformatik aşamalarda tamamlanmış çalışmalarınızın yöntem (methodology) kısımlarının, elde edilen verilerin ve grafiklerin araştırma diliyle derlenmesi sürecidir.",
    importance: "Deney ne kadar başarılı olursa olsun, kullanılan yöntemlerin uluslararası standartlarda ve açık bir şekilde yazılması araştırmanın bilimselliğini kanıtlar.",
    deliverables: ["Teknik rapor", "Grafikler", "Analiz tabloları", "İstatistiksel sonuçlar"],
    applicationAreas: ["Akademik araştırmalar", "AR-GE çalışmaları", "Biyomedikal araştırmalar", "Biyoteknoloji", "Veri analizi"],
    scope: ["Veri değerlendirme", "Raporlama", "İstatistiksel değerlendirme"],
    workflowSteps: ["Proje / veri değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Veri değerlendirme", "Sonuçların hazırlanması", "Raporlama"],
    requiredInfo: ["Proje konusu", "Veri türü", "Mevcut sonuçlar", "Rapor formatı", "Hedef kitle", "İstenen kapsam", "Teslim tarihi"],
    qualityControl: ["Veri bütünlüğü"],
    whyCoreGen: "Laboratuvar deneyimimizi raporlama tekniklerine yansıtarak, analiz yöntemlerinin yayın standartlarında akademik bir üslupla ifade edilmesini sağlıyoruz.",
    faqs: [
      { question: "Raporlar İngilizce hazırlanabilir mi?", answer: "İhtiyacınıza göre Türkçe veya İngilizce akademik raporlama seçenekleri sunulabilir." },
      { question: "Kendi laboratuvarımda yaptığım deneyin raporlaması için destek alabilir miyim?", answer: "Kullanılan protokoller ve ham veriler paylaşıldığı takdirde yöntem ve bulgular yazılabilir." },
      { question: "Raporlar hangi bölümleri kapsıyor?", answer: "Genellikle Materyal & Metod, Bulgular ve grafik/tablo gösterimlerini içerir." },
      { question: "Sürece grafik hazırlama dahil mi?", answer: "Verilerin yayına uygun grafik formatlarına dönüştürülmesi hizmete eklenebilir." },
      { question: "Teslim süresi ne kadardır?", answer: "Mevcut verinin hacmine ve istenen kapsama göre karşılıklı planlanmaktadır." }
    ]
  },
  {
    slug: "yayin-danismanligi",
    category: "Danışmanlık ve Bilimsel Destek",
    name: "Yayın Danışmanlığı",
    heroDescription: "Araştırma makalelerinizin hazırlanması, taslak revizyonları ve yayın süreçlerine yönelik bilimsel destek.",
    description: "Yayın Danışmanlığı, tamamlanmış araştırmalarınızın taslak makale haline getirilmesi, yapısal olarak düzenlenmesi, dergi formatına uyarlanması veya hakem revizyon süreçlerinde (rebuttal) teknik destek sağlanması hizmetidir.",
    importance: "İyi bir araştırma verisinin hakemli dergilerde kabul görmesi için mantıksal kurgu, doğru referanslandırma ve bulguların etkili sunumu büyük önem taşır.",
    deliverables: ["Teknik rapor"],
    applicationAreas: ["Akademik araştırmalar", "Biyomedikal AR-GE", "Moleküler araştırmalar", "Veri analizi", "İlaç araştırmaları"],
    scope: ["Veri değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / veri değerlendirmesi", "Yöntem ve çalışma planının oluşturulması", "Raporlama"],
    requiredInfo: ["Makale konusu", "Hedef dergi", "Makale aşaması", "Mevcut taslak", "Veri durumu", "İstatistik durumu", "Şekil/tablo durumu", "İstenen danışmanlık kapsamı"],
    qualityControl: ["Veri bütünlüğü"],
    whyCoreGen: "Akademik dünyayı yakından tanıyan uzmanlarımızla; verilerinizi daha etkili sunmanıza ve yayın kabul ihtimalinizi teknik raporlama yaklaşımıyla güçlendirmenize olanak tanıyoruz.",
    faqs: [
      { question: "Makalemi sıfırdan sizin mi yazmanız mümkün?", answer: "Danışmanlık hizmetimiz, verileriniz ve mevcut notlarınız üzerinden bilimsel taslağın kurgulanmasına destek vermeyi amaçlar." },
      { question: "Hakem yanıtı (rebuttal) için destek alabilir miyim?", answer: "Evet, hakemlerin istediği ek analizler veya mantıksal açıklamaların hazırlanmasında mentorluk sağlanır." },
      { question: "Şekil (Figure) düzenlemeleri hizmete dahil mi?", answer: "Görsellerinizin dergi kılavuzlarına (DPI, format vb.) uyarlanması planlamaya dahil edilebilir." },
      { question: "İstatistik eksikleri varsa tamamlanabilir mi?", answer: "Yayın danışmanlığı ile istatistiksel analiz hizmetlerimiz entegre olarak yürütülebilir." },
      { question: "Destek İngilizce makaleler için geçerli mi?", answer: "Evet, İngilizce taslaklar üzerinden yapısal ve akademik kurgu desteği verilmektedir." }
    ]
  },

  // ================= 6. BİYOKİMYA VE PATOLOJİ =================
  {
    slug: "oksidatif-stres-analizleri",
    category: "Biyokimya ve Patoloji",
    name: "Oksidatif Stres Analizleri",
    heroDescription: "Hücre veya doku örneklerinizde redoks durumu ve antioksidan kapasitesinin araştırılması.",
    description: "Oksidatif Stres Analizleri; serbest radikal hasarının (lipid peroksidasyon, protein oksidasyonu) ve enzimatik/non-enzimatik antioksidan kapasitenin kolorimetrik ve florometrik kitlerle ölçülmesine dayanır. Proje gereksinimlerine göre TAS, TOS, SOD, GPx, GSH, CAT veya MDA (TBARS) gibi parametreler deneysel olarak incelenir.",
    importance: "Oksidatif stres, hücresel yaşlanmadan patolojik değişimlere kadar birçok mekanizmanın merkezindedir. Örnek hazırlama (homojenizasyon) adımlarının doğru uygulanması analizin başarısı için kritiktir.",
    deliverables: ["Konsantrasyon ölçümleri", "Analiz tabloları", "İstatistiksel sonuçlar", "Grafikler", "Teknik rapor"],
    applicationAreas: ["Biyomedikal araştırmalar", "İlaç araştırmaları", "Hücresel çalışmalar", "Deneysel biyoloji", "Akademik araştırmalar"],
    scope: ["Numune kabulü", "Numune hazırlama", "Deney", "Konsantrasyon ölçümü", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / numune / veri değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Yöntem ve çalışma planının oluşturulması", "Laboratuvar veya veri analizi süreci", "Kalite kontrol", "Sonuçların hazırlanması", "Raporlama"],
    requiredInfo: ["Hedef analiz/parametre", "Örnek türü", "Örnek sayısı", "Gruplar", "Biyolojik tekrar", "Teknik tekrar", "Numune miktarı", "Numune saklama koşulları", "Kit/reaktif durumu", "Kit CoreGen tarafından mı sağlanacak?", "Kit müşteri tarafından mı sağlanacak?", "İstenen analiz", "İstatistik", "Grafik", "Raporlama"],
    qualityControl: ["Numune uygunluğu", "Deneysel kalite kontrol", "Teknik tekrarlar", "Pozitif/negatif kontroller"],
    whyCoreGen: "Hücre lizatlarından serum ve doku homojenizatlarına kadar örnek türüne uygun optimizasyonlar yaparak araştırma sonuçlarının doğruluğunu artırıyoruz.",
    faqs: [
      { question: "Kitleri bizim mi temin etmemiz gerekiyor?", answer: "Çalışma amacınıza uygun ticari kitler projelendirme kapsamında CoreGen tarafından temin edilebilir." },
      { question: "Hem MDA hem SOD aynı örnekten çalışılabilir mi?", answer: "Numune hacmi yeterliyse aynı doku/hücre örneğinden farklı parametrelerin ölçümü yapılabilir." },
      { question: "Örneklerimi nasıl göndermeliyim?", answer: "Doku veya sıvılar mutlaka kuru buz eşliğinde ve uygun donma koşullarında iletilmelidir." },
      { question: "İstatistik analiz sonuçlara dahil mi?", answer: "Araştırma gruplarınız arasındaki anlamlılık testleri analiz raporuna dahil edilebilir." },
      { question: "Homojenizasyon işlemi laboratuvarınızda yapılıyor mu?", answer: "Evet, doku örnekleri için uygun lizis tamponları ile homojenizasyon uygulanmaktadır." }
    ]
  },
  {
    slug: "biyokimya-test-analizleri",
    category: "Biyokimya ve Patoloji",
    name: "Biyokimya Test Analizleri",
    heroDescription: "Deney modellerinde temel metabolik belirteçlerin, enzim ve substrat düzeylerinin kolorimetrik ölçümü.",
    description: "Biyokimya Test Analizleri, in vivo veya in vitro araştırma örneklerinde (serum, plazma, lizat) karaciğer, böbrek fonksiyon testleri veya lipid profilleri gibi temel metabolit düzeylerinin araştırma amacıyla analiz edilmesini kapsar.",
    importance: "Biyomedikal modellerde uygulanan ilaçların veya diyetlerin hücresel metabolizma üzerindeki etkilerinin nicel olarak doğrulanmasında temel yöntemdir.",
    deliverables: ["Konsantrasyon ölçümleri", "Analiz tabloları", "İstatistiksel sonuçlar", "Teknik rapor"],
    applicationAreas: ["Biyomedikal araştırmalar", "Deneysel biyoloji", "İlaç araştırmaları", "Moleküler araştırmalar", "Akademik araştırmalar"],
    scope: ["Numune kabulü", "Numune hazırlama", "Deney", "Konsantrasyon ölçümü", "Kalite kontrol", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / numune değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Laboratuvar süreci", "Kalite kontrol", "Veri değerlendirme", "Raporlama"],
    requiredInfo: ["Hedef parametre", "Örnek türü", "Örnek sayısı", "Gruplar", "Tekrar", "Numune miktarı", "İstenen test paneli", "Kit/reaktif durumu", "Özel yöntem", "İstatistik", "Raporlama"],
    qualityControl: ["Numune uygunluğu", "Konsantrasyon kontrolü", "Deneysel kalite kontrol", "Teknik tekrarlar"],
    whyCoreGen: "Özellikle küçük hacimli laboratuvar hayvanı veya hücre kültürü numuneleri için mikro hacimli çalışma planlaması yaparak örnek kaybını önlüyoruz.",
    faqs: [
      { question: "İnsan dışı örneklerden analiz yapıyor musunuz?", answer: "Evet, analizlerimiz ağırlıklı olarak hücre kültürü ve deney hayvanı (AR-GE) modellerine yöneliktir." },
      { question: "Hangi parametreler ölçülebilir?", answer: "Glikoz, ALT, AST, Trigliserit, Kolesterol gibi birçok temel metabolit paneli çalışılabilir." },
      { question: "Çok düşük hacimli örneklerle çalışmak mümkün mü?", answer: "Hizmete özel mikroplaka (96-well) formatları ile düşük hacim optimizasyonları sağlanmaktadır." },
      { question: "Kit temini size mi ait?", answer: "Biyokimyasal parametreler için gerekli reaktifler teklif sürecinde planlanarak temin edilebilir." },
      { question: "Raporlama nasıl sunuluyor?", answer: "Ham absorbans değerlerinin yanı sıra birimlere çevrilmiş tablolar ile sunulmaktadır." }
    ]
  },
  {
    slug: "spesifik-test-analizleri",
    category: "Biyokimya ve Patoloji",
    name: "Spesifik Test Analizleri",
    heroDescription: "Vitamin, mineral, eser element ve belirli küçük metabolitlerin araştırma düzeyinde ileri ölçümleri.",
    description: "Spesifik Test Analizleri, standart kitlerin yetersiz kaldığı durumlarda veya ileri hassasiyet gerektiren (vitaminler, ağır metaller, hormonlar vb.) analitlerin analitik yöntemlerle (HPLC, LC-MS/MS, ICP-MS) veya özelleşmiş kitlerle incelenmesini kapsar.",
    importance: "Düşük saptanma limitlerine (LOD) ihtiyaç duyulan toksikolojik veya fizyolojik AR-GE araştırmalarında, ölçüm hassasiyeti ve doğruluğu kritik önemdedir.",
    deliverables: ["Konsantrasyon ölçümleri", "Analiz tabloları", "İstatistiksel sonuçlar", "Teknik rapor"],
    applicationAreas: ["Akademik araştırmalar", "İlaç araştırmaları", "Biyomedikal AR-GE", "Biyoteknoloji", "Deneysel biyoloji"],
    scope: ["Numune kabulü", "Numune hazırlama", "Konsantrasyon ölçümü", "Veri analizi", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / numune değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Yöntem ve çalışma planının oluşturulması", "Laboratuvar süreci", "Veri değerlendirme", "Raporlama"],
    requiredInfo: ["Hedef analit", "Örnek türü", "Örnek sayısı", "Örnek miktarı", "Gruplar", "Tekrar", "İstenen yöntem varsa", "Kit/reaktif durumu", "Sonuç birimi", "Raporlama"],
    qualityControl: ["Numune uygunluğu", "Deneysel kalite kontrol", "Konsantrasyon kontrolü"],
    whyCoreGen: "Projenizin spesifik hedefine uygun olarak analitik yöntemin doğru seçilmesi için teknik değerlendirme ve proje bazlı laboratuvar desteği veriyoruz.",
    faqs: [
      { question: "Hangi spesifik testleri çalışıyorsunuz?", answer: "Eser elementler, suda/yağda çözünen vitaminler ve özel hücresel metabolitler üzerine hizmet sunulmaktadır." },
      { question: "İstediğim analiz için LC-MS/MS şart mı?", answer: "Çalışma amacınıza göre ELISA veya spektrofotometrik kit alternatifleri de araştırılabilir." },
      { question: "Numune saklama koşulları önemli midir?", answer: "Evet, özellikle vitaminler gibi ışığa/ısıya duyarlı hedefler için size özel numune kabul kriterleri iletilir." },
      { question: "Teslimat formatı nedir?", answer: "Kantitatif sonuçlar analiz raporuyla birlikte istatistiksel kullanıma hazır halde iletilir." },
      { question: "Doku örneklerinden ölçüm yapılabilir mi?", answer: "Doku homojenizasyonu adımları ile sıvılaştırılan numunelerde ölçüm gerçekleştirilebilir." }
    ]
  },
  {
    slug: "elisa-test-analizleri",
    category: "Biyokimya ve Patoloji",
    name: "Elisa Test Analizleri",
    heroDescription: "Biyokimyasal ve fizyolojik araştırmalar için çeşitli biyobelirteçlerin ELISA yöntemiyle ölçümü.",
    description: "Elisa Test Analizleri, deney modellerinizden elde edilen serum, plazma veya doku sıvısı örneklerinde immünolojik reaksiyonlara dayalı olarak protein, hormon ve enzim seviyelerinin kantitatif veya kalitatif değerlendirilmesidir.",
    importance: "Araştırma grupları arasında hastalığa veya müdahaleye bağlı ortaya çıkan hücresel/sistemik protein yanıtlarının güvenilir (spesifik) olarak karşılaştırılmasını sağlar.",
    deliverables: ["Konsantrasyon ölçümleri", "Analiz tabloları", "İstatistiksel sonuçlar", "Grafikler", "Teknik rapor"],
    applicationAreas: ["Biyomedikal araştırmalar", "Hücresel çalışmalar", "İlaç araştırmaları", "Deneysel biyoloji", "Akademik araştırmalar"],
    scope: ["Numune kabulü", "Numune hazırlama", "Deney", "Kalite kontrol", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / numune değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Laboratuvar süreci", "Kalite kontrol", "Veri değerlendirme", "Raporlama"],
    requiredInfo: ["Hedef analit", "Örnek türü", "Örnek sayısı", "Gruplar", "Biyolojik tekrar", "Teknik tekrar", "Tür", "Kit durumu", "Kit marka/katalog no", "Numune miktarı", "İstenen kantifikasyon", "Kontroller", "İstatistik", "Raporlama"],
    qualityControl: ["Numune uygunluğu", "Teknik tekrarlar", "Deneysel kalite kontrol", "Pozitif/negatif kontroller"],
    whyCoreGen: "Laboratuvar ortamında optimize edilen dilüsyon oranları ve titiz plaka planlaması ile araştırma materyalinizin sınırlı olduğu durumlarda en iyi verimi almanızı sağlar.",
    faqs: [
      { question: "ELISA için ticari kiti kendim alıp gönderebilir miyim?", answer: "Evet, araştırma hedefinize uygun kendi temin ettiğiniz kitlerle laboratuvar çalışması yürütülebilir." },
      { question: "Grup karşılaştırmaları raporlanıyor mu?", answer: "İstediğiniz istatistiksel değerlendirmelerle birlikte gruplar arası farklılıklar raporlanabilir." },
      { question: "Hem insan hem hayvan numuneleri çalışılıyor mu?", answer: "Sıçan, fare veya hücre kültürü kaynaklı AR-GE örnekleri için uygun kitlerle çalışılmaktadır." },
      { question: "Plaka optimizasyonu nasıl yapılıyor?", answer: "Blank, standart ve örnek tekrarları en az 2'li (duplicate) olacak şekilde dikkatle tasarlanır." },
      { question: "Sonuçlar için ne tür veriler alıyorum?", answer: "Absorbans (OD) değerleri ve konsantrasyona dönüştürülmüş hesaplama tabloları sunulur." }
    ]
  },
  {
    slug: "immunohistokimya-ihc-boyama",
    category: "Biyokimya ve Patoloji",
    name: "İmmünohistokimya (IHC) Boyama",
    heroDescription: "Doku kesitlerinde hedef antijen veya protein lokalizasyonunun araştırma amaçlı görüntülenmesi.",
    description: "İmmünohistokimya (IHC) Boyama, spesifik antikorlar aracılığıyla doku preparatlarındaki (parafin veya dondurulmuş kesitler) hücre içi veya hücre dışı proteinlerin görsel olarak tanımlanmasıdır. Biyobelirteçlerin doku dağılımını veya hastalık mekanizmalarını araştırmak için sıklıkla kullanılır.",
    importance: "Protein ifadesinin dokudaki topografik yerleşimini görmek, moleküler analizleri (Western Blot, qPCR) histopatolojik bulgularla desteklemek açısından çok değerlidir.",
    deliverables: ["Görüntüler", "Analiz tabloları", "Teknik rapor"],
    applicationAreas: ["Akademik araştırmalar", "Biyomedikal araştırmalar", "Moleküler araştırmalar", "İlaç araştırmaları", "Deneysel biyoloji"],
    scope: ["Numune kabulü", "Deney (Boyama)", "Görüntüleme", "Veri analizi", "Kalite kontrol", "Raporlama"],
    workflowSteps: ["Proje / numune değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Laboratuvar süreci", "Kalite kontrol", "Sonuçların hazırlanması", "Raporlama"],
    requiredInfo: ["Doku türü", "Organizma", "Örnek sayısı", "Doku durumu", "Parafin / frozen", "Kesitler hazır mı?", "Kesit hazırlanması gerekiyor mu?", "Hedef antijen/protein", "Primer antikor hazır mı?", "Antikor müşteri tarafından mı sağlanacak?", "CoreGen tarafından mı temin edilecek?", "Marka", "Katalog numarası", "Boyama yöntemi", "Kontroller", "Görüntüleme", "Görüntü analizi", "Nicel analiz", "Raporlama"],
    qualityControl: ["Numune uygunluğu", "Deneysel kalite kontrol", "Pozitif/negatif kontroller"],
    whyCoreGen: "Dokunun doğru fikse edilmesinden antikor optimizasyonuna kadar süreci teknik bir hassasiyetle yöneterek, arka planı (background) temiz, yüksek çözünürlüklü araştırma görüntüleri sağlıyoruz.",
    faqs: [
      { question: "Bloklardan kesit işlemini siz yapıyor musunuz?", answer: "Parafin veya dondurulmuş blok halinde gelen numunelerin kesit alma işlemleri dahil edilebilir." },
      { question: "Kullanılacak antikoru benim mi göndermem gerekiyor?", answer: "Araştırma hedefinize özgü antikorlar sizin tarafınızdan sağlanabilir veya araştırılarak temin edilebilir." },
      { question: "Görüntü analizi ve nicel değerlendirme mümkün mü?", answer: "Evet, uygun yazılımlar kullanılarak boyanma yoğunluğu/hücre sayıları gibi nicel analizler yapılabilir." },
      { question: "Negatif kontrol boyama yapıyor musunuz?", answer: "Spesifik olmayan boyanmayı (background) elemek için gerekli primer antikorsuz negatif kontroller uygulanır." },
      { question: "Sonuçlar raporlanıyor mu?", answer: "Elde edilen yüksek çözünürlüklü histolojik görüntüler teknik açıklamalarla teslim edilir." }
    ]
  },

  // ================= 7. HÜCRE KÜLTÜRÜ ANALİZLERİ =================
  {
    slug: "ilac-gelistirme-toksisite",
    category: "Hücre Kültürü Analizleri",
    name: "İlaç Geliştirme ve Toksisite Testleri",
    heroDescription: "Hücre hatlarında yeni bileşiklerin sitotoksisitesi ve biyouyumluluğunun in vitro araştırılması.",
    description: "İlaç Geliştirme ve Toksisite Testleri; kanser, kök hücre veya normal doku hücre hatları kullanılarak, sentezlenen yeni moleküllerin, ekstrelerin veya ilaç formülasyonlarının hücre canlılığı üzerindeki doz ve zamana bağlı etkilerini (MTT, XTT, WST-1, LDH) deneysel olarak değerlendirir.",
    importance: "İn vivo (hayvan) deneyleri öncesinde potansiyel ilaç adaylarının güvenlik sınırlarını (IC50 / EC50) belirlemek ve etki mekanizmalarını hücresel düzeyde incelemek için öncül AR-GE adımıdır.",
    deliverables: ["Analiz tabloları", "İstatistiksel sonuçlar", "Grafikler", "Teknik rapor"],
    applicationAreas: ["İlaç araştırmaları", "Biyomedikal araştırmalar", "Hücresel çalışmalar", "Biyoteknoloji", "Akademik araştırmalar"],
    scope: ["Numune hazırlama", "Deney", "Kalite kontrol", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / numune değerlendirmesi", "Yöntem ve çalışma planının oluşturulması", "Laboratuvar süreci", "Kalite kontrol", "Veri değerlendirme", "Raporlama"],
    requiredInfo: ["Hücre hattı", "Hücre kaynağı", "Hücreler hazır mı?", "Test edilecek bileşik/ilaç", "Konsantrasyonlar", "Doz aralığı", "Maruziyet süresi", "Kontrol grupları", "Tekrar sayısı", "Test edilecek endpoint", "Canlılık / proliferasyon / apoptoz / diğer", "İstenen analiz", "İstatistik"],
    qualityControl: ["Deneysel kalite kontrol", "Teknik tekrarlar", "Pozitif/negatif kontroller"],
    whyCoreGen: "Hücre ekimi aşamasından dozlama kurgusuna kadar tüm in vitro süreci araştırma odaklı istatistiksel güvenilirliği (biyolojik ve teknik tekrarlar) sağlayacak şekilde projelendiriyoruz.",
    faqs: [
      { question: "Test edilecek maddeyi (ilaç/ekstre) nasıl iletmeliyim?", answer: "Hücre kültürüne uygulanabilmesi için çözünürlük bilgisi ile birlikte steril formda veya uygun koşullarda gönderilmelidir." },
      { question: "Hücre hattı temini yapıyor musunuz?", answer: "Yaygın kullanılan insan/fare hücre hatları sağlanabilir, projeye özgü özel hatlar görüşülmelidir." },
      { question: "IC50 hesaplaması yapıyor musunuz?", answer: "Evet, doz-yanıt eğrileri (Dose-Response) oluşturularak IC50 veya EC50 değerleri istatistiksel olarak hesaplanır." },
      { question: "Hangi toksisite testleri kullanılmaktadır?", answer: "MTT veya XTT gibi enzimatik canlılık testlerinin yanı sıra apoptoz araştırmaları planlanabilir." },
      { question: "Zaman noktaları (time-point) nasıl belirleniyor?", answer: "İhtiyacınıza göre 24, 48, 72 saat gibi farklı maruziyet süreleri çalışma planına eklenebilir." }
    ]
  },
  {
    slug: "hucre-kulturu-elisa",
    category: "Hücre Kültürü Analizleri",
    name: "Hücre Kültürü Tabanlı ELISA Uygulamaları",
    heroDescription: "Hücre süpernatanı ve lizatlarında hedef moleküllerin araştırma amaçlı kantitatif ölçümü.",
    description: "Hücre Kültürü Tabanlı ELISA; in vitro ortamda büyütülen hücrelerin çevrelerine (besiyerine) salgıladıkları sitokin, kemokin veya hücresel strese bağlı markerların immünolojik yöntemlerle miktar analizinin yapılmasıdır.",
    importance: "Sadece hücrenin canlı kalıp kalmadığını değil, test edilen moleküllerin hücresel sinyal ve inflamatuar yanıt oluşturup oluşturmadığını anlamak için kritiktir.",
    deliverables: ["Konsantrasyon ölçümleri", "Analiz tabloları", "İstatistiksel sonuçlar", "Grafikler", "Teknik rapor"],
    applicationAreas: ["Hücre kültürü çalışmaları", "İlaç araştırmaları", "Biyomedikal araştırmalar", "Akademik araştırmalar", "Moleküler araştırmalar"],
    scope: ["Numune hazırlama", "Deney", "Konsantrasyon ölçümü", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Teknik gereksinimlerin belirlenmesi", "Yöntem ve çalışma planının oluşturulması", "Laboratuvar süreci", "Veri değerlendirme", "Raporlama"],
    requiredInfo: ["Hücre tipi", "Hücre hattı", "Analit/hedef", "Kültür koşulları", "Örnek sayısı", "Gruplar", "Biyolojik tekrar", "Teknik tekrar", "ELISA kiti", "Kit durumu", "İstenen sonuç", "İstatistik", "Raporlama"],
    qualityControl: ["Deneysel kalite kontrol", "Teknik tekrarlar", "Numune uygunluğu"],
    whyCoreGen: "Hücre kültürü ortamından (medyum) kaynaklanan arka plan sorunlarını minimize edecek doğru standardizasyon adımlarını uygulayarak güvenilir araştırma verisi üretir.",
    faqs: [
      { question: "Kültür süpernatanlarını nasıl göndermeliyim?", answer: "Besiyerleri steril bir şekilde toplanıp, dondurularak (kuru buz eşliğinde) laboratuvara ulaştırılmalıdır." },
      { question: "Hücre lizatlarından ölçüm yapılabilir mi?", answer: "Evet, hücre dışına salgılanmayan hücre içi (intracellular) proteinlerin de ölçümü için optimizasyon yapılmaktadır." },
      { question: "Standart eğri verileri dahil ediliyor mu?", answer: "Tüm ELISA ölçümlerimizde hesaplamalara baz olan standart eğriler rapor içeriğinde sunulur." },
      { question: "Hücre ekimi ve muamelesi işlemlerini siz yapabilir misiniz?", answer: "Talep edildiğinde, hücrelerin kültüre edilip ilaç/etken madde uygulamalarının (treatment) yapılması süreci de dahil edilebilir." },
      { question: "İstatistik analiz mümkün mü?", answer: "Gruplar arasındaki ifade/salınım farklılıkları istatistiksel testlerle değerlendirilmektedir." }
    ]
  },
  {
    slug: "proliferasyon-migrasyon",
    category: "Hücre Kültürü Analizleri",
    name: "Proliferasyon ve Migrasyon (Yara İyileşmesi) Deneyleri",
    heroDescription: "Hücrelerin çoğalma ve göç yeteneklerinin in vitro araştırma modelleri ile incelenmesi.",
    description: "Proliferasyon ve Migrasyon Deneyleri, onkolojik veya yara iyileşmesi (wound healing) modellerinde hücrelerin bölünüp çoğalma kapasiteleri ile iki boyutlu (2D) alanda hareket etme yeteneklerinin scratch (çizik) assay gibi tekniklerle izlenip görselleştirilmesidir.",
    importance: "Kanser hücrelerinin metastatik potansiyelini değerlendirmek veya yeni doku yenileyici materyallerin etkisini ölçmek için en temel in vitro fonksiyonel testlerden biridir.",
    deliverables: ["Görüntüler", "Analiz tabloları", "İstatistiksel sonuçlar", "Grafikler", "Teknik rapor"],
    applicationAreas: ["Hücresel çalışmalar", "İlaç araştırmaları", "Biyomedikal AR-GE", "Deneysel biyoloji", "Akademik araştırmalar"],
    scope: ["Numune hazırlama", "Deney", "Görüntüleme", "Veri analizi", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Teknik gereksinimlerin belirlenmesi", "Yöntem ve çalışma planının oluşturulması", "Laboratuvar süreci", "Kalite kontrol", "Veri değerlendirme", "Raporlama"],
    requiredInfo: ["Hücre hattı", "Deney amacı", "Tedavi/bileşik", "Konsantrasyon", "Kontrol", "Grup sayısı", "Tekrar", "Zaman noktaları", "Görüntüleme", "Görüntü analizi", "Migrasyon/proliferasyon ölçümü", "İstatistik", "Raporlama"],
    qualityControl: ["Deneysel kalite kontrol", "Teknik tekrarlar"],
    whyCoreGen: "Görüntüleme işlemlerini standartlaştırarak hücre göç alanlarının (gap closure) nicel ölçümlerini (ImageJ vb.) objektif ve akademik raporlamaya uygun şekilde gerçekleştirir.",
    faqs: [
      { question: "Hücre göçü fotoğrafları analiz raporunda sunuluyor mu?", answer: "0. ve belirlenen (örn: 24. 48.) saatlerde çekilen karşılaştırmalı mikroskopi görüntüleri sunulmaktadır." },
      { question: "Yara kapanma (gap closure) oranı sayısal olarak veriliyor mu?", answer: "Evet, çizik alanının yazılımlar aracılığıyla ölçülerek kapanma yüzdeleri istatistiksel hesaplanır." },
      { question: "Farklı konsantrasyonlarda denemeler yapılabilir mi?", answer: "İlaç veya maddenin farklı doz gruplarında etkisi bağımsız olarak araştırılabilir." },
      { question: "Sadece migrasyon mu bakılıyor?", answer: "Kültür şartlarına göre migrasyonla birlikte genel hücre çoğalması (proliferasyon) da ayrıca ölçülebilir." },
      { question: "Çalışma ne kadar zaman almaktadır?", answer: "Hücre hattının büyüme hızına ve planlanan deney süresine göre takvim belirlenir." }
    ]
  },
  {
    slug: "genetik-muhendisligi-transfeksiyon",
    category: "Hücre Kültürü Analizleri",
    name: "Genetik Mühendisliği ve Transfeksiyon Teknolojileri",
    heroDescription: "Hücre hatlarına nükleik asit aktarımı ile hedef gen fonksiyonlarının araştırılması.",
    description: "Transfeksiyon teknolojileri; plazmid DNA, siRNA veya miRNA moleküllerinin in vitro memeli hücre hatlarına kimyasal veya elektriksel yöntemlerle aktarılarak geçici (transient) veya kalıcı (stable) gen modifikasyonlarının (over-ekspresyon, gen susturma) incelenmesidir.",
    importance: "Bir genin hücre içi sinyal yolaklarındaki veya apoptozdaki işlevini kanıtlamak için, in vitro hastalık modellerinin oluşturulmasında temel deneysel gereksinimdir.",
    deliverables: ["Ct/Cq değerleri", "Protein miktarı (doğrulama için)", "Görüntüler", "Analiz tabloları", "İstatistiksel sonuçlar", "Teknik rapor"],
    applicationAreas: ["Moleküler araştırmalar", "Hücresel çalışmalar", "Deneysel biyoloji", "Biyomedikal AR-GE", "Akademik araştırmalar"],
    scope: ["Numune hazırlama", "Deney (Transfeksiyon)", "Kalite kontrol", "Analiz (qPCR / Western Blot doğrulama)", "İstatistiksel değerlendirme", "Raporlama"],
    workflowSteps: ["Proje / veri değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Laboratuvar süreci", "Kalite kontrol", "Veri değerlendirme", "Raporlama"],
    requiredInfo: ["Hücre hattı", "Hedef gen", "Plazmid/vektör", "DNA/RNA", "Materyal hazır mı?", "Materyali müşteri mi sağlayacak?", "CoreGen mi sağlayacak?", "Transfeksiyon yöntemi", "Kontroller", "Deney grupları", "Tekrar", "Başarı kriteri", "İstenen doğrulama analizi", "İstatistik"],
    qualityControl: ["Deneysel kalite kontrol", "Pozitif/negatif kontroller", "Teknik tekrarlar"],
    whyCoreGen: "Sadece transfeksiyon aşamasını değil; aktarım verimliliğini (transfection efficiency) mRNA veya protein düzeyinde qPCR / Western Blot ile doğrulayan proje bazlı yaklaşımlar kurguluyoruz.",
    faqs: [
      { question: "Plazmid veya siRNA/miRNA materyallerini kim temin ediyor?", answer: "Hazırlanmış konstraktlar sizin tarafınızdan iletilebileceği gibi, projelendirme kapsamında sentez de edilebilir." },
      { question: "Transfeksiyon yöntemi nasıl belirleniyor?", answer: "Hücre tipinin özelliklerine göre (lipofeksiyon vb.) en yüksek verimi sağlayacak optimum yöntem seçilir." },
      { question: "Deneyin başarılı olduğu nasıl doğrulanıyor?", answer: "Genellikle floresan raportör gen (GFP) görüntülemesi veya hedef genin ekspresyon analizi ile doğrulanmaktadır." },
      { question: "Transfekte hücrelerle ilaç denemesi yapılabilir mi?", answer: "Evet, modifiye edilmiş hücreler üzerinden ilaç duyarlılık/toksisite testleri (downstream assay) planlanabilir." },
      { question: "Kalıcı (stable) transfeksiyon yapıyor musunuz?", answer: "Çalışma amacına göre antibiyotik seçilimi içeren uzun vadeli hücre hattı oluşturma projeleri değerlendirilebilir." }
    ]
  },
  {
    slug: "kok-hucre-teknolojileri",
    category: "Hücre Kültürü Analizleri",
    name: "Kök Hücre Teknolojileri",
    heroDescription: "Kök hücre izolasyonu, karakterizasyon ve in vitro diferansiyasyon araştırmaları.",
    description: "Kök Hücre Teknolojileri; mezenkimal veya indüklenmiş pluripotent kök hücrelerin izolasyonu, saflaştırılması, hücre yüzey markerlarının araştırılması ve spesifik hücre tiplerine in vitro farklılaşma (differentiation) yeteneklerinin incelenmesini kapsar.",
    importance: "Doku mühendisliği, rejeneratif tıp ve biyomalzeme AR-GE araştırmalarında kullanılacak olan hücrelerin doğru karakterize edilmesi (multipotency onayı vb.) ve yönlendirilmesi çalışmanın omurgasıdır.",
    deliverables: ["Görüntüler", "Analiz tabloları", "Gen ekspresyon verisi (opsiyonel)", "Teknik rapor"],
    applicationAreas: ["Hücresel çalışmalar", "Deneysel biyoloji", "Biyomedikal araştırmalar", "İlaç araştırmaları", "Akademik araştırmalar"],
    scope: ["Numune hazırlama", "Deney (Karakterizasyon / Farklılaşma)", "Görüntüleme", "Veri analizi", "Kalite kontrol", "Raporlama"],
    workflowSteps: ["Proje / numune değerlendirmesi", "Teknik gereksinimlerin belirlenmesi", "Yöntem ve çalışma planının oluşturulması", "Laboratuvar süreci", "Kalite kontrol", "Raporlama"],
    requiredInfo: ["Hücre tipi", "Hücre kaynağı", "Hücreler hazır mı?", "Hücrelerin mevcut durumu", "Deney amacı", "Diferansiyasyon hedefi", "Kullanılacak markerlar", "Deney grupları", "Kontrol grupları", "Zaman noktaları", "Tekrar sayısı", "İstenen analiz", "Görüntüleme", "Moleküler analiz", "İstatistik", "Raporlama"],
    qualityControl: ["Deneysel kalite kontrol", "Numune uygunluğu", "Pozitif/negatif kontroller"],
    whyCoreGen: "Hassas kültür koşulları gerektiren kök hücreleri akademik standartlarda yöneterek, araştırma amaçlı boyama (Alizarin Red vb.) veya qPCR ile farklılaşmanın moleküler doğrulamalarını gerçekleştiriyoruz.",
    faqs: [
      { question: "Doku örneklerinden kök hücre izolasyonu yapıyor musunuz?", answer: "AR-GE amaçlı hayvan veya spesifik doku modellerinden (yağ doku vb.) primer izolasyonlar yapılabilmektedir." },
      { question: "Hücre karakterizasyonunda hangi markerlar inceleniyor?", answer: "Hücre tipine göre önerilen uluslararası pozitif (CD90, CD105) ve negatif (CD34) yüzey belirteçleri değerlendirilir." },
      { question: "Farklılaşma (differentiation) analizleri ne kadar sürer?", answer: "Hedeflenen hücre serisine (osteojenik, adipojenik vb.) göre diferansiyasyon süresi 2-4 hafta arasında değişmektedir." },
      { question: "Doğrulama işlemi nasıl yapılıyor?", answer: "Özel histolojik boyamalar ve farklılaşma genlerinin ifadesinin qPCR ile moleküler incelenmesi yoluyla yapılır." },
      { question: "Biyomalzeme testlerinde kök hücreler kullanılabilir mi?", answer: "Evet, geliştirdiğiniz scaffold (iskele) veya biomateryallerin kök hücre tutunma/büyüme kapasiteleri test edilebilir." }
    ]
  }
];

// ================= KATEGORİ OUTLINE (NAVBAR VE MENÜLER İÇİN) =================
export const serviceCategoryOutline: ServiceCategoryOutline[] = [
  {
    category: "Moleküler Biyoloji",
    description: "Nükleik asit ve protein izolasyonu, primer/oligo tasarımı ve sentezi, jel elektroforezi, miktar tayini ve PCR çeşitleri.",
    items: [
      { name: "Nükleik Asit ve Protein İzolasyonu", slug: "nukleik-asit-protein-izolasyonu" },
      { name: "Primer ve Oligonükleotid Tasarımı ve Sentezi", slug: "primer-tasarimi" },
      { name: "Jel Elektroforezi", slug: "jel-elektroforezi" },
      { name: "Nükleik Asitlerde Miktar Tayini (NanoDrop ve Qubit)", slug: "nukleik-asitlerde-miktar-tayini" },
      { name: "PCR Analizi", slug: "pcr-analizi" },
      { name: "Gerçek Zamanlı PCR (RT-PCR / qPCR)", slug: "rt-pcr" },
    ],
  },
  {
    category: "Dizileme Hizmetleri",
    description: "Sanger dizileme, WGS, WES, hedefli dizileme, RNA-Seq ve metagenomik analizler.",
    items: [
      { name: "Sanger Dizileme", slug: "sanger-dizileme" },
      { name: "Whole Genome Sequencing (WGS)", slug: "wgs" },
      { name: "Whole Exome Sequencing (WES)", slug: "wes" },
      { name: "Targeted Sequencing", slug: "targeted-sequencing" },
      { name: "Transkriptom Analizi (RNA-Seq)", slug: "rna-seq" },
      { name: "Shotgun Metagenomics", slug: "shotgun-metagenomik" },
      { name: "16S rRNA Analizi", slug: "16s-rrna" },
    ],
  },
  {
    category: "Protein Analizleri",
    description: "Western Blot, ELISA ve rekombinant protein analizleri.",
    items: [
      { name: "Western Blot Analizi", slug: "western-blot" },
      { name: "ELISA Analizi", slug: "elisa" },
      { name: "Rekombinant Protein Analizi", slug: "rekombinant-protein-analizi" },
    ],
  },
  {
    category: "Biyoinformatik",
    description: "NGS, RNA-Seq, diferansiyel gen ekspresyonu, varyant analizi, filogenetik ve metagenomik veri analizleri.",
    items: [
      { name: "NGS Veri Analizi", slug: "ngs-veri-analizi" },
      { name: "RNA-Seq Analizi", slug: "rna-seq-analizi" },
      { name: "Diferansiyel Gen Ekspresyonu", slug: "diferansiyel-gen-ekspresyonu" },
      { name: "Varyant Analizi", slug: "varyant-analizi" },
      { name: "Filogenetik Analiz", slug: "filogenetik-analiz" },
      { name: "Metagenomik Veri Analizi", slug: "metagenomik-veri-analizi" },
    ],
  },
  {
    category: "Danışmanlık ve Bilimsel Destek",
    description: "Proje danışmanlığı, yerinde hizmet, deney tasarımı, istatistik ve yayın danışmanlığı.",
    items: [
      { name: "Proje Danışmanlığı", slug: "proje-danismanlik" },
      { name: "Yerinde Hizmet Modülü", slug: "yerinde-hizmet-modulu" },
      { name: "Kurumsal ve Akademik Eğitimler", slug: "kurumsal-ve-akademik-egitimler" },
      { name: "Deney Tasarımı", slug: "deney-tasarimi" },
      { name: "İstatistiksel Analiz", slug: "istatistiksel-analiz" },
      { name: "Bilimsel Raporlama", slug: "bilimsel-raporlama" },
      { name: "Yayın Danışmanlığı", slug: "yayin-danismanligi" },
    ],
  },
  {
    category: "Biyokimya ve Patoloji",
    description: "Oksidatif stres, spesifik test analizleri, ELISA ve yüksek çözünürlüklü immünohistokimyasal boyama hizmetleri.",
    items: [
      { name: "Oksidatif Stres Analizleri", slug: "oksidatif-stres-analizleri" },
      { name: "Biyokimya Test Analizleri", slug: "biyokimya-test-analizleri" },
      { name: "Spesifik Test Analizleri", slug: "spesifik-test-analizleri" },
      { name: "Elisa Test Analizleri", slug: "elisa-test-analizleri" },
      { name: "İmmünohistokimya (IHC) Boyama", slug: "immunohistokimya-ihc-boyama" },
    ],
  },
  {
    category: "Hücre Kültürü Analizleri",
    description: "Toksisite, proliferasyon, hücre tabanlı ELISA, genetik modifikasyon ve kök hücre uygulamaları.",
    items: [
      { name: "İlaç Geliştirme ve Toksisite Testleri", slug: "ilac-gelistirme-toksisite" },
      { name: "Hücre Kültürü Tabanlı ELISA Uygulamaları", slug: "hucre-kulturu-elisa" },
      { name: "Proliferasyon ve Migrasyon (Yara İyileşmesi) Deneyleri", slug: "proliferasyon-migrasyon" },
      { name: "Genetik Mühendisliği ve Transfeksiyon Teknolojileri", slug: "genetik-muhendisligi-transfeksiyon" },
      { name: "Kök Hücre Teknolojileri", slug: "kok-hucre-teknolojileri" },
    ],
  }
];

export function getServiceBySlug(slug: ServiceContent['slug'] | string): ServiceContent | undefined {
  const normalizedSlug = 
    slug === "miktar-tayini" ? "nukleik-asitlerde-miktar-tayini" :
    slug === "ngs" ? "ngs-veri-analizi" :
    slug === "wgs" ? "wgs" :
    slug === "wes" ? "wes" :
    slug === "elisa" ? "elisa" :
    slug === "pcr" ? "pcr-analizi" :
    slug === "rt-pcr" ? "rt-pcr" :
    slug === "bilimsel-danismanlik" ? "proje-danismanlik" : slug;

  return services.find((service) => service.slug === normalizedSlug);
}

export function getRelatedServices(service: ServiceContent): ServiceContent[] {
  if (!service.relatedServiceSlugs) return [];
  return service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is ServiceContent => Boolean(item));
}