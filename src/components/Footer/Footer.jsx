import React from "react";
import "./footer.css";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"> HemmherTechie </h1>
        <div className="footer__list">
          <a href="#about" className="footer__link">
            About
          </a>
          <a href="#portfolio" className="footer__link">
            Projects
          </a>
          <a href="#testimonials" className="footer__link">
            Testimonials
          </a>
        </div>
        <div className="footer__social">
          <a href="https://bit.ly/478QOzS" className="footer__social-link">
            <MdWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/edunjobi-emmanuel-718a59263"
            className="footer__social-link"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/responsiblehemmher"
            className="footer__social-link"
          >
            <FiGithub />
          </a>
        </div>
        <span className="footer__copy">
          &#169; Edunjobi Emmanuel All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
