import "./Navbar.scss";

const Navbar = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <img className="navbar__content--logo" src="./images/logo.png" alt="" />
        <div className="navbar__content--links">
          <a className="" href="">
            Launch
          </a>
          <a className="" href="">
            Features
          </a>
          <a className="" href="">
            FAQs
          </a>
        </div>

        <div className="navbar__content--socials">
          <a className="navbar__content--socials--link" href="#">
            {" "}
            <img src="./images/book.png" alt="" />{" "}
          </a>
          <a className="navbar__content--socials--link" href="#">
            {" "}
            <img src="./images/x.png" alt="" />{" "}
          </a>
          <a className="navbar__content--socials--link" href="#">
            {" "}
            <img src="./images/discord.png" alt="" />{" "}
          </a>
          <a className="enter-app" href="#">
            {" "}
            Enter App{" "}
          </a>
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="mobileToggle"
          >
            <img
              src={
                isMobileNavOpen
                  ? "./images/closeMenu.png"
                  : "./images/mobileToggle.png"
              }
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
