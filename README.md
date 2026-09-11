# CoreGen Biyoteknoloji — Web Platformu

Production-ready proje altyapısı. Bu doküman, kurulan altyapıyı ve yerel
geliştirme ortamının nasıl ayağa kaldırılacağını açıklar.

> **Durum:** Yalnızca altyapı kuruldu. Henüz sayfa içeriği, hizmet/ürün
> verisi veya teklif sistemi eklenmedi (bkz. proje analiz raporları).

## Teknoloji Yığını

| Katman | Seçim |
|---|---|
| Framework | Next.js 15 (App Router) |
| Dil | TypeScript (strict mode) |
| Stil | Tailwind CSS 3 + CSS değişken tabanlı design token sistemi |
| UI Bileşenleri | shadcn/ui (Radix primitives üzerine) |
| Animasyon | Framer Motion |
| ORM / Veritabanı | Prisma + PostgreSQL |
| Form/Validasyon | React Hook Form + Zod (kurulu, henüz form yok) |
| Lint/Format | ESLint (flat config) + Prettier (Tailwind class sıralama eklentili) |

## Klasör Yapısı

```
coregen-web/
├── prisma/
│   └── schema.prisma        # Yalnızca datasource/generator (veri modeli sonraki adımda)
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout + font yükleme
│   │   ├── globals.css       # Design token sistemi (CSS değişkenleri)
│   │   └── page.tsx          # GEÇİCİ scaffold doğrulama ekranı
│   ├── components/
│   │   ├── ui/                # shadcn/ui primitive'leri (button, card, ...)
│   │   ├── layout/             # Navbar, Footer (henüz boş — sonraki adım)
│   │   ├── sections/           # Hero, CTA, vb. (henüz boş)
│   │   ├── catalog/            # ProductCard, FilterSidebar vb. (henüz boş)
│   │   ├── quote/               # Teklif sepeti bileşenleri (henüz boş)
│   │   ├── blog/                # Blog bileşenleri (henüz boş)
│   │   ├── forms/               # Form bileşenleri (henüz boş)
│   │   ├── admin/               # Admin panel bileşenleri (henüz boş)
│   │   └── seo/                 # JSON-LD/meta yardımcıları (henüz boş)
│   ├── lib/
│   │   ├── utils.ts            # cn() sınıf birleştirme yardımcı fonksiyonu
│   │   ├── prisma.ts           # Prisma client singleton
│   │   └── motion.ts           # Framer Motion ortak varyantlar/transition'lar
│   ├── hooks/                   # (henüz boş)
│   ├── types/                   # (henüz boş)
│   ├── actions/                  # Server Actions (henüz boş)
│   └── content/                  # Statik editoryal içerik (henüz boş)
├── components.json             # shadcn/ui yapılandırması
├── tailwind.config.ts           # Design token → Tailwind eşlemesi
├── eslint.config.mjs
├── .prettierrc.json
└── .env.example
```

## Kurulum (Yerel Geliştirme)

> **Not:** Bu proje, ağ erişimi olmayan bir ortamda (Claude'un analiz
> ortamı) elle oluşturuldu; `npm install` burada ÇALIŞTIRILMADI. Aşağıdaki
> adımları kendi makinenizde veya Claude Code gibi ağ erişimi olan bir
> ortamda çalıştırmanız gerekir.

1. **Bağımlılıkları kurun**
   ```bash
   npm install
   ```

2. **Ortam değişkenlerini ayarlayın**
   ```bash
   cp .env.example .env
   # .env dosyasındaki DATABASE_URL'i kendi PostgreSQL bağlantınızla doldurun
   ```

3. **Veritabanını oluşturun ve şemayı uygulayın**
   ```bash
   npm run prisma:migrate
   ```
   Bu komut, `prisma/schema.prisma`'daki tüm modelleri (Product, Service,
   BlogPost, Quote, Applicant, ServiceRequest, User vb.) veritabanınızda
   oluşturur. **Önemli:** İlk migration sonrası, `schema.prisma`'nın
   `QuoteItem` modelinin üzerindeki yorumda belirtilen CHECK kısıtını elle
   eklemeniz gerekir:
   ```sql
   ALTER TABLE quote_items ADD CONSTRAINT quote_item_product_xor_service
   CHECK ((product_id IS NOT NULL AND service_id IS NULL) OR
          (product_id IS NULL AND service_id IS NOT NULL));
   ```

4. **Veritabanını gerçek içerikle doldurun (seed)**
   ```bash
   npm run prisma:seed
   ```
   Bu, projede geliştirilen TÜM gerçek içeriği (14 hizmet, 70+ ürün — DLAB
   dahil, 3 blog yazısı) veritabanına aktarır. Bkz. `prisma/seed.ts`.

5. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   ```
   `http://localhost:3000` adresinde tam siteyi (Ana Sayfa, Hizmetler,
   Ürünler, Blog, Kariyer, Teklif Sepeti, Admin Paneli) görmelisiniz —
   tüm veri artık PostgreSQL'den geliyor.

## Diğer Komutlar

```bash
npm run lint          # ESLint kontrolü
npm run lint:fix       # Otomatik düzeltilebilir lint hatalarını düzelt
npm run format          # Prettier ile tüm dosyaları biçimlendir
npm run format:check     # Biçimlendirme kontrolü (CI için)
npm run typecheck         # TypeScript tip kontrolü (derleme yapmadan)
npm run prisma:studio      # Prisma Studio (veritabanı görsel arayüzü)
npm run prisma:seed        # Veritabanını gerçek içerikle yeniden doldur (idempotent)
```

## Design System — İlk Öneri Notu

`src/app/globals.css` içindeki renk token'ları ve `src/app/layout.tsx`
içindeki font seçimleri (Space Grotesk / IBM Plex Sans / IBM Plex Mono),
Brand Guidelines dokümanında somut HEX/font değeri verilmediği için CoreGen
logosundan ve marka kişiliği tanımından (bilimsel, güvenilir, premium,
minimal, akademik, modern) türetilmiş **ilk öneri** niteliğindedir. Nihai
onaydan sonra yalnızca `globals.css` ve `layout.tsx` güncellenir; hiçbir
component renk/font değerini doğrudan içermediği için bu değişiklik
tüm sisteme tek noktadan yayılır.

## Admin Paneli

`/admin` altında, `middleware.ts` (`src/middleware.ts`) tarafından gerçekten korunan
bir admin paneli bulunuyor. Erişim için `.env` dosyanıza şunları eklemeniz gerekir:

```bash
ADMIN_EMAIL="admin@coregenbiyoteknoloji.com"
ADMIN_PASSWORD="güçlü-bir-şifre-seçin"
ADMIN_SESSION_SECRET="rastgele-uzun-bir-anahtar"  # ör. openssl rand -base64 32
```

Giriş: `/admin/giris`. Bu, Prisma `User` modeli ve NextAuth.js kurulana kadar
kullanılan **geçici ama gerçek** bir tek-kullanıcı kimlik doğrulama katmanıdır —
rol bazlı yetkilendirme (super_admin/editor/support) henüz yok.

Modüllerin çoğu (Teklifler, Kariyer Başvuruları, Blog, Medya, Analytics) şu an
**salt okunur** veya dürüst bir "veritabanı bekleniyor" boş durumu gösteriyor —
gerçek CRUD işlemleri Veritabanı Şeması adımında aktif olacak.

## Sonraki Adımlar (Geliştirme Yol Haritasına Göre)

1. Veritabanı Şeması (Prisma modelleri, migration, seed)
2. Design System onayı ve genişletilmesi
3. Layout İskeleti (Navbar/MegaMenu, Footer, Breadcrumb)
4. Ana Sayfa
5. Hizmet Modülü
6. Ürün/Katalog Modülü
7. Teklif Sepeti Sistemi
... (bkz. `CoreGen_Derinlestirilmis_Analiz_Raporu.md`, Bölüm 10)
