import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = props => {
  const { year, companyName } = props;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="bg-gray-800 text-white p-4 text-center mt-8 shadow-inner">
      <p className="text-sm font-light">
        © {year} {companyName}. All rights reserved.
      </p>
      <p className="text-sm font-light">
        Logged in as: {loggedInUser}
      </p>
    </div>
  );
};
export default Footer;
