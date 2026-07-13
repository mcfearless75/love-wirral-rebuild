"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Heart from "./Heart";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  useEffect(() => {
    const measure = () => {
      const activeLink = linkRefs.current[pathname];
      const nav = navRef.current;
      if (!activeLink || !nav) {
        setIndicator((s) => ({ ...s, ready: false }));
        return;
      }
      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setIndicator({ left: linkRect.left - navRect.left, width: linkRect.width, ready: true });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Heart className="w-5 h-5 text-love heart-pulse" />
          <span className="font-[family-name:var(--font-display)] font-bold text-xl tracking-tight">
            Love Wirral
          </span>
        </Link>

        <nav ref={navRef} className="hidden lg:flex items-center gap-7 text-sm font-medium text-ink-soft relative">
          <span
            aria-hidden="true"
            className="absolute -bottom-1.5 h-[2px] bg-love rounded-full transition-all duration-300 ease-out"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.ready ? 1 : 0,
            }}
          />
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                ref={(el) => {
                  linkRefs.current[l.href] = el;
                }}
                className={`transition-colors hover:text-love ${active ? "text-love" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-block bg-love hover:bg-love-deep transition-colors text-white text-sm font-semibold px-4 py-2 rounded-full"
          >
            Book your advert
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-line"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5 w-4">
              <span className={`h-0.5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <nav
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-line ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 text-sm font-medium border-b border-line last:border-0 ${
                  active ? "text-love" : "text-ink-soft"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
