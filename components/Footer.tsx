import Link from "next/link";
import Heart from "./Heart";
import { EMAIL, NAV_LINKS, PHONE, PHONE_HREF } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-12 flex flex-col md:flex-row justify-between gap-10 text-sm">
        <div>
          <div className="flex items-center gap-2 text-white">
            <Heart className="w-4 h-4 text-love" />
            <span className="font-[family-name:var(--font-display)] font-bold text-lg">Love Wirral</span>
          </div>
          <p className="mt-3 max-w-xs leading-relaxed">
            Your local magazine — over 8,500 copies delivered free every month, since 2012.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-16 gap-y-8">
          <div>
            <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Pages</div>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Sister titles</div>
            <ul className="space-y-2">
              <li><a href="https://love-chester.com" className="hover:text-white transition-colors">Love Chester</a></li>
              <li><a href="https://love-wrexham.com" className="hover:text-white transition-colors">Love Wrexham</a></li>
            </ul>
          </div>
          <div>
            <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Contact</div>
            <ul className="space-y-2">
              <li><a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Love Wirral Magazine</span>
          <span>Concept rebuild by Bluewater Associates</span>
        </div>
      </div>
    </footer>
  );
}
