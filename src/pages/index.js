import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Headings from "./components/sections/heading";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Skills from "./components/sections/Skills";

const inter = Inter({ subsets: ["latin"] });
const SourceSansProRegular = localFont({
  src: "./fonts/SourceSansPro-Regular.ttf",
});
const SourceSansProBold = localFont({
  src: "./fonts/SourceSansPro-Bold.ttf",
});

export default function Home() {

  useEffect(() =>{
    Aos.init()
  }, [])

  return (
      <main className={`${SourceSansProRegular.className} bg-[#191919]`}>
        <Headings />
        <div className="max-w-[1206px] w-[90%] mx-auto overflow-hidden">
          <About />
          <Projects />
          <Skills />
        </div>
      </main>
  );
}
