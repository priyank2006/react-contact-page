import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <center>
        <Navbar />
        <HeroSection />
      </center>
    </div>
  );
}

export default App;