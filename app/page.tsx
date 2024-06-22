import Image from "next/image";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import Projects from "./layout/Projects"

export default function Home() {
  return (
    <div className="bg-black text-white ">
      <Navbar />
      <div className="pt-16 h-screen">
        <Header />
      </div>
      <div className="pt-16 h-screen">
        <Projects/>
      </div>
    </div>
  );
}
