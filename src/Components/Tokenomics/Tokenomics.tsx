import Sections from "./Sections";
import { useState } from "react";
import "./Tokenomics.scss";
import { motion } from "framer-motion";

const SectionHover = {
  initial: {
    y: 0,
    opacity: 0.9,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  hover: {
    y: -10,
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};
const Tokenomics = () => {
  const TokenomicsInfo = [
    {
      ImgURL: "./images/tokenomicsImg.png",
      header:
        "The initial phase will be drive by the flywheel mechanics. A positive feedback cycle",
      details: [
        {
          text: "Staking rewards people with generous APY.",
        },
        {
          text: "Buy pressure builds up, and more people stake",
        },
        {
          text: "The token value increases / APY starts slowing down",
        },
        {
          text: "Selling/unstaking feeds the treasury",
        },
        {
          text: "The token value increases / APY starts slowing down",
        },
      ],
    },
    {
      ImgURL: "./images/tokenomicsImg.png",
      header:
        "The treasury funds are strategically allocated for marketing and to build new projects within the $GEN ecosystem",
      details: [
        {
          text: "Taxes will feed the treasury.",
        },
        {
          text: "Treasury funds will be used to develop new projects within the ecosystem.",
        },
        {
          text: "Treasury funds will be used for marketing purposes.",
        },
      ],
    },

    {
      ImgURL: "./images/tokenomicsImg.png",
      header:
        "Stake $GEN and earn more rewards, help the ecosystem grow. WIN-WIN",
      details: [
        {
          text: "Stake and earn.",
        },
        {
          text: "Interactive dashboard to monitor your profits.",
        },
        {
          text: "Total control over tokens, unstake at anytime.",
        },
      ],
    },
    {
      ImgURL: "./images/tokenomicsImg.png",
      header:
        "The community will vote for a product to be built, examples would be; Genesis launchpad, an online betting platform, expansion into AI or any trends in 2024",
      details: [
        {
          text: "Members submit proposals detailing project objectives and benefits.",
        },
        {
          text: "Proposals are vetted for alignment with the DAO's goals and practicality.",
        },
        {
          text: "Members vote to select proposals for implementation.",
        },
        {
          text: "Projects are executed with defined timelines and updates",
        },
        {
          text: "Projects end with an outcome evaluation and community feedback",
        },
      ],
    },
  ];

  const [activeSection, setActiveSection] = useState("flywheel mechanics");
  let componentToRender;

  if (activeSection.toLowerCase() === "flywheel mechanics") {
    componentToRender = (
      <Sections
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        info={TokenomicsInfo[0]}
      />
    );
  } else if (activeSection.toLowerCase() === "treasury") {
    componentToRender = (
      <Sections
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        info={TokenomicsInfo[1]}
      />
    );
  } else if (activeSection.toLowerCase() === "staking") {
    componentToRender = (
      <Sections
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        info={TokenomicsInfo[2]}
      />
    );
  } else if (activeSection.toLowerCase() === "dao") {
    componentToRender = (
      <Sections
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        info={TokenomicsInfo[3]}
      />
    );
  } else {
    componentToRender = <div></div>;
  }
  return (
    <div className="tokenomics">
      <div className="tokenomics__content">
        <div className="tokenomics__content--cards">
          <div className="tokenomics__content--card--sections">
            <motion.div
              variants={SectionHover}
              animate="initial"
              whileHover="hover"
              onClick={() => setActiveSection("flywheel mechanics")}
              className={
                activeSection.toLowerCase() === "flywheel mechanics"
                  ? "tokenomics__content--card--sections--active"
                  : "tokenomics__content--card--sections--inactive"
              }
            >
              <p> Flywheel mechanics </p>
            </motion.div>
            <motion.div
              variants={SectionHover}
              animate="initial"
              whileHover="hover"
              onClick={() => setActiveSection("treasury")}
              className={
                activeSection.toLowerCase() === "treasury"
                  ? "tokenomics__content--card--sections--active"
                  : "tokenomics__content--card--sections--inactive"
              }
            >
              <p>Treasury</p>
            </motion.div>
            <motion.div
              variants={SectionHover}
              animate="initial"
              whileHover="hover"
              onClick={() => setActiveSection("staking")}
              className={
                activeSection.toLowerCase() === "staking"
                  ? "tokenomics__content--card--sections--active"
                  : "tokenomics__content--card--sections--inactive"
              }
            >
              <p>Staking</p>
            </motion.div>
            <motion.div
              variants={SectionHover}
              animate="initial"
              whileHover="hover"
              onClick={() => setActiveSection("dao")}
              className={
                activeSection.toLowerCase() === "dao"
                  ? "tokenomics__content--card--sections--active"
                  : "tokenomics__content--card--sections--inactive"
              }
            >
              <p>DAO</p>
            </motion.div>
          </div>
          {componentToRender}
        </div>
        <div className="tokenomics__content--details">
          <div className="tokenomics__content--details--card">
            <p>Holders</p>
            <h1>65.5K</h1>
          </div>
          <div className="tokenomics__content--details--card">
            <p>Market cap</p>
            <h1>$160M</h1>
          </div>
          <div className="tokenomics__content--details--card">
            <p>Treasury</p>
            <h1>$38k</h1>
          </div>
          <div className="tokenomics__content--details--card">
            <p>APY</p>
            <h1>161%</h1>
          </div>
          <div className="tokenomics__content--details--card">
            <p>Staked</p>
            <h1>$13k</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
