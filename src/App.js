import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";

function App() {
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
