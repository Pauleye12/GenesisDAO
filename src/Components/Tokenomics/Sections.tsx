import React from "react";
import "./Tokenomics.scss";

const Sections = () => {
  return (
    <div className="tokenomics__content--card">
      <img
        className="tokenomics__content--card--img"
        src="./images/tokenomicsImg.png"
        alt=""
      />
      <div className="tokenomics__content--card--contents">
        <div className="tokenomics__content--card--contents--mobileCategories">
          <div>
            <p>Flywheel Mechanics</p>
            <img src="./images/arrowdown.png" alt="" />
          </div>
        </div>
        <h2>
          The initial phase will be drive by the flywheel mechanics. A positive
          feedback cycle
        </h2>
        <img
          className="tokenomics__content--card--contents--img"
          src="./images/tokenomicsImg.png"
          alt=""
        />
        <ul>
          <li>
            {" "}
            <img src="./images/tick.png" alt="" />{" "}
            <p>Staking rewards people with generous APY.</p>{" "}
          </li>
          <li>
            {" "}
            <img src="./images/tick.png" alt="" />{" "}
            <p>Buy pressure builds up, and more people stake</p>{" "}
          </li>
          <li>
            {" "}
            <img src="./images/tick.png" alt="" />{" "}
            <p>The token value increases / APY starts slowing down</p>{" "}
          </li>
          <li>
            {" "}
            <img src="./images/tick.png" alt="" />{" "}
            <p>Selling/unstaking feeds the treasury</p>{" "}
          </li>
          <li>
            {" "}
            <img src="./images/tick.png" alt="" />{" "}
            <p>The treasury is well-fed, and so heavy marketing begins</p>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sections;
