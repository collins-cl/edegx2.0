/* eslint-disable react/prop-types */
import { useState } from "react";
import "../Crypto/Crypto.scss";

const Crypto = () => {
  const [activeLink, setActiveLink] = useState("buy");

  return (
    <div className="crypto">
      <div className="crypto-title">
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

        <div
          className={activeLink === "swap" ? "active-link" : ""}
          onClick={() => setActiveLink("swap")}
        >
          Swap
        </div>

        <div
          className={activeLink === "send" ? "active-link" : ""}
          onClick={() => setActiveLink("send")}
        >
          Send
        </div>

        <div
          className={activeLink === "receive" ? "active-link" : ""}
          onClick={() => setActiveLink("receive")}
        >
          Receive
        </div>
      </div>

      <div className="crypto-contents">
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
      "buy";
      break;
  }
};

export default Crypto;
