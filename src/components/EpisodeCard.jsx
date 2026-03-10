export default function EpisodeCard({ episode }) {
  return (
    <article className="episode-card">
      <div className="episode-card__image">
        <img src={episode.thumbnail} alt={episode.title} />
      </div>

      <div className="episode-card__body">
        <p className="episode-card__meta">{episode.meta}</p>
        <h3>{episode.title}</h3>
        <p>{episode.description}</p>

        <a
          className="episode-card__link"
          href={episode.youtubeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Watch →
        </a>
      </div>
    </article>
  );
}