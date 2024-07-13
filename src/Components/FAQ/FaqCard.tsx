import React, { useState } from "react";
import "./Faq.scss";
import { motion } from "framer-motion";

const listItem = {
  initial: {
    x: 120,
    opacity: 0,
  },
  inView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: "easeInOut",
    },
  },
};

interface FaqProps {
  faq: {
    question: string;
    answer: string;
  };
}
const FaqCard: React.FC<FaqProps> = ({ faq }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      variants={listItem}
      className=" faq__content--questions--card--exposed"
    >
      <div className="faq__content--questions--card--exposed--div">
        <h1>{faq.question}</h1>

        <img
          onClick={() => setIsExpanded(!isExpanded)}
          src={isExpanded ? "./images/minus.png" : "./images/plus.png"}
          alt=""
        />
      </div>
      {isExpanded && <p>{faq.answer}</p>}
    </motion.div>
  );
};

export default FaqCard;
