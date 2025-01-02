import "../sidebar/Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { IoBriefcaseOutline, HiOutlineArrowRight } from "../../Icons";
import { LiaTableSolid } from "react-icons/lia";
import { CiGift, CiWallet } from "react-icons/ci";
import { IoBarChartOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="sidebar-cont">
      <div className="sidebar-wrapper">
        <Link className="logo">Jagaban</Link>

        <div className="side-tag">
          <div className="side-tag-li">
            <NavLink to="/">
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
          <div className="side-p-container">
            <HiOutlineArrowRight className="arrow-rdt" />

            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
