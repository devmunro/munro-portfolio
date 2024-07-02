import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import Portfolio from "./layout/Portfolio";
import Journey from "./layout/Journey";
import Contact from "./layout/Contact";
import Education from "./layout/Education";

export default function Home() {
  return (
    <div className="w-full ">
      <div className="bg-black text-white ">
        <Navbar />
        <div id="Home" className="pt-16 h-screen ">
          <Header />
        </div>
        <div id="Portfolio" className="pt-16 h-screen  ">
          <Portfolio />
        </div>
        <div id="Journey" className="pt-16 h-screen ">
          <Journey />
        </div>
        <div id="Skills" className="pt-16 h-screen ">
          <Education />
        </div>
        <div id="Contact" className="pt-16 h-screen ">
          <Contact />
        </div>
      </div>
    </div>
  );
}
