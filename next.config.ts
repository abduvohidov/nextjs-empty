import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "swiper", "quill"],
    // ppr: true,
    // dynamicIO: true
  },
};

const withNextIntl = createNextIntlPlugin(
  "./src/shared/config/i18n/request.ts"
);
export default withNextIntl(nextConfig);
