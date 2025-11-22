import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
    unoptimized: false,
    // Faster image loading
    loader: 'default',
    // Reduce image quality slightly for faster loading (can be adjusted)
    // Quality is set per image, but default is 75
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
