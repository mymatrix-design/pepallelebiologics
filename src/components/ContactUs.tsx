// ContactUs.tsx
import { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxJOVXyQxzNyGCMbHY18BTUMC7-Y8TmT4Qyvc3K6m2GZpDINZWShSgVmkCKQNeLQvMrOw/exec"; // from Apps Script deployment

export default function ContactUs() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot (optional anti-spam)
    if ((data.get("_gotcha") as string)?.length) return;

    setStatus("sending");
    try {
      // Most implementations use no-cors (opaque response is fine).
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      setStatus("sent");
      form.reset();
    } catch {
      // If you deploy script to return JSON and allow CORS, you can parse here instead.
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Contact info */}
        <aside className="md:pr-4">
          <h3 className="text-xl font-semibold text-sky-600 mb-6">Contact Us</h3>

          <p className="font-semibold text-slate-800 mb-1">Contact Number:</p>
          <p className="text-slate-600 mb-6"></p>

          <p className="font-semibold text-slate-800 mb-1">Email:</p>
          <p className="text-slate-600 break-all">info@pepallelebiologics.com</p>
        </aside>

        {/* Middle: Form (posts to Google Apps Script) */}
        <form onSubmit={onSubmit} className="md:px-2">
          <h3 className="text-xl font-semibold text-sky-600 mb-6">Mail Us</h3>

          {/* Honeypot */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="space-y-3">
            <label className="block">
              <span className="sr-only">Your name</span>
              <input
                type="text"
                name="Name"  // MUST match Sheet header
                placeholder="Your name"
                className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white"
                required
              />
            </label>

            <label className="block">
              <span className="sr-only">Your email</span>
              <input
                type="email"
                name="Email" // MUST match Sheet header
                placeholder="Your email"
                className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white"
                required
              />
            </label>

            <label className="block">
              <span className="sr-only">Subject</span>
              <input
                type="text"
                name="Subject" // MUST match Sheet header
                placeholder="Subject"
                className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white"
              />
            </label>

            <label className="block">
              <span className="sr-only">Your message (optional)</span>
              <textarea
                name="Message" // MUST match Sheet header
                placeholder="Your message (optional)"
                rows={7}
                className="w-full resize-y rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 inline-block rounded bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:opacity-95 active:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          {status === "sent" && (
            <p className="mt-3 text-sm text-emerald-700">Thanks! We’ll be in touch.</p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-600">Something went wrong. Please try again.</p>
          )}
        </form>

        {/* Right: Map (IIT Bombay, Powai) */}
        <div className="md:pl-2">
          <h3 className="text-xl font-semibold text-sky-600 mb-6">Direction</h3>
          <div className="relative w-full overflow-hidden rounded border border-gray-300">
            <div className="aspect-[3/2] md:h-[290px]">
              <iframe
                title="IIT Bombay – Powai Map"
                src="https://www.google.com/maps?q=IIT%20Bombay%2C%20Powai%2C%20Mumbai&z=15&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
