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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, idx) => (
          <div key={idx} className="group">
            {/* Title */}
            <h3 className="min-h-[3rem] flex items-center justify-center text-center text-lg font-semibold text-gray-900 mb-5">
              {item.title}
            </h3>

            {/* Larger transparent lane */}
            <div className="h-[300px] sm:h-[340px] lg:h-[380px] flex items-center justify-center">
              <img
                src={`${imageBasePath}${item.image}`}
                alt={item.title}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
