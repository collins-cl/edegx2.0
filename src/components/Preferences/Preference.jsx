import { MdVerified } from "react-icons/md";
import "../Preferences/Preference.scss";
// import { useState } from "react";
// import { Modal } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";
import { CiBadgeDollar } from "react-icons/ci";
import { TbCards } from "react-icons/tb";

const Preference = () => {
  return (
    <div className="preference">
      <div className="wrapper">
        <div className="container">
          <div className="border">
            <div className="preference-title">Preferences</div>

            <div className="security-container">
              <div className="card-1">
                <div className="box">
                  <div className="flex-1">
                    <div className="avatar">
                      <MdVerified className="icon" />
                    </div>
                    <div className="info">
                      <h3>Verfication</h3>

                      <p>Verify your identity to increase limits</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>

                <div className="box">
                  <div className="flex-1">
                    <div className="avatar">
                      <CiBadgeDollar className="icon" />
                    </div>
                    <div className="info">
                      <h3>Currency</h3>

                      <p>Change your prumary currency from NGN</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>

                <div className="box">
                  <div className="flex-1">
                    <div className="avatar">
                      <TbCards className="icon" />
                    </div>
                    <div className="info">
                      <h3>Accounts</h3>

                      <p>Add and remove bank accounts</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preference;
