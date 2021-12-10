import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:3000";
} else {
  axios.defaults.baseURL = "https://peaceful-escarpment-09091.herokuapp.com";
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
