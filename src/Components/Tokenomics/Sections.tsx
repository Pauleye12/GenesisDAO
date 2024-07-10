import "./Tokenomics.scss";
import React from "react";

interface cont {
  ImgURL: string;
  header: string;
  details: {
    text: string;
  }[];
}

interface SectionsProps {
  info: cont;
}

const Sections: React.FC<SectionsProps> = ({ info }) => {
  return (
    <div className="tokenomics__content--card">
      <img
        className="tokenomics__content--card--img"
        src={info.ImgURL}
        alt=""
      />
      <div className="tokenomics__content--card--contents">
        <div className="tokenomics__content--card--contents--mobileCategories">
          <div>
            <p>Flywheel Mechanics</p>
            <img src="./images/arrowdown.png" alt="" />
          </div>
        </div>
        <h2>{info.header}</h2>
        <img
          className="tokenomics__content--card--contents--img"
          src="./images/tokenomicsImg.png"
          alt=""
        />
        <ul>
          {info.details.map((ads, index) => (
            <li key={index}>
              {" "}
              <img src="./images/tick.png" alt="" /> <p>{ads.text}</p>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sections;
