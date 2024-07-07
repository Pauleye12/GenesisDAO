import React from "react";
import "./Faq.scss";

const Faq = () => {
  return (
    <div className="faq">
      {" "}
      <h1 className="faq__header">Have a question? Check out our FAQ</h1>
      <div className="faq__questions">
        <div className=" faq__questions--card--exposed">
          <div className="faq__questions--card--exposed--div">
            <h1>
              What is Genesis DAO and how does it differ from traditional DAOs?
            </h1>

            <img src="./images/minus.png" alt="" />
          </div>
          <p>
            Genesis DAO is designed to prioritize trust, transparency, and
            innovation. Genesis will use flywheel mechanics to propel it
            initially, followed by a building phase of which the community will
            be part of in every step of the way.
          </p>
        </div>
        <div className="faq__questions--card">
          {" "}
          <h1>
            What is the Absolute Staking Model, and how does it benefit
            participants?
          </h1>{" "}
          <img src="./images/plus.png" alt="" />{" "}
        </div>
        <div className="faq__questions--card">
          {" "}
          <h1>
            {" "}
            What are the different phases of GenesisDAO development, and what
            can participants expect?
          </h1>{" "}
          <img src="./images/plus.png" alt="" />{" "}
        </div>
        <div className="faq__questions--card">
          {" "}
          <h1>How does the voting mechanism work in Genesis DAO?</h1>{" "}
          <img src="./images/plus.png" alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Faq;
