import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import './MyJourney.css';


const MyJourney = () => {
  const timelineEvents = [

    {
      type: 'education',
      icon: <FaGraduationCap />,
      date: 'Aug 2024 - June 2026',
      title: 'Master of Computer Applications',
      institution: 'Chandigarh University, Punjab',
      description: `Gained a strong foundation in data structures, algorithms, and Software Development. 
      I am proficient in using tools like Python and SQL to clean, analyze, and visualize complex datasets. 
      My expertise lies in applying machine learning models to extract actionable insights and drive business solutions.`
    },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      date: 'June 2020 - Sep 2023',
      title: 'Bachelors of Science Honours in Mathematics',
      institution: 'Lalit Narayan Mithila University, Darbhanga, Bihar',
      description: `During my Bachelors, I gained expertise in quantitative analysis, and data interpretation. 
      Additionally, I developed computational and research skills, 
      preparing me for practical applications in areas like data analysis and computer science.`
    },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      date: 'July 2019 - July 2020',
      title: 'Intermediate (12th) Science',
      institution: 'Rose Public School, Darbhanga, Bihar',
      description: `In my 12th grade with PCM, I built a strong foundation in analytical thinking and logical reasoning. 
      Mathematics sharpened my ability to approach challenges logically, Physics nurtured a scientific and experimental 
      mindset, while Chemistry taught me precision, accuracy, and structured learning.`
    },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      date: 'May 2017 - May 2018',
      title: 'High School (10th)',
      institution: 'Rose Public School, Darbhanga, Bihar',
      description: `Achieved a solid academic foundation in all subjects while cultivating 
      foundational skills in time management, and hard work.`
    },
  ];

  return (
    <section id="my-journey" className="my-journey-section">
      <h2 className="journey-heading">
        My Journey
        <motion.span
          className="star-icon"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
        </motion.span>
      </h2>
      
      <div className="journey-container">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`journey-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="journey-content-box">
              <h3>{event.title}</h3>
              <h4>{event.company || event.institution}</h4>
              <p className="journey-date">{event.date}</p>
              <p className="journey-description">{event.description}</p>
            </div>
            <div className="journey-icon-wrapper">
              <div className="journey-dot">
                {event.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyJourney;