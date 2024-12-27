import "../Quickaction/QuickAction.scss";
import { Link } from "react-router-dom";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdCompareArrows,
  MdArrowOutward,
} from "react-icons/md";
import { FiArrowDownLeft } from "react-icons/fi";
import { AiFillGift } from "react-icons/ai";
import Carousel from "../Carousel/Carousel";
import Cryptos from "../Cryptos/Cryptos";

const QuickAction = () => {
  return (
    <div className="quickaction">
      <div className="quick-act-title">Quick Action</div>

      <div className="quick-wrapper">
        <Link to="">
          <div className="icon-case">
            <FiArrowDownLeft className="icon" />
          </div>
          <p>Buy Crypto</p>
        </Link>

        <Link to="">
          <div className="icon-case">
            <MdArrowOutward className="icon" />
          </div>
          <p>Sell Crypto</p>
        </Link>

        <Link to="">
          <div className="icon-case">
            <MdCompareArrows className="icon" />
          </div>
          <p>Swap Crypto</p>
        </Link>

        <Link to="">
          <div className="icon-case">
            <MdArrowDownward className="icon" />
          </div>
          <p>Deposit</p>
        </Link>

        <Link to="">
          <div className="icon-case">
            <AiFillGift className="icon" />
          </div>
          <p>Giftcard</p>
        </Link>

        <Link to="">
          <div className="icon-case">
            <MdArrowUpward className="icon" />
          </div>
          <p>Withdraw</p>
        </Link>
      </div>

      <div className="carousel-wrapper">
        <Carousel />
      </div>

      <div className="cryptos-wrapper">
        <Cryptos />
      </div>
    </div>
  );
};

export default QuickAction;
