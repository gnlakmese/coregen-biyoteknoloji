import type { BlogPost } from "@/types/blog";
import type { ProductContent } from "@/types/product";
import type { ServiceContent } from "@/types/service";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const ORG_NAME = "CoreGen Biyoteknoloji";

/**
 * Bir hizmet sayfası için Service + BreadcrumbList + FAQPage şemalarını
 * birlikte üretir. Sayfa bileşeni bu diziyi tek tek `SchemaScript` ile
 * render eder.
 */
export function buildServiceSchemas(service: ServiceContent) {
  const url = `${SITE_URL}/hizmetler/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.heroDescription,
    url,
    serviceType: service.category,
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    areaServed: "TR",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE_URL}/hizmetler` },
      { "@type": "ListItem", position: 3, name: service.name, item: url },
    ],
  };

  const faqSchema =
    service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return [serviceSchema, breadcrumbSchema, faqSchema].filter(
    (schema): schema is NonNullable<typeof schema> => schema !== null,
  );
}

/**
 * Bir ürün sayfası için Product + BreadcrumbList şemalarını üretir.
 * CoreGen fiyat/marka/stok göstermediği için `offers` alanı bilinçli
 * olarak eklenmemiştir (schema.org Product için zorunlu değildir).
 */
export function buildProductSchemas(product: ProductContent, categorySlug: string) {
  const url = `${SITE_URL}/urunler/${product.slug}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    url,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: product.brand ?? ORG_NAME,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Ürünler", item: `${SITE_URL}/urunler` },
      {
        "@type": "ListItem",
        position: 3,
        name: product.category,
        item: `${SITE_URL}/urunler/kategori/${categorySlug}`,
      },
      { "@type": "ListItem", position: 4, name: product.name, item: url },
    ],
  };

  return [productSchema, breadcrumbSchema];
}

/** Bir blog yazısı için Article + BreadcrumbList + FAQPage şemalarını üretir. */
export function buildBlogPostSchemas(post: BlogPost) {
  const url = `${SITE_URL}/bilgi-merkezi/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url,
    datePublished: post.publishedAt,
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: ORG_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/bilgi-merkezi/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return [articleSchema, breadcrumbSchema, faqSchema].filter(
    (schema): schema is NonNullable<typeof schema> => schema !== null,
  );
}
