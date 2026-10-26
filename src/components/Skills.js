import { motion } from "framer-motion";
import {
  FaPython,
  FaGithub,
  FaGit,
  FaFileExcel,
  FaChartBar,
  FaShoppingCart,
  FaHandshake,
  FaTruck,
  FaFileInvoice,
} from "react-icons/fa";
import { SiMysql, SiTableau, SiGooglesheets, SiSap } from "react-icons/si";
import "./Skills.css";

function Skills() {
  const skills = [
    { icon: <FaTruck className="skill-icon truck" />, name: "Supply Chain Operations" },
    { icon: <FaShoppingCart className="skill-icon shopping-cart" />, name: "Procurement (P2P)" },
    { icon: <FaHandshake className="skill-icon handshake" />, name: "Vendor Management" },
    { icon: <FaFileInvoice className="skill-icon file-invoice" />, name: "PO & Invoice Process" },
    { icon: <SiSap className="skill-icon sap" />, name: "SAP S/4HANA (Procurement) " },
 
    // Core tools
    { icon: <FaFileExcel className="skill-icon excel" />, name: "Excel (VLOOKUP, Pivot Tables)" },
    { icon: <SiGooglesheets className="skill-icon google-sheets" />, name: "Google Sheets" },
    { icon: <SiMysql className="skill-icon mysql" />, name: "MySQL" },
    { icon: <FaChartBar className="skill-icon powerbi" />, name: "Power BI" },
    { icon: <FaPython className="skill-icon python" />, name: "Python (Pandas, NumPy)" },
 
    // Supporting tools
    { icon: <SiTableau className="skill-icon tableau" />, name: "Tableau" },
    { icon: <FaGithub className="skill-icon github" />, name: "GitHub" },
    { icon: <FaGit className="skill-icon git" />, name: "Git" },
    // { icon: <SiCplusplus className="skill-icon cpp" />, name: "C++" },
    // { icon: <FaHtml5 className="skill-icon html" />, name: "HTML" },
    // { icon: <FaCss3Alt className="skill-icon css" />, name: "CSS" },
    // { icon: <FaCloud className="skill-icon azure" />, name: "Microsoft Azure" },
   // { icon: <FaJsSquare className="skill-icon js" />, name: "JavaScript" },
   // { icon: <FaReact className="skill-icon react" />, name: "React" },
  //  { icon: <FaNodeJs className="skill-icon node" />, name: "Node.js" },
  //  { icon: <SiExpress className="skill-icon express" />, name: "Express.js" },
   // { icon: <SiNetlify className="skill-icon netlify" />, name: "Netlify" }, 
   // { icon: <SiRender className="skill-icon render" />, name: "Render" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <motion.div
        className="skills-icons"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
