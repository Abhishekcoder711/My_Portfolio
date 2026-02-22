// src/components/Certificates.js

import React from 'react';
import './Certificate.css'; // CSS file ko import karna zaroori hai

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-container">
        {/* Certificate Item 1 */}
        <div className="certificate-item">
          <h3 className="certificate-name">Introduction to Data Analytics</h3>
          <p className="certificate-issuer">Issued by IBM on Coursera</p>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/JV9QR4DDV6QX" // Apna link yahan dalein
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            View
          </a>
        </div>

        {/* Certificate Item 2 */}
        <div className="certificate-item">
          <h3 className="certificate-name">Master Data Analysis with Python-From Beginner to Pro </h3>
          <p className="certificate-issuer">Issued by Udemy</p>
          <a
            href="https://www.udemy.com/certificate/UC-f30661fb-30bc-4bef-8aad-a61c5e4b58ab/" 
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            View
          </a>
        </div>
        {/* Certificate Item 3 */}
        <div className="certificate-item">
          <h3 className="certificate-name">Get started building with Power BI</h3>
          <p className="certificate-issuer">Issued by Microsoft Learn</p>
          <a
            href="https://learn.microsoft.com/en-us/users/abhishekkumarmishra-0880/achievements/9rhhvv5u" 
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            View
          </a>
        </div>        
        {/* Certificate Item 2 */}
        <div className="certificate-item">
          <h3 className="certificate-name">University of Michigan “Python Specialization</h3>
          <p className="certificate-issuer">Issued by Coursera</p>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/R45HZ32KMLOK"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            View
          </a>
        </div>        

        {/* Aap yahan aur bhi certificates add kar sakte hain */}
      </div>
    </section>
  );
};

export default Certificates;