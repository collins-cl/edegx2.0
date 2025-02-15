import { IoMdNotifications } from "react-icons/io";
import "../Navbar/Navbar.scss";
import { LiaBarsSolid, LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "@mui/material";
import { BsViewList } from "react-icons/bs";
import { CiCircleMore, CiCreditCard1, CiWallet } from "react-icons/ci";
import { TbGiftCard } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  // const [logout, setLogOut] = useState(false);
  // const navRef = useRef(null);
  // const btnRef = useRef(null); // Prevent closing when clicking the button

  // const handleLogOut = () => {
  //   setLogOut(true);
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       navRef.current &&
  //       !navRef.current.contains(event.target) &&
  //       btnRef.current &&
  //       !btnRef.current.contains(event.target)
  //     ) {
  //       setOpen(false);
  //     }
  //   };

  //   if (open) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [open]);

  return (
    <div className="navbar">
      <div className="container">
        <li>
          <NavLink to="/overview">
            <BsViewList className="icon" />
            <p>overview</p>
          </NavLink>

          <NavLink to="/wallets">
            <CiWallet className="icon" />
            <p>wallet</p>
          </NavLink>

          <NavLink to="/giftcards">
            <CiCreditCard1 className="icon" />
            <p>cards</p>
          </NavLink>

          <NavLink to="/transactions">
            <GrTransaction className="icon" />
            <p>transact</p>
          </NavLink>

          <NavLink to="/payments">
            <RiMoneyDollarCircleLine className="icon" />
            <p>payment</p>
          </NavLink>

          <NavLink to="/more">
            <CiCircleMore className="icon" />
            <p>more</p>
          </NavLink>
        </li>

        {/* <div className="top">
          <div className="logo">
            <p>Jagaban</p>
          </div>

          <div className="btn-notif">
            <div ref={btnRef} className="btn" onClick={() => setOpen(!open)}>
              {open ? (
                <LiaTimesSolid className="icon" />
              ) : (
                <LiaBarsSolid className="icon" />
              )}
            </div>

            <div className="notif">
              <IoMdNotifications className="icon" />
            </div>
          </div>
        </div>

        {open && (
          <div ref={navRef} className="nav-NavLinks">
            <NavLink to="/overview" onClick={() => setOpen(false)}>
              Overview
            </NavLink>
            <NavLink to="/wallets" onClick={() => setOpen(false)}>
              Wallets
            </NavLink>
            <NavLink to="/giftcards" onClick={() => setOpen(false)}>
              Giftcards
            </NavLink>
            <NavLink to="/transactions" onClick={() => setOpen(false)}>
              Transactions
            </NavLink>
            <NavLink to="/payments" onClick={() => setOpen(false)}>
              Payments
            </NavLink>
            <NavLink to="/more" onClick={() => setOpen(false)}>
              More
            </NavLink>
            <NavLink to="" onClick={handleLogOut}>
              Log out
            </NavLink>
          </div>
        )} */}
      </div>

      <div className="modal">
        {/* <Modal
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
        </Modal> */}
      </div>
    </div>
  );
};

export default Navbar;
