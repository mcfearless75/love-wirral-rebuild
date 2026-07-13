import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ISSUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Magazines — Love Wirral Magazine",
  description: "Browse every back issue of Love Wirral Magazine free online, in our interactive digital reader.",
};

export default function MagazinesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Previous issues"
        title="Every issue, free to browse online."
        intro="Read the latest edition or flick back through past issues — each one opens in our interactive digital reader."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ISSUES.map((issue, i) => (
            <Reveal key={issue.issue}>
              <a
                href={issue.readerUrl}
                target="_blank"
                rel="noopener"
                className="group block rounded-2xl overflow-hidden border border-line bg-white hover:border-love/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={issue.cover}
                    alt={`Love Wirral Magazine — Issue ${issue.issue} cover`}
                    className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-500"
                    width={340}
                    height={481}
                  />
                  {i === 0 && (
                    <span className="absolute top-3 left-3 bg-love text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Latest
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-ink-soft">
                    Issue {issue.issue}
                  </div>
                  <div className="font-[family-name:var(--font-display)] font-bold text-lg mt-1">{issue.label}</div>
                  <span className="inline-block mt-3 text-sm font-semibold text-love-deep group-hover:translate-x-1 transition-transform">
                    Read online →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
