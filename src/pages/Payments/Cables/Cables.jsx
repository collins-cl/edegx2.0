import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "../Cables/Cables.scss";
import { Link } from "react-router-dom";
import DSTV from "../../../assets/cable/dstv.svg";

const Cables = () => {
  return (
    <div className="cable">
      <div className="wrapper">
        <div className="title">
          <div className="back">
            <FaAngleLeft className="title-icon" />
          </div>

          <div className="func">Cables TV</div>
        </div>

        <div className="container">
          <li>
            <Link to="dstv">
              <div className="logo">
                <div className="img">
                  <img src={DSTV} alt="" />
                </div>

                <p>DSTV</p>
              </div>

              <FaAngleRight className="icon" />
            </Link>
          </li>
          <li>
            <Link to="dstv">
              <div className="logo">
                <div className="img">
                  <img src={DSTV} alt="" />
                </div>

                <p>DSTV</p>
              </div>

              <FaAngleRight className="icon" />
            </Link>
          </li>
          <li>
            <Link to="dstv">
              <div className="logo">
                <div className="img">
                  <img src={DSTV} alt="" />
                </div>

                <p>DSTV</p>
              </div>

              <FaAngleRight className="icon" />
            </Link>
          </li>
          <li>
            <Link to="dstv">
              <div className="logo">
                <div className="img">
                  <img src={DSTV} alt="" />
                </div>

                <p>DSTV</p>
              </div>

              <FaAngleRight className="icon" />
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Cables;
