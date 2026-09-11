import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { BlogTableOfContents } from "@/components/blog/blog-toc";
import { BlogTableBlock, InfographicSuggestion, SourcesList } from "@/components/blog/blog-detail-sections";
import { RelatedServices } from "@/components/catalog/service-detail-sections";
import { SchemaScript } from "@/components/seo/schema-script";
import { CtaSection } from "@/components/sections/cta-section";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import { getServiceBySlug } from "@/content/services";
import { buildBlogPostSchemas } from "@/lib/seo";
import { slugify } from "@/lib/utils";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Yazı Bulunamadı" };
  }

  const url = `/bilgi-merkezi/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedServices = post.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const schemas = buildBlogPostSchemas(post);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Tablo, açıklamasında "tablo" geçen bölümün hemen altında gösterilir.
  const tableSectionIndex = post.sections.findIndex((s) =>
    s.paragraphs.some((p) => p.toLocaleLowerCase("tr-TR").includes("tablo")),
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <SchemaScript key={index} schema={schema} />
      ))}

      <section className="border-b border-border bg-brand-tint/40 py-14 lg:py-20">
        <div className="container space-y-5">
          <Breadcrumb
            items={[
              { label: "Bilgi Merkezi", href: "/bilgi-merkezi/blog" },
              { label: "Blog", href: "/bilgi-merkezi/blog" },
              { label: post.title },
            ]}
          />
          <Reveal>
            <div className="max-w-2xl space-y-4">
              <span className="w-fit rounded-full bg-secondary px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-secondary-foreground">
                {post.category}
              </span>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {formattedDate}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTimeMinutes} dakika okuma
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div className="max-w-2xl space-y-10">
            {post.sections.map((section, index) => (
              <Reveal key={section.heading} delay={Math.min(index * 0.04, 0.24)}>
                <div id={slugify(section.heading)} className="scroll-mt-24 space-y-4">
                  <h2 className="font-display text-xl font-semibold text-foreground">{section.heading}</h2>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                  {post.table && index === tableSectionIndex && <BlogTableBlock table={post.table} />}
                </div>
              </Reveal>
            ))}

            <Reveal>
              <InfographicSuggestion description={post.infographicSuggestion} />
            </Reveal>

            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-foreground">Sık Sorulan Sorular</h2>
                <Accordion items={post.faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))} />
              </div>
            </Reveal>

            <Reveal>
              <SourcesList sources={post.sources} />
            </Reveal>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            <BlogTableOfContents headings={post.sections.map((s) => s.heading)} />
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-sm font-medium text-foreground">İhtiyacınız mı var?</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Bu konuyla ilgili hizmetlerimiz için teklif talep edin.
              </p>
              <Link
                href="/teklif-sepeti"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Teklif Talep Edin
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="border-t border-border py-14 lg:py-20">
          <div className="container">
            <Reveal>
              <RelatedServices services={relatedServices} />
            </Reveal>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
