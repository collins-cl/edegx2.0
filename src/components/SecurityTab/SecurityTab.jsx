/* eslint-disable react/prop-types */
import { IoMdLock } from "react-icons/io";
import "./SecurityTab.scss";
import { FaAngleRight, FaCopy, FaUser } from "react-icons/fa6";
import { TbAuth2Fa } from "react-icons/tb";
import { Modal } from "@mui/material";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const SecurityTab = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [changepin, setChangePin] = useState(false);
  const [changepassword, setChangePassword] = useState(false);
  const [twofactorauth, setTwoFactorAuth] = useState(false);

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

                  <div className="flex-2" onClick={() => setChangePin(true)}>
                    <FaAngleRight className="icon" />
                  </div>

                  <ChangePin
                    changepin={changepin}
                    setChangePin={setChangePin}
                  />
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

                  <div
                    className="flex-2"
                    onClick={() => setChangePassword(true)}
                  >
                    <FaAngleRight className="icon" />
                  </div>

                  <ChangePassword
                    changepassword={changepassword}
                    setChangePassword={setChangePassword}
                  />
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

                  <div
                    className="flex-2"
                    onClick={() => setTwoFactorAuth(true)}
                  >
                    <FaAngleRight className="icon" />
                  </div>

                  <TwoFactorAuth
                    twofactorauth={twofactorauth}
                    setTwoFactorAuth={setTwoFactorAuth}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChangePin = ({ setChangePin, changepin }) => {
  return (
    <Modal
      disableAutoFocus
      open={changepin}
      onClose={() => setChangePin(false)}
      sx={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="change-pin">
        <div className="title">
          <div className="head">Change Pin</div>

          <div className="quit-btn" onClick={() => setChangePin(false)}>
            <LiaTimesSolid className="icon" />
          </div>
        </div>
        <p>
          Enter your old pin to create a new password. This is your login
          credentials.
        </p>

        <div className="content">
          <div className="old-pin">
            <h3>Old Pin</h3>
            <p>Input your old pin</p>

            <div className="pin-card">
              <input type="text" name="" placeholder="°" maxLength={1} />
              <input type="text" name="" placeholder="°" maxLength={1} />
              <input type="text" name="" placeholder="°" maxLength={1} />
              <input type="text" name="" placeholder="°" maxLength={1} />
            </div>
          </div>

          <div className="forgot">
            <p>forgot pin?</p>

            <div className="clear"></div>
          </div>

          <div className="old-pin">
            <h3>New Pin</h3>
            <p>Input your new pin</p>

            <div className="pin-card">
              <input type="text" name="" placeholder="°" maxLength={1} />
              <input type="text" name="" placeholder="°" maxLength={1} />
              <input type="text" name="" placeholder="°" maxLength={1} />
              <input type="text" name="" placeholder="°" maxLength={1} />
            </div>
          </div>

          <div className="change" onClick={() => setChangePin(false)}>
            Change Pin
          </div>
        </div>
      </div>
    </Modal>
  );
};

const ChangePassword = ({ setChangePassword, changepassword }) => {
  return (
    <Modal
      disableAutoFocus
      open={changepassword}
      onClose={() => setChangePassword(false)}
      sx={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="change-password">
        <div className="title">
          <div className="head">Change Pin</div>

          <div className="quit-btn" onClick={() => setChangePassword(false)}>
            <LiaTimesSolid className="icon" />
          </div>
        </div>
        <p>
          Enter your old pin to create a new password. This is your login
          credentials.
        </p>

        <div className="content">
          <div className="old-password">
            <p>Old Password</p>

            <input type="text" name="" placeholder="Enter your password" />
          </div>

          <div className="forgot">
            <p>forgot pin?</p>

            <div className="clear"></div>
          </div>

          <div className="old-password">
            <p>New Password</p>

            <input type="text" name="" placeholder="Enter your password" />
          </div>

          <div className="change" onClick={() => setChangePassword(false)}>
            Change Password
          </div>
        </div>
      </div>
    </Modal>
  );
};

const TwoFactorAuth = ({ twofactorauth, setTwoFactorAuth }) => {
  return (
    <Modal
      disableAutoFocus
      open={twofactorauth}
      onClose={() => setTwoFactorAuth(false)}
      sx={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="twofactorauth">
        <div className="title">
          <div className="head">Authenticator Credential</div>

          <div className="quit-btn" onClick={() => setTwoFactorAuth(false)}>
            <LiaTimesSolid className="icon" />
          </div>
        </div>
        <p>
          For Top-notch security, setup Google 2FA on your Furex account to keep
          your funds safe.
        </p>

        <div className="content">
          <div className="secret-key">
            <div className="key">
              <p>Secret key</p>

              <h2>H2YHTAU67BSF</h2>
            </div>

            <div className="copy">
              <FaCopy />
            </div>
          </div>

          <div className="steps">
            <div className="title">Steps for Setup</div>
            <p>
              Copy your secret code and save it to a safe place Download and
              Open <span>Google Authenticator</span> app <br /> Click on
              <span>Add</span> icon <br /> Enter Jagaban as Account name <br />{" "}
              Tap “Enter a setup key” and enter your <span>secret code</span>{" "}
              <br /> Copy and Paste the above secret key in “Your Key <br /> Tap
              “Add”
              <br /> Click on
              <span>Proceed</span>
            </p>
          </div>

          <div className="nxt" onClick={() => setTwoFactorAuth(false)}>
            Proceed
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SecurityTab;
