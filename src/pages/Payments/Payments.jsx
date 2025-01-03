import "../Payments/Payments.scss";
import { Link } from "react-router-dom";

const Payments = () => {
  const paymentInfo = [
    {
      href: "airtime",
    },
    {
      href: "data",
    },
    {
      href: "cable",
    },
    {
      href: "internet",
    },
    {
      href: "betting",
    },
    {
      href: "utility",
    },
    {
      href: "estate",
    },
    {
      href: "insurance",
    },
  ];
  return (
    <div className="payments">
      <div className="wrapper">
        {paymentInfo &&
          paymentInfo.map((item, id) => (
            <Link to={`/payments/${item.href}`} className="box" key={id}></Link>
          ))}
      </div>
    </div>
  );
};

export default Payments;
