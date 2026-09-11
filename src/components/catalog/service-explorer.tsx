"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import { ServiceCategorySection } from "@/components/catalog/service-category-section";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { ServiceCategoryOutline } from "@/types/service";

export function ServiceExplorer({ categories }: { categories: ServiceCategoryOutline[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

  const filteredCategories = useMemo(() => {
    return categories
      .filter((category) => !activeCategory || category.category === activeCategory)
      .map((category) => ({
        ...category,
        items: normalizedQuery
          ? category.items.filter((item) => item.name.toLocaleLowerCase("tr-TR").includes(normalizedQuery))
          : category.items,
      }))
      .filter((category) => category.items.length > 0);
  }, [categories, activeCategory, normalizedQuery]);

  const hasResults = filteredCategories.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Hizmet ara (ör. PCR, NGS, ELISA...)"
            aria-label="Hizmetlerde ara"
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
              key={category.category}
              type="button"
              onClick={() => setActiveCategory(category.category === activeCategory ? null : category.category)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                activeCategory === category.category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {category.category}
            </button>
          ))}
        </div>
      </div>

      {hasResults ? (
        <div className="space-y-6">
          {filteredCategories.map((category, index) => (
            <ServiceCategorySection
              key={category.category}
              category={category}
              delay={Math.min(index * 0.05, 0.3)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
          <p className="text-sm text-muted-foreground">
            &quot;{query}&quot; için sonuç bulunamadı. Farklı bir anahtar kelime deneyin veya{" "}
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory(null);
              }}
              className="font-medium text-primary hover:underline"
            >
              filtreyi temizleyin
            </button>
            .
          </p>
        </div>
      )}
    </div>
  );
}
