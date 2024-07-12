import "./TradingLive.scss";
import { motion } from "framer-motion";

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

const TradingLive = () => {
  return (
    <div className="trading-live">
      <img
        className="trading-live__left"
        src="./images/tradingleft.png"
        alt=""
      />
      <img
        className="trading-live__right"
        src="./images/tradingright.png"
        alt=""
      />
      <img
        src="./images/tradingMobileRight.png"
        alt=""
        className="trading-live__rightMobile"
      />
      <img
        src="./images/tradingMobileLeft.png"
        alt=""
        className="trading-live__leftMobile"
      />
      <div className="blurbg"></div>
      <div className="trading-live__content">
        <img
          className="trading-live__content--img"
          src="./images/tradingLogo.png"
          alt=""
        />
        <h1 className="trading-live__content--h1">Trading is live now! </h1>
        <motion.a
          className="trading-live__content--a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          variants={BtnHover}
          whileTap="onTap"
          whileHover="hover"
          animate="animate"
        >
          Buy on Uniswap <img src="./images/uniswaplogo.png" alt="" />
        </motion.a>
      </div>
    </div>
  );
};

export default TradingLive;
