import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}

export default function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="bg-paper-warm border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-16 md:pt-20 md:pb-20">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-6xl mt-4 tracking-tight max-w-3xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">{intro}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
