import { LOGO_URL } from "../utils/constant.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
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
            <Link to="cart">Cart ({cartItems.length} items) </Link>
          </li>
          <li className="px-2">
            <Link to="contact">Contact</Link>
          </li>

          <button
            className="login"
            onClick={() =>
              setBtnLogin((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {btnLogin}
          </button>
          <li className="px-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
