/* eslint-disable react/prop-types */
import { useState } from "react";
import "../Giftcard/Giftcard.scss";

const Giftcard = () => {
  const [activeLink, setActiveLink] = useState("deposit");

  return (
    <div className="giftcard">
      <div className="giftcard-title">
        <div
          className={activeLink === "buy" ? "active-link" : ""}
          onClick={() => setActiveLink("buy")}
        >
          Buy
        </div>

        <div
          className={activeLink === "sell" ? "active-link" : ""}
          onClick={() => setActiveLink("sell")}
        >
          Sell
        </div>
      </div>

      <div className="giftcard-contents">
        <Content activeLink={activeLink} />
      </div>
    </div>
  );
};

const Content = ({ activeLink }) => {
  switch (activeLink) {
    case "buy":
      return (
        <div className="wrapper">
          <div className="fc-title">
            <li>Transaction Type</li>
            <li>Amount</li>
            <li>Date</li>
            <li>Time</li>
            <li>Status</li>
          </div>
        </div>
      );
    case "sell":
      return (
        <div className="wrapper">
          <div className="fc-title">
            <li>Transaction Type</li>
            <li>Amount</li>
            <li>Date</li>
            <li>Time</li>
            <li>Status</li>
          </div>
        </div>
      );
    default:
      "deposit";
      break;
  }
};
export default Giftcard;
