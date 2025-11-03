// Navbar.tsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Match the order/labels in the first image
  const links = [
    { href: "#about", label: "About us" },
    { href: "#academy", label: "Academy" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* ROW 1: logo + info columns (white background, small text) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Left: logo only (as in screenshot 1) */}
          <a href="/" className="inline-flex items-center gap-3">
            <img
              src="logo.svg"
              alt="Pep Allele Biologics"
              className="h-16 w-auto"
            />
            <span className="sr-only">Pep Allele Biologics</span>
          </a>

          {/* Right: three compact info blocks (hide some on small screens) */}
          <div className="hidden md:flex items-center gap-10 text-[14px] text-gray-900">
            <div className="leading-tight">
              <div className="font-medium">Mumbai</div>
              <div className="text-gray-500">India</div>
            </div>

            <div className="leading-tight">
              <div className="text-gray-500">Mon–Sat 10:00 am–7:00 pm</div>
            </div>

            <div className="leading-tight text-right">
              <a
                href="mailto:info@pepallelebiologics.com"
                className="font-medium hover:opacity-90"
              >
                info@pepallelebiologics.com
              </a>
              <div className="text-gray-500">online support 24×7</div>
            </div>
          </div>

          {/* Mobile: just a menu button on the right */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ROW 2: left-aligned nav only (no logo here) */}
      <nav className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Desktop nav: links start at the left edge, spaced like screenshot */}
          <ul className="hidden md:flex h-10 items-center gap-6 text-md text-gray-800">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-black">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile dropdown: show links + quick contact */}
          {open && (
            <div className="md:hidden pb-3">
              <ul className="space-y-2 text-sm text-gray-800">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="block py-2"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 border-t border-gray-200 pt-3 text-sm">
                <a href="tel:+919580000000" className="block">
                  +91-9580xxxxxx
                </a>
                <a href="mailto:info@pepallelebiologics.com" className="block">
                  info@pepallelebiologics.com
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Thin green accent line under the nav (as in screenshot 1) */}
        <div className="h-[6px] bg-emerald-900" />
      </nav>
    </header>
  );
}
