import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import TiltCard from "./TiltCard";
import { ADVERTISERS } from "@/lib/data";

export default function AdvertiserBanners() {
  return (
    <Reveal>
      <Eyebrow>Our advertisers</Eyebrow>
      <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl mt-4 tracking-tight">
        The businesses already advertising with us
      </h2>
      <p className="mt-3 text-sm text-ink-soft max-w-lg leading-relaxed">
        Every advertiser gets free exposure here too — a banner that links straight
        to their own website, in print and in the digital edition.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ADVERTISERS.map((a) => (
          <TiltCard key={a.name}>
            <a
              href={a.href}
              target="_blank"
              rel="noopener"
              className="group block rounded-xl border border-line bg-white px-5 py-4 hover:border-love/40 transition-colors duration-300"
            >
              <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                {a.category}
              </div>
              <div className="font-semibold mt-1">{a.name}</div>
              <span className="inline-block mt-2 text-xs font-semibold text-love-deep group-hover:translate-x-1 transition-transform">
                Visit site →
              </span>
            </a>
          </TiltCard>
        ))}
      </div>
    </Reveal>
  );
}
