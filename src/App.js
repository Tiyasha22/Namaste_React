import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/*
Header
-Logo
-NavBar
Body
-
*/

const Footer = () => {
  return (
    <div>
      <ul>
        <li>@copyright</li>
        <li>contact us</li>
      </ul>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
