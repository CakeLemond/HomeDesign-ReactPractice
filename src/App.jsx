import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
function App() {
  return (
    <>
      <Navbar />

      <div className="w-[95%] mx-auto ">
        <Hero />
        <Section1 />
      </div>
    </>
  );
}

export default App;
