const items = [
  {
    title: "Advance Toward a PhD",
    desc: "Build your academic profile with real research and practical lab training.",
    imgSrc: "marketing/market1.svg",
  },
  {
    title: "Gain In-Demand Industrial Skills",
    desc: "Hands-on workflows, instrumentation, and project work that hiring managers care about.",
    imgSrc: "marketing/market2.svg",
  },
  {
    title: "Build & Validate Biotech Solutions",
    desc: "Get expert guidance in developing, validating, and planning bio-innovations.",
    imgSrc: "marketing/market3.svg",
  },
];

export default function Features() {
  return (
    <div>
      <div className="max-w-4xl  text-left pt-6">
        <h2 className="text-3xl font-bold mb-2">
          Biotech is evolving — are you ready to lead the change?
        </h2>
        <p className="text-gray-600">
          Get the skills and real-world experience employers want with Career Accelerators.
        </p>
      </div>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
          {items.map((f: { title: string; desc: string; imgSrc: string; }) => (
            <article
              key={f.title}
              className="flex flex-col items-center text-center"
            >
              {/* Image frame with maxed height per breakpoint */}
              <div className="relative w-full overflow-hidden
                            h-72">
                <img
                  src={`/${f.imgSrc}`}
                  alt={f.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900 md:text-xl">
                {f.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-gray-700">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
