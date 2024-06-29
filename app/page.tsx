import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import Projects from "./layout/Projects";
import Experience from "./layout/Experience";

export default function Home() {
  return (
    <div>
      <div className="bg-black text-white scroll-smooth">
        <Navbar />
        <div id="Home" className="pt-16 h-screen ">
          <Header />
        </div>
        <div id="Projects" className="pt-16 h-screen">
          <Projects />
        </div>
        <div id="Experience" className="pt-16 h-screen">
          <Experience />
        </div>
      </div>
    </div>
  );
}
