/* eslint-disable react/prop-types */
import "../Sell/Sell.scss";
import EmptyState from "../../assets/empty-state.svg";
import BCH from "../../assets/coins/BCH.png";
import BTC from "../../assets/coins/BTC.png";
import BNB from "../../assets/coins/BNB.png";
import ETH from "../../assets/coins/ETH.png";
import Positive from "../../assets/positive-graph.svg";
import { NavLink, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Modal } from "@mui/material";
import Danger from "../../assets/modals/Danger.svg";
import { LiaTimesSolid } from "react-icons/lia";

const Sell = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [option, setOption] = useState(searchParams.get("option") || "sell");

  const [sellmodal, setSellModal] = useState(false);
  const [Currency, setCurrency] = useState("NGN");
  const [opensetcurrency, setOpenSetCurrency] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleOptionChange = (newOption) => {
    setOption(newOption);
    setSearchParams({ option: newOption });
  };

  const tokenInfo = [
    {
      image: BCH,
      name: "Bitcoin Cash",
      coin: "BCH",
      price: "432",
      chartType: Positive,
      balance: "1.300",
      usd: "920.00",
    },
    {
      image: BTC,
      name: "Bitcoin",
      coin: "BTC",
      price: "92,000",
      chartType: Positive,
      balance: "1.0",
      usd: "92,000",
    },
    {
      image: BNB,
      name: "BNB",
      coin: "BNB",
      price: "698",
      chartType: Positive,
      balance: "21.1",
      usd: "12,786",
    },
    {
      image: ETH,
      name: "Ethereum",
      coin: "ETH",
      price: "2987",
      chartType: Positive,
      balance: "2",
      usd: "5,876",
    },
    {
      image: BCH,
      name: "Bitcoin Cash",
      coin: "BCH",
      price: "432",
      chartType: Positive,
      balance: "1.300",
      usd: "920.00",
    },
    {
      image: BTC,
      name: "Bitcoin",
      coin: "BTC",
      price: "92,000",
      chartType: Positive,
      balance: "1.00000",
      usd: "92,000",
    },
    {
      image: BNB,
      name: "BNB",
      coin: "BNB",
      price: "698",
      chartType: Positive,
      balance: "21.1",
      usd: "12,786",
    },
    {
      image: ETH,
      name: "Ethereum",
      coin: "ETH",
      price: "2987",
      chartType: Positive,
      balance: "2",
      usd: "5,876",
    },
  ];
  return (
    <div className="sell">
      <div className="wrapper">
        <div className="tokens">
          <div className="container">
            <div className="title">Choose your Crypto</div>

            <div className="token">
              <div className="search-tkn">
                <input
                  type="text"
                  name=""
                  placeholder="Search Crypto to sell"
                />
              </div>

              <div className="tokens-list">
                {tokenInfo &&
                  tokenInfo.map((token, id) => (
                    <li key={id} onClick={() => setSelected(true)}>
                      <div className="tkn">
                        <div className="logo">
                          <img src={token.image} alt="" />
                        </div>

                        <div className="details">
                          <div className="tkn-name">{token.name}</div>

                          <div className="tkn-sym">{token.coin}</div>
                        </div>
                      </div>

                      <div className="bal">
                        <div className="tkn-bal">
                          {token.coin} {token.balance}
                        </div>
                        <div className="usd-equ">USD {token.usd}</div>
                      </div>
                    </li>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="action">
          {selected ? (
            <div className="sel-crypto-filled">
              <div className="select-pane">
                <NavLink
                  to="/"
                  className={option === "buy" ? "active-link" : ""}
                  onClick={() => handleOptionChange("buy")}
                >
                  <p>Buy</p>
                </NavLink>

                <NavLink
                  to="?option=sell"
                  className={option === "sell" ? "active-link" : ""}
                  onClick={() => handleOptionChange("sell")}
                >
                  <p>Sell</p>
                </NavLink>

                <NavLink
                  to="/"
                  className={option === "swap" ? "active-link" : ""}
                  onClick={() => handleOptionChange("swap")}
                >
                  <p>Swap</p>
                </NavLink>
              </div>

              <div className="contents">
                <div className="from">
                  <p>From</p>

                  <h3>BCH Wallet</h3>
                </div>

                <div className="to">
                  <p>To</p>

                  <h3>Naira Wallet</h3>
                </div>

                <div className="rate">
                  <div className="hr-line"></div>
                  <p>Rate: 1605/$</p>
                </div>

                <div className="balance">Balance: 0 BCH</div>

                <div className="clear"></div>

                <div className="input-amt">
                  <input type="text" name="" />

                  <div className="select-opt">
                    <div
                      className="cur-pair"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenSetCurrency(!opensetcurrency);
                      }}
                    >
                      <div className="cur">{Currency}</div>

                      <FaAngleDown className="icon" />
                    </div>
                  </div>

                  {opensetcurrency && (
                    <div
                      className="options"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="head">Wallet</p>

                      <div className="opts">
                        <p
                          onClick={() => {
                            setCurrency("USD"), setOpenSetCurrency(false);
                          }}
                        >
                          <input type="radio" checked={Currency === "USD"} />{" "}
                          USD
                        </p>

                        <p
                          onClick={() => {
                            setCurrency("NGN"), setOpenSetCurrency(false);
                          }}
                        >
                          <input type="radio" checked={Currency === "NGN"} />{" "}
                          NGN
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="perc-rate">
                  <div className="card">25%</div>
                  <div className="card">50%</div>
                  <div className="card">75%</div>
                  <div className="card">MAX</div>
                </div>

                <div className="coin-amt">
                  <input type="text" name="" />

                  <div className="select-opt">
                    <div className="coin-pair">
                      <div className="cur">BCH</div>
                      <img src={BCH} alt="" />{" "}
                    </div>

                    <FaAngleDown className="icon" />
                  </div>
                </div>

                <div className="cont" onClick={() => setSellModal(true)}>
                  Continue
                </div>

                <ModalContents
                  sellmodal={sellmodal}
                  setSellModal={setSellModal}
                />
              </div>
            </div>
          ) : (
            <div className="sel-crypto-nil">
              <img src={EmptyState} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ModalContents = ({ setSellModal, sellmodal }) => {
  return (
    <div className="">
      <Modal
        disableAutoFocus
        open={sellmodal}
        onClose={() => setSellModal(false)}
        sx={{ background: "rgba(114, 113, 113, 0.58)" }}
      >
        <div className="sell-modal">
          <div className="quit-btn" onClick={() => setSellModal(false)}>
            <LiaTimesSolid />
          </div>

          <div className="clear"></div>

          <div className="danger-img">
            <img src={Danger} alt="" />
          </div>

          <div className="pop-info">
            <h3>Confirm Transaction</h3>
            <p>Confirm the sell of BCH</p>
          </div>

          <div className="snd">
            <p>
              You Pay: <br />
              <span>BCH</span>
            </p>
          </div>

          <div className="receive">
            <p>
              You Get <br />
              <span>NGN 0</span>
            </p>
          </div>

          <div className="continue" onClick={() => setSellModal(false)}>
            Continue
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Sell;
