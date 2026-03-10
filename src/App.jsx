import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LinksHub from "./components/LinksHub";
import LatestVideos from "./components/LatestVideos";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Hero />
        <LinksHub />
        <LatestVideos />
      </main>

      <Footer />
    </div>
  );
}