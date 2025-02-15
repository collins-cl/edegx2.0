import "../Header/Header.scss";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="top">
          <div className="logo">
            <p>Jagaban</p>
          </div>

          <div className="btn-notif">
            <div className="notif">
              <IoMdNotifications className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
