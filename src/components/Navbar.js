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
        <span className="logo-text">Abhishek Mishra.</span>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a> 
        <a href="#My Journey" onClick={() => setMenuOpen(false)}>Journey</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="/Abhishek_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;
