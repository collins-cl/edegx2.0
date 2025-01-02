/* eslint-disable react/prop-types */
import "../Fiat/Fiat.scss";
import { useState } from "react";

const Fiat = () => {
  const [activeLink, setActiveLink] = useState("deposit");

  return (
    <div className="fiat">
      <div className="fiat-title">
        <div
          className={activeLink === "deposit" ? "active-link" : ""}
          onClick={() => setActiveLink("deposit")}
        >
          Deposit
        </div>

        <div
          className={activeLink === "withdrawal" ? "active-link" : ""}
          onClick={() => setActiveLink("withdrawal")}
        >
          Withdrawal
        </div>
      </div>

      <div className="fiat-contents">
        <Content activeLink={activeLink} />
      </div>
    </div>
  );
};

const Content = ({ activeLink }) => {
  switch (activeLink) {
    case "deposit":
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
    case "withdrawal":
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

export default Fiat;
