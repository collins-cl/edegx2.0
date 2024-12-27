import "../Wallets/Wallets.scss";
import BCH from "../../assets/coins/BCH.png";
import BTC from "../../assets/coins/BTC.png";
import BNB from "../../assets/coins/BNB.png";
import ETH from "../../assets/coins/ETH.png";
import Positive from "../../assets/positive-graph.svg";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

const Wallets = () => {
  const tokenInfo = [
    {
      image: BCH,
      coin: "BCH",
      price: "432",
      chartType: Positive,
      balance: "0.00000",
      usd: "0.00",
    },
    {
      image: BTC,
      coin: "BTC",
      price: "432",
      chartType: Positive,
      balance: "0.00000",
      usd: "0.00",
    },
    {
      image: BNB,
      coin: "BNB",
      price: "432",
      chartType: Positive,
      balance: "0.00000",
      usd: "0.00",
    },
    {
      image: ETH,
      coin: "ETH",
      price: "432",
      chartType: Positive,
      balance: "0.00000",
      usd: "0.00",
    },
    {
      image: BCH,
      coin: "BCH",
      price: "432",
      chartType: Positive,
      balance: "0.00000",
      usd: "0.00",
    },
    {
      image: BTC,
      coin: "BTC",
      price: "432",
      chartType: Positive,
      balance: "0.00000",
      usd: "0.00",
    },
    {
      image: BNB,
      coin: "BNB",
      price: "432",
      chartType: Positive,
      balance: "0.00000",
      usd: "0.00",
    },
    {
      image: ETH,
      coin: "ETH",
      price: "432",
      chartType: Positive,
      balance: "0.00000",
      usd: "0.00",
    },
  ];
  return (
    <div className="wallets">
      <div className="wallets-wrapper">
        <div className="section-1">
          <div className="title">
            <h2>Hello, Coledev</h2>
            <p>Secure the bag!</p>
          </div>

          <div className="c-wallets-wrapper">
            <div className="wrapper">
              <div className="cw-title">Crypto Wallets</div>

              <div className="tokens">
                {tokenInfo &&
                  tokenInfo.map((item, id) => (
                    <Link key={id}>
                      <div className="token">
                        <div className="wrap">
                          <img src={item.image} alt="" />

                          <div className="details">
                            <div className="name">{item.coin} Balance</div>
                            <div className="amount">
                              {item.coin} {item.balance}
                            </div>
                            <div className="value">USD {item.usd}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="title">Fiat Wallets</div>

          <div className="balance-card">
            <div className="wrap">
              <div className="bal">NGN Balance:</div>
              <div className="bal-val">
                <p> &#8358; 200,000</p>

                <div className="view-bal">
                  <FaEye className="icon"/>
                </div>
              </div>
            </div>
          </div>

          <div className="dark-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
