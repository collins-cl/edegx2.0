import "../BuyCards/Buycards.scss";
import Card from "../../../assets/giftcard/449.png";
import Empty from "../../../assets/empty.svg";

const Buycards = () => {
  return (
    <div className="buycards">
      <div className="wrapper">
        <div className="section-1">
          <div className="title">Select Gift Card</div>

          <div className="c-wallets-wrapper">
            <div className="tokens">
              <div className="search-tkn">
                <input type="text" name="" placeholder="Search for giftcard" />
              </div>

              <div className="card-list">
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>

                <div className="card-container">
                  <div className="img">
                    <img src={Card} alt="" />
                  </div>

                  <p>Australia BCF</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="is-empty">
            <div className="img">
              <img src={Empty} alt="" />
            </div>

            <h3>Select your Gift Card</h3>

            <p>Click on the gift card you want to buy to continue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buycards;
