const siteUrl = "https://warex.ir";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "وارکس",
  alternateName: "Warex",
  url: siteUrl,
  description:
    "پلتفرم OTC و P2P ارز دیجیتال با احراز هویت اتوماتیک، اتصال به صرافی‌های خارجی و درگاه‌های پرداخت ایرانی",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+98-921-782-0205",
      contactType: "sales",
      email: "vahid.rezazadeh1372@gmail.com",
      availableLanguage: ["Persian", "fa"],
    },
  ],
  sameAs: ["https://t.me/vahidrezazadeh"],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "وارکس",
  url: siteUrl,
  inLanguage: "fa-IR",
  description:
    "زیرساخت آماده برای راه‌اندازی صرافی با احراز هویت اتوماتیک، اتصال به صرافی‌های خارجی و درگاه‌های پرداخت ایرانی.",
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
    </>
  );
}
