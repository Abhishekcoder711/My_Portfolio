import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo-text">AKM.</span>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>My Skills</a> 
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;
