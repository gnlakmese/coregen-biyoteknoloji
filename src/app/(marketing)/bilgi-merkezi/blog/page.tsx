import type { Metadata } from "next";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { BlogExplorer } from "@/components/blog/blog-explorer";
import { CtaSection } from "@/components/sections/cta-section";
import { latestBlogPosts, plannedBlogTopics } from "@/content/blog";

const PAGE_TITLE = "Blog";
const PAGE_DESCRIPTION =
  "Moleküler biyoloji, genetik, PCR, dizileme ve biyoteknoloji alanlarında güncel, bilimsel doğruluğu yüksek içerikler.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/bilgi-merkezi/blog" },
  openGraph: {
    title: `${PAGE_TITLE} | CoreGen Biyoteknoloji`,
    description: PAGE_DESCRIPTION,
    url: "/bilgi-merkezi/blog",
    type: "website",
  },
};

export default function BlogListPage() {
  return (
    <>
      <section className="border-b border-border bg-brand-tint/40 py-14 lg:py-20">
        <div className="container space-y-5">
          <Breadcrumb items={[{ label: "Bilgi Merkezi", href: "/bilgi-merkezi/blog" }, { label: "Blog" }]} />
          <Reveal>
            <div className="max-w-2xl space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-magenta">
                Bilgi Merkezi
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Blog
              </h1>
              <p className="leading-relaxed text-muted-foreground">
                Moleküler biyoloji ve biyoteknoloji alanında bilimsel doğruluğu
                yüksek, anlaşılır içerikler.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container">
          <BlogExplorer posts={latestBlogPosts} plannedTopics={plannedBlogTopics} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
