import Link from "next/link";
import Countdown from "@/components/Countdown";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import Heart from "@/components/Heart";
import CountUp from "@/components/CountUp";
import TiltCard from "@/components/TiltCard";
import AdvertiserBanners from "@/components/AdvertiserBanners";
import { AREAS, COVER_URL, EMAIL, PHONE, PHONE_HREF, READER_URL } from "@/lib/data";

const TEASERS = [
  { href: "/rates", title: "Advertising rates", copy: "Full-colour gloss, designed for you, from £50 a month." },
  { href: "/distribution", title: "Where we deliver", copy: "8,500 copies hand-delivered across 47 areas of the peninsula." },
  { href: "/magazines", title: "Read past issues", copy: "Every back issue, free to browse in our online reader." },
  { href: "/recommendations", title: "Recommendations", copy: "What local businesses say about advertising with us." },
  { href: "/puzzle-solutions", title: "Puzzle solutions", copy: "Missed last month's crossword answers? Find them here." },
  { href: "/contact", title: "Get in touch", copy: "Book your advert, share a story, or ask us anything." },
];

const STATS = [
  { value: 8500, format: true, label: "copies every month" },
  { value: 14, suffix: " yrs", label: "publishing since 2012" },
  { value: 47, label: "delivery areas across Wirral" },
  { value: 0, prefix: "£", label: "contracts or tie-ins" },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <Reveal delay={0}>
              <Eyebrow>Est. 2012 · Issue 171 · In print &amp; online</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-[family-name:var(--font-display)] font-bold text-[2.6rem] leading-[1.05] md:text-6xl mt-5 tracking-tight">
                The magazine Wirral
                <span className="text-love"> actually reads.</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 text-lg text-ink-soft max-w-lg leading-relaxed">
                8,500 copies hand-delivered free across the peninsula every single month —
                New Brighton to Neston, and everywhere in between. Local news, what&rsquo;s on,
                and the businesses that keep Wirral running.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/rates"
                  className="bg-ink text-white font-semibold px-6 py-3.5 rounded-full hover:bg-love transition-colors"
                >
                  Advertise from £50
                </Link>
                <a
                  href={READER_URL}
                  target="_blank"
                  rel="noopener"
                  className="border-2 border-ink font-semibold px-6 py-3.5 rounded-full hover:border-love hover:text-love transition-colors"
                >
                  Read Issue 171 →
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -inset-8 bg-love-tint rounded-full blur-3xl opacity-70" aria-hidden="true" />
            <a href={READER_URL} target="_blank" rel="noopener" className="relative block cover-card rounded-lg overflow-hidden max-w-[300px] md:max-w-[340px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={COVER_URL}
                alt="Love Wirral Magazine — Issue 171 cover"
                className="w-full h-auto block"
                width={340}
                height={481}
              />
            </a>
            <p className="absolute -bottom-8 right-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              Issue 171 — July 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── Signature: delivery-run ticker ───────────── */}
      <div className="ticker bg-ink py-3.5 border-y-4 border-love" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((n) => (
            <span key={n} className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.18em] text-paper/85">
              {AREAS.map((a) => (
                <span key={a}>
                  {a} <span className="text-love mx-3">♥</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats ────────────────────────────────────── */}
      <section className="bg-paper-warm border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-love-deep">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} format={s.format} />
              </div>
              <div className="text-sm text-ink-soft mt-2">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Explore the site ─────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <Eyebrow>Find your way around</Eyebrow>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-5xl mt-4 tracking-tight max-w-2xl">
            Everything you need, one heart-shaped click away.
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEASERS.map((t, i) => (
            <Reveal key={t.href} delay={(i % 3) * 80}>
              <TiltCard>
                <Link
                  href={t.href}
                  className="group block h-full rounded-2xl p-6 bg-white border border-line hover:border-love/40 transition-colors duration-300"
                >
                  <Heart className="w-5 h-5 text-love" />
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-xl mt-4">{t.title}</h3>
                  <p className="text-sm text-ink-soft mt-2 leading-relaxed">{t.copy}</p>
                  <span className="inline-block mt-4 text-sm font-semibold text-love-deep group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Our Advertisers ──────────────────────────── */}
      <section className="bg-paper-warm border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <AdvertiserBanners />
        </div>
      </section>

      {/* ── Deadline CTA ─────────────────────────────── */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Eyebrow>Copy deadline — August issue</Eyebrow>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-5xl mt-4 tracking-tight">
              The presses don&rsquo;t wait.
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed max-w-md">
              Get your advert into next month&rsquo;s issue — artwork, photography and
              design all included. One call is all it takes.
            </p>
            <div className="mt-8">
              <Countdown />
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/50">Call us</div>
                  <a href={PHONE_HREF} className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl hover:text-love transition-colors">
                    {PHONE}
                  </a>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/50">Email</div>
                  <a href={`mailto:${EMAIL}`} className="font-semibold text-lg hover:text-love transition-colors">
                    {EMAIL}
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="block text-center bg-love hover:bg-love-deep transition-colors font-semibold px-6 py-4 rounded-full"
                >
                  Book your advert for August
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
