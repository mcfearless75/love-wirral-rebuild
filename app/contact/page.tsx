import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { EMAIL, PHONE, PHONE_HREF } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us — Love Wirral Magazine",
  description: "Get in touch with Love Wirral Magazine to book an advert, share a story, or ask a question.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact us"
        title="Book your advert, share a story, or just say hello."
        intro="Call or email us directly, or drop us a message below and we&rsquo;ll get back to you."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24 grid md:grid-cols-[0.85fr_1.15fr] gap-14">
        <Reveal>
          <div className="space-y-6">
            <div>
              <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-ink-soft">Call us</div>
              <a href={PHONE_HREF} className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl hover:text-love transition-colors">
                {PHONE}
              </a>
            </div>
            <div>
              <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-ink-soft">Email</div>
              <a href={`mailto:${EMAIL}`} className="font-semibold text-lg hover:text-love transition-colors">
                {EMAIL}
              </a>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed max-w-sm">
              We cover the whole of Wirral and South Wirral, plus Love Chester and Love Wrexham
              across the water. Whatever it&rsquo;s about, we&rsquo;re happy to help.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl bg-paper-warm border border-line p-6 md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
