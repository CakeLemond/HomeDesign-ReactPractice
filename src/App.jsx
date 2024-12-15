import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="w-[95%] mx-auto ">
        <Hero />
      </div>
    </>
  );
}

export default App;
