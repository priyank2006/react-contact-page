import "./App.css";
import FormAndImage from "./components/FormAndImage";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <center>
        <Navbar />
        <HeroSection />
        <FormAndImage/>
      </center>
    </div>
  );
}

export default App;