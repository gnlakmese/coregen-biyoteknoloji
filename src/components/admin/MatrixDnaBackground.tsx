"use client";

import React, { useEffect, useState } from "react";

const DNA_POOL = ["A", "T", "G", "C", "A", "G", "T", "C", "A", "T"];

export function MatrixDnaBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 pointer-events-none z-0 bg-slate-950" />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-15 flex flex-wrap gap-8 font-mono text-xs text-pink-500 select-none overflow-hidden bg-slate-950">
      {Array.from({ length: 180 }).map((_, i) => (
        <span key={i} className="animate-pulse">
          {DNA_POOL[i % DNA_POOL.length]}
        </span>
      ))}
    </div>
  );
}