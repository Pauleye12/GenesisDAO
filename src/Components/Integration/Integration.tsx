import "./Integration.scss";

const Integration = () => {
  return (
    <div className="integration">
      <img
        className="integration__imgLeft"
        src="./images/integrationLeftImg.png"
        alt=""
      />
      <img
        className="integration__imgRight"
        src="./images/integrationRightImg.png"
        alt=""
      />
      <div className="integration__texts">
        <h1 className="integration__texts--h1">CONNECT WITH GENESIS DAO</h1>
        <h2 className="integration__texts--h2">
          Seamless and Fast Integration
        </h2>
        <a className="integration__texts--a" href="#">
          Enter App
        </a>
      </div>
      <div className="integration__cards">
        <div className="integration__cards--card">
          <img src="./images/buy.png" alt="" />
          <h1>Buy</h1>
          <p>Take a part in our presale and get unrealistic airdrops.</p>
          <a href="">Join DAO now</a>
        </div>
        <div className="integration__cards--card">
          <img src="./images/stake.png" alt="" />
          <h1>Stake</h1>
          <p>Stake your token with Genesis DAO to earn passive income</p>
          <a href="">Stake now</a>
        </div>
        <div className="integration__cards--card">
          <img src="./images/refer.png" alt="" />
          <h1>Refer</h1>
          <p>Invite new users by using your personal ref code</p>
          <a href="">Refer friends</a>
        </div>
      </div>
    </div>
  );
};

export default Integration;
