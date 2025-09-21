import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import MyJourney from "./components/MyJourney"; 
import Certificate from "./components/Certificate"; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home"><Header /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="My Journey"><MyJourney /></div>
      <div id="projects"><Projects /></div>
      <div id="certificates"><Certificate /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
