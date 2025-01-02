/* eslint-disable react/prop-types */
import { NavLink, useSearchParams } from "react-router-dom";
import "../Transactions/Transactions.scss";
import { useState, useEffect } from "react";
import Fiat from "../../components/Fiat/Fiat";
import Crypto from "../../components/Crypto/Crypto";
import Giftcard from "../../components/Giftcard/Giftcard";

const Transactions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [option, setOption] = useState(searchParams.get("option") || "fiat");

  useEffect(() => {
    const currentOption = searchParams.get("option") || "fiat";
    setOption(currentOption);
  }, [searchParams]);

  const handleOptionChange = (newOption) => {
    setOption(newOption);
    setSearchParams({ option: newOption });
  };

  return (
    <div className="transactions">
      <div className="wrapper">
        <div className="title">
          <NavLink
            to="?option=fiat"
            className={option === "fiat" ? "active-link" : ""}
            onClick={() => handleOptionChange("fiat")}
          >
            <p>Fiat</p>
          </NavLink>
          <NavLink
            to="?option=crypto"
            className={option === "crypto" ? "active-link" : ""}
            onClick={() => handleOptionChange("crypto")}
          >
            <p>Crypto</p>
          </NavLink>
          <NavLink
            to="?option=giftcard"
            className={option === "giftcard" ? "active-link" : ""}
            onClick={() => handleOptionChange("giftcard")}
          >
            <p>Giftcard</p>
          </NavLink>
        </div>

        <div className="contents">
          <Content option={option} />
        </div>
      </div>
    </div>
  );
};

const Content = ({ option }) => {
  switch (option) {
    case "fiat":
      return <Fiat />;
    case "crypto":
      return <Crypto />;
    case "giftcard":
      return <Giftcard />;
    default:
      return <Fiat />;
  }
};

export default Transactions;
