"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar"; 
import { Footer } from "@/components/layout/footer"; 
// Sepet verisini sağlayacak Provider'ı dahil ediyoruz
import { QuoteCartProvider } from "@/components/quote/quote-cart-context";

export default function SiteLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // URL "/admin" ile başlıyorsa Navbar ve Footer gizlenecek
  const isAdminPage = pathname?.startsWith("/admin");

  return (
    <QuoteCartProvider>
      {!isAdminPage && <Navbar />}
      
      <main className="flex-1">
        {children}
      </main>

      {!isAdminPage && <Footer />}
    </QuoteCartProvider>
  );
}