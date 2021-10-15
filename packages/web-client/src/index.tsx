// import './styles/index.css';

import React from "react";
import ReactDOM from "react-dom";
import { VechaiProvider } from "@vechaiui/react";
import App from "./App";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <VechaiProvider>
      <App />
    </VechaiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
