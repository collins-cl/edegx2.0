/* eslint-disable react/prop-types */
import { MdVerified } from "react-icons/md";
import "../Preferences/Preference.scss";
// import { useState } from "react";
// import { Modal } from "@mui/material";
import { FaAngleRight, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { CiBadgeDollar } from "react-icons/ci";
import { TbCards } from "react-icons/tb";
import { useState } from "react";
import { Modal } from "@mui/material";
import { LiaTimesSolid } from "react-icons/lia";
import BVN from "../../assets/bvn.svg";
import BANK from "../../assets/bank.svg";

const Preference = () => {
  const [verification, setVerification] = useState(false);
  const [selectaccount, setSelectAccount] = useState(false);
  const [addaccount, setAddAccount] = useState(false);

  const [currency, setCurrency] = useState(false);
  const [selectcurrency, setSelectCurrency] = useState("NGN");

  const [accounts, setAccounts] = useState(false);

  return (
    <div className="preference">
      <div className="wrapper">
        <div className="container">
          <div className="border">
            <div className="preference-title">Preferences</div>

            <div className="security-container">
              <div className="card-1">
                <div className="box" onClick={() => setVerification(true)}>
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
                  <div className="flex-1" onClick={() => setCurrency(true)}>
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

                  <CurrencyModal
                    currency={currency}
                    setCurrency={setCurrency}
                    selectcurrency={selectcurrency}
                    setSelectCurrency={setSelectCurrency}
                  />
                </div>

                <div className="box" onClick={() => setAccounts(true)}>
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

      <div className="modal">
        <Modal
          disableAutoFocus
          open={verification}
          onClose={() => setVerification(false)}
          sx={{ background: "rgba(114, 113, 113, 0.58)" }}
        >
          <div className="verification-modal">
            <div className="quit-btn" onClick={() => setVerification(false)}>
              <LiaTimesSolid />
            </div>

            <h3>Upgrade to Tier 1</h3>
            <p>
              Existing users that want more, New users that want quickly have
              access to new features.
            </p>

            <div className="boxes">
              <div className="box" onClick={() => setSelectAccount(true)}>
                <img src={BVN} alt="" />

                <p>
                  BVN <br /> Verification
                </p>
              </div>

              <div className="box" onClick={() => setAddAccount(true)}>
                <img src={BANK} alt="" />

                <p>
                  Add <br /> Bank
                </p>
              </div>
            </div>

            <div className="done" onClick={() => setVerification(false)}>
              Done
            </div>

            {/* Child Modal */}
            <BVNMODAL
              selectaccount={selectaccount}
              setSelectAccount={setSelectAccount}
            />

            <AccountModal
              addaccount={addaccount}
              setAddAccount={setAddAccount}
            />
          </div>
        </Modal>
      </div>

      <div className="modal">
        <Modal
          disableAutoFocus
          open={accounts}
          onClose={() => setAccounts(false)}
          sx={{ background: "rgba(114, 113, 113, 0.58)" }}
        >
          <div className="accounts-modal">
            <div className="quit-btn" onClick={() => setAccounts(false)}>
              <LiaTimesSolid />
            </div>

            <h3>Accounts</h3>
            <p>
              You can set a withdrawal account that you can automatically
              withdraw to
            </p>

            <div className="acct">
              <input type="text" placeholder="Search bank accounts" />
            </div>

            <div className="btns">
              <div className="add" onClick={() => setAddAccount(true)}>
                <FaPlus className="icon" />
                Add Accounts
              </div>

              <div className="add delete">
                <FaRegTrashCan className="icon" />
                Delete Accounts
              </div>
            </div>

            {/* Child Modal */}
            <BVNMODAL
              selectaccount={selectaccount}
              setSelectAccount={setSelectAccount}
            />

            <AccountModal
              addaccount={addaccount}
              setAddAccount={setAddAccount}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

const BVNMODAL = ({ selectaccount, setSelectAccount }) => {
  return (
    <Modal
      disableAutoFocus
      open={selectaccount}
      onClose={() => setSelectAccount(false)}
      sx={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="verification-pop">
        <div className="title">
          <div className="quit-btn" onClick={() => setSelectAccount(false)}>
            <LiaTimesSolid className="icon" />
          </div>
        </div>

        <div className="img">
          <img src={BVN} alt="" />
        </div>

        <h1>BVN Verification</h1>

        <p>
          To secure your account and increase your deposit and withdrawal limit
          you should verify your identity using BVN. You can skip this step!
        </p>

        <div className="forms">
          <div className="digits">
            <label htmlFor="">BVN Number</label>
            <input type="text" name="" placeholder="Enter code" />
          </div>

          <div className="date">
            <input type="date" name="" placeholder="Date of Birth" />
          </div>
        </div>

        <div className="done" onClick={() => setSelectAccount(false)}>
          Done
        </div>
      </div>
    </Modal>
  );
};

const AccountModal = ({ addaccount, setAddAccount }) => {
  return (
    <Modal
      disableAutoFocus
      open={addaccount}
      onClose={() => setAddAccount(false)}
      sx={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="addaccount-pop">
        <div className="title">
          <h3>Add Accounts</h3>

          <div className="quit-btn" onClick={() => setAddAccount(false)}>
            <LiaTimesSolid className="icon" />
          </div>
        </div>

        <p>
          For withdrawal purpose, you can input a bank account of your choosing.
        </p>

        <div className="forms">
          <div className="digits">
            <label htmlFor="">Account Number</label>
            <input
              type="text"
              name=""
              placeholder="Enter your account number"
            />
          </div>

          <div className="digits">
            <label htmlFor="">Bank Name</label>
            <input type="text" name="" placeholder="Select Bank" />
          </div>
        </div>

        <div className="done" onClick={() => setAddAccount(false)}>
          Done
        </div>
      </div>
    </Modal>
  );
};

const CurrencyModal = ({
  currency,
  setCurrency,
  setSelectCurrency,
  selectcurrency,
}) => {
  return (
    <Modal
      disableAutoFocus
      open={currency}
      onClose={() => setCurrency(false)}
      sx={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="currency-pop">
        <div className="title">
          <h3>Currency</h3>

          <div className="quit-btn" onClick={() => setCurrency(false)}>
            <LiaTimesSolid className="icon" />
          </div>
        </div>

        <p>Change your default currency from NGN to another fiat currency</p>

        <div className="forms" onClick={(e) => e.stopPropagation()}>
          <div className="radio" onClick={() => setSelectCurrency("NGN")}>
            <input type="radio" name="" checked={selectcurrency === "NGN"} />

            <p>NGN</p>
          </div>

          <div className="radio" onClick={() => setSelectCurrency("USD")}>
            <input type="radio" name="" checked={selectcurrency === "USD"} />

            <p>USD</p>
          </div>
        </div>

        <div className="done" onClick={() => setCurrency(false)}>
          Done
        </div>
      </div>
    </Modal>
  );
};

export default Preference;
