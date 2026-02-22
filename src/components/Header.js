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
            strings: ['Data Analyst', 'Business Analyst', 'BI Developer', 'Data Visualization Analyst'],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 70,
            pauseFor: 1500,
          }}
        />
      </div>
      <p className="intro-text">
        Aspiring Data Analytics professional driven by curiosity to uncover insights hidden within data and transform them into meaningful, decision-driven outcomes.
      </p>
      {/* <p className="intro-text">
        Passionate MCA student of Chandigarh University with various skill sets like C++, Python, Node.js, React. I have applied these skills on my acedmic journey and completed some projects that I have mentioning below. I'm able to eager to apply knowledge in Development.
      </p> */}
    </header>
  );
}

export default Header;
