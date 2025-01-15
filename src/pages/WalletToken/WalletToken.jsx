import { LiaAngleDownSolid, LiaTimesSolid } from "react-icons/lia";
import "../WalletToken/WalletToken.scss";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import Banner from "../../assets/transaction-empty.svg";
import { Modal } from "@mui/material";
import { useState } from "react";
import QR from "../../assets/qr-code.png";

const WalletToken = () => {
  const [trademodal, setTradeModal] = useState(false);

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
            <div className="receive" onClick={() => setTradeModal(true)}>
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
            <div className="img-container">
              <img src={Banner} alt="" />
            </div>

            <p>
              Enter the realm of fast Cryptocurrency transactions and amazing
              rates
            </p>

            <div className="start" onClick={() => setTradeModal(true)}>
              Start trading
            </div>
          </div>
        </div>
      </div>

      <>
        <Modal
          disableAutoFocus
          open={trademodal}
          onClose={() => setTradeModal(false)}
          sx={{ background: "rgba(114, 113, 113, 0.58)" }}
        >
          <div className="trade-modal">
            <div className="quit-btn" onClick={() => setTradeModal(false)}>
              <LiaTimesSolid />
            </div>

            <div className="clear"></div>

            <h3>Receive BCH</h3>

            <p>
              You can scan your QR Code or share your wallet address directly
              from here to your sender
            </p>

            <div className="qr-code">
              <img src={QR} alt="" />
            </div>

            <div className="addy">
              bitcoincash:qp6rezzseleg72rt3vpk8zkca7fq9j75hszpzhhefm
            </div>

            <div className="copy">Copy Address</div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default WalletToken;
