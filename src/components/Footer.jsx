export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div>
          <div className="footer__brand">THINK BIG</div>
          <p>Bodybuilding media, podcasts, and contest coverage.</p>
        </div>

        <div className="footer__links">
          <a href="https://www.youtube.com/@ThinkBIGBodybuilding/featured" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://www.instagram.com/scottmcnally1/?hl=en">Instagram</a>
          {/* <a href="#">Contact</a> */}
        </div>
      </div>
    </footer>
  );
}