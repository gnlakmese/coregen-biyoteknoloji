"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { primaryNav } from "@/lib/nav-config";
import { transitionBase } from "@/lib/motion";

export function MobileMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Escape tuşu ile kapatma
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onOpenChange(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menü"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transitionBase}
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-background lg:hidden"
        >
          <div className="container flex h-16 items-center justify-between border-b border-border">
            <span className="font-display text-lg font-semibold">Menü</span>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menüyü kapat"
              onClick={() => onOpenChange(false)}
              autoFocus
            >
              <X />
            </Button>
          </div>

          <nav aria-label="Mobil ana menü" className="container flex-1 py-4">
            <ul className="divide-y divide-border">
              {primaryNav.map((menu) => {
                const hasGroups = !!menu.groups?.length;
                const isExpanded = expanded === menu.label;

                if (!hasGroups) {
                  return (
                    <li key={menu.label}>
                      <Link
                        href={menu.href}
                        className="block py-4 text-base font-medium text-foreground"
                      >
                        {menu.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={menu.label}>
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => setExpanded(isExpanded ? null : menu.label)}
                      className="flex w-full items-center justify-between py-4 text-base font-medium text-foreground"
                    >
                      {menu.label}
                      <ChevronDown
                        className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={transitionBase}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-5 pb-5 pl-1 sm:grid-cols-2">
                            {menu.groups!.map((group) => (
                              <div key={group.title || group.items[0]?.href}>
                                {group.title && (
                                  <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                                    {group.title}
                                  </p>
                                )}
                                <ul className="space-y-2">
                                  {group.items.map((item) => (
                                    <li key={item.href}>
                                      <Link
                                        href={item.href}
                                        className="text-sm text-foreground/80 hover:text-primary"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="container border-t border-border py-5">
            <Button size="lg" className="w-full" asChild>
              <Link href="/teklif-sepeti">Teklif İste</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
