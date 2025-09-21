import React from "react";
import profileImage from "../assets/profile.jpg";
import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <div className="about-content">

        {/* ✅ Text (Animated from right) */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>
            I'm Abhishek Kumar Mishra, and I'm from Darbhanga, Bihar. I have completed my schooling and Bachelor's from Darbhanga, Bihar.
          </p>
          <p>
            Currently I'm pursuing my Master's degree in Computer Applications (MCA) at Chandigarh University, where I blended academic rigor with hands-on development projects. My experience spans across frontend and backend development, <strong>API integrations</strong>, and data visualization.
          </p>
          <p>
            I'm a self-driven software developer and technology enthusiast who loves crafting clean, user-friendly web applications. With a strong foundation in <strong>C++</strong>, <strong>Python</strong>, <strong>React</strong>, and <strong>Node.js</strong>, I bring ideas to life through code that not only works but works beautifully.
          </p>
          <p>
            I'm also a curious and self-motivated data analyst with a passion for turning numbers into narratives. Skilled in <strong>Python</strong>, <strong>SQL</strong>, and <strong>Data visualization</strong>, I create dashboards and reports that not only reveal patterns but also inspire smarter business decisions.
          </p>
        </motion.div>

        {/* ✅ Image (Static) */}
        <div className="about-image-container">
          <img src={profileImage} alt="Abhishek Mishra" className="about-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
