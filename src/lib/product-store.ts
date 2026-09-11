export type Product = {
  id: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  name: string;
  description: string;
  features: string[];
  packaging: string;
  image?: string;
  whatIsIt?: string;
  whyUsed?: string;
};

export const productCategories = [
  {
    icon: "Boxes",
    title: "Laboratuvar Sarf Malzemeleri",
    href: "/urunler/kategori/laboratuvar-sarf-malzemeleri",
    slug: "laboratuvar-sarf-malzemeleri",
    image: "/images/beher.jpeg", // veya public içindeki uygun bir sarf görseli
  },
  {
    icon: "TestTube",
    title: "PCR Kitleri",
    href: "/urunler/kategori/pcr-kitleri",
    slug: "pcr-kitleri",
    image: "/images/pipet ucu- steril.jpeg",
  },
  {
    icon: "FlaskConical",
    title: "Kimyasallar ve Reaktifler",
    href: "/urunler/kategori/kimyasallar-ve-reaktifler",
    slug: "kimyasallar-ve-reaktifler",
    image: "/images/erlen.jpeg",
  },
  {
    icon: "Cpu",
    title: "Laboratuvar Cihazları",
    href: "/urunler/kategori/laboratuvar-cihazlari",
    slug: "laboratuvar-cihazlari",
    image: "/images/balon joje.jpeg",
  },
];

export const products: Product[] = [
  // --- Laboratuvar Sarf Malzemeleri ---
  {
    id: "sarf-1",
    slug: "filter-pipet-uclari",
    categorySlug: "laboratuvar-sarf-malzemeleri",
    categoryName: "Laboratuvar Sarf Malzemeleri",
    name: "Filtreli Pipet Uçları (Steril, DNaz/RNaz Free)",
    description: "Hassas moleküler biyoloji ve PCR çalışmaları için aerosol kontaminasyonunu önleyen filtreli, racked steril pipet uçları.",
    features: ["10 µl, 200 µl, 1000 µl seçenekleri", "DNaz, RNaz ve Pyrogen içermez", "Yüksek şeffaflık ve düşük tutunma özelliği"],
    packaging: "96 adet/rack, 10 rack/kutu",
    image: "/images/products/pipet ucu- steril.jpeg",
    whatIsIt: "Mikropipetlere takılan, sıvıların hassas ve kontaminasyonsuz aktarılmasını sağlayan filtreli uçlardır.",
    whyUsed: "Moleküler biyoloji ve PCR çalışmalarında çapraz bulaşmayı önlemek için kullanılır.",
  },
  {
    id: "sarf-2",
    slug: "falcon-tupleri",
    categorySlug: "laboratuvar-sarf-malzemeleri",
    categoryName: "Laboratuvar Sarf Malzemeleri",
    name: "Santrifüj (Falcon) Tüpleri (15 ml & 50 ml)",
    description: "Yüksek hızda santrifüjlemeye dayanıklı, dereceli, kapaklı steril santrifüj tüpleri.",
    features: ["15 ml ve 50 ml hacim seçenekleri", "12.000 RCF'ye kadar dayanıklı", "Yazı alanı ve net derecelendirme çizgileri"],
    packaging: "50'li poşet veya rack ambalaj",
    image: "/images/products/falkon tüp- 50 ml.jpeg",
    whatIsIt: "Polipropilenden üretilen, konik dipli ve vidalı kapaklı yüksek hacimli tüptür.",
    whyUsed: "Numune toplama, santrifüjleme ve saklama işlemlerinde güvenle kullanılır.",
  },
  {
    id: "sarf-3",
    slug: "ependorf-mikrotup",
    categorySlug: "laboratuvar-sarf-malzemeleri",
    categoryName: "Laboratuvar Sarf Malzemeleri",
    name: "Mikrosantrifüj (Eppendorf) Tüpleri (1.5 ml)",
    description: "Örnek saklama ve nükleik asit ekstraksiyon süreçleri için kilitli kapaklı, saf polipropilen mikrotüpler.",
    features: ["1.5 ml hacim", "Sızdırmaz güvenli kapak mekanizması", "Otokotlanabilir yapı"],
    packaging: "500 adet/paket",
    image: "/images/products/ependorf tüp 1,5 ml.jpeg",
    whatIsIt: "Küçük hacimli sıvı numunelerin saklandığı kapaklı plastik mikro tüptür.",
    whyUsed: "DNA/RNA çalışmaları ve enzim saklama işlemlerinde vazgeçilmezdir.",
  },
  {
    id: "sarf-4",
    slug: "steril-petri-kutusu",
    categorySlug: "laboratuvar-sarf-malzemeleri",
    categoryName: "Laboratuvar Sarf Malzemeleri",
    name: "Steril Petri Kutuları (90x15 mm)",
    description: "Mikrobiyolojik kültür çalışmaları ve hücre kültürü uygulamaları için optik kalitede şeffaf petri kutuları.",
    features: ["90x15 mm standart ölçü", "Havalandırma tırnaklı tasarım", "Etilen oksit (EO) sterilize"],
    packaging: "20'li paketler halinde, 500 adet/koli",
    image: "/images/products/petri kutusu.jpeg",
    whatIsIt: "Mikroorganizma kültürü geliştirmek için kullanılan yuvarlak, yassı kapaklı kaptır.",
    whyUsed: "Bakteri ve maya gibi mikroorganizmaların besiyeri üzerinde üretilmesi için kullanılır.",
  },

  // --- PCR Kitleri ---
  {
    id: "pcr-1",
    slug: "taq-dna-polymerase-master-mix",
    categorySlug: "pcr-kitleri",
    categoryName: "PCR Kitleri",
    name: "2X Taq DNA Polymerase Master Mix",
    description: "Rutin PCR ve genotipleme çalışmaları için optimize edilmiş, zamandan tasarruf sağlayan hazır master mix çözeltisi.",
    features: ["Taq Polimeraz, dNTP'ler ve reaktif tamponu içerir", "Yüksek amplifikasyon verimliliği", "Oda sıcaklığında kolay reaksiyon kurulumu"],
    packaging: "500 reaksiyonluk ambalaj",
    image: "/images/products/96- PCR Plate- şeffaf.jpeg",
    whatIsIt: "PCR reaksiyonları için gerekli tüm bileşenleri hazır içeren premiks çözeltidir.",
    whyUsed: "Zaman kazandırır ve pipetleme hatalarını minimuma indirir.",
  },
  {
    id: "pcr-2",
    slug: "qpcr-sybr-green-master-mix",
    categorySlug: "pcr-kitleri",
    categoryName: "PCR Kitleri",
    name: "Real-Time PCR (qPCR) SYBR Green Master Mix",
    description: "Gen ifadesi analizi ve kantitatif PCR uygulamaları için yüksek duyarlılıklı floresan master mix.",
    features: ["Düşük konsantrasyonlu hedeflerde yüksek hassasiyet", "Optimizasyon gerektirmeyen hızlı protokol", "Tüm yaygın real-time PCR cihazlarıyla uyumlu"],
    packaging: "2 ml (200 reaksiyon)",
    image: "/images/products/PCR Tüpü 0,2 ml.jpeg",
    whatIsIt: "Kantitatif PCR testlerinde hedef DNA miktarını floresan ışıma ile ölçmeyi sağlayan karışımdır.",
    whyUsed: "Gen ekspresyon analizi ve viral yük tayinlerinde kullanılır.",
  },

  // --- Kimyasallar ve Reaktifler ---
  {
    id: "chem-1",
    slug: "agarose-molecular-biology",
    categorySlug: "kimyasallar-ve-reaktifler",
    categoryName: "Kimyasallar ve Reaktifler",
    name: "Agaroz (Molecular Biology Grade)",
    description: "Nükleik asitlerin elektroforez ile ayrıştırılması için yüksek saflıkta, düşük elektroendosmoz dereceli agaroz tozu.",
    features: ["Düşük arka plan boyanması", "Net ve keskin DNA/RNA bantları", "Hızlı erime ve kolay jel dökümü"],
    packaging: "100 g / 500 g ambalaj",
    image: "/images/products/beher.jpeg",
    whatIsIt: "DNA ve RNA fragmanlarını ayırmak için jel elektroforezinde kullanılan polisakkarit tozudur.",
    whyUsed: "Nükleik asitlerin boyutlarına göre ayrıştırılması ve görüntülenmesini sağlar.",
  },
  {
    id: "chem-2",
    slug: "reaktif-sisesi-cam-500ml",
    categorySlug: "kimyasallar-ve-reaktifler",
    categoryName: "Kimyasallar ve Reaktifler",
    name: "Reaktif Şişesi (Borosilikat Cam - 500 ml)",
    description: "Kimyasalları güvenle saklamak için kapaklı borosilikat cam reaktif şişesi.",
    features: ["Isıya ve kimyasallara dayanıklı borosilikat cam", "Sızdırmaz vidalı kapak", "Net hacim dereceleri"],
    packaging: "Tekli kutu",
    image: "/images/products/Reaktif şişesi- cam 500 ml.jpeg",
    whatIsIt: "Sıvı ve katı kimyasalların buharlaşma ve bozulma olmadan saklanmasını sağlayan cam şişedir.",
    whyUsed: "Çözelti ve kimyasal maddelerin güvenli muhafazası için tercih edilir.",
  },

  // --- Laboratuvar Cihazları (DLAB & Diğerleri) ---
  {
    id: "dev-1",
    slug: "hipette-mechanical-pipette",
    categorySlug: "laboratuvar-cihazlari",
    categoryName: "Laboratuvar Cihazları",
    name: "DLAB HiPette Mekanik Pipet (Tek Kanallı Ayarlanabilir)",
    description: "Tam otoklavlanabilir, ultra hafif ve ergonomik tasarımlı yeni nesil mekanik pipet.",
    features: ["4 haneli net hacim ekranı", "Hacim kilitleme mekanizması", "Tamamen otoklavlanabilir ve UV direncine sahip"],
    packaging: "1 adet cihaz + kalibrasyon sertifikası",
    image: "/images/products/serolojik pipet.jpeg",
    whatIsIt: "Hassas hacimlerde sıvı transferi yapmak için kullanılan manuel ayarlanabilir mikropipettir.",
    whyUsed: "Yüksek tekrarlanabilirlik, el yorgunluğunu önleyen ergonomi ve uzun ömürlü kullanım sağlar.",
  },
  {
    id: "dev-2",
    slug: "epette-electronic-pipette",
    categorySlug: "laboratuvar-cihazlari",
    categoryName: "Laboratuvar Cihazları",
    name: "DLAB E-Pette Elektronik Pipet",
    description: "Akıllı dokunmatik ekran, yüksek hassasiyetli motor ve çoklu çalışma modlarına sahip akıllı elektronik pipet.",
    features: ["2.1 inç OLED HD dokunmatik ekran", "Tek tuşla uç atma mekanizması", "Pipetleme, karıştırma ve dilüsyon modları"],
    packaging: "1 adet cihaz + şarj standı",
    image: "/images/products/dlab-epette.jpg",
    whatIsIt: "Motorize sürüş mekanizmasıyla çalışan, dijital kontrollü sıvı aktarım cihazıdır.",
    whyUsed: "Tekrarlayan pipetleme işlemlerinde hata payını sıfıra indirir ve kullanıcıyı yormaz.",
  },
  {
    id: "dev-3",
    slug: "mini-centrifuge",
    categorySlug: "laboratuvar-cihazlari",
    categoryName: "Laboratuvar Cihazları",
    name: "DLAB D2012 Plus Yüksek Hız Mikro Santrifüj",
    description: "15.000 rpm hıza sahip, fırçasız DC motorlu, kompakt ve yüksek performanslı mikro santrifüj.",
    features: ["15.100 xg maksimum RCF", "Fırçasız sessiz DC motor", "Otomatik kapak kilidi ve aşırı hız koruması"],
    packaging: "1 adet cihaz + 12x1.5/2ml rotor",
    image: "/images/products/falkon tüp 15ml- steril olmayan.jpeg",
    whatIsIt: "Mikrotüpleri yüksek merkezkaç kuvvetiyle döndürerek bileşenlerine ayıran cihazdır.",
    whyUsed: "Plasmit ekstraksiyonu, DNA/RNA saflaştırma ve nükleik asit çöktürme işlemlerinde kullanılır.",
  },
  {
    id: "dev-4",
    slug: "thermal-cycler-pcr",
    categorySlug: "laboratuvar-cihazlari",
    categoryName: "Laboratuvar Cihazları",
    name: "DLAB TC2000-G Gradient Termal Sikler (PCR Cihazı)",
    description: "Gelişmiş Peltier teknolojisi ve dokunmatik ekranlı yüksek performanslı genetik amplifikasyon cihazı.",
    features: ["96 kuyucuklu universal blok yapısı", "5°C/sn maksimum sıcaklık değişim hızı", "Gradient optimizasyon teknolojisi"],
    packaging: "1 adet cihaz",
    image: "/images/products/96- PCR Plate- şeffaf.jpeg",
    whatIsIt: "DNA zincirlerini çoğaltmak (PCR) için hızlı sıcaklık döngüleri üreten laboratuvar cihazıdır.",
    whyUsed: "Moleküler tanı, patojen tespiti ve genetik analiz çalışmalarının temel taşıdır.",
  },
  {
    id: "dev-5",
    slug: "ms-h-pro-t-magnetic-stirrer",
    categorySlug: "laboratuvar-cihazlari",
    categoryName: "Laboratuvar Cihazları",
    name: "DLAB MS-H-Pro+ Isıtıcılı Manyetik Karıştırıcı",
    description: "Seramik kaplı alüminyum tabla, 340°C ısıtma ve fırçasız DC motorlu laboratuvar karıştırıcısı.",
    features: ["20 Litreye kadar karıştırma kapasitesi", "HOT aşırı sıcaklık uyarı lambası", "PT1000 harici sıcaklık probu desteği"],
    packaging: "1 adet cihaz + PT1000 prob",
    image: "/images/products/beher.jpeg",
    whatIsIt: "Sıvıları ısıtmak ve manyetik balık yardımıyla homojen şekilde karıştırmak için kullanılan cihazdır.",
    whyUsed: "Kimyasal sentez, çözelti hazırlama ve analitik laboratuvar işlemlerinde vazgeçilmezdir.",
  },
  {
    id: "dev-6",
    slug: "re100-pro-rotary-evaporator",
    categorySlug: "laboratuvar-cihazlari",
    categoryName: "Laboratuvar Cihazları",
    name: "DLAB RE100-Pro Dijital Rotatif Evaporatör",
    description: "Hassas vakumlu distilasyon, solvent uzaklaştırma ve konsantrasyon sistemi.",
    features: ["Motorlu otomatik kaldırma mekanizması", "5L dijital su/yağ banyosu", "Geniş soğutma yüzeyli kondenser"],
    packaging: "1 adet cihaz + komple cam set",
    image: "/images/products/balon joje.jpeg",
    whatIsIt: "Çözücüleri düşük sıcaklık ve vakum altında buharlaştırıp geri kazanmaya yarayan döner sistemdir.",
    whyUsed: "Kimya, bitki ekstraksiyonu, biyokimya ve gıda laboratuvarlarında solvent geri kazanımı sağlar.",
  }
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductCategoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}
