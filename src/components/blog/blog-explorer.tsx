"use client";

import { useMemo, useState } from "react";
import { Hourglass, Search, X } from "lucide-react";

import { BlogCard } from "@/components/blog/blog-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { BlogPostSummary } from "@/types/blog";

export function BlogExplorer({
  posts,
  plannedTopics,
}: {
  posts: BlogPostSummary[];
  plannedTopics: string[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => Array.from(new Set(posts.map((p) => p.category))), [posts]);
  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

  const filteredPosts = useMemo(() => {
    return posts
      .filter((post) => !activeCategory || post.category === activeCategory)
      .filter((post) =>
        normalizedQuery ? post.title.toLocaleLowerCase("tr-TR").includes(normalizedQuery) : true,
      );
  }, [posts, activeCategory, normalizedQuery]);

  const filteredPlannedTopics = useMemo(() => {
    if (!normalizedQuery) return plannedTopics;
    return plannedTopics.filter((topic) => topic.toLocaleLowerCase("tr-TR").includes(normalizedQuery));
  }, [plannedTopics, normalizedQuery]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Yazılarda ara..."
            aria-label="Blog yazılarında ara"
            className="pl-9"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Aramayı temizle"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
              activeCategory === null
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            Tümü
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category === activeCategory ? null : category)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} delay={Math.min(index * 0.05, 0.3)} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
          <p className="text-sm text-muted-foreground">&quot;{query}&quot; için sonuç bulunamadı.</p>
        </div>
      )}

      {filteredPlannedTopics.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="mb-4 text-sm font-medium text-foreground">Yakında Yayınlanacak Yazılar</p>
          <ul className="flex flex-wrap gap-2">
            {filteredPlannedTopics.map((topic) => (
              <li
                key={topic}
                className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-3.5 py-1.5 text-xs text-muted-foreground"
              >
                {topic}
                <Hourglass className="h-3 w-3" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
