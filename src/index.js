import ReactDOM from "react-dom";
import App from "./App";
import React, { useEffect, useState } from "react";
import "./style.scss";
const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
