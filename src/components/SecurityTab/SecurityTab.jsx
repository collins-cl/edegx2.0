// import { useState } from "react";
import { IoMdLock } from "react-icons/io";
import "./SecurityTab.scss";
// import { Modal } from "@mui/material";
import { FaAngleRight, FaUser } from "react-icons/fa6";
import { TbAuth2Fa } from "react-icons/tb";

const SecurityTab = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div className="security">
      <div className="wrapper">
        <div className="container">
          <div className="border">
            <div className="security-title">Security</div>

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
                      <IoMdLock className="icon" />
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
                      <TbAuth2Fa className="icon" />
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

export default SecurityTab;
