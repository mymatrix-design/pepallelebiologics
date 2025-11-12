export default function OurTeam() {
  return (
    <section className="max-w-7xl mx-auto px-0 sm:px-6 py-10">
      <picture>
        <source
          type="image/avif"
          srcSet="/our-team-embedded-1.avif, /our-team-embedded-1@2x.avif 2x"
        />
        <source
          type="image/webp"
          srcSet="/our-team-embedded-1.webp, /our-team-embedded-1@2x.webp 2x"
        />
        <img
          // make sure this is in /public
          src="/our-team.svg"
          alt="Meet our team"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </section>
  );
}
