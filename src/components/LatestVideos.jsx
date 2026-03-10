import { videos } from "../data/videos";

export default function LatestVideos() {
  return (
    <section className="section container" id="shows">
      <div className="section-title">
        <p className="eyebrow">Latest Episodes</p>
        <h2>Watch the newest drops</h2>

      </div>

      <div className="video-grid">
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noreferrer"
            className="video-card"
          >
            <div className="video-card__imageWrap">
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="video-card__image"
              />
            </div>

            <div className="video-card__body">
              <h3>{video.title}</h3>
              <span className="video-card__cta">Watch on YouTube →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}