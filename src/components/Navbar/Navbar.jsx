import { IoMdNotifications } from "react-icons/io";
import "../Navbar/Navbar.scss";
import { LiaBarsSolid, LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="top">
          <div className="logo">
            <p>Jagaban</p>
          </div>

          <div className="btn-notif">
            <div className="btn">
              <LiaBarsSolid className="icon" />
            </div>

            <div className="notif">
              <IoMdNotifications className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
