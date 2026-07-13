import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { BASE_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Puzzle Solutions — Love Wirral Magazine",
  description: "Missed last month's crossword or puzzle answers? Find every month's Love Wirral puzzle solutions here.",
};

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

interface Solution {
  file: string;
  label: string;
  sortKey: number;
}

// Reads public/puzzle-solutions/ at build time. To publish a new month, drop a PDF named
// YYYY-MM.pdf (e.g. 2026-08.pdf) into that folder and rebuild — no code changes needed.
function getSolutions(): Solution[] {
  const dir = path.join(process.cwd(), "public", "puzzle-solutions");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .map((file): Solution | null => {
      const match = file.match(/^(\d{4})-(\d{2})\.pdf$/i);
      if (!match) return null;
      const year = Number(match[1]);
      const monthIndex = Number(match[2]) - 1;
      const monthName = MONTH_NAMES[monthIndex];
      if (!monthName) return null;
      return { file, label: `${monthName} ${year}`, sortKey: year * 100 + monthIndex };
    })
    .filter((s): s is Solution => s !== null)
    .sort((a, b) => b.sortKey - a.sortKey);
}

export default function PuzzleSolutionsPage() {
  const solutions = getSolutions();

  return (
    <main>
      <PageHero
        eyebrow="Puzzle solutions"
        title="Missed last month's answers? Find them here."
        intro="Answers from November 2020 to present are labelled by issue month below."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        {solutions.length === 0 ? (
          <Reveal>
            <p className="text-center text-ink-soft">
              No solution sheets have been added yet — check back after the next issue.
            </p>
          </Reveal>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {solutions.map((s) => (
              <Reveal key={s.file}>
                <a
                  href={`${BASE_PATH}/puzzle-solutions/${s.file}`}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between rounded-2xl bg-white border border-line px-6 py-5 hover:border-love/40 transition-colors"
                >
                  <span className="font-[family-name:var(--font-display)] font-bold text-lg">{s.label}</span>
                  <span className="text-sm font-semibold text-love-deep group-hover:translate-x-1 transition-transform">
                    View solutions →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        )}

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
