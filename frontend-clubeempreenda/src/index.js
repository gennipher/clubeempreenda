import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <App />
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);