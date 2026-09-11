import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * DNA sarmalı motifi — Brand Guidelines'daki "Outline, Minimal" ikon stiline
 * uygun, tek renkli (currentColor) çizgi ikon. Herhangi bir zemin üzerinde
 * çalışır, retina-safe'tir ve CoreGen logosundaki sarmal formunu referans
 * alan özgün bir vektör yorumudur.
 */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 4c0 6 16 6 16 12s-16 6-16 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 4c0 6-16 6-16 12s16 6 16 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path d="M9.5 9h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.5 23h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-80",
        className,
      )}
    >
      <LogoMark className="h-8 w-8 shrink-0 text-primary" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight">CoreGen</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Biyoteknoloji
        </span>
      </span>
    </Link>
  );
}
