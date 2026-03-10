export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="brand">
          <span className="brand__mark">THINK BIG</span>
          <span className="brand__sub">BODYBUILDING MEDIA</span>
        </a>

        <nav className="nav">
          <a href="#links">Links</a>
          <a href="#shows">Latest Videos</a>
        </nav>

        <a
          className="button button--yellow"
          href="https://www.youtube.com/@ThinkBIGBodybuilding"
          target="_blank"
          rel="noreferrer"
        >
          Watch Now
        </a>
      </div>
    </header>
  );
}