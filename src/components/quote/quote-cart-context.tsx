"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import type { QuoteCartItem } from "@/types/quote";

const STORAGE_KEY = "coregen-quote-cart";

type QuoteCartContextValue = {
  items: QuoteCartItem[];
  itemCount: number;
  addItem: (item: Omit<QuoteCartItem, "quantity">, quantity?: number) => void;
  removeItem: (productSlug: string) => void;
  updateQuantity: (productSlug: string, quantity: number) => void;
  updateNote: (productSlug: string, note: string) => void;
  updateItemDetails: (productSlug: string, details: any) => void;
  clearCart: () => void;
  isHydrated: boolean;
};

const QuoteCartContext = createContext<QuoteCartContextValue | null>(null);

export function QuoteCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteCartItem[]>([]);
  // SSR/istemci hydration uyumsuzluğunu önlemek için: sunucuda her zaman
  // boş sepetle başla, localStorage'dan okuma yalnızca mount sonrası yapılır.
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // localStorage okunamazsa (gizli mod vb.) sessizce boş sepetle devam et
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Depolama kotası dolu/erişilemez olabilir — sepet yine de bellekte çalışmaya devam eder
    }
  }, [items, isHydrated]);

  const addItem = useCallback((item: Omit<QuoteCartItem, "quantity">, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((entry) => entry.productSlug === item.productSlug);
      if (existing) {
        return current.map((entry) =>
          entry.productSlug === item.productSlug
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry,
        );
      }
      return [...current, { ...item, quantity }];
    });
  }, []);

  const removeItem = useCallback((productSlug: string) => {
    setItems((current) => current.filter((entry) => entry.productSlug !== productSlug));
  }, []);

  const updateQuantity = useCallback((productSlug: string, quantity: number) => {
    setItems((current) =>
      current.map((entry) =>
        entry.productSlug === productSlug ? { ...entry, quantity: Math.max(1, quantity) } : entry,
      ),
    );
  }, []);

  const updateNote = useCallback((productSlug: string, note: string) => {
    setItems((current) =>
      current.map((entry) => (entry.productSlug === productSlug ? { ...entry, note } : entry)),
    );
  }, []);

  const updateItemDetails = useCallback((productSlug: string, details: any) => {
    setItems((current) =>
      current.map((entry) =>
        entry.productSlug === productSlug
          ? { ...entry, details: { ...entry.details, ...details } }
          : entry,
      ),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      addItem,
      removeItem,
      updateQuantity,
      updateNote,
      updateItemDetails,
      clearCart,
      isHydrated,
    }),
    [items, itemCount, addItem, removeItem, updateQuantity, updateNote, updateItemDetails, clearCart, isHydrated],
  );

  return <QuoteCartContext.Provider value={value}>{children}</QuoteCartContext.Provider>;
}

export function useQuoteCart() {
  const context = useContext(QuoteCartContext);
  if (!context) {
    throw new Error("useQuoteCart, QuoteCartProvider içinde kullanılmalıdır");
  }
  return context;
}