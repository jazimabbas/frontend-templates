import { nextConfig as config } from "@repo/nextjs-utils/next.config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...config,
  transpilePackages: ["jotai-devtools"],
  images: {
    remotePatterns: [...config.images.remotePatterns, { protocol: "https", hostname: "utfs.io" }],
  },
};

export default nextConfig;
