import { LOGO_URL } from "../utils/constants"; //since we are importing named export from constants.js we have to use curly braces
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState(["Log-in"]);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/groceries">Groceries</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Log-in"
                ? setbtnName("Log-out")
                : setbtnName("Log-in");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
