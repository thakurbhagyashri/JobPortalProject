// NormalHeader.jsx

import { Link } from "react-router-dom";
import "./NormalHeader.css"; // Import the CSS file

const NormalHeader = () => {
  return (
    <ul className="navbar-items">
      <li className="nav-item">
        <Link to="/user/employer/register" className="nav-link">
          <b className="link-text">Register Employer</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/user/employee/register" className="nav-link">
          <b className="link-text">Register Employee</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/user/login" className="nav-link">
          <b className="link-text">Login User</b>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
