import "../Cryptos/Cryptos.scss";
import BCH from "../../assets/coins/BCH.png";
import BTC from "../../assets/coins/BTC.png";
import BNB from "../../assets/coins/BNB.png";
import ETH from "../../assets/coins/ETH.png";
import Positive from "../../assets/positive-graph.svg";
import { GoArrowUp } from "react-icons/go";

const Cryptos = () => {
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
    <div className="cryptos">
      <div className="title">All Cryptos</div>

      <div className="assets-container">
        <div className="head">
          <p>Asset</p>
          <p>Price</p>
          <p>24hr change</p>
          <p>chart</p>
          <p>trade</p>
        </div>

        <div className="contents">
          {tokenInfo &&
            tokenInfo.map((item, id) => (
              <div className="token" key={id}>
                <div className="asset">
                  <img src={item.image} alt="" />

                  <p className="title">{item.coin}</p>
                </div>

                <div className="price">${item.price}</div>

                <div className="price-change">
                  <GoArrowUp /> +0.00
                </div>

                <div className="chart">
                  <img src={item.chartType} alt="" />
                </div>

                <div className="trade">
                  <div className="btn">trade</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cryptos;
