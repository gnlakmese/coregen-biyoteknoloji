"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type AccordionItemData = {
  question: string;
  answer: string;
};

/**
 * Bağımsız, hafif bir accordion — Radix'e bağımlı değildir. Tek seferde
 * yalnızca bir madde açık kalır. SSS bölümlerinde kullanılmak üzere
 * tasarlandı; gerektiğinde başka içeriklerle de kullanılabilir.
 */
export function Accordion({ items, className }: { items: AccordionItemData[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-border rounded-lg border border-border", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `accordion-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-accent/50"
              >
                {item.question}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              className={cn("grid transition-all duration-200 ease-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
