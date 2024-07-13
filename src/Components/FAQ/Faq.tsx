import "./Faq.scss";
import FaqCard from "./FaqCard";
import { motion } from "framer-motion";

const listContainer = {
  initial: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
    transition: {
      duration: 0.01,
      ease: "easeInOut",
      staggerChildren: 0.3,
      staggerDirection: -1,
      When: "beforeChildren",
    },
  },
};

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
        <motion.div
          variants={listContainer}
          animate="initial"
          whileInView="inView"
          className="faq__content--questions"
        >
          {faqQuestions.map((faq, index) => (
            <FaqCard key={index} faq={faq} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
