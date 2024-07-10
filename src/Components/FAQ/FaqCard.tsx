import React, { useState } from "react";
import "./Faq.scss";

interface FaqProps {
  faq: {
    question: string;
    answer: string;
  };
}
const FaqCard: React.FC<FaqProps> = ({ faq }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className=" faq__content--questions--card--exposed">
      <div className="faq__content--questions--card--exposed--div">
        <h1>{faq.question}</h1>

        <img
          onClick={() => setIsExpanded(!isExpanded)}
          src={isExpanded ? "./images/minus.png" : "./images/plus.png"}
          alt=""
        />
      </div>
      {isExpanded && <p>{faq.answer}</p>}
    </div>
  );
};

export default FaqCard;
