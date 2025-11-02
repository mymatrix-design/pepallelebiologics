// Hero.tsx
export default function Hero() {
  return (
    <header
      className="
        relative isolate
        bg-[url('/hero.svg')]
        bg-cover bg-center
        text-white
      "
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="
            grid items-center
            min-h-[52vh] sm:min-h-[56vh] lg:min-h-[60vh]
            py-14 sm:py-20 lg:py-24
            lg:grid-cols-12
          "
        >
          {/* text block: sits full-width on mobile/tablet, columns 7–12 on desktop */}
          <div className="text-white lg:col-start-7 lg:col-span-6">
            <p className="text-teal-200 text-base sm:text-lg">Welcome</p>

            <h1 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-200/90">
              <span className="block text-emerald-300/90">
                Pep Allele Biologics
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-teal-100 lg:max-w-xl">
              {/* only constrain width on desktop to avoid mid-width “shift” */}
              Skills that shape the future of biotech
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
