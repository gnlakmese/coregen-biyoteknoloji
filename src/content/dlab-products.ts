export interface DlabProduct {
  id: string;
  slug: string;
  category: string;
  name: string;
  description: string;
  whatIsIt: string;
  whyUsed: string;
  features: string[];
  image: string;
}

export const dlabProducts: DlabProduct[] = [
  // --- Liquid Handling / Pipettes ---
  {
    id: "dlab-1",
    slug: "hipette-mechanical-pipette",
    category: "Sıvı İşleme ve Pipetler",
    name: "DLAB HiPette / HiPette-LTS Mekanik Pipet",
    description: "Tam otoklavlanabilir, ultra hafif ve ergonomik tasarımlı yeni nesil mekanik pipet[cite: 1].",
    whatIsIt: "Hassas hacimlerde sıvı transferi yapmak için kullanılan manuel ayarlanabilir mikropipettir[cite: 1].",
    whyUsed: "Yüksek tekrarlanabilirlik, el yorgunluğunu önleyen ergonomi ve kolay bakım sağlar[cite: 1].",
    features: ["4 haneli net hacim ekranı[cite: 1]", "Hacim kilitleme mekanizması[cite: 1]", "Tamamen otoklavlanabilir[cite: 1]"],
    image: "/images/products/dlab-hipette.jpg",
  },
  {
    id: "dlab-2",
    slug: "epette-electronic-pipette",
    category: "Sıvı İşleme ve Pipetler",
    name: "DLAB E-Pette / dPette+ Elektronik Pipet",
    description: "Akıllı dokunmatik ekran, yüksek hassasiyetli motor ve çoklu çalışma modlarına sahip elektronik pipet[cite: 1].",
    whatIsIt: "Motorize sürüş mekanizmasıyla çalışan, dijital kontrollü sıvı aktarım cihazıdır[cite: 1].",
    whyUsed: "Pipetleme, karıştırma, çoklu dispanser ve titrasyon gibi işlemleri hatasız ve yorulmadan gerçekleştirmek için kullanılır[cite: 1].",
    features: ["2.1 inç OLED HD dokunmatik ekran[cite: 1]", "Tek tuşla uç atma[cite: 1]", "Ayarlanabilir hız kademeleri[cite: 1]"],
    image: "/images/products/dlab-epette.jpg",
  },
  {
    id: "dlab-3",
    slug: "levo-plus-pipette-filler",
    category: "Sıvı İşleme ve Pipetler",
    name: "DLAB Levo Plus Pipet Kontrol Cihazı",
    description: "Cam veya plastik serolojik pipetlerle uyumlu, şarjlı ve ergonomik pipet pompalama cihazı[cite: 1].",
    whatIsIt: "Serolojik pipetler yardımıyla büyük hacimli sıvıların güvenle çekilmesini ve bırakılmasını sağlar[cite: 1].",
    whyUsed: "Hızlı dolum süresi ve hassas hız kontrolü ile laboratuvar verimliliğini artırır[cite: 1].",
    features: ["6 farklı hız kademesi[cite: 1]", "LCD pil ve hız göstergesi[cite: 1]", "0.45µm hidrofobik filtre[cite: 1]"],
    image: "/images/products/dlab-levoplus.jpg",
  },
  {
    id: "dlab-4",
    slug: "dispensmate-pro-dispenser",
    category: "Sıvı İşleme ve Pipetler",
    name: "DLAB DispensMate-Pro Şişe Üstü Dispanser",
    description: "Reaktif şişeleri üzerine doğrudan monte edilen, yüksek kimyasal dayanımlı hacim ayarlayıcı[cite: 1].",
    whatIsIt: "Şişelerden tekrarlı ve hassas hacimlerde sıvı dağıtımı yapmayı sağlayan mekanik cihazdır[cite: 1].",
    whyUsed: "Asit, baz ve organik çözeltilerin güvenli ve atıksız şekilde porsiyonlanması için tercih edilir[cite: 1].",
    features: ["Reaktif geri kazanım fonksiyonu[cite: 1]", "121°C'de otoklavlanabilir[cite: 1]", "Farklı şişe adaptörleri[cite: 1]"],
    image: "/images/products/dlab-dispensmate.jpg",
  },
  {
    id: "dlab-5",
    slug: "safevac-vacuum-aspirator",
    category: "Sıvı İşleme ve Pipetler",
    name: "DLAB SafeVac Vakumlu Atık Sıvı Aspirasyon Sistemi",
    description: "Hücre kültürü ve biyolojik atık sıvıların güvenli bertarafı için entegre vakum sistemi[cite: 1].",
    whatIsIt: "Sıvı atıkları emerek toplama şişesinde hapseden kontrollü vakum cihazıdır[cite: 1].",
    whyUsed: "Süpernatant uzaklaştırma ve hücre kültürü atık yönetiminde kontaminasyonu önler[cite: 1].",
    features: ["4 Litre toplama şişesi kapasitesi[cite: 1]", "Seviye sensörü ile taşma koruması[cite: 1]", "Otomatik kapanan konnektörler[cite: 1]"],
    image: "/images/products/dlab-safevac.jpg",
  },

  // --- Thermal Control / PCR & Dry Bath ---
  {
    id: "dlab-6",
    slug: "h100-pro-dry-bath",
    category: "Termal Kontrol Cihazları",
    name: "DLAB H100-Pro / HB150-S Dijital Kuru Blok Isıtıcı",
    description: "Hassas sıcaklık kontrolü sağlayan, değiştirilebilir bloklu laboratuvar ısıtıcısı[cite: 1].",
    whatIsIt: "Tüpleri belirli bir sıcaklıkta tutmak veya inkübe etmek için kullanılan kuru banyo sistemidir[cite: 1].",
    whyUsed: "Enzim reaksiyonları, numune hazırlama ve DNA/RNA inkübasyonlarında standart ısı sağlar[cite: 1].",
    features: ["TFT renkli ekran[cite: 1]", "Programlanabilir adım ayarları[cite: 1]", "PT1000 harici sıcaklık sensörü[cite: 1]"],
    image: "/images/products/dlab-drybath.jpg",
  },
  {
    id: "dlab-7",
    slug: "hcm100-pro-thermo-mix",
    category: "Termal Kontrol Cihazları",
    name: "DLAB HCM100-Pro Termo Karıştırıcı (Isıtma/Soğutma/Karıştırma)",
    description: "Isıtma, soğutma ve titrek karıştırma fonksiyonlarını birleştiren yüksek performanslı cihaz[cite: 1].",
    whatIsIt: "Mikrotüplerdeki numuneleri hem eş zamanlı ısıtan/soğutan hem de yüksek devirde çalkalayan sistemdir[cite: 1].",
    whyUsed: "Gen sentezi, protein denatürasyonu ve enzim tahlillerinde maksimum verim sunar[cite: 1].",
    features: ["200-1500 rpm karıştırma hızı[cite: 1]", "-5°C ila 100°C sıcaklık aralığı[cite: 1]", "Otomatik blok tanıma[cite: 1]"],
    image: "/images/products/dlab-thermomix.jpg",
  },
  {
    id: "dlab-8",
    slug: "tc2000-gradient-pcr",
    category: "Termal Kontrol Cihazları",
    name: "DLAB TC2000-G / TC1000-Pro Termal Sikler (PCR Cihazı)",
    description: "Gelişmiş Peltier teknolojisi ve dokunmatik ekranlı genetik amplifikasyon cihazı[cite: 1].",
    whatIsIt: "DNA zincirlerini çoğaltmak (PCR) için hızlı sıcaklık döngüleri üreten laboratuvar cihazıdır[cite: 1].",
    whyUsed: "Moleküler tanı, patojen tespiti ve genetik analiz çalışmalarının temel taşıdır[cite: 1].",
    features: ["10.1 inç büyük dokunmatik ekran[cite: 1]", "5°C/sn maksimum sıcaklık değişim hızı[cite: 1]", "Gradient optimizasyon özelliği[cite: 1]"],
    image: "/images/products/dlab-pcrcycle.jpg",
  },

  // --- Stirring & Heating / Magnetic Stirrers ---
  {
    id: "dlab-9",
    slug: "ms-h-pro-t-magnetic-stirrer",
    category: "Karıştırma ve Isıtma",
    name: "DLAB MS-H-Pro+ LCD Dijital Isıtıcılı Manyetik Karıştırıcı",
    description: "Seramik kaplı alüminyum tabla, 340°C ısıtma ve fırçasız DC motorlu karıştırıcı[cite: 1].",
    whatIsIt: "Sıvıları ısıtmak ve manyetik balık yardımıyla homojen şekilde karıştırmak için kullanılan cihazdır[cite: 1].",
    whyUsed: "Kimyasal sentez, çözelti hazırlama ve analitik laboratuvar işlemlerinde vazgeçilmezdir[cite: 1].",
    features: ["20 Litreye kadar karıştırma kapasitesi[cite: 1]", "HOT aşırı sıcaklık uyarı lambası[cite: 1]", "PT1000 prob bağlantısı[cite: 1]"],
    image: "/images/products/dlab-stirrer.jpg",
  },
  {
    id: "dlab-10",
    slug: "os-t40-plus-overhead-stirrer",
    category: "Karıştırma ve Isıtma",
    name: "DLAB OS-T40-Plus Dijital Üstten Karıştırıcı (Overhead Stirrer)",
    description: "Orta ve yüksek viskoziteli yoğun sıvıların karıştırılması için güçlü motorlu üstten karıştırıcı[cite: 1].",
    whatIsIt: "Yoğun kıvamlı kimyasalları üstten mil aracılığıyla döndürerek karıştıran endüstriyel tip cihazdır[cite: 1].",
    whyUsed: "Polimer, krem, losyon ve yüksek viskoziteli kimyasal formülasyonların hazırlığında kullanılır[cite: 1].",
    features: ["Otomatik tork ayarı[cite: 1]", "50-2200 rpm hız aralığı[cite: 1]", "İleri ve geri yönlü çalışma modu[cite: 1]"],
    image: "/images/products/dlab-overhead.jpg",
  },

  // --- Distilling / Rotary Evaporators ---
  {
    id: "dlab-11",
    slug: "re100-pro-rotary-evaporator",
    category: "Distilasyon ve Evaporatörler",
    name: "DLAB RE100-Pro Dijital Rotatif Evaporatör",
    description: "Hassas vakumlu distilasyon, solvent uzaklaştırma ve konsantrasyon sistem[cite: 1].",
    whatIsIt: "Çözücüleri düşük sıcaklık ve vakum altında buharlaştırıp geri kazanmaya yarayan döner sistemdir[cite: 1].",
    whyUsed: "Kimya, bitki ekstraksiyonu, biyokimya ve gıda laboratuvarlarında solvent geri kazanımı sağlar[cite: 1].",
    features: ["Motorlu otomatik kaldırma mekanizması[cite: 1]", "5L dijital su/yağ banyosu[cite: 1]", "Geniş soğutma yüzeyli kondenser[cite: 1]"],
    image: "/images/products/dlab-evaporator.jpg",
  },

  // --- Centrifuges ---
  {
    id: "dlab-12",
    slug: "d2012-plus-micro-centrifuge",
    category: "Santrifüj Sistemleri",
    name: "DLAB D2012 Plus Yüksek Hız Mikro Santrifüj",
    description: "15.000 rpm hıza sahip, moleküler biyoloji laboratuvarları için kompakt mikro santrifüj[cite: 1].",
    whatIsIt: "Mikrotüpleri yüksek merkezkaç kuvvetiyle döndürerek bileşenlerine ayıran cihazdır[cite: 1].",
    whyUsed: "Plasmit ekstraksiyonu, DNA/RNA saflaştırma ve nükleik asit çöktürme işlemlerinde kullanılır[cite: 1].",
    features: ["15.100 xg maksimum RCF[cite: 1]", "Fırçasız sessiz DC motor[cite: 1]", "Otomatik kapak kilidi[cite: 1]"],
    image: "/images/products/dlab-centrifuge.jpg",
  },
  {
    id: "dlab-13",
    slug: "d1524r-refrigerated-centrifuge",
    category: "Santrifüj Sistemleri",
    name: "DLAB D1524R Soğutmalı Yüksek Hız Mikro Santrifüj",
    description: "-20°C ila 40°C sıcaklık aralığına sahip, ısıya duyarlı numuneler için soğutmalı santrifüj[cite: 1].",
    whatIsIt: "Hassas biyolojik numunelerin bozulmasını önlemek için soğutma kabiniyle donatılmış santrifüj sistemidir[cite: 1].",
    whyUsed: "Canlı hücreler, enzimler ve protein, RNA gibi sıcaklığa hassas biyolojik materyallerin ayrıştırılmasında şarttır[cite: 1].",
    features: ["7 dakikada oda sıcaklığından 4°C'ye hızlı soğutma[cite: 1]", "Üç kat sızdırmaz biyo-emniyetli rotor[cite: 1]", "9 kademeli hızlanma/yavaşlama[cite: 1]"],
    image: "/images/products/dlab-refcentrifuge.jpg",
  },

  // --- Mixing / Vortex ---
  {
    id: "dlab-14",
    slug: "mx-pro-vortex-mixer",
    category: "Karıştırıcılar ve Mikserler",
    name: "DLAB MX-Pro Kızılötesi Sensörlü Dijital Vortex Mikser",
    description: "Temassız kızılötesi algılama teknolojisine sahip, yüksek performanslı dijital vortex[cite: 1].",
    whatIsIt: "Tüpleri hızla titreştirerek içindeki sıvıları saniyeler içinde homojenize eden karıştırıcıdır[cite: 1].",
    whyUsed: "Tüp içerisindeki çözeltileri ve pelletleri hızlıca karıştırmak için rutin laboratuvarlarda kullanılır[cite: 1].",
    features: ["Kızılötesi otomatik tüp algılama[cite: 1]", "0-3000 rpm ayarlanabilir hız[cite: 1]", "LCD hız ve zaman ekranı[cite: 1]"],
    image: "/images/products/dlab-vortex.jpg",
  }
];