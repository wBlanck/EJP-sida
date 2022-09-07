import "./App.css";
import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      {/* MAIN WRAPPER */}
      <div className="">
        <HomeSection />
        <AboutSection />
      </div>
    </>
  );
}

export default App;
