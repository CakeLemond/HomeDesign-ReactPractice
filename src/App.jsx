import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import BentoSection from "./components/BentoSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <div className="w-[95%] mx-auto  ">
        <Hero />
        <Section1 />
      </div>
      <Section2 />
      <BentoSection />
      <Footer></Footer>
    </>
  );
}

export default App;
