import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import BentoSection from "./components/BentoSection";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
function App() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col gap-14 w-full max-w-screen-2xl mx-auto">
        <Hero />

        <Section1 />

        <Section2 />
        <BentoSection />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
