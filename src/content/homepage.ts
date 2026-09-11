import { getServiceBySlug } from "@/content/services";

/**
 * Ana Sayfa İçerik Kaynağı (v2 — FAZ 2 spesifikasyonuna göre)
 * --------------------------------------------------------------------------
 * Mimari kural: Hizmet kartlarının başlık/açıklama metni burada elle
 * kopyalanmaz; tek doğruluk kaynağı olan `content/services.ts`'ten
 * türetilir (bkz. Son Mimari İnceleme, Bulgu #3 — veri çoğaltmasından
 * kaçınma dersi). Yalnızca "Protein Analizleri" kartı, tek bir hizmet
 * sayfasına değil /hizmetler kategori bölümüne (çapa link) yönlendiği için
 * elle tanımlanmıştır.
 */

function featuredService(slug: string, icon: string) {
  const service = getServiceBySlug(slug);
  if (!service) {
    throw new Error(`featuredService: "${slug}" slug'lı hizmet content/services.ts içinde bulunamadı.`);
  }
  return {
    icon,
    title: service.name,
    description: service.heroDescription,
    href: `/hizmetler/${service.slug}`,
  };
}

/** Hero altında, kullanıcının istediği sırayla 8 öne çıkan hizmet kartı. */
export const featuredServices = [
  featuredService("ngs", "Fingerprint"),
  featuredService("pcr", "Waves"),
  featuredService("rt-pcr", "Waves"),
  featuredService("rna-seq", "Dna"),
  {
    icon: "Network",
    title: "Protein Analizleri",
    description: "ELISA, Western Blot ve rekombinant protein analiziyle protein tespiti, miktar tayini ve karakterizasyon.",
    href: "/hizmetler#protein-analizleri",
  },
  featuredService("elisa", "TestTube2"),
  featuredService("western-blot", "TestTube2"),
  featuredService("bilimsel-danismanlik", "ClipboardCheck"),
] as const;

export const whyCoreGen = [
  {
    icon: "Atom",
    title: "Bilimsel Uzmanlık",
    description: "Genetik, moleküler biyoloji ve biyoteknoloji alanlarında teknik uzmanlık.",
  },
  {
    icon: "ShieldCheck",
    title: "Güvenilir Sonuçlar",
    description: "Her analiz, kalite kontrol adımlarından geçerek doğrulanabilir şekilde raporlanır.",
  },
  {
    icon: "Zap",
    title: "Hızlı Teklif Süreci",
    description: "Araştırmacıların zaman kaybetmeden ihtiyaçlarına ulaşmasını sağlayan etkin destek.",
  },
  {
    icon: "Headset",
    title: "Teknik Destek",
    description: "Sonuç sonrası sorularınız için uzman ekibimize ulaşabilirsiniz.",
  },
  {
    icon: "MapPin",
    title: "Mersin'den Dünyaya",
    description: "Mersin'de kurulan CoreGen, Türkiye genelindeki araştırmacılara ve gelecekte uluslararası iş birliklerine hizmet sunmayı hedefler.",
  },
] as const;

/** Ürün kategorileri (görsel destekli modern katalog yapısı). */
export const productCategories = [
  {
    icon: "Boxes",
    title: "Laboratuvar Sarf Malzemeleri",
    href: "/urunler/kategori/laboratuvar-sarf-malzemeleri",
    image: "/images/sarf-malzemeleri.webp",
  },
  {
    icon: "TestTube",
    title: "PCR Kitleri",
    href: "/urunler/kategori/pcr-kitleri",
    image: "/images/pcr-kitleri.avif",
  },
  {
    icon: "FlaskConical",
    title: "Kimyasallar ve Reaktifler",
    href: "/urunler/kategori/kimyasallar-ve-reaktifler",
    image: "/images/lab-kimyasallari.jpg",
  },
  {
    icon: "Cpu",
    title: "Laboratuvar Cihazları",
    href: "/urunler/kategori/laboratuvar-cihazlari",
    image: "/images/lab-cihazlari.webp",
  },
];

export const processSteps = [
  {
    icon: "ClipboardList",
    title: "Talep",
    description: "İhtiyacınızı Teklif Sepeti veya ilgili hizmet sayfası üzerinden iletirsiniz.",
  },
  {
    icon: "Search",
    title: "Teknik Değerlendirme",
    description: "Talebiniz, uygun yöntem ve kapsamın belirlenmesi için uzman ekibimizce değerlendirilir.",
  },
  {
    icon: "FileText",
    title: "Teklif",
    description: "Değerlendirme sonrasında size özel teklif hazırlanır ve iletilir.",
  },
  {
    icon: "FlaskConical",
    title: "Analiz / Ürün Temini",
    description: "Onaylanan kapsamda laboratuvar analizi veya ürün tedarik süreci yürütülür.",
  },
  {
    icon: "PackageCheck",
    title: "Raporlama / Teslimat",
    description: "Sonuçlar anlaşılır bir raporla veya siparişiniz uygun şekilde teslim edilir.",
  },
] as const;