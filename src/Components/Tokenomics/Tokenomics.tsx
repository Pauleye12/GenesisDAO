import "./Tokenomics.scss";
const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <div className="tokenomics__card">
        <div className="tokenomics__card--sections">
          <div className="tokenomics__card--sections--active">
            <p> Flywheel mechanics </p>
          </div>
          <div className="tokenomics__card--sections--inactive">
            <p>Treasury</p>
          </div>
          <div className="tokenomics__card--sections--inactive">
            <p>Staking</p>
          </div>
          <div className="tokenomics__card--sections--inactive">
            <p>DAO</p>
          </div>
        </div>
        <img
          className="tokenomics__card--img"
          src="./images/tokenomicsImg.png"
          alt=""
        />
        <div className="tokenomics__card--contents">
          <h2>
            The initial phase will be drive by the flywheel mechanics. A
            positive feedback cycle
          </h2>
          <ul>
            <li>
              {" "}
              <img src="./images/tick.png" alt="" />{" "}
              <p>Staking rewards people with generous APY.</p>{" "}
            </li>
            <li>
              {" "}
              <img src="./images/tick.png" alt="" />{" "}
              <p>Buy pressure builds up, and more people stake</p>{" "}
            </li>
            <li>
              {" "}
              <img src="./images/tick.png" alt="" />{" "}
              <p>The token value increases / APY starts slowing down</p>{" "}
            </li>
            <li>
              {" "}
              <img src="./images/tick.png" alt="" />{" "}
              <p>Selling/unstaking feeds the treasury</p>{" "}
            </li>
            <li>
              {" "}
              <img src="./images/tick.png" alt="" />{" "}
              <p>The treasury is well-fed, and so heavy marketing begins</p>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="tokenomics__details">
        <div className="tokenomics__details--card">
          <p>Holders</p>
          <h1>65.5K</h1>
        </div>
        <div className="tokenomics__details--card">
          <p>Market cap</p>
          <h1>$160M</h1>
        </div>
        <div className="tokenomics__details--card">
          <p>Treasury</p>
          <h1>$38k</h1>
        </div>
        <div className="tokenomics__details--card">
          <p>APY</p>
          <h1>161%</h1>
        </div>
        <div className="tokenomics__details--card">
          <p>Staked</p>
          <h1>$13k</h1>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
