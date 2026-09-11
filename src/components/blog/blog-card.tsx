import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPostSummary } from "@/types/blog";

export function BlogCard({ post, delay = 0 }: { post: BlogPostSummary; delay?: number }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Reveal delay={delay}>
      <Link href={`/bilgi-merkezi/blog/${post.slug}`} className="group block h-full">
        <Card className="h-full transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
          <CardHeader className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-secondary-foreground">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formattedDate}
              </span>
            </div>
            <CardTitle className="text-base leading-snug">{post.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 pt-0">
            <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Devamını Oku
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </Reveal>
  );
}
