/* eslint-disable no-unused-vars */
import { LiaAngleDownSolid } from "react-icons/lia";
import "../Hero/Hero.scss";
import { FaEye } from "react-icons/fa6";
import CircularProgress from "../Circularprogress/CircularProgress";
import { useState } from "react";
import Trophy from "../../assets/Capa.svg";
import QuickAction from "../Quickaction/QuickAction";

const Hero = () => {
  const [progress, setProgress] = useState(20);

  return (
    <div className="hero">
      <div className="hero-cnt">
        <div className="banner">
          <div className="contents">
            {" "}
            <div className="balance">
              <div className="title">
                <p>Total Balance</p>

                <div className="currency">
                  <div className="select">
                    <span>NGN</span>

                    <LiaAngleDownSolid />
                  </div>
                </div>
              </div>

              <div className="figure">
                &#8358; <div className="amount">12000</div>
              </div>
            </div>
            <div className="toggle">
              <FaEye className="icon" />
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

          <div className="card kyc">
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
