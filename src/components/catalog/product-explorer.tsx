"use client";

import { useMemo, useState } from "react";
import { ArrowDownAZ, LayoutGrid, List, Search, X } from "lucide-react";

import { ProductCard } from "@/components/catalog/product-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { ProductContent } from "@/types/product";

export function ProductExplorer({
  products,
  subCategories = [],
}: {
  products: ProductContent[];
  subCategories?: string[];
}) {
  const [query, setQuery] = useState("");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => !activeSubCategory || product.subCategory === activeSubCategory)
      .filter((product) =>
        normalizedQuery ? product.name.toLocaleLowerCase("tr-TR").includes(normalizedQuery) : true,
      )
      .sort((a, b) => a.name.localeCompare(b.name, "tr-TR"));
  }, [products, activeSubCategory, normalizedQuery]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ürün ara (ör. Agaroz, PCR Tüpü...)"
            aria-label="Ürünlerde ara"
            className="pl-9 bg-white"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Aramayı temizle"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-white p-0.5 shadow-sm">
            <button
              type="button"
              onClick={() => setView("grid")}
              aria-label="Kart görünümü"
              aria-pressed={view === "grid"}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded transition-colors",
                view === "grid" ? "bg-primary text-white" : "text-slate-400 hover:text-slate-700",
              )}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              aria-label="Liste görünümü"
              aria-pressed={view === "list"}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded transition-colors",
                view === "list" ? "bg-primary text-white" : "text-slate-400 hover:text-slate-700",
              )}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
            <ArrowDownAZ className="h-3.5 w-3.5" />
            A-Z sıralı
          </span>
        </div>
      </div>

      {subCategories && subCategories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveSubCategory(null)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
              activeSubCategory === null
                ? "border-primary bg-primary text-white shadow-sm"
                : "border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-slate-900",
            )}
          >
            Tümü
          </button>
          {subCategories.map((subCategory) => (
            <button
              key={subCategory}
              type="button"
              onClick={() => setActiveSubCategory(subCategory === activeSubCategory ? null : subCategory)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                activeSubCategory === subCategory
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-slate-900",
              )}
            >
              {subCategory}
            </button>
          ))}
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <div className={view === "grid" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-2" : "flex flex-col gap-3"}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} view={view} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-sm">
          <p className="text-sm text-slate-500">
            &quot;{query}&quot; için sonuç bulunamadı. Farklı bir anahtar kelime deneyin veya{" "}
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveSubCategory(null);
              }}
              className="font-bold text-primary hover:underline"
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