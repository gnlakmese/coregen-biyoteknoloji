export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  title: string;
  items: NavLink[];
};

export type NavMenu = {
  label: string;
  href: string;
  groups?: NavGroup[];
};

export const primaryNav: NavMenu[] = [
  {
    label: "Hizmetler",
    href: "/hizmetler",
    groups: [
      {
        title: "MOLEKÜLER BİYOLOJİ",
        items: [
          { label: "Nükleik Asit ve Protein İzolasyonu", href: "/hizmetler/nukleik-asit-protein-izolasyonu" },
          { label: "Primer ve Oligonükleotid Tasarımı ve Sentezi", href: "/hizmetler/primer-tasarimi" },
          { label: "Jel Elektroforezi", href: "/hizmetler/jel-elektroforezi" },
          { label: "Nükleik Asitlerde Miktar Tayini (NanoDrop ve Qubit)", href: "/hizmetler/miktar-tayini" },
          { label: "PCR Analizi", href: "/hizmetler/pcr-analizi" },
          { label: "Gerçek Zamanlı PCR (RT-PCR / qPCR)", href: "/hizmetler/rt-pcr" },
        ],
      },
      {
        title: "DİZİLEME HİZMETLERİ",
        items: [
          { label: "Sanger Dizileme", href: "/hizmetler/sanger-dizileme" },
          { label: "Whole Genome Sequencing (WGS)", href: "/hizmetler/wgs" },
          { label: "Whole Exome Sequencing (WES)", href: "/hizmetler/wes" },
          { label: "Targeted Sequencing", href: "/hizmetler/targeted-sequencing" },
          { label: "Transkriptom Analizi (RNA-Seq)", href: "/hizmetler/rna-seq" },
          { label: "Shotgun Metagenomics", href: "/hizmetler/shotgun-metagenomics" },
          { label: "16S rRNA Analizi", href: "/hizmetler/16s-rrna" },
        ],
      },
      {
        title: "PROTEİN ANALİZLERİ",
        items: [
          { label: "Western Blot Analizi", href: "/hizmetler/western-blot" },
          { label: "ELISA Analizi", href: "/hizmetler/elisa-test-analizleri" },
          { label: "Rekombinant Protein Analizi", href: "/hizmetler/rekombinant-protein-analizi" },
        ],
      },
      {
        title: "BİYOİNFORMATİK",
        items: [
          { label: "NGS Veri Analizi", href: "/hizmetler/ngs-veri-analizi" },
          { label: "RNA-Seq Analizi", href: "/hizmetler/rna-seq-analizi" },
          { label: "Diferansiyel Gen Ekspresyonu", href: "/hizmetler/diferansiyel-ekspresyon" },
          { label: "Varyant Analizi", href: "/hizmetler/varyant-analizi" },
          { label: "Filogenetik Analiz", href: "/hizmetler/filogenetik-analiz" },
          { label: "Metagenomik Veri Analizi", href: "/hizmetler/metagenomik-veri-analizi" },
        ],
      },
      {
        title: "BİYOKİMYA",
        items: [
          { label: "Oksidatif Stres Analizleri", href: "/hizmetler/oksidatif-stres-analizleri" },
          { label: "Biyokimya Test Analizleri", href: "/hizmetler/biyokimya-test-analizleri" },
          { label: "Spesifik Test Analizleri", href: "/hizmetler/spesifik-test-analizleri" },
        ],
      },
      {
        title: "PATOLOJİ",
        items: [
          { label: "İmmünohistokimya (IHC) Boyama", href: "/hizmetler/immunohistokimya" },
        ],
      },
      {
        title: "HÜCRE KÜLTÜRÜ",
        items: [
          { label: "Hücre Kültürü Analizleri", href: "/hizmetler/hucre-kulturu-analizleri" },
        ],
      },
      {
        title: "DANIŞMANLIK VE BİLİMSEL DESTEK",
        items: [
          { label: "Proje Danışmanlığı", href: "/hizmetler/proje-danismanligi" },
          { label: "Yerinde Hizmet Modülü", href: "/hizmetler/yerinde-hizmet" },
          { label: "Kurumsal ve Akademik Eğitimler", href: "/hizmetler/kurumsal-egitimler" },
          { label: "Deney Tasarımı", href: "/hizmetler/deney-tasarimi" },
          { label: "İstatistiksel Analiz", href: "/hizmetler/istatistiksel-analiz" },
          { label: "Bilimsel Raporlama", href: "/hizmetler/bilimsel-raporlama" },
          { label: "Yayın Danışmanlığı", href: "/hizmetler/yayin-danismanligi" },
        ],
      },
    ],
  },
  {
    label: "Ürünler",
    href: "/urunler",
    groups: [
      {
        title: "Kategoriler",
        items: [
          { label: "Laboratuvar Sarf Malzemeleri", href: "/urunler/kategori/laboratuvar-sarf-malzemeleri" },
          { label: "PCR Kitleri", href: "/urunler/kategori/pcr-kitleri" },
          { label: "Kimyasallar ve Reaktifler", href: "/urunler/kategori/kimyasallar-ve-reaktifler" },
          { label: "Laboratuvar Cihazları", href: "/urunler/kategori/laboratuvar-cihazlari" },
        ],
      },
    ],
  },
  {
    label: "Eğitimler",
    href: "/egitimler",
  },
  {
    label: "Kurumsal",
    href: "/kurumsal/hakkimizda",
    groups: [
      {
        title: "Kurumsal",
        items: [
          { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
          { label: "Kalite Politikamız", href: "/kurumsal/kalite-politikamiz" },
          { label: "Kariyer", href: "/kurumsal/kariyer" },
        ],
      },
    ],
  },
  {
    label: "Bilgi Merkezi",
    href: "/blog",
    groups: [
      {
        title: "Bilgi Merkezi",
        items: [
          { label: "Blog", href: "/blog" },
          { label: "Teknik Makaleler", href: "/teknik-makaleler" },
          { label: "Uygulama Rehberleri", href: "/uygulama-rehberleri" },
          { label: "Sık Sorulan Sorular", href: "/sss" },
          { label: "Numune Gönderim Rehberi", href: "/numune-gonderimi" },
        ],
      },
    ],
  },
  {
    label: "Teknik Servis",
    href: "/teknik-servis",
  },
  {
    label: "Markalar",
    href: "/markalar",
  },
  {
    label: "İletişim",
    href: "/iletisim",
  },
];

export const footerNav = {
  hizmetler: {
    title: "Laboratuvar Hizmetleri",
    href: "/hizmetler",
    items: [
      { label: "Hücre Kültürü ve İmmünoloji", href: "/hizmetler/hucre-kulturu-analizleri" },
      { label: "Western Blot ve ELISA", href: "/hizmetler/western-blot" },
      { label: "Yeni Nesil Dizileme (NGS)", href: "/hizmetler/ngs" },
      { label: "Oksidatif Stres & Biyokimya", href: "/hizmetler/oksidatif-stres-analizleri" },
      { label: "Spesifik Testler", href: "/hizmetler/spesifik-test-analizleri" },
      { label: "Bilimsel Proje Danışmanlığı", href: "/hizmetler/proje-danismanligi" },
    ] satisfies NavLink[],
  },
  urunler: {
    title: "Ürünler",
    href: "/urunler",
    items: [
      { label: "Laboratuvar Sarf Malzemeleri", href: "/urunler/kategori/laboratuvar-sarf-malzemeleri" },
      { label: "PCR Kitleri", href: "/urunler/kategori/pcr-kitleri" },
      { label: "Kimyasallar ve Reaktifler", href: "/urunler/kategori/kimyasallar-ve-reaktifler" },
      { label: "Laboratuvar Cihazları", href: "/urunler/kategori/laboratuvar-cihazlari" },
    ] satisfies NavLink[],
  },
  kurumsal: {
    title: "Kurumsal",
    items: [
      { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
      { label: "Eğitimler", href: "/egitimler" },
      { label: "Kalite Politikamız", href: "/kurumsal/kalite-politikamiz" },
      { label: "Kariyer", href: "/kurumsal/kariyer" },
      { label: "İletişim", href: "/iletisim" },
    ] satisfies NavLink[],
  },
  bilgiMerkezi: {
    title: "Bilgi Merkezi",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Teknik Makaleler", href: "/teknik-makaleler" },
      { label: "Uygulama Rehberleri", href: "/uygulama-rehberleri" },
      { label: "Sık Sorulan Sorular", href: "/sss" },
      { label: "Numune Gönderim Rehberi", href: "/numune-gonderimi" },
    ] satisfies NavLink[],
  },
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/coregenbiyoteknoloji/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/coregen-biyoteknoloji/?viewAsMember=true" },
  { label: "Facebook", href: "https://www.facebook.com/coregenbiyoteknoloji" },
];