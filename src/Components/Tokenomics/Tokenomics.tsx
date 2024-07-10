import Sections from "./Sections";
import "./Tokenomics.scss";
const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <div className="tokenomics__content">
        <div className="tokenomics__content--cards">
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
          <Sections />
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
