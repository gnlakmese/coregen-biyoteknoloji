export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "textarea" | "select" | "checkbox" | "radio" | "multiselect";
  options?: string[];
  placeholder?: string;
};

export const SERVICE_FIELDS: Record<string, FieldConfig[]> = {
  // --- ÖNCEKİ MOLEKÜLER BİYOLOJİ FORMLARI BURADA DURUYOR ---
  
  // ================= DİZİLEME HİZMETLERİ =================
  "sanger-dizileme": [
    { name: "ornekTuru", label: "Örnek türü nedir? *", type: "text" },
    { name: "ornekSayisi", label: "Örnek sayısı *", type: "text" },
    { name: "pcrHazirmi", label: "PCR ürünü hazır mı?", type: "select", options: ["Evet", "Hayır"] },
    { name: "pcrUzunluk", label: "PCR ürün uzunluğu / Miktarı?", type: "text" },
    { name: "primerDurumu", label: "Primer durumu nedir?", type: "select", options: ["Müşteri Sağlayacak", "CoreGen Sağlayacak"] },
    { name: "primerSekansi", label: "Primer sekansı (Varsa)", type: "textarea" },
    { name: "okumaYonu", label: "Okuma yönü tercihi", type: "select", options: ["Tek yönlü (Forward)", "Tek yönlü (Reverse)", "Çift yönlü (F+R)"] },
    { name: "organizma", label: "Organizma ve Beklenen bölge?", type: "text" },
    { name: "calismaAmaci", label: "Çalışmanın amacı (Klon doğrulama, varyant vb.)", type: "text" }
  ],
  "wgs": [
    { name: "organizma", label: "Organizma ve Örnek türü? *", type: "text" },
    { name: "ornekSayisi", label: "Örnek sayısı *", type: "text" },
    { name: "dnaDurumu", label: "DNA durumu ve izolasyon gereksinimi?", type: "select", options: ["DNA Hazır", "İzolasyon CoreGen'den"] },
    { name: "dnaKalite", label: "DNA miktarı ve kalite bilgisi?", type: "text" },
    { name: "gruplar", label: "Gruplar ve Biyolojik tekrar sayısı?", type: "textarea" },
    { name: "depth", label: "İstenen sequencing depth ve Read length? (Örn: 30x, PE150)", type: "text" },
    { name: "platform", label: "Platform tercihi ve Referans genom?", type: "text" },
    { name: "analizler", label: "İstenen biyoinformatik analizler?", type: "textarea" }
  ],
  "wes": [
    { name: "organizma", label: "Organizma ve Örnek türü? *", type: "text" },
    { name: "ornekSayisi", label: "Örnek sayısı *", type: "text" },
    { name: "dnaDurumu", label: "DNA durumu ve kalite/konsantrasyon bilgisi?", type: "text" },
    { name: "exomeCapture", label: "Exome capture tercihi varsa belirtiniz", type: "text" },
    { name: "depth", label: "Sequencing depth ve Referans genom?", type: "text" },
    { name: "analizler", label: "Varyant analizi, filtreleme ve annotation beklentileri?", type: "textarea" }
  ],
  "targeted-sequencing": [
    { name: "hedefGenler", label: "Hedef gen/genler ve bölge? *", type: "textarea" },
    { name: "panelDurumu", label: "Panel tasarımı gerekiyor mu?", type: "select", options: ["Panel Hazır", "Tasarım Gerekiyor"] },
    { name: "ornekTuru", label: "Örnek türü ve Sayısı? *", type: "text" },
    { name: "depth", label: "Sequencing depth ve Referans genom?", type: "text" },
    { name: "analizler", label: "İstenen varyant analizi ve beklenen çıktılar?", type: "textarea" }
  ],
  "rna-seq": [
    { name: "ornekTuru", label: "Örnek türü ve Sayısı? *", type: "text" },
    { name: "rnaDurumu", label: "RNA hazır mı, izolasyon gerekiyor mu?", type: "select", options: ["RNA Hazır", "İzolasyon CoreGen'den"] },
    { name: "rnaKalite", label: "RNA kalite (RIN) bilgisi mevcut mu?", type: "text" },
    { name: "gruplar", label: "Gruplar ve Biyolojik tekrar sayısı?", type: "textarea" },
    { name: "seqTipi", label: "Kütüphane tipi (mRNA, Total RNA vb.) ve Depth?", type: "text" },
    { name: "analizler", label: "Diferansiyel ekspresyon ve diğer istenen analizler?", type: "textarea" }
  ],
  "shotgun-metagenomik": [
    { name: "ornekTuru", label: "Örnek türü, Sayısı ve Gruplar? *", type: "textarea" },
    { name: "dnaDurumu", label: "DNA durumu ve kalite bilgisi?", type: "text" },
    { name: "hostDNA", label: "Host DNA riski / uzaklaştırma gerekiyor mu?", type: "select", options: ["Evet", "Hayır", "Emin Değilim"] },
    { name: "depth", label: "Sequencing depth ve Read length?", type: "text" },
    { name: "analizler", label: "Taxonomic/Functional profiling, Direnç genleri vb. beklentiler?", type: "textarea" }
  ],
  "16s-rrna": [
    { name: "ornekTuru", label: "Örnek türü ve Organizma/Kaynak? *", type: "text" },
    { name: "ornekSayisi", label: "Örnek sayısı ve Gruplar? *", type: "text" },
    { name: "dnaDurumu", label: "DNA izolasyonu gerekiyor mu?", type: "select", options: ["DNA Hazır", "İzolasyon CoreGen'den"] },
    { name: "bolgeTercihi", label: "Bölge tercihi (V1-V9, V3-V4 vb.) ve Primer durumu?", type: "text" },
    { name: "analizler", label: "Alpha/Beta diversity, Taxonomic profiling vb. analizler?", type: "textarea" }
  ],

  // ================= PROTEİN ANALİZLERİ =================
  "western-blot": [
    { name: "ornekTuru", label: "Örnek türü, Sayısı ve Gruplar? *", type: "textarea" },
    { name: "izolasyon", label: "Protein izolasyonu CoreGen tarafından mı yapılacak?", type: "select", options: ["Evet", "Hayır (Hazır)"] },
    { name: "hedefProtein", label: "Hedef protein(ler), Organizma ve Moleküler ağırlık? *", type: "textarea" },
    { name: "loadingControl", label: "Loading control (Housekeeping) proteini?", type: "text" },
    { name: "antikorDurumu", label: "Primer ve Sekonder antikor temin durumu?", type: "select", options: ["Müşteri Sağlayacak", "CoreGen Temin Edecek"] },
    { name: "antikorDetay", label: "Antikor marka, katalog numarası ve dilüsyon bilgisi?", type: "textarea" },
    { name: "analizler", label: "Densitometri, Normalizasyon ve İstatistiksel analiz beklentileri?", type: "textarea" }
  ],
  "elisa": [
    { name: "hedefAnalit", label: "Hedef analit ve Organizma? *", type: "text" },
    { name: "ornekTuru", label: "Örnek türü, Sayısı ve Gruplar? *", type: "textarea" },
    { name: "kitDurumu", label: "ELISA kiti müşteri tarafından mı sağlanacak?", type: "select", options: ["Müşteri Sağlayacak", "CoreGen Temin Edecek"] },
    { name: "kitDetay", label: "Kit marka ve katalog numarası?", type: "text" },
    { name: "istatistik", label: "Standart eğri, Kantifikasyon ve İstatistiksel analiz?", type: "textarea" }
  ],
  "rekombinant-protein-analizi": [
    { name: "proteinAdi", label: "Protein adı ve kaynağı? *", type: "text" },
    { name: "üretimDurumu", label: "Protein mevcut mu, üretim mi gerekiyor?", type: "text" },
    { name: "saflik", label: "Protein miktarı, saflık ve konsantrasyon beklentisi?", type: "text" },
    { name: "analizler", label: "Kullanılacak analiz (SDS-PAGE, Western Blot vb.) ve Numune sayısı?", type: "textarea" }
  ],

  // ================= BİYOİNFORMATİK =================
  "ngs-veri-analizi": [{ name: "veriTuru", label: "Veri türü, Platform ve Format (FASTQ/BAM)? *", type: "text" }, { name: "ornekSayisi", label: "Örnek sayısı ve Organizma?", type: "text" }, { name: "referans", label: "Referans genom ve Metadata durumu?", type: "text" }, { name: "analizler", label: "İstenen analiz (Alignment, Variant calling vb.)?", type: "textarea" }],
  "rna-seq-analizi": [{ name: "dosyalar", label: "FASTQ dosyaları ve Örnek sayısı? *", type: "text" }, { name: "gruplar", label: "Gruplar, Biyolojik tekrar ve Organizma?", type: "textarea" }, { name: "referans", label: "Referans genom/anotasyon ve Read özellikleri?", type: "text" }, { name: "analizler", label: "Diferansiyel ekspresyon, Pathway vb. istenen analizler?", type: "textarea" }],
  "diferansiyel-gen-ekspresyonu": [{ name: "veriTuru", label: "Veri türü (Count matrix/FASTQ) ve Örnek sayısı? *", type: "text" }, { name: "gruplar", label: "Deney grupları ve Kontroller?", type: "text" }, { name: "analizler", label: "İstenen cutoff değerleri ve Enrichment analizleri?", type: "textarea" }],
  "varyant-analizi": [{ name: "veriFormat", label: "Veri formatı (VCF/BAM) ve Organizma? *", type: "text" }, { name: "referans", label: "Referans genom/versiyonu ve Örnek sayısı?", type: "text" }, { name: "analizler", label: "Variant annotation ve Filtreleme kriterleri?", type: "textarea" }],
  "filogenetik-analiz": [{ name: "sekanslar", label: "Sekans dosyaları (FASTA) ve Sekans sayısı? *", type: "text" }, { name: "yontem", label: "Filogenetik yöntem tercihi ve Outgroup?", type: "text" }, { name: "analizler", label: "Bootstrap ve Görselleştirme beklentileri?", type: "textarea" }],
  "metagenomik-veri-analizi": [{ name: "veriTuru", label: "Veri türü (FASTQ), Örnek sayısı ve Gruplar? *", type: "textarea" }, { name: "platform", label: "Sequencing platformu ve Organizma kaynağı?", type: "text" }, { name: "analizler", label: "Taxonomic/Functional profiling, Alpha/Beta diversity vb. analizler?", type: "textarea" }],

  // ================= DANIŞMANLIK VE BİLİMSEL DESTEK =================
  "proje-danismanlik": [{ name: "konu", label: "Proje konusu, Amacı ve Hipotez? *", type: "textarea" }, { name: "asama", label: "Mevcut aşama ve Numune durumu?", type: "text" }, { name: "beklenti", label: "Beklenen çıktı ve İhtiyaç duyulan destek?", type: "textarea" }],
  "yerinde-hizmet-modulu": [{ name: "kurum", label: "Kurum, Şehir ve Hizmetin yapılacağı alan? *", type: "text" }, { name: "islem", label: "İstenen işlem, Cihaz/ekipman ve Personel durumu?", type: "textarea" }, { name: "sure", label: "Tahmini süre ve Tercih edilen tarih?", type: "text" }],
  "kurumsal-ve-akademik-egitimler": [{ name: "konu", label: "Eğitim konusu ve Katılımcı profili (Seviye)? *", type: "text" }, { name: "format", label: "Online / Yüz yüze tercihi ve Katılımcı sayısı?", type: "text" }, { name: "uygulama", label: "Uygulamalı eğitim ihtiyacı ve Tarih?", type: "textarea" }],
  "deney-tasarimi": [{ name: "amac", label: "Araştırma amacı ve Hipotez? *", type: "textarea" }, { name: "gruplar", label: "Gruplar, Örnek sayısı ve Tekrarlar?", type: "text" }, { name: "parametreler", label: "Ölçülecek parametreler ve Beklenen çıktı?", type: "textarea" }],
  "istatistiksel-analiz": [{ name: "veriTuru", label: "Veri türü, Formatı ve Örnek sayısı? *", type: "text" }, { name: "deney", label: "Kullanılan deney ve İstenen karşılaştırmalar?", type: "textarea" }, { name: "yontem", label: "İstatistiksel yöntem tercihi ve Grafik ihtiyacı?", type: "text" }],
  "bilimsel-raporlama": [{ name: "konu", label: "Proje konusu, Veri türü ve Mevcut sonuçlar? *", type: "textarea" }, { name: "format", label: "Rapor formatı, Hedef kitle ve İstenen kapsam?", type: "textarea" }],
  "yayin-danismanligi": [{ name: "konu", label: "Makale konusu, Hedef dergi ve Makale aşaması? *", type: "textarea" }, { name: "veriDurumu", label: "Veri, İstatistik ve Şekil durumu?", type: "text" }, { name: "kapsam", label: "İstenen danışmanlık kapsamı?", type: "textarea" }],

  // ================= BİYOKİMYA VE PATOLOJİ =================
  "oksidatif-stres-analizleri": [{ name: "parametre", label: "Hedef analiz/parametre (TAS, TOS, SOD vb.)? *", type: "text" }, { name: "ornek", label: "Örnek türü, Sayısı ve Gruplar?", type: "textarea" }, { name: "kitDurumu", label: "Kit/reaktif durumu (CoreGen mi sağlayacak)?", type: "select", options: ["Müşteri Sağlayacak", "CoreGen Sağlayacak"] }, { name: "analizler", label: "İstenen analiz, İstatistik ve Grafik beklentisi?", type: "textarea" }],
  "biyokimya-test-analizleri": [{ name: "parametre", label: "Hedef parametre ve İstenen test paneli? *", type: "text" }, { name: "ornek", label: "Örnek türü, Sayısı ve Gruplar?", type: "textarea" }, { name: "analizler", label: "Özel yöntem, İstatistik ve Raporlama?", type: "text" }],
  "spesifik-test-analizleri": [{ name: "analit", label: "Hedef analit (Vitamin, Eser element vb.)? *", type: "text" }, { name: "ornek", label: "Örnek türü, Sayısı ve Gruplar?", type: "text" }, { name: "sonuc", label: "İstenen yöntem ve Sonuç birimi?", type: "text" }],
  "elisa-test-analizleri": [{ name: "analit", label: "Hedef analit ve Tür? *", type: "text" }, { name: "ornek", label: "Örnek türü, Sayısı ve Gruplar?", type: "textarea" }, { name: "kit", label: "Kit durumu, Marka ve Katalog No?", type: "text" }, { name: "analizler", label: "İstenen kantifikasyon, Kontroller ve İstatistik?", type: "textarea" }],
  "immunohistokimya-boyama": [{ name: "doku", label: "Doku türü, Organizma ve Örnek sayısı? *", type: "text" }, { name: "durum", label: "Doku durumu (Parafin/Frozen) ve Kesitler hazır mı?", type: "text" }, { name: "antijen", label: "Hedef antijen/protein ve Antikor durumu?", type: "textarea" }, { name: "analizler", label: "Boyama yöntemi, Görüntüleme ve Nicel analiz beklentisi?", type: "textarea" }],

  // ================= HÜCRE KÜLTÜRÜ ANALİZLERİ =================
  "ilac-gelistirme-toksisite": [{ name: "hucre", label: "Hücre hattı, Kaynağı ve Hazır olma durumu? *", type: "text" }, { name: "bilesik", label: "Test edilecek bileşik/ilaç, Doz aralığı ve Süre?", type: "textarea" }, { name: "endpoint", label: "Test edilecek endpoint (Canlılık, Apoptoz vb.)?", type: "text" }, { name: "analizler", label: "Kontrol grupları ve İstatistik beklentisi?", type: "text" }],
  "hucre-kulturu-elisa": [{ name: "hucre", label: "Hücre tipi/hattı ve Kültür koşulları? *", type: "text" }, { name: "analit", label: "Analit/hedef, Örnek sayısı ve Gruplar?", type: "textarea" }, { name: "kit", label: "ELISA kit durumu ve İstenen sonuç?", type: "text" }],
  "proliferasyon-migrasyon": [{ name: "hucre", label: "Hücre hattı ve Deney amacı? *", type: "text" }, { name: "tasarim", label: "Tedavi/bileşik, Gruplar ve Zaman noktaları?", type: "textarea" }, { name: "analizler", label: "Görüntü analizi ve Migrasyon/proliferasyon ölçümü?", type: "text" }],
  "genetik-muhendisligi-transfeksiyon": [{ name: "hucre", label: "Hücre hattı ve Hedef gen? *", type: "text" }, { name: "materyal", label: "Plazmid/Vektör durumu (Kim sağlayacak)?", type: "text" }, { name: "yontem", label: "Transfeksiyon yöntemi ve Deney grupları?", type: "textarea" }, { name: "dogrulama", label: "Başarı kriteri ve İstenen doğrulama analizi?", type: "text" }],
  "kok-hucre-teknolojileri": [{ name: "hucre", label: "Hücre tipi, Kaynağı ve Mevcut durumu? *", type: "text" }, { name: "amac", label: "Deney amacı ve Diferansiyasyon hedefi?", type: "textarea" }, { name: "marker", label: "Kullanılacak markerlar ve Zaman noktaları?", type: "text" }, { name: "analizler", label: "Görüntüleme, Moleküler analiz ve İstatistik?", type: "textarea" }]
};

export const BIOINFORMATICS_SLUGS = [
  "ngs-veri-analizi", "rna-seq-analizi", "diferansiyel-gen-ekspresyonu", 
  "varyant-analizi", "filogenetik-analiz", "metagenomik-veri-analizi"
];