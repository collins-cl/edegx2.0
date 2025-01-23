/* eslint-disable react/prop-types */
import "../BuyCards/Buycards.scss";
import Card from "../../../assets/giftcard/449.png";
import Empty from "../../../assets/empty.svg";
import Uk from "../../../assets/countries/uk.png";
import { LiaDollarSignSolid } from "react-icons/lia";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { Modal } from "@mui/material";

const Buycards = () => {
  const [Currency, setCurrency] = useState("NGN");
  const [opensetcurrency, setOpenSetCurrency] = useState(false);
  const [buycardsmodal, setBuyCardsModal] = useState(false);

  const closemodal = () => {
    setBuyCardsModal(false);
  };

  return (
    <div className="buycards">
      <div className="wrapper">
        <div className="section-1">
          <div className="title">Select Gift Card</div>

          <div className="c-wallets-wrapper">
            <div className="tokens">
              <div className="search-tkn">
                <input type="text" name="" placeholder="Search for giftcard" />
              </div>

              <div className="card-list">
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-2">
          {/* <div className="is-empty">
            <div className="img">
              <img src={Empty} alt="" />
            </div>

            <h3>Select your Gift Card</h3>

            <p>Click on the gift card you want to buy to continue</p>
          </div> */}

          <div className="is-filled">
            <div className="is-filled-title">Select GiftCard Currency</div>

            <div className="country-select">
              <div className="country">
                <div className="img">
                  <img src={Uk} alt="" />
                </div>

                <p>UK</p>
              </div>
              <div className="country">
                <div className="img">
                  <img src={Uk} alt="" />
                </div>

                <p>UK</p>
              </div>
              <div className="country">
                <div className="img">
                  <img src={Uk} alt="" />
                </div>

                <p>UK</p>
              </div>
              <div className="country">
                <div className="img">
                  <img src={Uk} alt="" />
                </div>

                <p>UK</p>
              </div>
              <div className="country">
                <div className="img">
                  <img src={Uk} alt="" />
                </div>

                <p>UK</p>
              </div>
              <div className="country">
                <div className="img">
                  <img src={Uk} alt="" />
                </div>

                <p>UK</p>
              </div>
              <div className="country">
                <div className="img">
                  <img src={Uk} alt="" />
                </div>

                <p>UK</p>
              </div>
            </div>

            <div className="receipts">
              <div className="title">Receipt</div>

              <div className="receipt-select">
                <div className="receipt">E-code</div>
                <div className="receipt">Physical Card</div>
                <div className="receipt">No Receipt</div>
              </div>
            </div>

            <div className="total-cards">
              <div className="fig-input">
                <div className="denom">
                  <label htmlFor="denomination">Denomination</label>

                  <div className="input">
                    <input type="number" name="" placeholder="Enter amount" />

                    <LiaDollarSignSolid className="icon" />
                  </div>
                </div>

                <div
                  className="
                 no-cards"
                >
                  <label htmlFor="denomination">Number of cards</label>

                  <div className="input">
                    <div className="plus">+</div>
                    <input
                      type="number"
                      value={0}
                      onChange={(e) => console.log(e.target.value)}
                    />
                    <div className="minus">-</div>
                  </div>
                </div>
              </div>

              <div className="variations">
                <p>100-500</p>
              </div>

              <div className="rate">
                <div className="hr-line"></div>
                <p>Rate: 1605/$</p>
              </div>

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
                  <div className="options" onClick={(e) => e.stopPropagation()}>
                    <p className="head">Wallet</p>

                    <div className="opts">
                      <p
                        onClick={() => {
                          setCurrency("USD"), setOpenSetCurrency(false);
                        }}
                      >
                        <input type="radio" checked={Currency === "USD"} /> USD
                      </p>

                      <p
                        onClick={() => {
                          setCurrency("NGN"), setOpenSetCurrency(false);
                        }}
                      >
                        <input type="radio" checked={Currency === "NGN"} /> NGN
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="start-trade"
                onClick={() => setBuyCardsModal(true)}
              >
                Start Trade
              </div>
            </div>
          </div>
        </div>
      </div>

      <BuyModalContent buycardsmodal={buycardsmodal} closemodal={closemodal} />
    </div>
  );
};

const BuyModalContent = ({ buycardsmodal, closemodal }) => {
  return (
    <div>
      <Modal
        disableAutoFocus
        open={buycardsmodal}
        onClose={closemodal}
        sx={{ background: "rgba(114, 113, 113, 0.58)" }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "400px",
            margin: "100px auto",
            textAlign: "center",
          }}
        >
          <h2>Modal Title</h2>
          <p>Your modal content goes here.</p>
          <button onClick={closemodal}>Close</button>
        </div>{" "}
      </Modal>
    </div>
  );
};

export default Buycards;
