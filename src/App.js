import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Project from "./containers/projects";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particlesOptions from "./utilts.js/particles";

import Calculator from "./containers/projects/calculator/Calculator";
import CharCount from "./containers/projects/charcount/CharCount";
import CrudApp from "./containers/projects/crud-app/CrudApp";
import TwitterSignin from "./containers/projects/twitter-signin/TwitterSignin";

function App() {
  const location = useLocation();
  const showParticles = location.pathname === "/";

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="App">
      {showParticles && (
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      )}

      <Navbar />

      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          
          <Route path="/projects" element={<Project />} />
          
          <Route path="/projects/calculator" element={<Calculator />} />
          <Route path="/projects/charcount" element={<CharCount />} />
          <Route path="/projects/crud-app" element={<CrudApp />} />
          <Route path="/projects/twitter-signin" element={<TwitterSignin />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
