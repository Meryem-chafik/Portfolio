import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero flex">
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
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation border">animation</div>
    </section>
  );
};

export default Hero;
