import "../Preferences/Preference.scss";
// import { useState } from "react";
// import { Modal } from "@mui/material";
import { FaAngleRight, FaUser } from "react-icons/fa6";

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
                      <FaUser className="icon" />
                    </div>
                    <div className="info">
                      <h3>Change PIN</h3>

                      <p>Create and change pin seamlessy</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>

                <div className="box">
                  <div className="flex-1">
                    <div className="avatar">
                      <FaUser className="icon" />
                    </div>
                    <div className="info">
                      <h3>Change Password</h3>

                      <p>Create and change password seamlessy</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>

                <div className="box">
                  <div className="flex-1">
                    <div className="avatar">
                      <FaUser className="icon" />
                    </div>
                    <div className="info">
                      <h3>2FA Authentication</h3>

                      <p>Further secure your account and funds</p>
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
