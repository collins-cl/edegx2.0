import { VscBellDot } from "react-icons/vsc";
import "../Topbar/Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-cnt">
        <VscBellDot className="icon" />

        <div className="avatar">
          <p>CO</p>
        </div>

        <div className="name">Hello, Coledev</div>
      </div>
    </div>
  );
};

export default Topbar;
