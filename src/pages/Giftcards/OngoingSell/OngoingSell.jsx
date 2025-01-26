import "../OngoingSell/OngoingSell.scss";

const OngoingSell = () => {
  return (
    <div className="ongoing-sell">
      <div className="wrapper">
        <div className="title">Ongoing Sell</div>

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

export default OngoingSell;
