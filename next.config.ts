import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add trailing slash to all paths
  trailingSlash: true,
};

export default nextConfig;
