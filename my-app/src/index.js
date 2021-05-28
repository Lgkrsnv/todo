import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MainThemeContextProvider } from "./context/MainThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <MainThemeContextProvider>
      <App />
    </MainThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
