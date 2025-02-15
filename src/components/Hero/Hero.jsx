/* eslint-disable no-unused-vars */
import { LiaAngleDownSolid } from "react-icons/lia";
import "../Hero/Hero.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import CircularProgress from "../Circularprogress/CircularProgress";
import { useState } from "react";
import Trophy from "../../assets/Capa.svg";
import QuickAction from "../Quickaction/QuickAction";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [progress, setProgress] = useState(20);
  const [Currency, setCurrency] = useState("NGN");
  const [opensetcurrency, setOpenSetCurrency] = useState(false);

  const [reveal, setReveal] = useState(false);

  const navigate = useNavigate();

  const navigateClick = () => {
    navigate("/more?option=preference");
  };

  return (
    <div className="hero">
      <div className="hero-cnt">
        <div className="intro">Jagaban</div>

        <div className="banner">
          <div className="contents">
            <div className="balance">
              <div className="title">
                <p>Total Balance</p>

                <div className="currency">
                  <div
                    className="select"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenSetCurrency(!opensetcurrency);
                    }}
                  >
                    <span>{Currency}</span>

                    <LiaAngleDownSolid />
                  </div>

                  {opensetcurrency && (
                    <div
                      className="set-currency"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p
                        onClick={() => {
                          setCurrency("USD"), setOpenSetCurrency(false);
                        }}
                      >
                        USD
                      </p>

                      <p
                        onClick={() => {
                          setCurrency("NGN"), setOpenSetCurrency(false);
                        }}
                      >
                        NGN
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="figure">
                {Currency === "NGN" ? <p>&#8358;</p> : <p> &#36;</p>}{" "}
                <div className="amount">{reveal ? "12000" : "*****"}</div>
              </div>
            </div>
            <div className="toggle" onClick={() => setReveal(!reveal)}>
              {reveal ? (
                <FaEye className="icon" />
              ) : (
                <FaEyeSlash className="icon" />
              )}
            </div>
          </div>
        </div>

        <div className="kyc-card">
          <div className="card leaderboard">
            <div className="section">
              <div className="title">Leaderboard</div>
              <p>
                You can be a winner by just trading <br />{" "}
                <span>Click here to view more</span>
              </p>
            </div>

            <div className="sect-image">
              <img src={Trophy} alt="" />
            </div>
          </div>

          <div className="card kyc" onClick={navigateClick}>
            <p>Complete KYC Setup</p>
            <CircularProgress progress={progress} />
          </div>
        </div>

        <QuickAction />
      </div>
    </div>
  );
};

export default Hero;
