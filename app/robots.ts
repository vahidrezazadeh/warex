import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://warex.ir/sitemap.xml",
    host: "https://warex.ir",
  };
}
