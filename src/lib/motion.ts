import type { Transition, Variants } from "framer-motion";

/**
 * CoreGen hareket dili: Brand Guidelines'daki "Apple tarzı, yavaş, şık"
 * animasyon yönergesine uygun ortak geçiş eğrisi ve varyantlar.
 * Sayfa/komponent geliştirme aşamasında buradan içe aktarılarak kullanılır;
 * her component kendi ad-hoc transition değerini tanımlamaz.
 */

export const easeSignature = [0.22, 1, 0.36, 1] as const;

export const transitionSlow: Transition = {
  duration: 0.6,
  ease: easeSignature,
};

export const transitionBase: Transition = {
  duration: 0.35,
  ease: easeSignature,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transitionSlow },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionBase },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
