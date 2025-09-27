import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGithub, FaGit } from "react-icons/fa";
import { SiCplusplus, SiMysql, SiPostman, SiTableau, SiNetlify, SiMongodb, SiRender } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import "./Skills.css";

function Skills() {
  const skills = [
    { icon: <FaPython className="skill-icon python" />, name: "Python" },
    { icon: <SiCplusplus className="skill-icon cpp" />, name: "C++" },
    { icon: <FaHtml5 className="skill-icon html" />, name: "HTML5" },
    { icon: <FaCss3Alt className="skill-icon css" />, name: "CSS3" },
    { icon: <FaJsSquare className="skill-icon js" />, name: "JavaScript" },
    { icon: <FaReact className="skill-icon react" />, name: "React" },
    { icon: <FaNodeJs className="skill-icon node" />, name: "Node.js" },
    { icon: <SiExpress className="skill-icon express" />, name: "Express.js" },
    { icon: <SiMysql className="skill-icon mysql" />, name: "MySQL" },
    { icon: <FaGithub className="skill-icon github" />, name: "GitHub" },
    { icon: <SiPostman className="skill-icon postman" />, name: "Postman" },
    { icon: <SiTableau className="skill-icon tableau" />, name: "Tableau" },
    { icon: <SiNetlify className="skill-icon netlify" />, name: "Netlify" }, 
    { icon: <SiMongodb className="skill-icon mongodb" />, name: "MongoDb" },
    { icon: <SiRender className="skill-icon render" />, name: "Render" },
    { icon: <FaGit className="skill-icon git" />, name: "Git" },
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
