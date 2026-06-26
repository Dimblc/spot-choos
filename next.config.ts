import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "www.spotandchoos.com" },
      { protocol: "https", hostname: "spotandchoos.com" },
    ],
  },
};

export default nextConfig;
