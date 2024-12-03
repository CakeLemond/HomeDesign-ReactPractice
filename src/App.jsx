import Hero from "./assets/images/Hero.jpg";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="w-[95%] mx-auto ">
      <Navbar />
      <img className="rounded-3xl" src={Hero} alt="" />
    </div>
  );
}

export default App;
