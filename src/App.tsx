import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import coverImage from "./assets/cover.png";
import jibitLogo from "./assets/logos/jibit-dark.svg";
import vandarLogo from "./assets/logos/vandar.svg";
import zibalLogo from "./assets/logos/zibal-dark.svg";
import "./App.css";

const CONTACT = {
  phone: "+98 921 782 0205",
  phoneHref: "tel:+989217820205",
  email: "vahid.rezazadeh1372@gmail.com",
  emailHref: "mailto:vahid.rezazadeh1372@gmail.com",
  telegram: "@vahidrezazadeh",
  telegramHref: "https://t.me/vahidrezazadeh",
  whatsapp: "+98 921 782 0205",
  whatsappHref: "https://wa.me/989217820205",
};

const gateways = [
  {
    name: "جیبیت",
    href: "https://jibit.ir",
    src: jibitLogo,
    className: "gateway-logo--jibit",
  },
  {
    name: "وندار",
    href: "https://vandar.io",
    src: vandarLogo,
    className: "gateway-logo--vandar",
  },
  {
    name: "زیبال",
    href: "https://zibal.ir",
    src: zibalLogo,
    className: "gateway-logo--zibal",
  },
] as const;

const features = [
  {
    title: "احراز هویت اتوماتیک",
    desc: "فرآیند KYC هوشمند با استعلام آنی هویت و کاهش زمان ورود کاربران به کمتر از چند دقیقه.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 32c2.5-6 8-9 12-9s9.5 3 12 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M27 11l2.5 2.5L35 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "اتصال به صرافی‌های خارجی",
    desc: "یکپارچه‌سازی با صرافی‌های بین‌المللی برای عمق نقدینگی، قیمت‌گذاری دقیق و پوشش OTC گسترده‌تر.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="12" cy="20" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="28" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="28" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M17 18l7-4M17 22l7 4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "درگاه‌های پرداخت ایرانی",
    desc: "اتصال آماده به جیبیت، وندار و زیبال برای واریز و برداشت ریالی پایدار و قابل اعتماد.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="6" y="10" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M6 16h28" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="22" width="8" height="3" rx="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "احراز شماره حساب جیبیت",
    desc: "تطبیق آنی شماره شبا و کارت با هویت کاربر از طریق سرویس‌های جیبیت و کاهش ریسک تراکنش‌های نامعتبر.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M8 20l8 8 16-18"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "معاملات OTC",
    desc: "میز OTC برای معاملات حجیم با قیمت توافقی، تسویه سریع و پشتیبانی اختصاصی.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M8 28V12h8l4 6 4-6h8v16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 28h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "بازار همتا‌به‌همتا (P2P)",
    desc: "معامله مستقیم بین کاربران با سفارش‌گذاری منعطف، ضمانت امنیتی و تجربه کاربری روان.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M12 14h10M18 10v8M18 26h10M24 22v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="26" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="28" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

const tickerItems = [
  "OTC Desk",
  "P2P Market",
  "Auto KYC",
  "Jibit",
  "Vandar",
  "Zibal",
  "External Exchanges",
  "IBAN Verify",
];

function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M6 8 L16 26 L26 8"
        stroke="#2EE6A6"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 8 L16 17 L21 8"
        stroke="#5CE1FF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden>
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5CE1FF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2EE6A6" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <g stroke="url(#lineGrad)" strokeWidth="1.2" fill="none">
          <path d="M0 520 C180 480, 280 600, 420 540 S680 420, 820 480 S1040 620, 1200 560" />
          <path d="M0 580 C200 540, 320 660, 460 590 S720 470, 860 540 S1080 680, 1200 610" opacity="0.6" />
          <path d="M0 460 C160 420, 260 500, 400 450 S650 360, 800 410 S1020 520, 1200 470" opacity="0.4" />
        </g>
        <g fill="#2EE6A6">
          <circle cx="420" cy="540" r="4" opacity="0.9">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="820" cy="480" r="4" fill="#5CE1FF" opacity="0.9">
            <animate attributeName="opacity" values="1;0.35;1" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="860" cy="540" r="3.5" opacity="0.75">
            <animate attributeName="r" values="3;5;3" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="page">
      <div className="ambient" aria-hidden />

      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-inner">
          <a href="#top" className="logo" aria-label="Warex">
            <LogoMark className="logo-mark" />
            وارکس
          </a>
          <nav className="nav" aria-label="منوی اصلی">
            <a href="#features">قابلیت‌ها</a>
            <a href="#video">معرفی</a>
            <a href="#contact">تماس</a>
          </nav>
          <a className="btn btn-primary btn-sm header-cta" href="#contact">
            درخواست دمو
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-plane" aria-hidden>
            <div className="hero-orb hero-orb-a" />
            <div className="hero-orb hero-orb-b" />
            <HeroVisual />
          </div>

          <div className="container hero-content">
            <motion.p
              className="brand-hero"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              وارکس
            </motion.p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              پلتفرم OTC و P2P ارز دیجیتال
            </motion.h1>
            <motion.p
              className="hero-lead"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              زیرساخت آماده برای راه‌اندازی صرافی با احراز هویت اتوماتیک، اتصال به صرافی‌های خارجی و
              درگاه‌های پرداخت ایرانی.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
            >
              <a className="btn btn-primary" href="#contact">
                درخواست دمو
              </a>
              <a className="btn btn-ghost" href="#video">
                مشاهده ویدیو معرفی
              </a>
            </motion.div>
          </div>

          <div className="hero-ticker" aria-hidden>
            <div className="ticker-track">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={`${item}-${i}`}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <motion.div
              className="section-head"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55 }}
            >
              <span className="section-kicker">قابلیت‌ها</span>
              <h2>همه‌چیز برای راه‌اندازی یک صرافی حرفه‌ای</h2>
              <p>
                از احراز هویت تا پرداخت ریالی و عمق بازار — وارکس ماژول‌های کلیدی را یکجا در اختیار شما
                می‌گذارد.
              </p>
            </motion.div>

            <div className="features-grid">
              {features.map((f, i) => (
                <motion.article
                  key={f.title}
                  className="feature"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: reduceMotion ? 0 : i * 0.06 }}
                >
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="gateways"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <p className="gateways-label">درگاه‌های پرداخت و سرویس‌های متصل</p>
              <div className="gateway-row">
                {gateways.map((g) => (
                  <a
                    key={g.name}
                    className={`gateway-logo ${g.className}`}
                    href={g.href}
                    target="_blank"
                    rel="noreferrer"
                    title={g.name}
                    aria-label={g.name}
                  >
                    <img src={g.src} alt={g.name} loading="lazy" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section video-section" id="video">
          <div className="container">
            <motion.div
              className="section-head"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55 }}
            >
              <span className="section-kicker">ویدیو معرفی</span>
              <h2>وارکس را در عمل ببینید</h2>
              <p>نگاهی به محیط و تجربهٔ کاربری پلتفرم وارکس</p>
            </motion.div>

            <motion.div
              className="video-shell"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
            >
              <div className="video-frame">
                <img
                  className="video-cover"
                  src={coverImage}
                  alt="پیش‌نمایش محیط وارکس"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-layout">
              <motion.div
                className="contact-intro"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55 }}
              >
                                <h2>برای دمو و مشاوره راه‌اندازی تماس بگیرید</h2>
                <p>
                  تیم وارکس آماده است قابلیت‌ها را روی محیط دمو نشان دهد و مسیر استقرار صرافی شما را
                  طراحی کند.
                </p>
              </motion.div>

              <div className="channels" role="list">
                {[
                  {
                    href: CONTACT.phoneHref,
                    label: "تلفن",
                    value: CONTACT.phone,
                    accent: "phone",
                    external: false,
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M8 3.5h2.2l1.3 4.2-2 1.3a12 12 0 005.5 5.5l1.3-2 4.2 1.3V16a2.5 2.5 0 01-2.5 2.5A13.5 13.5 0 015.5 5 2.5 2.5 0 018 3.5z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    href: CONTACT.emailHref,
                    label: "ایمیل",
                    value: CONTACT.email,
                    accent: "email",
                    external: false,
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                        <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
                        <path d="M4.5 7.5l7.5 5.5 7.5-5.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                  {
                    href: CONTACT.telegramHref,
                    label: "تلگرام",
                    value: CONTACT.telegram,
                    accent: "telegram",
                    external: true,
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M4.5 11.5l15-6.2-3.2 14.2-4.3-3.6-2.9 2.8-.7-5.1-4-2.1z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    href: CONTACT.whatsappHref,
                    label: "واتساپ",
                    value: CONTACT.whatsapp,
                    accent: "whatsapp",
                    external: true,
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M12 4.5a7.5 7.5 0 00-6.5 11.3L4.5 19.5l3.8-1A7.5 7.5 0 1012 4.5z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                        <path
                          d="M9.2 9.8c.4 1.6 1.9 3.5 3.5 4.3l1.5-1.1 2.2.9v1.7c-2.2.6-6.3-1.1-7.8-4.2"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    className={`channel channel--${item.accent}`}
                    href={item.href}
                    role="listitem"
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.06 * i }}
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                  >
                    <span className="channel-icon">{item.icon}</span>
                    <span className="channel-text">
                      <strong>{item.label}</strong>
                      <span>{item.value}</span>
                    </span>
                    <span className="channel-arrow" aria-hidden>
                      <svg viewBox="0 0 20 20" fill="none">
                        <path
                          d="M12.5 4.5L18 10l-5.5 5.5M18 10H2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} وارکس — پلتفرم OTC و P2P</p>
          <div className="footer-links">
            <a href="#features">قابلیت‌ها</a>
            <a href="#video">ویدیو</a>
            <a href="#contact">تماس</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
