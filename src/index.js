import React from "react";
import ReactDOM from "react-dom/client";
import PortfolioMinimilist from "./portfolioMinimilist";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

let MainScreen;
if (1 < 10) {
  MainScreen = PortfolioMinimilist;
} else {
  MainScreen = App;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainScreen />);

reportWebVitals();
