import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MainThemeContextProvider } from "./context/MainThemeContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MainThemeContextProvider>
      <App />
    </MainThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
