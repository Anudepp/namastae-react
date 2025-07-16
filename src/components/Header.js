import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Log-in"); // Changed initial state to a string for clarity
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //subscribing to the Redux store to get cart items
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.length;

  return (
    <div className="flex justify-between items-center bg-gray-100 shadow-lg px-4 py-2">
      <div className="w-24">
        {" "}{/* Adjusted width for the logo container */}
        <img className="w-full h-auto" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex items-center space-x-6">
          {" "}{/* Used flexbox for horizontal navigation and spacing */}
          <li className="text-gray-700 font-medium">
            Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/groceries"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Groceries
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Cart({totalItems} Items)
            </Link>
          </li>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 shadow-md"
            onClick={() => {
              setBtnName(btnName === "Log-in" ? "Log-out" : "Log-in");
            }}
          >
            {btnName}
          </button>
          <li className="text-gray-700 font-medium">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
