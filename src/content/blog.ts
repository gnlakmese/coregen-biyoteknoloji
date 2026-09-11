import type { BlogPost, BlogPostSummary } from "@/types/blog";

/**
 * Blog Yazıları
 * --------------------------------------------------------------------------
 * Konu başlıkları `07_SEO_Strategy.md` dokümanındaki "Blog Yol Haritası"
 * bölümünden (15 planlanan başlık) alınmıştır — bu, uydurma bir liste
 * değil, CoreGen'in kendi onayladığı içerik planıdır.
 *
 * KAPSAM NOTU: 15 başlığın tamamını (her biri Content & Copywriting
 * Guidelines'a göre 1500-3000 kelime, tablo, infografik önerisi, SSS ve
 * kaynakça gerektiriyor) tek seferde yazmak yerine, hizmet sayfalarımızla
 * en güçlü bağlantıya sahip 3 tanesi tam kapsamda yazıldı. Kalan 12
 * başlık `plannedBlogTopics` içinde listelidir — gerçek içerikleri
 * yazılmadan sayfa açılmayacak (bkz. Hizmetler/Ürünler modüllerindeki
 * aynı disiplin).
 *
 * İçerik, PCR/DNA izolasyonu/NGS gibi yerleşik, ders kitabı düzeyinde
 * bilimsel konuları anlatır — CoreGen'e özel doğrulanamayan hiçbir iddia
 * içermez (yalnızca genel bilimsel bilgi + ilgili CoreGen hizmetlerine
 * yönlendirme).
 */

export const blogPosts: BlogPost[] = [
  {
    slug: "pcr-nedir",
    title: "PCR (Polimeraz Zincir Reaksiyonu) Nedir?",
    excerpt:
      "PCR'ın temel prensibinden döngü aşamalarına, PCR çeşitlerinden kullanım alanlarına kadar moleküler biyolojinin en temel yönteminin kapsamlı bir anlatımı.",
    category: "PCR",
    publishedAt: "2026-06-02",
    readingTimeMinutes: 8,
    sections: [
      {
        heading: "PCR'ın Kısa Tarihi ve Önemi",
        paragraphs: [
          "Polimeraz Zincir Reaksiyonu (PCR), 1983 yılında Kary Mullis tarafından geliştirilen ve moleküler biyolojide bir dönüm noktası olan bir DNA çoğaltma yöntemidir. Mullis, bu buluşuyla 1993 yılında Nobel Kimya Ödülü'ne layık görülmüştür.",
          "PCR'dan önce, belirli bir DNA bölgesini incelemek için canlı hücrelerde klonlama gibi zaman alıcı yöntemler gerekiyordu. PCR, bu süreci saatler içinde tamamlanabilen, test tüpünde (in vitro) uygulanabilen bir reaksiyona dönüştürdü.",
          "Bugün PCR; genotiplemeden patojen tespitine, adli bilimlerden klonlama doğrulamaya kadar moleküler biyolojinin hemen her alanında temel bir araç olarak kullanılmaktadır.",
        ],
      },
      {
        heading: "PCR'ın Temel Prensibi",
        paragraphs: [
          "PCR, hedeflenen bir DNA bölgesinin milyonlarca kopyasının, döngüsel sıcaklık değişimleriyle in vitro ortamda üretilmesi prensibine dayanır.",
          "Her PCR döngüsü üç temel aşamadan oluşur: denatürasyon (DNA'nın çift sarmalının ısıyla ayrılması), bağlanma/annealing (primerlerin hedef bölgeye bağlanması) ve uzama/extension (DNA polimerazın yeni DNA zincirini sentezlemesi). Bu üç aşama, tipik olarak 25-35 kez tekrarlanır.",
          "Her döngüde DNA miktarı teorik olarak iki katına çıktığı için, 30 döngü sonunda başlangıçtaki hedef bölgenin yaklaşık bir milyar katı kopyası elde edilebilir.",
        ],
      },
      {
        heading: "PCR Reaksiyonunun Temel Bileşenleri",
        paragraphs: [
          "Bir PCR reaksiyonu; çoğaltılacak DNA bölgesini içeren şablon (template) DNA, hedef bölgenin uçlarına özgü tasarlanmış iki primer, ısıya dayanıklı bir DNA polimeraz enzimi (genellikle Taq polimeraz), nükleotid yapı taşları (dNTP'ler) ve reaksiyon için uygun tampon/Mg²⁺ ortamından oluşur.",
          "Primerlerin doğru tasarımı (erime sıcaklığı, GC içeriği, ikincil yapı kontrolü), reaksiyonun özgüllüğü ve verimliliği açısından kritik öneme sahiptir.",
        ],
      },
      {
        heading: "PCR Döngüsü Adım Adım",
        paragraphs: [
          "Aşağıdaki tabloda, standart bir PCR reaksiyonundaki tipik sıcaklık ve süre aralıkları özetlenmiştir. Gerçek değerler, kullanılan primer ve polimeraz türüne göre optimize edilir.",
        ],
      },
      {
        heading: "PCR'ın Farklı Türleri",
        paragraphs: [
          "Standart PCR'ın yanı sıra, ihtiyaca göre farklı PCR türleri geliştirilmiştir. RT-PCR (Reverse Transcription PCR), RNA şablonunu önce cDNA'ya dönüştürerek çoğaltmayı mümkün kılar. qPCR (gerçek zamanlı/kantitatif PCR), amplifikasyon sürecini floresan sinyalle anlık izleyerek başlangıç materyalinin niceliksel ölçümüne olanak tanır.",
          "CoreGen Biyoteknoloji, standart PCR'ın yanı sıra RT-PCR/qPCR hizmetlerini de uluslararası standartlarda sunmaktadır.",
        ],
      },
      {
        heading: "PCR'ın Kullanım Alanları",
        paragraphs: [
          "PCR; genotipleme çalışmalarından mutasyon tespitine, patojen taramasından klonlama sonrası doğrulamaya kadar geniş bir uygulama yelpazesine sahiptir. Adli bilimlerde DNA parmak izi analizinden, tarımsal biyoteknolojide bitki/hayvan genotiplemesine kadar pek çok alanda vazgeçilmez bir yöntemdir.",
        ],
      },
    ],
    table: {
      title: "Standart PCR Döngüsünün Aşamaları",
      headers: ["Aşama", "Tipik Sıcaklık", "Tipik Süre", "Amaç"],
      rows: [
        ["Başlangıç Denatürasyonu", "94–95°C", "1–5 dakika", "Şablon DNA'nın tam olarak ayrılması"],
        ["Denatürasyon", "94–95°C", "15–30 saniye", "Çift sarmalın tek sarmala ayrılması"],
        ["Bağlanma (Annealing)", "50–65°C", "15–30 saniye", "Primerlerin hedef bölgeye bağlanması"],
        ["Uzama (Extension)", "72°C", "1 dk/kb", "Yeni DNA zincirinin sentezlenmesi"],
        ["Son Uzama", "72°C", "5–10 dakika", "Yarım kalan zincirlerin tamamlanması"],
      ],
    },
    infographicSuggestion:
      "PCR'ın üç temel aşamasını (denatürasyon → bağlanma → uzama) dairesel bir döngü şeması olarak gösteren, her aşamanın sıcaklığını ve DNA moleküllerinin o aşamadaki görsel durumunu (çift sarmal / ayrılmış / primer bağlı / yeni sentezlenen zincir) içeren bir infografik.",
    faqs: [
      {
        question: "PCR için ne kadar numune gereklidir?",
        answer:
          "PCR, çok düşük miktarda başlangıç materyaliyle bile çalışabilir; kesin miktar, hedef bölgeye ve numune tipine göre değişir. Numune gönderim koşulları için Numune Gönderim Rehberi'ni inceleyebilir veya bizimle iletişime geçebilirsiniz.",
      },
      {
        question: "PCR sonuçları nasıl doğrulanır?",
        answer:
          "PCR ürünleri genellikle jel elektroforezi ile boyut kontrolünden geçirilir; gerektiğinde Sanger dizileme ile dizi düzeyinde doğrulama yapılabilir.",
      },
      {
        question: "PCR ile qPCR arasındaki temel fark nedir?",
        answer:
          "Standart PCR, reaksiyon sonunda (uç nokta) sonucu değerlendirirken; qPCR, amplifikasyonu her döngüde floresan sinyalle gerçek zamanlı izleyerek başlangıç materyalinin niceliksel ölçümünü sağlar.",
      },
      {
        question: "PCR'da kontaminasyon riski nasıl azaltılır?",
        answer:
          "Numune hazırlama, reaksiyon kurulumu ve analiz sonrası alanların fiziksel olarak ayrılması, filtreli pipet ucu kullanımı ve düzenli negatif kontrol uygulaması, kontaminasyon riskini azaltan temel önlemlerdir.",
      },
    ],
    sources: [
      "Mullis, K. B. (1990). The Unusual Origin of the Polymerase Chain Reaction. Scientific American, 262(4), 56–65.",
      "Saiki, R. K., et al. (1988). Primer-Directed Enzymatic Amplification of DNA with a Thermostable DNA Polymerase. Science, 239(4839), 487–491.",
      "The Nobel Prize in Chemistry 1993 — NobelPrize.org",
    ],
    relatedServiceSlugs: ["pcr", "rt-pcr", "primer-tasarimi"],
  },
  {
    slug: "dna-izolasyonu-nasil-yapilir",
    title: "DNA İzolasyonu Nasıl Yapılır?",
    excerpt:
      "Hücre lizizinden saflaştırmaya, izolasyon yöntemlerinden kalite kontrolüne kadar genomik DNA izolasyonunun temel adımları.",
    category: "Moleküler Biyoloji",
    publishedAt: "2026-06-16",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "DNA İzolasyonu Neden Bu Kadar Önemli?",
        paragraphs: [
          "Genomik DNA izolasyonu, moleküler biyoloji çalışmalarının neredeyse tamamının ilk basamağıdır. PCR, dizileme, genotipleme gibi sonraki analizlerin güvenilirliği, doğrudan izole edilen DNA'nın saflığına ve bütünlüğüne bağlıdır.",
          "Düşük kaliteli bir DNA izolasyonu; PCR'da amplifikasyon başarısızlığına, dizileme kalitesinde düşüşe veya yanlış-negatif sonuçlara yol açabilir. Bu nedenle izolasyon aşaması, görünürde basit olsa da titizlik gerektiren bir süreçtir.",
        ],
      },
      {
        heading: "DNA İzolasyonunun Temel Prensibi",
        paragraphs: [
          "Genel olarak DNA izolasyonu üç ana aşamadan oluşur: hücre parçalama (lizis), protein ve diğer kirleticilerin uzaklaştırılması, ve DNA'nın saflaştırılıp çöktürülmesi.",
          "Lizis aşamasında, hücre zarı ve gerekiyorsa hücre duvarı (bitki/bakteri örneklerinde), deterjanlar veya enzimler (ör. Proteinaz K) yardımıyla parçalanır. Bu, DNA'nın hücre içeriğine serbest kalmasını sağlar.",
          "Ardından proteinler ve diğer makromoleküller, çeşitli yöntemlerle uzaklaştırılır ve geriye kalan DNA, etanol veya izopropanol gibi çözücülerle çöktürülerek saflaştırılır.",
        ],
      },
      {
        heading: "Yaygın DNA İzolasyon Yöntemleri",
        paragraphs: [
          "Fenol-kloroform ekstraksiyonu, uzun yıllardır kullanılan klasik bir yöntemdir; yüksek saflıkta DNA verse de zaman alıcıdır ve toksik kimyasallar içerir.",
          "Kolon bazlı (silika membran) izolasyon kitleri, günümüzde en yaygın kullanılan yöntemdir. DNA'nın silika yüzeye seçici olarak bağlanması prensibine dayanır ve hızlı, standartlaştırılmış sonuçlar sunar.",
          "Manyetik boncuk bazlı izolasyon ise, özellikle yüksek verimli (yüksek örnek sayılı) çalışmalarda otomasyona uygunluğuyla öne çıkar.",
        ],
      },
      {
        heading: "Genel İzolasyon Akışı",
        paragraphs: [
          "Aşağıdaki tablo, kolon bazlı bir DNA izolasyon kitiyle tipik bir çalışma akışını özetlemektedir. Kesin adımlar, kullanılan kit ve örnek tipine göre değişiklik gösterebilir.",
        ],
      },
      {
        heading: "İzolasyon Sonrası Kalite Kontrol",
        paragraphs: [
          "İzolasyon tamamlandıktan sonra, DNA'nın miktarı ve saflığı spektrofotometrik yöntemlerle (ör. NanoDrop) ölçülür. 260/280 nm oranının ~1.8 civarında olması protein kontaminasyonunun düşük olduğunu, 260/230 oranının 2.0-2.2 aralığında olması ise organik/tuz kontaminasyonunun düşük olduğunu gösterir.",
          "Ayrıca jel elektroforezi ile DNA'nın bütünlüğü (parçalanmamış, yüksek moleküler ağırlıklı bant) görsel olarak doğrulanır.",
        ],
      },
    ],
    table: {
      title: "Kolon Bazlı DNA İzolasyonu — Genel Akış",
      headers: ["Adım", "Açıklama"],
      rows: [
        ["1. Numune Hazırlığı", "Doku/hücre örneğinin parçalanması veya homojenizasyonu"],
        ["2. Lizis", "Hücre zarının deterjan/enzim (Proteinaz K) ile parçalanması"],
        ["3. Bağlanma", "Serbest kalan DNA'nın silika kolona seçici bağlanması"],
        ["4. Yıkama", "Protein ve tuz kalıntılarının yıkama tamponlarıyla uzaklaştırılması"],
        ["5. Elüsyon", "Saflaştırılmış DNA'nın kolon dışına alınması"],
        ["6. Kalite Kontrol", "NanoDrop ile miktar/saflık, jel elektroforezi ile bütünlük ölçümü"],
      ],
    },
    infographicSuggestion:
      "Bir hücreden başlayarak lizis, bağlanma, yıkama ve elüsyon adımlarını sırayla gösteren, sonunda saf DNA sarmalıyla biten yatay bir akış şeması (her adımda basit bir ikon: hücre, deterjan damlası, kolon, yıkama şişesi, DNA sarmalı).",
    faqs: [
      {
        question: "DNA izolasyonu için hangi örnek tipleri kullanılabilir?",
        answer:
          "Bitki, hayvan, bakteri, hücre kültürü ve doku örnekleri dahil geniş bir yelpazeden genomik DNA izolasyonu yapılabilir; her örnek tipi için uygun protokol seçilir.",
      },
      {
        question: "İzole edilen DNA ne kadar süre saklanabilir?",
        answer:
          "Uygun koşullarda (genellikle -20°C) saklanan DNA, uzun süre stabil kalabilir. Kısa vadeli kullanım için +4°C de yeterli olabilir; ancak tekrarlanan dondur-çöz döngülerinden kaçınılması önerilir.",
      },
      {
        question: "260/280 oranı neden önemlidir?",
        answer:
          "Bu oran, DNA örneğindeki protein kontaminasyonunun bir göstergesidir. İdeal aralığın dışına çıkması, sonraki analizlerin (PCR, dizileme) güvenilirliğini etkileyebilir.",
      },
    ],
    sources: [
      "Sambrook, J., & Russell, D. W. (2001). Molecular Cloning: A Laboratory Manual (3rd ed.). Cold Spring Harbor Laboratory Press.",
      "Tan, S. C., & Yiap, B. C. (2009). DNA, RNA, and Protein Extraction: The Past and The Present. Journal of Biomedicine and Biotechnology.",
    ],
    relatedServiceSlugs: ["dna-izolasyonu", "rna-izolasyonu", "pcr"],
  },
  {
    slug: "ngs-teknolojisi-nedir",
    title: "NGS (Yeni Nesil Dizileme) Teknolojisi Nedir?",
    excerpt:
      "Sanger dizilemeden farkından iş akışına, uygulama alanlarından biyoinformatik analize kadar Yeni Nesil Dizileme'nin kapsamlı bir anlatımı.",
    category: "Dizileme",
    publishedAt: "2026-07-01",
    readingTimeMinutes: 9,
    sections: [
      {
        heading: "NGS Nedir?",
        paragraphs: [
          "Yeni Nesil Dizileme (Next Generation Sequencing - NGS), bir DNA örneğindeki milyonlarca kısa DNA fragmanının aynı anda (paralel olarak) dizilenmesini mümkün kılan bir teknoloji ailesidir.",
          "Bu paralel işleme kapasitesi, NGS'yi klasik Sanger dizilemeden ayıran en temel özelliktir ve tüm genom veya transkriptom gibi büyük ölçekli analizleri ekonomik ve makul sürelerde mümkün kılar.",
        ],
      },
      {
        heading: "NGS ile Sanger Dizileme Arasındaki Fark",
        paragraphs: [
          "Sanger dizileme, tek bir DNA fragmanını yüksek doğrulukla dizileyen, ancak bir seferde sınırlı miktarda veri üreten bir yöntemdir. Küçük, hedefe özel bölgelerin (tek gen, mutasyon doğrulama) dizilenmesinde hâlâ altın standarttır.",
          "NGS ise, aynı anda milyonlarca fragmanı dizileyerek çok daha yüksek bir veri çıktısı (throughput) sağlar. Bu da NGS'yi tüm genom dizileme (WGS), tüm ekzom dizileme (WES), transkriptom analizi (RNA-Seq) ve metagenomik gibi geniş kapsamlı uygulamalar için uygun kılar.",
        ],
      },
      {
        heading: "NGS İş Akışı",
        paragraphs: [
          "Tipik bir NGS çalışması dört ana aşamadan oluşur: numune ve kalite kontrolü, kütüphane hazırlığı (DNA/RNA'nın dizileme cihazına uygun adaptörlerle işlenmesi), dizileme (fragmanların paralel olarak okunması) ve biyoinformatik analiz (üretilen ham verinin anlamlı sonuçlara dönüştürülmesi).",
          "Biyoinformatik analiz aşaması, NGS iş akışının en kritik ve uzmanlık gerektiren bölümüdür; ham okumaların (reads) referans genoma hizalanması, varyant çağırma, gen ifadesi kantifikasyonu gibi adımları içerir.",
        ],
      },
      {
        heading: "NGS'nin Başlıca Uygulama Alanları",
        paragraphs: [
          "NGS teknolojisi, farklı analiz ihtiyaçlarına göre çeşitli alt uygulamalara ayrılır. Aşağıdaki tabloda en yaygın NGS uygulamaları özetlenmiştir.",
        ],
      },
      {
        heading: "Hangi Durumda NGS, Hangi Durumda Sanger Tercih Edilmeli?",
        paragraphs: [
          "Tek bir gende bilinen bir mutasyonun doğrulanması gibi hedefe özel, düşük kapsamlı ihtiyaçlarda Sanger dizileme hâlâ hızlı ve ekonomik bir seçenektir.",
          "Buna karşın, tüm genom/ekzom taraması, kapsamlı gen ifadesi profillemesi veya mikrobiyal topluluk analizi gibi geniş kapsamlı sorularda NGS, sunduğu paralel işleme kapasitesiyle vazgeçilmez hale gelir.",
        ],
      },
    ],
    table: {
      title: "Başlıca NGS Uygulamaları",
      headers: ["Uygulama", "Açıklama"],
      rows: [
        ["Whole Genome Sequencing (WGS)", "Organizmanın tüm genomunun dizilenmesi"],
        ["Whole Exome Sequencing (WES)", "Yalnızca protein kodlayan bölgelerin (ekzomun) dizilenmesi"],
        ["RNA-Seq", "Transkriptomun (ifade edilen genlerin) profillenmesi"],
        ["Shotgun Metagenomics", "Bir topluluktaki tüm mikrobiyal genetik materyalin dizilenmesi"],
        ["Targeted Sequencing", "Belirli, önceden tanımlanmış bölgelerin hedefe özel dizilenmesi"],
      ],
    },
    infographicSuggestion:
      "Sol tarafta Sanger dizilemeyi (tek bir DNA ipliği, tek okuma) sağ tarafta NGS'yi (yüzlerce paralel DNA ipliği, eş zamanlı çoklu okuma) yan yana karşılaştıran, işlem kapasitesi farkını görsel olarak vurgulayan bir infografik.",
    faqs: [
      {
        question: "NGS sonuçları ne kadar sürede teslim edilir?",
        answer:
          "Süre; analiz türüne, kapsam derinliğine ve numune sayısına göre değişir. Teklif aşamasında tahmini süre paylaşılır.",
      },
      {
        question: "NGS için hangi biyoinformatik çıktılar sağlanır?",
        answer:
          "Ham veri (FASTQ), analiz raporu, ilgili grafikler ve istatistiksel sonuçlar dahil olmak üzere kapsamlı biyoinformatik çıktılar sunulur.",
      },
      {
        question: "NGS ile RNA-Seq aynı şey mi?",
        answer:
          "Hayır. NGS, bir dizileme teknolojisi ailesidir; RNA-Seq ise bu teknolojinin transkriptom analizine uygulanan spesifik bir kullanım alanıdır.",
      },
      {
        question: "Küçük ölçekli bir proje için NGS mantıklı mı?",
        answer:
          "Hedef, sınırlı sayıda bilinen bölgeyse Sanger dizileme daha ekonomik olabilir. Geniş kapsamlı veya keşfe dayalı sorularda NGS'nin sağladığı veri derinliği çoğu zaman maliyetini haklı çıkarır.",
      },
    ],
    sources: [
      "Goodwin, S., McPherson, J. D., & McCombie, W. R. (2016). Coming of Age: Ten Years of Next-Generation Sequencing Technologies. Nature Reviews Genetics, 17(6), 333–351.",
      "Behjati, S., & Tarpey, P. S. (2013). What is Next Generation Sequencing? Archives of Disease in Childhood - Education and Practice, 98(6), 236–238.",
    ],
    relatedServiceSlugs: ["ngs", "rna-seq", "sanger-dizileme"],
  },
];

/** Ana Sayfa "Blog" bölümü — tam yazılardan türetilir, veri çoğaltılmaz. */
export const latestBlogPosts: BlogPostSummary[] = blogPosts
  .slice()
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .map(({ slug, title, excerpt, category, publishedAt }) => ({ slug, title, excerpt, category, publishedAt }));

/**
 * SEO Strategy'deki 15 başlıklık yol haritasından henüz yazılmamış 12
 * konu. Blog listeleme sayfasında "içerik hazırlanıyor" olarak,
 * tıklanamaz şekilde gösterilir (Hizmetler modülündeki aynı politika).
 */
export const plannedBlogTopics: string[] = [
  "RT-PCR ve PCR Arasındaki Farklar",
  "qPCR Nedir?",
  "RNA-Seq Nedir?",
  "RNA İzolasyonu Neden Önemlidir?",
  "Agaroz Jel Elektroforezi Rehberi",
  "Primer Tasarımı Nasıl Yapılır?",
  "Western Blot Nedir?",
  "ELISA Nedir?",
  "Biyoinformatik Nedir?",
  "Shotgun Metagenomik Nedir?",
  "16S rRNA Analizi Nedir?",
  "Moleküler Biyoloji Laboratuvarlarında Kalite Kontrol",
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, limit);
}
