import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section id="about" className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="./mee.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Future Software Engineer</h1>
        <p className="subtitle">
          I'm <span className="my-name">Meryem Chafik</span>, an engineering
          student passionate about technology and problem-solving. I specialize
          in programming and databases, always eager to innovate and create
          impactful solutions.
        </p>
        <div className="icons flex">
          {/* <div className="icon icon-twitter"></div> */}
          <a
            href="mailto:mchafikdev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-envelope"></div>
          </a>
          <a
            href="https://github.com/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/meryem-chafik-99143b272/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
