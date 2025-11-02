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
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      {heading && (
        <h3 className="text-2xl font-bold text-center mb-6">{heading}</h3>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div key={idx} className="group">
            <h4 className="text-lg font-semibold text-gray-900 text-center mb-3">
              {item.title}
            </h4>

            <div className="rounded-md border border-gray-200 shadow-sm overflow-hidden bg-white">
              <img
                src={`${imageBasePath}${item.image}`}
                alt={item.title}
                className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
