import { IoCopyOutline } from "react-icons/io5";
import "../Refer/Refer.scss";
import Img from "../../assets/refer-vector.svg";

const Refer = () => {
  return (
    <div className="refer">
      <div className="wrapper">
        <div className="container">
          <div className="border">
            <div className="refer-title">Refer and Earn</div>

            <div className="refer-container">
              <div className="box-img">
                <img src={Img} alt="" />
              </div>

              <div className="box">
                <p className="info">
                  When your friends join the Jagaban App via your referral code,
                  you gain points after their first trade, and stand a chance to
                  win an amazing prize!
                </p>

                <div className="ref-code">
                  <div className="code">
                    <p className="label">Referal Code</p>
                    <div className="copy-code">
                      <input type="text" disabled placeholder="V3SDW" />

                      <div className="copy-btn">
                        Copy <IoCopyOutline className="icon" />
                      </div>
                    </div>
                  </div>

                  <div className="copy-link">
                    <div className="btn">
                      <IoCopyOutline className="icon" />
                      <p> Copy Referral Link</p>
                    </div>
                  </div>
                </div>

                <div className="ref-list">
                  <p className="label">Referral List</p>
                  <input type="text" disabled placeholder="No referral list" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;
