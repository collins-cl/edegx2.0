import "../sidebar/Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import {
  BiCoinStack,
  PiHandHeart,
  FaRegStar,
  IoKeyOutline,
  IoBriefcaseOutline,
  TbUsersMinus,
  HiOutlineArrowRight,
  LuMail,
  IoCallOutline,
  LuBellPlus,
  HiOutlineBellSnooze,
  TfiViewListAlt,
  MdOutlineSupportAgent,
  IoSettingsOutline,
  MdLogout,
} from "../../Icons";
import { LiaTableSolid } from "react-icons/lia";
import { CiGift, CiWallet } from "react-icons/ci";
import { IoBarChartOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="sidebar-cont">
      <div className="sidebar-wrapper">
        <Link className="logo">UseFurex</Link>

        <div className="side-tag">
          <div className="side-tag-li">
            <NavLink to="/">
              <IoBriefcaseOutline className="icon" /> <p>Overview</p>
            </NavLink>
            <NavLink to="/analytics">
              <CiWallet className="icon" /> <p>Wallets</p>
            </NavLink>

            <NavLink to="/subscriptions">
              <CiGift className="icon" /> <p>Giftcards</p>
            </NavLink>

            <NavLink to="/settings">
              <IoBarChartOutline className="icon" /> <p>Transactions</p>
            </NavLink>

            <NavLink to="/access">
              <PiTelegramLogo className="icon" /> <p>Payments</p>
            </NavLink>

            <NavLink to="/logout">
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
