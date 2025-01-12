/* eslint-disable react/prop-types */
import "../Quickaction/QuickAction.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdCompareArrows,
  MdArrowOutward,
} from "react-icons/md";
import { FiArrowDownLeft } from "react-icons/fi";
import { AiFillGift } from "react-icons/ai";
import Carousel from "../Carousel/Carousel";
import Cryptos from "../Cryptos/Cryptos";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { Modal } from "@mui/material";
import Naira from "../../assets/modals/naira.svg";
import USD from "../../assets/modals/usd.svg";
import Crypto from "../../assets/modals/cryptoC.svg";

const QuickAction = () => {
  const [depositmodal, setDepositModal] = useState(false);
  const [opennairadep, setOpenNairaDep] = useState(false);

  const [withdrawmodal, setWithdrawModal] = useState(false);
  const [openwithdraw, setOpenWithdraw] = useState(false);

  return (
    <div className="quickaction">
      <div className="quick-act-title">Quick Action</div>

      <div className="quick-wrapper">
        <Link to="">
          <div className="icon-case">
            <FiArrowDownLeft className="icon" />
          </div>
          <p>Buy Crypto</p>
        </Link>

        <Link to="sell">
          <div className="icon-case">
            <MdArrowOutward className="icon" />
          </div>
          <p>Sell Crypto</p>
        </Link>

        <Link to="">
          <div className="icon-case">
            <MdCompareArrows className="icon" />
          </div>
          <p>Swap Crypto</p>
        </Link>

        <Link to="" onClick={() => setDepositModal(true)}>
          <div className="icon-case">
            <MdArrowDownward className="icon" />
          </div>
          <p>Deposit</p>
        </Link>

        <Link to="/giftcards">
          <div className="icon-case">
            <AiFillGift className="icon" />
          </div>
          <p>Giftcard</p>
        </Link>

        <Link to="" onClick={() => setWithdrawModal(true)}>
          <div className="icon-case">
            <MdArrowUpward className="icon" />
          </div>
          <p>Withdraw</p>
        </Link>
      </div>

      <div className="carousel-wrapper">
        <Carousel />
      </div>

      <div className="cryptos-wrapper">
        <Cryptos />
      </div>
      <Outlet />

      <div className="modal">
        <Modal
          disableAutoFocus
          open={depositmodal}
          onClose={() => setDepositModal(false)}
          sx={{ background: "rgba(114, 113, 113, 0.58)" }}
        >
          <div className="deposit-modal">
            <div className="quit-btn" onClick={() => setDepositModal(false)}>
              <LiaTimesSolid />
            </div>

            <h3>Deposit</h3>
            <p>
              At Jagaban we allow diversity, hence users have three options to
              deposit funds into their Jagaban account
            </p>

            <div className="dp-method">
              {/* Naira Deposit */}
              <div className="box" onClick={() => setOpenNairaDep(true)}>
                <div className="img">
                  <img src={Naira} alt="Naira" />
                </div>
                <div className="currency">Naira</div>
              </div>

              {/* Other Deposit Methods */}
              <div className="box">
                <div className="img">
                  <img src={USD} alt="USD" />
                </div>
                <div className="currency">USD</div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={Crypto} alt="Crypto" />
                </div>
                <div className="currency">Crypto</div>
              </div>
            </div>

            {/* Child Modal */}
            <ChildModal
              setOpenNairaDep={setOpenNairaDep}
              opennairadep={opennairadep}
            />
          </div>
        </Modal>
      </div>

      <div className="modal">
        <Modal
          disableAutoFocus
          open={withdrawmodal}
          onClose={() => setWithdrawModal(false)}
          sx={{ background: "rgba(114, 113, 113, 0.58)" }}
        >
          <div className="deposit-modal">
            <div className="quit-btn" onClick={() => setWithdrawModal(false)}>
              <LiaTimesSolid />
            </div>

            <h3>Withdrawal</h3>
            <p>
              At Jagaban we allow diversity, hence users have two options to
              withdraw funds into their Jagaban account
            </p>

            <div className="dp-method">
              {/* Naira Deposit */}
              <div className="box" onClick={() => setOpenWithdraw(true)}>
                <div className="img">
                  <img src={Naira} alt="Naira" />
                </div>
                <div className="currency">Naira</div>
              </div>

              <div className="box">
                <div className="img">
                  <img src={Crypto} alt="Crypto" />
                </div>
                <div className="currency">Crypto</div>
              </div>
            </div>

            {/* Child Modal */}
            <WithdrawModal
              setOpenWithdraw={setOpenWithdraw}
              openwithdraw={openwithdraw}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

const ChildModal = ({ setOpenNairaDep, opennairadep }) => {
  const navigate = useNavigate();
  return (
    <Modal
      disableAutoFocus
      open={opennairadep}
      onClose={() => setOpenNairaDep(false)}
      sx={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="naira-deposit">
        <div className="title">
          <div className="head">Select Bank</div>

          <div className="quit-btn" onClick={() => setOpenNairaDep(false)}>
            <LiaTimesSolid className="icon" />
          </div>
        </div>
        <p>
          Kindly select the bank that you would made your deposit from to your
          Jagaban account.
        </p>

        <div
          className="add-acct"
          onClick={() => navigate("/more/?option=preference")}
        >
          Add Account
        </div>
      </div>
    </Modal>
  );
};

const WithdrawModal = ({ setOpenWithdraw, openwithdraw }) => {
  const navigate = useNavigate();
  return (
    <Modal
      disableAutoFocus
      open={openwithdraw}
      onClose={() => setOpenWithdraw(false)}
      sx={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="naira-deposit">
        <div className="title">
          <div className="head">Select Bank</div>

          <div className="quit-btn" onClick={() => setOpenWithdraw(false)}>
            <LiaTimesSolid className="icon" />
          </div>
        </div>
        <p>
          Kindly select the bank that you would made your deposit from to your
          Jagaban account.
        </p>

        <div
          className="add-acct"
          onClick={() => navigate("/more/?option=preference")}
        >
          Add Account
        </div>
      </div>
    </Modal>
  );
};

export default QuickAction;
