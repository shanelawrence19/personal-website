import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    buildOutputStandalone: true,
  },
};

export default nextConfig;
