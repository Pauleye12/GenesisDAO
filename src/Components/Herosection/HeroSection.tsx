import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img
        className="hero-section__leftImg"
        src="./images/heroleft.png"
        alt=""
      />
      <img
        className="hero-section__rightImg"
        src="./images/heroright.png"
        alt=""
      />
    </div>
  );
};

export default HeroSection;
