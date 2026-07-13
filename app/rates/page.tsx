import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Heart from "@/components/Heart";
import { INCLUDED, PREMIUM, RATES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Advertising Rates — Love Wirral Magazine",
  description: "Advertising rates for Love Wirral Magazine, from £50 a month with no contracts, free artwork and an online interactive edition included.",
};

export default function RatesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Advertising rates"
        title="Full-colour gloss, designed for you, from £50 a month."
        intro="Every advert is individually designed to suit your business, with no contracts and no minimum term. Book month to month, or save with a loyalty discount."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RATES.map((r) => (
            <Reveal key={r.size}>
              <div
                className={`rounded-2xl p-6 h-full border ${
                  r.featured ? "bg-ink text-white border-ink" : "bg-white border-line"
                }`}
              >
                <div className={`font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] ${r.featured ? "text-white/60" : "text-ink-soft"}`}>
                  {r.size}
                </div>
                <div className="font-[family-name:var(--font-display)] font-bold text-4xl mt-4">£{r.price}</div>
                <div className={`text-sm mt-3 ${r.featured ? "text-white/70" : "text-ink-soft"}`}>{r.note}</div>
                {r.featured && (
                  <div className="mt-4 inline-block bg-love text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most popular
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-2xl bg-love-tint border border-love/15 p-6 md:p-8">
            <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-love-deep mb-5">
              Premium positions
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
              {PREMIUM.map((p) => (
                <div key={p.size} className="flex items-baseline justify-between gap-3 border-b border-love/15 pb-3">
                  <span className="text-sm font-medium">{p.size}</span>
                  <span className="font-[family-name:var(--font-display)] font-bold text-xl text-love-deep">£{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl tracking-tight">
            What we have to offer
          </h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-x-10 gap-y-8">
          {INCLUDED.map(([t, d]) => (
            <Reveal key={t}>
              <div className="flex gap-3">
                <Heart className="w-4 h-4 text-love shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">{t}</h3>
                  <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="rounded-2xl bg-ink text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl">
                Ready to book your advert?
              </h2>
              <p className="text-white/70 mt-2">Call, email, or use the form — we&rsquo;ll get your artwork moving straight away.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-love hover:bg-love-deep transition-colors font-semibold px-6 py-3.5 rounded-full whitespace-nowrap"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
