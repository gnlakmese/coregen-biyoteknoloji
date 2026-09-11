/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Vercel build sırasında TS tip hatalarının build'i durdurmasını engeller
    ignoreBuildErrors: true,
  },
  eslint: {
    // Vercel build sırasında ESLint uyarı/hatalarının build'i durdurmasını engeller
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;