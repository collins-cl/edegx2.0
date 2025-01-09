import "../Sell/Sell.scss";
import EmptyState from "../../assets/empty-state.svg";
import BCH from "../../assets/coins/BCH.png";
import BTC from "../../assets/coins/BTC.png";
import BNB from "../../assets/coins/BNB.png";
import ETH from "../../assets/coins/ETH.png";
import Positive from "../../assets/positive-graph.svg";

const Sell = () => {
  const tokenInfo = [
    {
      image: BCH,
      name: "Bitcoin Cash",
      coin: "BCH",
      price: "432",
      chartType: Positive,
      balance: "1.300",
      usd: "920.00",
    },
    {
      image: BTC,
      name: "Bitcoin",
      coin: "BTC",
      price: "92,000",
      chartType: Positive,
      balance: "1.0",
      usd: "92,000",
    },
    {
      image: BNB,
      name: "BNB",
      coin: "BNB",
      price: "698",
      chartType: Positive,
      balance: "21.1",
      usd: "12,786",
    },
    {
      image: ETH,
      name: "Ethereum",
      coin: "ETH",
      price: "2987",
      chartType: Positive,
      balance: "2",
      usd: "5,876",
    },
    {
      image: BCH,
      name: "Bitcoin Cash",
      coin: "BCH",
      price: "432",
      chartType: Positive,
      balance: "1.300",
      usd: "920.00",
    },
    {
      image: BTC,
      name: "Bitcoin",
      coin: "BTC",
      price: "92,000",
      chartType: Positive,
      balance: "1.00000",
      usd: "92,000",
    },
    {
      image: BNB,
      name: "BNB",
      coin: "BNB",
      price: "698",
      chartType: Positive,
      balance: "21.1",
      usd: "12,786",
    },
    {
      image: ETH,
      name: "Ethereum",
      coin: "ETH",
      price: "2987",
      chartType: Positive,
      balance: "2",
      usd: "5,876",
    },
  ];
  return (
    <div className="sell">
      <div className="wrapper">
        <div className="tokens">
          <div className="container">
            <div className="title">Choose your Crypto</div>

            <div className="token">
              <div className="search-tkn">
                <input
                  type="text"
                  name=""
                  placeholder="Search Crypto to sell"
                />
              </div>

              <div className="tokens-list">
                {tokenInfo &&
                  tokenInfo.map((token, id) => (
                    <li key={id}>
                      <div className="tkn">
                        <div className="logo">
                          <img src={token.image} alt="" />
                        </div>

                        <div className="details">
                          <div className="tkn-name">{token.name}</div>

                          <div className="tkn-sym">{token.coin}</div>
                        </div>
                      </div>

                      <div className="bal">
                        <div className="tkn-bal">
                          {token.coin} {token.balance}
                        </div>
                        <div className="usd-equ">USD {token.usd}</div>
                      </div>
                    </li>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="action">
          <div className="sel-crypto-nil">
            <img src={EmptyState} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
