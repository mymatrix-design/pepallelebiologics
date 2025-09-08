// Hero.tsx
export default function Hero() {
  return (
    <header
      className="
        relative isolate
        bg-[url('/public/hero.svg')]  
        bg-cover bg-center
      "
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="
            min-h-[52vh] sm:min-h-[56vh] lg:min-h-[60vh]
            py-14 sm:py-20 lg:py-24
            grid
            items-center
            lg:grid-cols-12
          "
        >
          {/* spacer to push text right on desktop */}
          <div className="hidden lg:block lg:col-span-6" />

          {/* text */}
          <div className="lg:col-span-6 text-white">
            <p className="text-teal-200 text-base sm:text-lg">Welcome</p>
            <h1 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-200/90">
              <span className="block text-emerald-300/90">
                Pep Allele Biologics
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-teal-100">
              Skills that shape the future of biotech
            </p>

          </div>
        </div>
      </div>
    </header>
  );
}
