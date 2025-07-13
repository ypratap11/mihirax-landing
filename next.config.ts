import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Add this block to ignore ESLint during production build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 👇 Keep your existing webpack fallback settings
  webpack: (config) => {
    if (!config.resolve.fallback) config.resolve.fallback = {};
    config.resolve.fallback.fs = false;
    config.resolve.fallback.path = false;
    return config;
  },
};

export default nextConfig;
