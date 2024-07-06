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
      <div className="hero-section__content1">
        <h3>Welcome to Genesis DAO</h3>
        <h1>Explore the essence of Genesis DAO</h1>
        <p>
          Connect your wallets and secure your crypto assets with the unique and
          true decentralised organisation.
        </p>
        <a href="#">Enter App</a>
      </div>
      <div className="hero-section__content2">
        <img src="./images/heroCenterimg.png" alt="" />
      </div>
      <div className="hero-section__content3"></div>
    </div>
  );
};

export default HeroSection;
