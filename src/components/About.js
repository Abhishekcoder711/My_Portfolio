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
            I'm Abhishek Kumar Mishra from Darbhanga, Bihar. I completed my Schooling and Bachelor's degree in Bihar, where I built a strong analytical mindset and a deep interest in working with data and problem-solving.
          </p>
          <p>
            Currently, I am pursuing my Master’s degree in Computer Applications (MCA) at Chandigarh University, focusing on Data Analytics, data-driven technologies, and real-world analytical projects. My academic journey combines statistical understanding with practical exposure to structured data analysis and business insights.
          </p>
          <p>
            As a Data Analyst, I specialize in data cleaning, transformation, and visualization using <strong>Python</strong>, <strong>Pandas</strong>, <strong>NumPy</strong>, <strong>Matplotlib</strong>, <strong>Plotly</strong>, <strong>Dash</strong>, and <strong>PySpark</strong>. I work with databases like <strong>MySQL</strong> and <strong>MongoDB</strong>, and utilize <strong>Excel</strong>, <strong>Tableau</strong>, and <strong>Power BI</strong> to create interactive dashboards and analytical reports.
          </p>
          <p>
            I also have hands-on experience working with <strong>REST APIs</strong> for data extraction and integration, and exposure to cloud and big data platforms such as <strong>Microsoft Azure</strong> and <strong>Databricks</strong>. With knowledge of <strong>HTML/CSS</strong>, I ensure that data presentations and dashboards are structured, clear, and user-focused. My goal is to transform raw data into actionable insights that support smarter and more strategic decision-making.
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
