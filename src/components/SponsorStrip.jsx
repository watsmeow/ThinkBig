export default function SponsorStrip({ sponsors }) {
  return (
    <section className="sponsor-strip" id="sponsors">
      <div className="container">
        <div className="sponsor-strip__inner">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              className="sponsor-pill"
              target="_blank"
              rel="noreferrer"
            >
              {sponsor.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}