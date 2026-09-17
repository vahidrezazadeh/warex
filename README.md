# وارکس — پلتفرم OTC و P2P ارز دیجیتال

زیرساخت آماده برای راه‌اندازی صرافی با احراز هویت اتوماتیک، اتصال به صرافی‌های خارجی و درگاه‌های پرداخت ایرانی.

این مخزن، لندینگ معرفی محصول **وارکس (Warex)** است؛ با تم دارک، رابط فارسی (RTL)، خروجی استاتیک پیش‌رندر شده و بهینه‌سازی SEO.

---

## اجرای لندینگ

```bash
npm install
npm run dev
```

ساخت خروجی استاتیک (پوشه `out`):

```bash
npm run build
```

### فناوری‌ها

- Next.js (App Router + Static Export)
- React + TypeScript
- Framer Motion
- فونت: یکان‌بخ (`next/font/local`)

### SEO

- Metadata API (Open Graph / Twitter)
- `sitemap.xml` و `robots.txt`
- JSON-LD برای Organization و WebSite
- HTML در زمان بیلد پیش‌رندر می‌شود (مناسب کراولر و GitHub Pages)

دامنهٔ canonical: [https://warex.ir](https://warex.ir)

---

## دیپلوی روی GitHub Pages

پروژه برای **Static Export** تنظیم شده و با GitHub Actions روی Pages منتشر می‌شود.

### یک‌بار در GitHub

1. برو به **Settings → Pages**
2. در **Source** گزینهٔ **GitHub Actions** را انتخاب کن
3. (اختیاری) در بخش Custom domain مقدار `warex.ir` را بگذار و DNS را به GitHub وصل کن:
   - رکورد `A`/`AAAA` طبق [مستندات GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)
   - یا `CNAME` به `vahidrezazadeh.github.io`

### دیپلوی خودکار

با هر push به `master`، ورک‌فلو `.github/workflows/deploy.yml` اجرا می‌شود و محتوای `out` را منتشر می‌کند.

دیپلوی دستی: تب **Actions → Deploy to GitHub Pages → Run workflow**

> **نکته:** بدون دامنهٔ اختصاصی، سایت روی  
> `https://vahidrezazadeh.github.io/warex/`  
> باز می‌شود. در آن حالت در `next.config.ts` خطوط `basePath` و `assetPrefix` را از حالت کامنت خارج کنید.

---

## تماس

| کانال | مشخصات |
| --- | --- |
| **تلفن** | [`+98 921 782 0205`](tel:+989217820205) |
| **ایمیل** | [`vahid.rezazadeh1372@gmail.com`](mailto:vahid.rezazadeh1372@gmail.com) |
| **تلگرام** | [`@vahidrezazadeh`](https://t.me/vahidrezazadeh) |
| **واتساپ** | [`+98 921 782 0205`](https://wa.me/989217820205) |

---

© وارکس — پلتفرم OTC و P2P
