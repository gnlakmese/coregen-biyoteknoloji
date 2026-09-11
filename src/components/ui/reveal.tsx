"use client";

import { motion, useReducedMotion } from "framer-motion";

import { fadeUp } from "@/lib/motion";

/**
 * Bir bölüm görünüme girdiğinde tek seferlik fade+slide animasyonu
 * uygular. Yalnızca bu küçük wrapper "use client" olduğu için, onu
 * kullanan üst bileşenler (Hero hariç) server component olarak kalabilir.
 *
 * Erişilebilirlik: `prefers-reduced-motion` CSS düzeyinde globals.css'te
 * ele alınsa da, framer-motion'ın imperatif animasyonları bu kuraldan
 * etkilenmez. Bu yüzden tercih burada `useReducedMotion()` ile ayrıca
 * kontrol edilir — tercih varsa kayma mesafesi kaldırılır, yalnızca
 * anlık bir opaklık geçişi kalır (bkz. Son Mimari İnceleme, Bulgu #2).
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : fadeUp}
      transition={{ delay: shouldReduceMotion ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
