export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Big presence. Big news.</p>
          <h1>
            Bold coverage for
            <span> bodybuilding fans</span>
          </h1>
          <p className="hero__text">
            Think BIG Bodybuilding Media is dedicated to bringing you the absolute best in bodybuilding media, combining entertainment, education, and a love of all things fitness. Think BIG shows are hosted by industry leaders such as Ron Partlow, Dusty Hanshaw, Dr Scott Stevenson, Skip Hill and more. Our guests include top IFBB Pros, respected coaches, scientists, and fitness celebrities. Coach Scott McNally is the creator behind Think BIG and has hosted over 1000 fitness related podcasts, while also coaching and training elite level bodybuilders as well as motivated gen pop.
            <br/>
            <br/>
            Think BIG has grown from the roots of the Advices Radio podcast network, which has brought you over 400 shows and thousands of hours of content. We’re excited to continue providing you with the highest quality content in video form…and this is just the beginning!
            <br/>
            <br/>
            Join us and learn, laugh, and get huge with your favorite fitness personalities and the greatest minds that the sport of bodybuilding has to offer!
          </p>

          <div className="hero__actions">
            <a
              className="button button--yellow"
              href="https://www.youtube.com/@ThinkBIGBodybuilding/featured"
              target="_blank"
              rel="noreferrer"
            >
              Watch on YouTube
            </a>
            <a className="button button--ghost" href="https://www.youtube.com/@ThinkBIGBodybuilding/videos">
              Browse Episodes
            </a>
          </div>
        </div>

        {/* <div className="hero__card">
          <div className="hero__logoBlock">
            <div className="hero__logoTop">Think</div>
            <div className="hero__logoBig">BIG</div>
            <div className="hero__logoBottom">BODYBUILDING MEDIA</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}