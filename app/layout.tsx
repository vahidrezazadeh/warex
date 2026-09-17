import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./home.css";

const yekanBakh = localFont({
  src: [
    {
      path: "../assets/yekanBakh/woff2/YekanBakhFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/yekanBakh/woff2/YekanBakhFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/yekanBakh/woff2/YekanBakhFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/yekanBakh/woff2/YekanBakhFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/yekanBakh/woff2/YekanBakhFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/yekanBakh/woff2/YekanBakhFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/yekanBakh/woff2/YekanBakhFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/yekanBakh/woff2/YekanBakhFaNum-ExtraBlack.woff2",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
  display: "swap",
  fallback: ["sans-serif"],
});

const siteUrl = "https://warex.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "وارکس | پلتفرم ارایه خدمات صرافی OTC و P2P",
    template: "%s | وارکس",
  },
  description:
    "پلتفرم OTC و P2P ارز دیجیتال با احراز هویت اتوماتیک، اتصال به صرافی‌های خارجی و درگاه‌های پرداخت ایرانی",
  applicationName: "وارکس",
  keywords: [
    "وارکس",
    "Warex",
    "صرافی ارز دیجیتال",
    "OTC",
    "P2P",
    "احراز هویت",
    "درگاه پرداخت",
    "جیبیت",
    "وندار",
    "زیبال",
  ],
  authors: [{ name: "Warex" }],
  creator: "Warex",
  publisher: "Warex",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "وارکس",
    title: "وارکس | پلتفرم ارایه خدمات صرافی OTC و P2P",
    description:
      "زیرساخت آماده برای راه‌اندازی صرافی با احراز هویت اتوماتیک، اتصال به صرافی‌های خارجی و درگاه‌های پرداخت ایرانی.",
    images: [
      {
        url: "/og-cover.png",
        width: 1672,
        height: 941,
        alt: "پیش‌نمایش محیط وارکس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "وارکس | پلتفرم ارایه خدمات صرافی OTC و P2P",
    description:
      "زیرساخت آماده برای راه‌اندازی صرافی با احراز هویت اتوماتیک، اتصال به صرافی‌های خارجی و درگاه‌های پرداخت ایرانی.",
    images: ["/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060a0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={yekanBakh.variable}>
      <body>{children}</body>
    </html>
  );
}
