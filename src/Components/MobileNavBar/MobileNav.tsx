import "./MobileNav.scss";
import React from "react";

interface MobileNavProps {
  setIsMobileNavOpen: (isOpen: boolean) => void;
}
const MobileNav: React.FC<MobileNavProps> = ({ setIsMobileNavOpen }) => {
  return (
    <div className="mobile-nav">
      <div
        onClick={() => setIsMobileNavOpen(false)}
        className="mobile-nav__container"
      >
        <div className="mobile-nav__container--links">
          <a href="">Launch</a>
          <a href="">Features</a>
          <a href="">FAQ</a>
        </div>
        <div className="mobile-nav__container--socials">
          <div className="mobile-nav__container--socials--wrapper">
            <a className="" href="#">
              {" "}
              <img src="./images/book.png" alt="" />{" "}
            </a>
            <a className="" href="#">
              {" "}
              <img src="./images/x.png" alt="" />{" "}
            </a>
            <a className="" href="#">
              {" "}
              <img src="./images/discord.png" alt="" />{" "}
            </a>
          </div>
          <a className="mobile-nav__container--socials--btn">Enter app</a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
