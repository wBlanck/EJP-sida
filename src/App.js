import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import MobileMenu from "./components/MobileMenu";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";

function App() {
  /* create compare slider, IRL images with 3d models with different options etc */

  return (
    <>
      <NavBar />
      {/* MAIN WRAPPER */}
      <div className="font-mont">
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
