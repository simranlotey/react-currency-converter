import React from "react";
import ReactDOM from "react-dom/client";
import "currency-flags/dist/currency-flags.min.css";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
