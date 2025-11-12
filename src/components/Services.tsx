export default function Services() {
    return (
        <section
            id="services"
            className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 py-12 text-gray-800"
        >
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-gray-800 leading-relaxed text-justify">
                <p className="mb-4">
                    We provide end-to-end scientific solutions that help startups, biotech firms, and
                    researchers move faster from idea to innovation.
                </p>

                <h3 className="text-2xl font-semibold mb-3 text-left">
                    Molecular Biology Solutions
                </h3>
                <ul className="list-disc pl-6 space-y-1 mb-6 text-[15px]">
                    <li>Gene cloning in standard or custom vectors</li>
                    <li>Vector design for transient and stable expression</li>
                    <li>Site-directed mutagenesis</li>
                    <li>Protein expression and purification (E. coli, yeast, mammalian)</li>
                    <li>Assay development and optimization</li>
                    <li>Advisory support to optimize workflows and experimental methods</li>
                </ul>

                {/* <h3 className="text-2xl font-semibold mb-3 text-left">
                    Biosimilar Testing Services
                </h3>
                <p className="mb-3 text-[15px]">
                    Ensure accuracy and compliance with our advanced biosimilar testing services:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-[15px]">
                    <li>Method development & validation</li>
                    <li>Sample analysis with comparison reports</li>
                    <li>SOPs aligned with regulatory standards</li>
                    <li>Advanced analytical capabilities</li>
                </ul> */}
            </div>


            {/* Gene Cloning Workflow (SVG 1) */}
            <div className="mt-10">
                <div className="-mx-4 sm:mx-0">
                    <picture>
                        <source
                            type="image/avif"
                            srcSet="/services/service1-embedded-1.avif, /services/service1-embedded-1@2x.avif 2x"
                        />
                        <source
                            type="image/webp"
                            srcSet="/services/service1-embedded-1.webp, /services/service1-embedded-1@2x.webp 2x"
                        />
                        <img
                            src="/services/service1.svg"
                            alt="Gene Cloning Consulting Workflow"
                            className="w-full h-auto"
                            loading="lazy"
                            decoding="async"
                        />
                    </picture>
                </div>
            </div>

            {/* Site-Directed Mutagenesis Workflow (SVG 2) */}
            <div className="mt-16">
                <div className="-mx-4 sm:mx-0">
                    <picture>
                        <source
                            type="image/avif"
                            srcSet="/services/service2-embedded-1.avif, /services/service2-embedded-1@2x.avif 2x"
                        />
                        <source
                            type="image/webp"
                            srcSet="/services/service2-embedded-1.webp, /services/service2-embedded-1@2x.webp 2x"
                        />
                        <img
                            src="/services/service2.svg"
                            alt="Site-directed mutagenesis consulting workflow"
                            className="w-full h-auto"
                            loading="lazy"
                            decoding="async"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
}
