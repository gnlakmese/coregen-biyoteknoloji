import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // Ürün/hizmet görselleri ve medya kütüphanesi için izinli host'lar.
    // Depolama servisi kararı netleştikçe (S3 / Cloudinary / Vercel Blob) buraya eklenecek.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },

  eslint: {
    // CI zaten ayrı bir `lint` adımı çalıştırıyor; build sırasında tekrar etmeye gerek yok.
    ignoreDuringBuilds: false,
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Güvenlik header'ları — herhangi bir form/admin geliştirmesine bağımlı
  // değildir, bu yüzden Foundation aşamasında öne çekildi
  // (bkz. Son Mimari İnceleme, Bulgu #5).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
