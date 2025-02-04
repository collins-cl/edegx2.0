import "../sidebar/Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { IoBriefcaseOutline, HiOutlineArrowRight } from "../../Icons";
import { LiaTableSolid } from "react-icons/lia";
import { CiGift, CiWallet } from "react-icons/ci";
import { IoBarChartOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import { Modal } from "@mui/material";
import { useState } from "react";

const Sidebar = () => {
  const [logout, setLogOut] = useState(false);

  return (
    <div className="sidebar-cont">
      <div className="sidebar-wrapper">
        <Link className="logo">Jagaban</Link>

        <div className="side-tag">
          <div className="side-tag-li">
            <NavLink to="/overview">
              <IoBriefcaseOutline className="icon" /> <p>Overview</p>
            </NavLink>
            <NavLink to="/wallets">
              <CiWallet className="icon" /> <p>Wallets</p>
            </NavLink>

            <NavLink to="/giftcards">
              <CiGift className="icon" /> <p>Giftcards</p>
            </NavLink>

            <NavLink to="/transactions">
              <IoBarChartOutline className="icon" /> <p>Transactions</p>
            </NavLink>

            <NavLink to="/payments">
              <PiTelegramLogo className="icon" /> <p>Payments</p>
            </NavLink>

            <NavLink to="/more">
              <LiaTableSolid className="icon" /> <p>More</p>
            </NavLink>
          </div>
        </div>

        <div className="side-profile">
          <div className="side-p-container" onClick={()=>setLogOut(true)}>
            <HiOutlineArrowRight className="arrow-rdt" />

            <p>Logout</p>
          </div>
        </div>
      </div>

      <div className="modal">
        <Modal
          disableAutoFocus
          open={logout}
          onClose={() => setLogOut(false)}
          sx={{ background: "rgba(114, 113, 113, 0.58)" }}
        >
          <div className="logout-modal">
            <div className="quit-btn" onClick={() => setLogOut(false)}>
              <LiaTimesSolid className="icon" />
            </div>

            <div className="title">Log Out</div>

            <p>Are you sure you want to log out of your Jagaban account?</p>

            <div className="actions">
              <div className="yes">Yes, Logout</div>
              <div className="yes cancel" onClick={() => setLogOut(false)}>
                Cancel
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Sidebar;
