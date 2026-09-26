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
            I am a <strong>Data Analyst</strong> based in India, passionate about transforming raw data into meaningful insights that support data-driven business decisions. With a strong foundation in mathematics and computer applications, I enjoy solving analytical problems, identifying patterns, and presenting insights through clear and interactive visualizations.
          </p>

          <p>
            I have completed my <strong>Master of Computer Applications (MCA)</strong> from Chandigarh University, with a focus on Data Analytics, data-driven technologies, and practical analytical projects. My academic background also includes a Bachelor's degree in Mathematics, which has strengthened my analytical and problem-solving approach.
          </p>

          <p>
            My core expertise lies in <strong>Excel, SQL, and Power BI</strong>. I work with <strong>Advanced Excel</strong>, including Pivot Tables, advanced formulas, XLOOKUP, VBA, Macros, and Power Query for data cleaning, transformation, and analysis. In <strong>Power BI</strong>, I have hands-on experience with DAX, data modeling, table relationships, calculated columns and measures, KPI development, interactive dashboards, and data visualization.
          </p>

          <p>
            I also work with <strong>SQL</strong> for data extraction and analysis, including complex <strong>JOINs, subqueries, CTEs, window functions, aggregations, CASE statements, and analytical queries</strong> to derive business insights from structured data.
          </p>

          <p>
            Along with these core analytics tools, I have hands-on experience with <strong>Python</strong> for <strong>data cleaning, data analysis, and visualization</strong>, using libraries such as <strong>Pandas, NumPy, Matplotlib, and Plotly</strong>. I have applied Python in analytical projects and am continuously strengthening my Python skills to develop deeper expertise in data analysis and automation. I also have familiarity with <strong>Tableau</strong> for creating interactive visualizations and presenting data-driven insights effectively.
          </p>

          <p>
            My goal is to continuously develop as a <strong>Data Analyst</strong> and use data, analytical thinking, and visualization to turn complex datasets into clear, actionable business insights.
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
