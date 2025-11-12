type CardGridItem = {
  title: string;
  image: string;
};

type CardGridProps = {
  data: CardGridItem[];
  imageBasePath?: string;
  heading?: string;
};

export default function CardGrid({
  data,
  imageBasePath = "",
  heading,
}: CardGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      {heading && (
        <h2 className="text-2xl font-bold text-center mb-8">{heading}</h2>
      )}

      {/* 1 → 2 → 2 → 3 columns (bigger cards on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-10">
        {data.map((item, idx) => (
          <div key={idx} className="group h-full flex flex-col">
            <h3 className="min-h-[3rem] flex items-center justify-center text-center text-lg font-semibold text-gray-900 mb-4">
              {item.title}
            </h3>

            {/* Bigger lane on desktop: taller ratio + minimum height */}
            <div
              className="
                relative w-full overflow-hidden
                aspect-[4/5] sm:aspect-[3/4] lg:aspect-[3/2]
                lg:min-h-[520px] 2xl:min-h-[560px]
                flex-1
              "
            >
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.03]">
                <picture>
                  {(() => {
                    const parts = item.image.split(".");
                    const name = parts.slice(0, -1).join(".");
                    const avif = `${imageBasePath}${name}-embedded-1.avif`;
                    const avif2 = `${imageBasePath}${name}-embedded-1@2x.avif 2x`;
                    const webp = `${imageBasePath}${name}-embedded-1.webp`;
                    const webp2 = `${imageBasePath}${name}-embedded-1@2x.webp 2x`;
                    return (
                      <>
                        <source type="image/avif" srcSet={`${avif}, ${avif2}`} />
                        <source type="image/webp" srcSet={`${webp}, ${webp2}`} />
                      </>
                    );
                  })()}
                  <img
                    src={`${imageBasePath}${item.image}`}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-contain p-4 sm:p-5 lg:p-4"
                    loading="lazy"
                    decoding="async"
                    /* Tell the browser we’re using 2 cols on lg and 3 on 2xl */
                    sizes="(min-width:1536px) 33vw, (min-width:1024px) 50vw, (min-width:640px) 50vw, 100vw"
                  />
                </picture>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
