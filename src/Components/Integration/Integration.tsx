import React from "react";
import "./Integration.scss";

const Integration = () => {
  return (
    <div className="integration">
      <img
        className="integration__imgLeft"
        src="./images/integrationLeftImg.png"
        alt=""
      />
      <img
        className="integration__imgRight"
        src="./images/integrationRightImg.png"
        alt=""
      />
      <div className="integration__texts">
        <h1 className="integration__texts--h1">CONNECT WITH GENESIS DAI</h1>
        <h2 className="integration__texts--h2">
          Seamless and Fast Integration
        </h2>
        <a className="integration__texts--a" href="#">
          Enter App
        </a>
      </div>
      <div className="integration__cards">
        <div className="integration__cards--card"></div>
        <div className="integration__cards--card"></div>
        <div className="integration__cards--card"></div>
      </div>
    </div>
  );
};

export default Integration;
