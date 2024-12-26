import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="right-pane">
          <Topbar />
          <Routes>
            <Route path="/" element={<Overview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
