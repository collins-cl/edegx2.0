import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "../Internet/Internet.scss";
import { Link } from "react-router-dom";
import Sinternet from "../../../assets/cable/sinternet.svg";

const Internet = () => {
  return (
    <div className="internet">
      <div className="wrapper">
        <div className="title">
          <div className="back">
            <FaAngleLeft className="title-icon" />
          </div>

          <div className="func">Internet Subscription</div>
        </div>

        <div className="container">
          <li>
            <Link to="smile">
              <div className="logo">
                <div className="img">
                  <img src={Sinternet} alt="" />
                </div>

                <p>Smile Communication</p>
              </div>

              <FaAngleRight className="icon" />
            </Link>
          </li>
          <li>
            <Link to="smile">
              <div className="logo">
                <div className="img">
                  <img src={Sinternet} alt="" />
                </div>

                <p>NTEL</p>
              </div>

              <FaAngleRight className="icon" />
            </Link>
          </li>
          <li>
            <Link to="smile">
              <div className="logo">
                <div className="img">
                  <img src={Sinternet} alt="" />
                </div>

                <p>Spectranet</p>
              </div>

              <FaAngleRight className="icon" />
            </Link>
          </li>
          <li>
            <Link to="smile">
              <div className="logo">
                <div className="img">
                  <img src={Sinternet} alt="" />
                </div>

                <p>Estream Networks</p>
              </div>

              <FaAngleRight className="icon" />
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Internet;
