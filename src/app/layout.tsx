import type { Metadata } from "next";
import { QuoteCartProvider } from "@/components/quote/quote-cart-context";
import { Navbar } from "@/components/layout/navbar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "CoreGen Biyoteknoloji",
  description: "CoreGen Biyoteknoloji ve Bilimsel Çözümler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <QuoteCartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
        </QuoteCartProvider>
      </body>
    </html>
  );
}