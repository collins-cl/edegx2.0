import { FaAngleDown, FaAngleLeft } from "react-icons/fa6";
import "../DSTV/Dstv.scss";
import { useNavigate } from "react-router-dom";

const Dstv = () => {
  const history = useNavigate();

  return (
    <div className="dstv">
      <div className="wrapper">
        <div className="title">
          <div className="back" onClick={() => history(-1)}>
            <FaAngleLeft className="title-icon" />
          </div>

          <div className="func">DSTV</div>
        </div>

        <div className="container">
          <div className="num">
            <label htmlFor="">Enter Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>

          <div className="num">
            <label htmlFor="">Enter SmartCard Number</label>
            <input type="text" placeholder="Enter amount" />
          </div>

          <div className="sel-wallet">
            <p>Select Wallet</p>
            <div className="wallet-sel">
              <div className="opt">Select option</div>
              <FaAngleDown className="icon" />
            </div>
          </div>

          <div className="buy-btn">Buy Data</div>
        </div>
      </div>
    </div>
  );
};

export default Dstv;
