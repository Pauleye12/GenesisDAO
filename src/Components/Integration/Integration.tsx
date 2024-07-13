import "./Integration.scss";
import { motion } from "framer-motion";

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

      ease: "easeInOut",
    },
  },
};
const MaintextAnime = {
  initial: {
    y: -70,
    opacity: 0,
  },
  inView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: 0.5,
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

      {/* Mobile */}
      <img
        className="integration__imgLeftMobile"
        src="./images/integrationMobileLeft.png"
        alt=""
      />
      <img
        className="integration__imgRightMobile"
        src="./images/integrationMobileRight.png"
        alt=""
      />
      <div className="integration__content">
        <div className="integration__content--texts">
          <motion.h1
            variants={paragraphAnime}
            whileInView="inView"
            initial="initial1"
            className="integration__content--texts--h1"
          >
            CONNECT WITH GENESIS DAO
          </motion.h1>
          <motion.h2
            variants={MaintextAnime}
            whileInView="inView"
            initial="initial"
            className="integration__content--texts--h2"
          >
            Seamless and Fast Integration
          </motion.h2>
          <motion.a
            variants={BtnHover}
            whileTap="onTap"
            whileHover="hover"
            animate="animate"
            className="integration__content--texts--a"
            href="#"
          >
            Enter App
          </motion.a>
        </div>
        <div className="integration__content--cards">
          <motion.div
            variants={BtnHover}
            whileHover="hover"
            animate="animate"
            className="integration__content--cards--card"
          >
            <img src="./images/buy.png" alt="" />
            <h1>Buy</h1>
            <p>Take a part in our presale and get unrealistic airdrops.</p>
            <a href="">Join DAO now</a>
          </motion.div>
          <motion.div
            variants={BtnHover}
            whileHover="hover"
            animate="animate"
            className="integration__content--cards--card"
          >
            <img src="./images/stake.png" alt="" />
            <h1>Stake</h1>
            <p>Stake your token with Genesis DAO to earn passive income</p>
            <a href="">Stake now</a>
          </motion.div>
          <motion.div
            variants={BtnHover}
            whileHover="hover"
            animate="animate"
            className="integration__content--cards--card"
          >
            <img src="./images/refer.png" alt="" />
            <h1>Refer</h1>
            <p>Invite new users by using your personal ref code</p>
            <a href="">Refer friends</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
