import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    if (!config.resolve.fallback) config.resolve.fallback = {};
    config.resolve.fallback.fs = false;
    config.resolve.fallback.path = false;
    return config;
  },
};

export default nextConfig;
