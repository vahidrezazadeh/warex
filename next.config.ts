import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // GitHub Pages فقط فایل استاتیک سرو می‌کند
  output: "export",
  images: {
    unoptimized: true,
  },
  // اگر بدون دامنهٔ اختصاصی روی github.io/warex باز می‌کنید، این را فعال کنید:
  // basePath: "/warex",
  // assetPrefix: "/warex",
};

export default nextConfig;
