"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage("The contact form isn't configured yet — please call or email us directly for now.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "New enquiry — Love Wirral website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong sending your message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Couldn't reach the server. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-love-tint border border-love/15 p-8 text-center">
        <p className="font-[family-name:var(--font-display)] font-bold text-xl text-love-deep">
          Thanks — your message is on its way!
        </p>
        <p className="text-ink-soft mt-2">We&rsquo;ll get back to you as soon as we can.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-love outline-none transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-love outline-none transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-love outline-none transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-love-deep bg-love-tint rounded-xl px-4 py-3" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-love hover:bg-love-deep disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white font-semibold px-6 py-3.5 rounded-full"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
