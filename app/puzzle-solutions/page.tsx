import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PUZZLE_MONTHS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Puzzle Solutions — Love Wirral Magazine",
  description: "Missed last month's crossword or puzzle answers? Find every month's Love Wirral puzzle solutions here.",
};

function slugFor(month: string) {
  return month.toLowerCase().replace(" ", "-");
}

export default function PuzzleSolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Puzzle solutions"
        title="Missed last month's answers? Find them here."
        intro="Answers from November 2020 to present are labelled by issue month below."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <div className="grid sm:grid-cols-2 gap-4">
          {PUZZLE_MONTHS.map((month) => (
            <Reveal key={month}>
              <a
                href={`/puzzle-solutions/${slugFor(month)}.pdf`}
                className="group flex items-center justify-between rounded-2xl bg-white border border-line px-6 py-5 hover:border-love/40 transition-colors"
              >
                <span className="font-[family-name:var(--font-display)] font-bold text-lg">{month}</span>
                <span className="text-sm font-semibold text-love-deep group-hover:translate-x-1 transition-transform">
                  View solutions →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="text-sm text-ink-soft italic text-center">
            Looking for an older answer sheet? Call {" "}
            <a href="tel:+441515131279" className="text-love-deep font-semibold">0151 513 1279</a> and we&rsquo;ll dig it out for you.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
