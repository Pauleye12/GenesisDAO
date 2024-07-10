import "./Faq.scss";
import FaqCard from "./FaqCard";

const faqQuestions = [
  {
    question:
      "What is Genesis DAO and how does it differ from traditional DAOs?",
    answer:
      "Genesis DAO is designed to prioritize trust, transparency, and innovation. Genesis will use flywheel mechanics to propel it initially, followed by a building phase of which the community will be part of in every step of the way.",
  },
  {
    question:
      "What is the Absolute Staking Model, and how does it benefit participants?",
    answer:
      "Genesis DAO is designed to prioritize trust, transparency, and innovation. Genesis will use flywheel mechanics to propel it initially, followed by a building phase of which the community will be part of in every step of the way.",
  },
  {
    question:
      "What are the different phases of GenesisDAO development, and what can participants expect?",
    answer:
      "Genesis DAO is designed to prioritize trust, transparency, and innovation. Genesis will use flywheel mechanics to propel it initially, followed by a building phase of which the community will be part of in every step of the way.",
  },
  {
    question: "How does the voting mechanism work in Genesis DAO?",
    answer: "",
  },
];
const Faq = () => {
  return (
    <div className="faq">
      {" "}
      <div className="faq__content">
        <h1 className="faq__content--header">
          Have a question? Check out our FAQ
        </h1>
        <div className="faq__content--questions">
          {faqQuestions.map((faq, index) => (
            <FaqCard key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
