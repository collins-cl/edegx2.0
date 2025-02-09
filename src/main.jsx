import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/fonts/Poppins/Poppins-Regular.ttf";
import "../src/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
