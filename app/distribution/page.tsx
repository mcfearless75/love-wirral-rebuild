import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import { AREAS, CHANNELS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Distribution Details — Love Wirral Magazine",
  description: "Love Wirral Magazine is hand-delivered free every month to 47 areas across Wirral, from New Brighton to Neston, and now out to Helsby and Saughall.",
};

export default function DistributionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Where we deliver"
        title="The whole peninsula, by hand, every month."
        intro="No bulk drops left in a corner. We personally deliver every run through the places Wirral actually spends time — so we know each copy lands where it should."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <Eyebrow>Delivered through</Eyebrow>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl mt-4 tracking-tight">
            High streets, staff rooms, and everywhere in between
          </h2>
          <ul className="mt-6 space-y-2.5">
            {CHANNELS.map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-love shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <Eyebrow>47 areas across Wirral</Eyebrow>
          <div className="mt-4 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <span
                key={a}
                className="bg-white border border-line rounded-full px-3.5 py-1.5 text-sm text-ink-soft hover:border-love/40 hover:text-love-deep transition-colors"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-soft italic">
            …and now out to Helsby and across to Saughall at Chester too.
          </p>
        </Reveal>
      </section>

      <section className="bg-paper-warm border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">
          <Reveal>
            <p className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl tracking-tight">
              Your FREE magazine, delivered monthly across Wirral.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
