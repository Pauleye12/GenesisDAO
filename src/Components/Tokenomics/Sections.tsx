import "./Tokenomics.scss";
import React, { useState } from "react";

interface cont {
  ImgURL: string;
  header: string;
  details: {
    text: string;
  }[];
}

interface SectionsProps {
  info: cont;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sections: React.FC<SectionsProps> = ({
  info,
  activeSection,
  setActiveSection,
}) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="tokenomics__content--card">
      <img
        className="tokenomics__content--card--img"
        src={info.ImgURL}
        alt=""
      />
      <div className="tokenomics__content--card--contents">
        <div className="tokenomics__content--card--contents--mobileCategories">
          <div
            onClick={() => setDropdown(!dropdown)}
            className="tokenomics__content--card--contents--mobileCategories--div"
          >
            <p>{activeSection}</p>
            <img src="./images/arrowdown.png" alt="" />
          </div>
          {dropdown && (
            <div onClick={() => setDropdown(false)} className="dropdownMobile">
              <p
                onClick={() => setActiveSection("flywheel mechanics")}
                className="dropdownMobileContent"
              >
                Flywheel Mechanics
              </p>
              <p
                onClick={() => setActiveSection("treasury")}
                className="dropdownMobileContent"
              >
                Treasury
              </p>
              <p
                onClick={() => setActiveSection("staking")}
                className="dropdownMobileContent"
              >
                Staking
              </p>
              <p
                onClick={() => setActiveSection("dao")}
                className="dropdownMobileContent"
              >
                DAO
              </p>
            </div>
          )}
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
