import { useState } from "react";
import MobileNav from "../MobileNavBar/MobileNav";
import Navbar from "../Navbar/Navbar";
import "./HeroSection.scss";
import { delay, motion } from "framer-motion";

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

const MaintextAnime = {
  initial: {
    y: 100,
    opacity: 0,
  },
  inView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const paragraphAnime = {
  initial1: {
    x: -300,
    opacity: 0,
  },
  initial2: {
    x: 300,
    opacity: 0,
  },
  inView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
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
      <img
        src="./images/mobileHeroLeft.png"
        alt=""
        className="hero-section__leftMobile"
      />
      <img
        src="./images/mobileHeroRight.png"
        alt=""
        className="hero-section__rightMobile"
      />
      <div className="blurbg"></div>
      <div className="hero-section__content">
        <div className="mobileNav">
          <Navbar
            isMobileNavOpen={isMobileNavOpen}
            setIsMobileNavOpen={setIsMobileNavOpen}
          />
        </div>
        {/* Mobile Menu */}
        {isMobileNavOpen && (
          <MobileNav setIsMobileNavOpen={setIsMobileNavOpen} />
        )}
        <div className="hero-section__content--content1">
          <h3>Welcome to Genesis DAO</h3>
          <h1>Explore the essence of Genesis DAO</h1>
          <p>
            Connect your wallets and secure your crypto assets with the unique
            and true decentralised organisation.
          </p>
          <motion.a
            variants={BtnHover}
            whileTap="onTap"
            whileHover="hover"
            animate="animate"
            href="#"
          >
            Enter App
          </motion.a>
        </div>
        <div className="hero-section__content--content2"></div>
        <div className="hero-section__content--content2Mobile">
          {/* <img src="./images/mobileGenesis.png" alt="" /> */}
        </div>
        <div className="hero-section__content--content3">
          {" "}
          <h2>what is genesis dao</h2>
          <motion.h1
            variants={MaintextAnime}
            whileInView="inView"
            initial="initial"
          >
            A groundbreaking platform that not only provides staking services
            but also lets you earn from your own crypto assets.
          </motion.h1>
          <div className="hero-section__content--content3--paragraph">
            <motion.p
              variants={paragraphAnime}
              whileInView="inView"
              initial="initial1"
              className="hero-section__content--content3--paragraph--p"
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
              <span className="hero-section__content--content3--paragraph--br">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </span>
            </motion.p>
            <motion.p
              variants={paragraphAnime}
              whileInView="inView"
              initial="initial2"
              className="hero-section__content--content3--paragraph--p"
            >
              Nemo enim ipsam voluptatem quia voluptas sit as perna tur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.{" "}
              <span className="hero-section__content--content3--paragraph--br">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et.
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
