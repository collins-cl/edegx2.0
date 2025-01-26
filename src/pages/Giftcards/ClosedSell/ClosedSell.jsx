import "../ClosedSell/ClosedSell.scss";

const ClosedSell = () => {
  return (
    <div className="closed-sell">
      <div className="wrapper">
        <div className="title">Closed Sell</div>

        <div className="fiat-contents">
          <div className="fc-wrapper">
            <div className="fc-title">
              <li>Transaction Type</li>
              <li>Amount</li>
              <li>Date</li>
              <li>Time</li>
              <li>Status</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosedSell;
