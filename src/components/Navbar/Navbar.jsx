import { IoMdNotifications } from "react-icons/io";
import "../Navbar/Navbar.scss";
import { LiaBarsSolid, LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [logout, setLogOut] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null); // Prevent closing when clicking the button

  const handleLogOut = () => {
    setLogOut(true);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="navbar">
      <div className="container">
        <div className="top">
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
          <div ref={navRef} className="nav-links">
            <Link to="/overview" onClick={() => setOpen(false)}>
              Overview
            </Link>
            <Link to="/wallets" onClick={() => setOpen(false)}>
              Wallets
            </Link>
            <Link to="/giftcards" onClick={() => setOpen(false)}>
              Giftcards
            </Link>
            <Link to="/transactions" onClick={() => setOpen(false)}>
              Transactions
            </Link>
            <Link to="/payments" onClick={() => setOpen(false)}>
              Payments
            </Link>
            <Link to="/more" onClick={() => setOpen(false)}>
              More
            </Link>
            <Link to="" onClick={handleLogOut}>
              Log out
            </Link>
          </div>
        )}
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

export default Navbar;
