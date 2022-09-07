import "./App.css";
import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <>
      <NavBar />
      {/* MAIN WRAPPER */}
      <div className="">
        <HomeSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </>
  );
}

export default App;
