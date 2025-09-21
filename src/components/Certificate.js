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
          <h3 className="certificate-name">Introduction to Software Engineering </h3>
          <p className="certificate-issuer">Issued by IBM on Coursera</p>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/JV9QR4DDV6QX" 
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            View
          </a>
        </div>
        {/* Certificate Item 3 */}
        <div className="certificate-item">
          <h3 className="certificate-name">Master Data Analysis with Python-From Beginner to Pro</h3>
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
        {/* Certificate Item 2 */}
        <div className="certificate-item">
          <h3 className="certificate-name">Mastering Data Structures & Algorithms using C++</h3>
          <p className="certificate-issuer">Issued by Udemy</p>
          <a
            href="https://www.udemy.com/certificate/UC-f0b6a092-788f-4116-b400-51f99d130112/"
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