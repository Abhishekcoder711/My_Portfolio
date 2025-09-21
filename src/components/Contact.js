import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:abhishekind711@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-kumar-mishra6/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Abhishekcoder711" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href="https://x.com/Abhimishra_22" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </section>
  );
}

export default Contact;
