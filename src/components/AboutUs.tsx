export default function AboutUs() {
  return (

    <section id="about" className="scroll-mt-20 max-w-7xl mx-auto px-4 py-10 sm:px-6 text-gray-800 leading-relaxed text-justify">
      {/* --- About Us --- */}
      <h2 className="text-3xl text-left font-bold mb-8">About us</h2>

      <p className="mb-4">
        At Pep Allele Biologics, <span className="italic">“Pep”</span> reflects
        peptides and <span className="italic">“Allele”</span> represents genetic
        diversity, together symbolizing our mission to decode life at the
        molecular level.
      </p>

      <p className="mb-4">
        We simplify complex biology through bioinformatics, molecular biology,
        and biophysical insights, empowering the next generation to explore DNA,
        RNA, and protein science with confidence.
      </p>

      <p>
        Founded by IIT Bombay researchers, our team blends academic expertise
        and real-world experience to make biology data-driven, accessible, and
        inspiring.
      </p>

      {/* --- Divider Space --- */}
      <div className="mt-12 "></div>

      {/* --- Biotech Skills Section --- */}
      <div className="mt-10 text-left">
        <h3 className="text-3xl font-bold mb-3">
          All the biotech skills you need in one place
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">
          Gain essential knowledge and hands-on expertise to advance your career
          in life sciences with PEP Allele Education.
        </p>
      </div>
    </section >
  );
}
