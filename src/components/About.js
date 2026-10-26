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
            I am an <strong>MCA graduate</strong> based in India, looking to build my career in{" "}
            <strong>Procurement, Supply Chain, and Logistics Operations</strong>. I combine strong data skills with
            a detail-oriented, process-driven approach, which helps me keep procurement data accurate,
            organized, and easy to act on.
          </p>

          <p>
            I completed my <strong>Master of Computer Applications (MCA)</strong> from Chandigarh
            University, with a focus on Data Analytics and practical analytical projects. I also hold a
            Bachelor's degree in Mathematics, which has strengthened my analytical and problem-solving
            skills.
          </p>

          <p>
            I understand the <strong>Procure-to-Pay (P2P) cycle</strong>: purchase requisition, purchase
            order, goods receipt, invoice, and payment. I am interested in{" "}
            <strong>vendor management, PO processing, inventory and shipment tracking, and spend reporting</strong>,
            where accuracy and timely delivery matter. I am eager to learn ERP and procurement tools such as SAP.
          </p>

          <p>
            My core tool is <strong>Excel</strong>. I work with Pivot Tables, advanced formulas, XLOOKUP,
            VBA, Macros, and Power Query to clean, transform, and analyze data. This is useful for
            tracking POs, checking supplier records, monitoring inventory and deliveries, and preparing reports. In <strong>Power BI</strong>,
            I build interactive dashboards using DAX, data modeling, and KPIs, which can be applied to
            spend analysis, supplier performance, delivery tracking, and cost trends.
          </p>

          <p>
            I also use <strong>SQL</strong> for data extraction and analysis, including JOINs, subqueries,
            CTEs, window functions, and aggregations. I work with <strong>Python</strong> (Pandas, NumPy,
            Matplotlib, Plotly) for data cleaning and analysis, and have familiarity with{" "}
            <strong>Tableau</strong> for visualization.
          </p>

          <p>
            I am quick to learn, comfortable with structured processes and deadlines, and flexible
            with work schedules. I am currently looking for opportunities in{" "}
            <strong>Procurement, Supply Chain, Logistics Support, and Data Analytics</strong> where I can
            contribute with accuracy, reliable reporting, and a continuous learning mindset.
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