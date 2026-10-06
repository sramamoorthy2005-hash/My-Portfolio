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
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Copyrights />
    </>
  );
}

export default App;
