import { LiaAngleDownSolid } from "react-icons/lia";
import "../WalletToken/WalletToken.scss";
import {
  BsArrowDownLeft,
  BsArrowDownRight,
  BsArrowUpRight,
} from "react-icons/bs";

const WalletToken = () => {
  return (
    <div className="wallet-token">
      <div className="wallet-wrapper">
        <div className="top">
          <div className="box-1">
            <div className="drop-dwn">
              <div className="card">
                <p>BCH</p>

                <LiaAngleDownSolid className="icon" />
              </div>
            </div>

            <div className="val-percent">
              <div className="bal">0.00000ETH</div>
              <div className="percent">+20%</div>
            </div>

            <div className="time-frame">in the last 24hrs</div>
          </div>

          <div className="box-2">
            <div className="receive">
              <BsArrowDownLeft className="icon" />

              <p>Receive</p>
            </div>
            <div className="send">
              <BsArrowUpRight className="icon" />

              <p>send</p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="title">Recent Transaction</div>

          <div className="transact-container">
            <img src="" alt="" />

            <p>
              Enter the realm of fast Cryptocurrency transactions and amazing
              rates
            </p>
          </div>

          <div className="start">Start trading</div>
        </div>
      </div>
    </div>
  );
};

export default WalletToken;
