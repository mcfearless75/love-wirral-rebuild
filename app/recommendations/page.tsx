import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Heart from "@/components/Heart";
import { TESTIMONIALS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Recommendations — Love Wirral Magazine",
  description: "What local Wirral businesses say about advertising with Love Wirral Magazine.",
};

export default function RecommendationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Recommendations"
        title="What Wirral businesses say about advertising with us."
        intro="A few words from the advertisers who share a page with us every month."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name}>
              <div className="h-full rounded-2xl bg-white border border-line p-6 flex flex-col">
                <Heart className="w-5 h-5 text-love" />
                <p className="mt-4 text-ink-soft leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-4 border-t border-line">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-ink-soft">{t.business}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="rounded-2xl bg-love-tint border border-love/15 p-8 md:p-10 text-center">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl tracking-tight">
              Tell us what you think
            </h2>
            <p className="text-ink-soft mt-3 max-w-md mx-auto">
              Advertising with us and want to share your experience? We&rsquo;d love to feature you here.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-love hover:bg-love-deep transition-colors text-white font-semibold px-6 py-3.5 rounded-full"
            >
              Leave a review
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
