import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  return (
    <div className="flex shadow-lg bg-gray-100 justify-between">
      <div>
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="p-4 m-4 ">
        <ul className="flex">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="cart">Cart</Link>
          </li>
          <button className="login" onClick={() => setBtnLogin("Logout")}>
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
