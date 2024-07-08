import "./Tokenomics.scss";
const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <div className="tokenomics__content">
        <div className="tokenomics__content--card">
          <div className="tokenomics__content--card--sections">
            <div className="tokenomics__content--card--sections--active">
              <p> Flywheel mechanics </p>
            </div>
            <div className="tokenomics__content--card--sections--inactive">
              <p>Treasury</p>
            </div>
            <div className="tokenomics__content--card--sections--inactive">
              <p>Staking</p>
            </div>
            <div className="tokenomics__content--card--sections--inactive">
              <p>DAO</p>
            </div>
          </div>
          <img
            className="tokenomics__content--card--img"
            src="./images/tokenomicsImg.png"
            alt=""
          />
          <div className="tokenomics__content--card--contents">
            <div className="tokenomics__content--card--contents--mobileCategories">
              <div>
                <p>Flywheel Mechanics</p>
                <img src="./images/arrowdown.png" alt="" />
              </div>
            </div>
            <h2>
              The initial phase will be drive by the flywheel mechanics. A
              positive feedback cycle
            </h2>
            <img
              className="tokenomics__content--card--contents--img"
              src="./images/tokenomicsImg.png"
              alt=""
            />
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
