import { MdSupportAgent } from "react-icons/md";
import "../Others/Others.scss";
// import { useState } from "react";
// import { Modal } from "@mui/material";
import { FaAngleRight, FaTrash } from "react-icons/fa6";
import { BsPatchQuestion } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";

const Others = () => {
  return (
    <div className="others">
      <div className="wrapper">
        <div className="container">
          <div className="border">
            <div className="others-title">others</div>

            <div className="security-container">
              <div className="card-1">
                <div className="box">
                  <div className="flex-1">
                    <div className="avatar">
                      <MdSupportAgent className="icon" />
                    </div>
                    <div className="info">
                      <h3>Help and Support</h3>

                      <p>24hours provision of support and assistance</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>

                <div className="box">
                  <div className="flex-1">
                    <div className="avatar">
                      <BsPatchQuestion className="icon" />
                    </div>
                    <div className="info">
                      <h3>About Jagaban</h3>

                      <p>Understand the fire behind the motivation</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>

                <div className="box">
                  <div className="flex-1">
                    <div className="avatar">
                      <HiOutlineArrowRight className="icon" />
                    </div>
                    <div className="info">
                      <h3>Log Out</h3>

                      <p>Sign out of Jagaban App</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>

                <div className="box delete">
                  <div className="flex-1">
                    <div className="avatar">
                      <FaTrash className="icon" />
                    </div>
                    <div className="info">
                      <h3>Delete Account</h3>

                      <p>This action will completely erase your account</p>
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

export default Others;
