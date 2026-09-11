"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Sayfanın "imza" görsel öğesi (frontend-design ilkesi: boldness'ı tek bir
 * yerde harca). Logo'daki sarmal formun büyütülmüş, çizgisel ve yavaşça
 * hareket eden bir yorumu. Stok fotoğraf/AI-görsel kullanmak yerine
 * bilinçli olarak vektörel/kod-tabanlı bir çözüm tercih edildi — hem marka
 * kimliğiyle birebir tutarlı hem de dış görsel varlığa bağımlı değil.
 */
export function DnaHelixVisual({ className }: { className?: string }) {
  const rungs = Array.from({ length: 9 }, (_, i) => i);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 360 520"
      fill="none"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.g
        // Erişilebilirlik: prefers-reduced-motion tercihinde sonsuz döngü
        // tamamen devre dışı bırakılır (bkz. Son Mimari İnceleme, Bulgu #2).
        animate={shouldReduceMotion ? { rotate: 0 } : { rotate: [0, 2, 0, -2, 0] }}
        transition={
          shouldReduceMotion ? { duration: 0 } : { duration: 14, repeat: Infinity, ease: "easeInOut" }
        }
        style={{ transformOrigin: "180px 260px" }}
      >
        {/* Arka sarmal (soluk) */}
        <path
          d="M60 10C60 90 300 90 300 170C300 250 60 250 60 330C60 410 300 410 300 490"
          stroke="hsl(var(--brand-teal))"
          strokeOpacity="0.35"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Ön sarmal (belirgin) */}
        <path
          d="M300 10C300 90 60 90 60 170C60 250 300 250 300 330C300 410 60 410 60 490"
          stroke="hsl(var(--brand-ink))"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Baz çiftleri (rungs) */}
        {rungs.map((i) => {
          const y = 10 + i * 60;
          const isEven = i % 2 === 0;
          return (
            <line
              key={i}
              x1={isEven ? 88 : 272}
              x2={isEven ? 272 : 88}
              y1={y}
              y2={y}
              stroke={i % 3 === 0 ? "hsl(var(--brand-magenta))" : "hsl(var(--border))"}
              strokeWidth="3"
              strokeLinecap="round"
              opacity={i % 3 === 0 ? 0.8 : 0.6}
            />
          );
        })}
      </motion.g>
    </motion.svg>
  );
}
