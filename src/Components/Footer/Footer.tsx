import "./Footer.scss";
import { motion } from "framer-motion";

const GenesisTextAnime = {
  initial: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const BtnHover = {
  animate: {
    scale: 1,
    transition: {
      duration: 0.75,

      type: "spring",
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.75,

      type: "spring",
      ease: "easeInOut",
    },
  },
  onTap: {
    scale: 1,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const cardAnime = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  inView: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const Footer = () => {
  return (
    <div className="footer">
      <motion.h1
        variants={GenesisTextAnime}
        animate="initial"
        whileInView="inView"
        className="footer__text"
      >
        GENESIS
      </motion.h1>
      <img className="footer__img" src="./images/footerImg.png" alt="" />
      <img
        className="footer__imgMobile"
        src="./images/footerImgMobile.png"
        alt=""
      />

      <div className="footer__wrapper">
        <motion.div
          variants={cardAnime}
          whileInView="inView"
          animate="initial"
          className="footer__wrapper--content"
        >
          <h2 className="footer__wrapper--content--h2">
            Advanced decentralized DAO that understands you better over time
          </h2>
          <motion.a
            className="footer__wrapper--content--a"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            variants={BtnHover}
            whileTap="onTap"
            whileHover="hover"
            animate="animate"
          >
            {" "}
            Enter App
          </motion.a>
        </motion.div>
        <div className="footer__wrapper--foot">
          <div className="footer__wrapper--foot--mobileSocials">
            <img src="./images/telegram.png" alt="" />
            <img src="./images/discord.png" alt="" />
            <img src="./images/book.png" alt="" />
            <img src="./images/x.png" alt="" />
          </div>
          <div className="footer__wrapper--foot--left">
            <div className="footer__wrapper--foot--left--1">
              <p className="footer__wrapper--foot--left--1--p">
                About Genesis DAO
              </p>
              <p className="footer__wrapper--foot--left--1--p">Roadmap</p>
              <p className="footer__wrapper--foot--left--1--p">How it works</p>
              <p className="footer__wrapper--foot--left--1--p">About us</p>
            </div>
            <div className="footer__wrapper--foot--left--1">
              <p className="footer__wrapper--foot--left--1--p">
                Litepaper <img src="./images/redirect.png" alt="" />{" "}
              </p>
              <p className="footer__wrapper--foot--left--1--p">
                Documentations <img src="./images/redirect.png" alt="" />
              </p>
              <p className="footer__wrapper--foot--left--1--p">
                FAQ <img src="./images/redirect.png" alt="" />
              </p>
              <p className="footer__wrapper--foot--left--1--p">
                Extentions <img src="./images/redirect.png" alt="" />
              </p>
            </div>
          </div>
          <div className="footer__wrapper--foot--right">
            <img
              className="footer__wrapper--foot--right--img"
              src="./images/footerLogo.png"
              alt=""
            />
            <div className="footer__wrapper--foot--right--socials">
              <img src="./images/telegram.png" alt="" />
              <img src="./images/discord.png" alt="" />
              <img src="./images/book.png" alt="" />
              <img src="./images/x.png" alt="" />
            </div>
          </div>
        </div>
        <div className="footer__wrapper--bottom">
          © 2024 Genesis DAO, All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
