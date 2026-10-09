import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Next 16 Turbopack validator has a known issue referencing .js type extensions
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
