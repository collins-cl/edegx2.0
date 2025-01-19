import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Wallets from "./pages/Wallets/Wallets";
import Giftcards from "./pages/Giftcards/Giftcards";
import Transactions from "./pages/Transactions/Transactions";
import Payments from "./pages/Payments/Payments";
import More from "./pages/More/More";
import Sell from "./pages/Sell/Sell";
import WalletToken from "./pages/WalletToken/WalletToken";
import Buycards from "./pages/Giftcards/BuyCards/Buycards";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="right-pane">
          <Topbar />
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/overview/sell" element={<Sell />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/wallets/token" element={<WalletToken />} />
            <Route path="/giftcards" element={<Giftcards />} />
            <Route path="/giftcards/buy" element={<Buycards />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
