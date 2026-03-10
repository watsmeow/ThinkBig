import EpisodeCard from "./EpisodeCard";

export default function EpisodeGrid({ episodes }) {
  return (
    <div className="episode-grid">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.title} episode={episode} />
      ))}
    </div>
  );
}