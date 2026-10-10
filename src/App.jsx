import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Copyrights from "./components/Copyrights";

function App() {
   const [theme,setTheme] = useState(false);
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Home theme={theme}/>
      <About theme={theme}/>
      <Skill theme={theme} />
      <Project theme={theme}/>
      <Contact theme={theme}/>
      {/* <Copyrights /> */}
    </>
  );
}

export default App;
