import { FaAngleDown, FaAngleLeft } from "react-icons/fa6";
import "../Airtime/Airtime.scss";
import { useNavigate } from "react-router-dom";

const Airtime = () => {
  const history = useNavigate();
  return (
    <div className="airtime">
      <div className="wrapper">
        <div className="title">
          <div className="back" onClick={() => history(-1)}>
            <FaAngleLeft className="title-icon" />
          </div>

          <div className="func">Buy Airtime</div>
        </div>

        <div className="container">
          <div className="num">
            <label htmlFor="">Enter Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>

          <div className="num">
            <label htmlFor="">Enter Amount</label>
            <input type="text" placeholder="Enter amount" />
          </div>

          <div className="suggested">
            <p>Suggested</p>

            <div className="suggested-amt">
              <div className="val"># 100</div>
              <div className="val"># 200</div>
              <div className="val"># 500</div>
              <div className="val"># 1000</div>
            </div>
          </div>

          <div className="sel-wallet">
            <p>Select Wallet</p>
            <div className="wallet-sel">
              <div className="opt">Select option</div>
              <FaAngleDown className="icon" />
            </div>
          </div>

          <div className="buy-btn">Buy Airtime</div>
        </div>
      </div>
    </div>
  );
};

export default Airtime;
