/* CardGrid.jsx */
export default function CardGrid({ data, imageBasePath, heading }) {
  return (
    <section className="py-12">
      {heading && (
        <h2 className="text-2xl font-bold text-center mb-8">{heading}</h2>
      )}

      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div key={idx} className="group">
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">
              {item.title}
            </h3>

            <img
              src={imageBasePath + item.image}
              alt={item.title}
              className="
                w-full aspect-[3/4] object-cover
                rounded-md border border-gray-200
                shadow-sm transition-transform duration-300
                group-hover:scale-[1.01]
              "
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
