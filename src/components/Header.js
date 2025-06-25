import { LOGO_URL } from "../utils/constants"; //since we are importing named export from constants.js we have to use curly braces
import { useState } from "react";
const Header = () => {
  const [btnName, setbtnName] = useState(["Log-in"]);
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
