import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";

function App() {
  /* create compare slider, IRL images with 3d models with different options etc */
  /* create your own slider */
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
