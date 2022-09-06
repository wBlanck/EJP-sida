import "./App.css";
import HomeSection from "./components/HomeSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      {/* MAIN WRAPPER */}
      <div className="">
        <HomeSection />
      </div>
    </>
  );
}

export default App;
