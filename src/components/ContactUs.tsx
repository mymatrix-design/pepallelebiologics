// ContactUs.tsx
import { useState } from "react";

export default function ContactUs() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // wire this up to your backend / Google Form later
    setStatus("sent");
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Heading row (optional) */}
      {/* <h2 className="text-2xl font-bold text-slate-800 mb-8">Contact</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Contact info */}
        <aside className="md:pr-4">
          <h3 className="text-xl font-semibold text-sky-600 mb-6">Contact Us</h3>

          <p className="font-semibold text-slate-800 mb-1">Contact Number:</p>
          <p className="text-slate-600 mb-6">+91 95914 00058</p>

          <p className="font-semibold text-slate-800 mb-1">Email:</p>
          <p className="text-slate-600 break-all">info@pepallelebiologics.com</p>
        </aside>

        {/* Middle: Form */}
        <form onSubmit={onSubmit} className="md:px-2">
          <h3 className="text-xl font-semibold text-sky-600 mb-6">Mail Us</h3>

          <div className="space-y-3">
            <label className="block">
              <span className="sr-only">Your name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white"
                required
              />
            </label>

            <label className="block">
              <span className="sr-only">Your email</span>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white"
                required
              />
            </label>

            <label className="block">
              <span className="sr-only">Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white"
              />
            </label>

            <label className="block">
              <span className="sr-only">Your message (optional)</span>
              <textarea
                name="message"
                placeholder="Your message (optional)"
                rows={7}
                className="w-full resize-y rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 inline-block rounded bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:opacity-95 active:opacity-90"
          >
            Submit
          </button>

          {status === "sent" && (
            <p className="mt-3 text-sm text-emerald-700">Thanks! We’ll be in touch.</p>
          )}
        </form>

        {/* Right: Map */}
        <div className="md:pl-2">
          <h3 className="text-xl font-semibold text-sky-600 mb-6">Direction</h3>

          <div className="relative w-full overflow-hidden rounded border border-gray-300">
            {/* 3:2 aspect on mobile, fixed height on md+ to mimic the screenshot */}
            <div className="aspect-[3/2] md:h-[290px]">
              <iframe
                title="Pep Allele Biologics - Map"
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
