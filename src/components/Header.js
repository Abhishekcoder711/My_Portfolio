import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect"; 
function Header() {
  return (
    <header className="header">
      <h1>Hey, I'm Abhishek Mishra</h1>
      {/* 👇 Typewriter Effect */}
      <p className="greeting-text">Postgraduate in Master of Computer Applications</p>
      <p className="subheading">Open to Work as.....</p>
      <div className="typewriter-text">
        <Typewriter
          options={{
            strings: ['Software Developer', 'Data Analyst', 'Full Stack Developer', 'Data Engineer'],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 70,
            pauseFor: 1500,
          }}
        />
      </div>
      <p className="intro-text">
        An MCA student driven by curiosity and creativity, I bridge the worlds of software development and data analysis. I craft digital experiences that are both engaging and purposeful, turning concepts into impactful solutions while uncovering insights that shape decisions and inspire meaningful change.
      </p>
      {/* <p className="intro-text">
        Passionate MCA student of Chandigarh University with various skill sets like C++, Python, Node.js, React. I have applied these skills on my acedmic journey and completed some projects that I have mentioning below. I'm able to eager to apply knowledge in Development.
      </p> */}
    </header>
  );
}

export default Header;
