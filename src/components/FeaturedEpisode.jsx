export default function FeaturedEpisode({ episode }) {
  return (
    <section className="featured">
      <div className="featured__media">
        <img src={episode.thumbnail} alt={episode.title} />
      </div>

      <div className="featured__content">
        <p className="featured__meta">{episode.meta}</p>
        <h3>{episode.title}</h3>
        <p>{episode.description}</p>

        <a
          className="button button--yellow"
          href={episode.youtubeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Watch Episode
        </a>
      </div>
    </section>
  );
}