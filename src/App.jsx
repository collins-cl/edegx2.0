import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Wallets from "./pages/Wallets/Wallets";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="right-pane">
          <Topbar />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/wallets" element={<Wallets />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
