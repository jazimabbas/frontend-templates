import { nextConfig as config } from "@repo/nextjs-utils/next.config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...config,
  transpilePackages: ["jotai-devtools"],
};

export default nextConfig;
