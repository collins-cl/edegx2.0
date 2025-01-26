import { Link } from "react-router-dom";
import "../Giftcards/Giftcards.scss";
import Banner from "../../assets/cards/giftcard.svg";
import Buy from "../../assets/cards/buy-giftcard.svg";
import Sell from "../../assets/cards/sell-giftcard.svg";
import Ongoing from "../../assets/cards/ongoing-gifcard.svg";
import Closed from "../../assets/cards/closed-giftcard.svg";

const Giftcards = () => {
  return (
    <div className="giftcards-section">
      <div className="wrapper">
        <div className="banner">
          <img src={Banner} alt="" />
        </div>

        <div className="call-to-action">
          <div className="cta-container">
            <Link to="/giftcards/buy">
              <div className="box">
                <img src={Buy} alt="" />
                <p>Buy Gift Card</p>
              </div>
            </Link>
            <Link to="/giftcards/sell">
              <div className="box">
                <img src={Sell} alt="" />
                <p>Sell Gift Card</p>
              </div>
            </Link>
            <Link to="/giftcards/sell/ongoing">
              <div className="box">
                <img src={Ongoing} alt="" />
                <p>Ongoing Gift Card</p>
              </div>
            </Link>
            <Link to="/giftcards/sell/closed">
              <div className="box">
                <img src={Closed} alt="" />
                <p>Closed Gift Card</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giftcards;
