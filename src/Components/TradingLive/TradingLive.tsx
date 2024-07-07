import "./TradingLive.scss";

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
      <div className="trading-live__content">
        <img
          className="trading-live__content--img"
          src="./images/tradingLogo.png"
          alt=""
        />
        <h1 className="trading-live__content--h1">Trading is live now! </h1>
        <a
          className="trading-live__content--a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy on Uniswap <img src="./images/uniswaplogo.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default TradingLive;
