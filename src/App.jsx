import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import BentoSection from "./components/BentoSection";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // Speed of the scroll
      smooth: true, // Enable smooth scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Inertia easing
    });

    // This will trigger the scroll update on each animation frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <div className="flex flex-col gap-14 w-full max-w-screen-2xl mx-auto">
        <div className="w-full">
          <Navbar />
          <Hero />
        </div>

        <Section1 />

        <Section2 />
        <BentoSection />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
