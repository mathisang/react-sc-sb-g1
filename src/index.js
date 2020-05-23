import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import './fonts/Roobert-Regular.ttf'
import './fonts/Roobert-SemiBold.ttf'
import './fonts/Roobert-Bold.ttf'

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
