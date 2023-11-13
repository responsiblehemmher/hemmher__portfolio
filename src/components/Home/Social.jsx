import React from "react";
import { MdWhatsapp } from "react-icons/md";
import { TfiLinkedin } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://bit.ly/478QOzS" className="home__social-icon">
        <MdWhatsapp />
      </a>
      <a
        href="https://www.linkedin.com/in/edunjobi-emmanuel-718a59263"
        className="home__social-icon"
      >
        <TfiLinkedin />
      </a>
      <a
        href="https://github.com/responsiblehemmher"
        className="home__social-icon"
      >
        <FiGithub />
      </a>
    </div>
  );
};

export default Social;
