// Header.js
import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/e_logo.png";
import "../NavbarComponent/Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <img src={logo} className="logo" alt="Logo" />
        <Link to="/" className="brand">
          <i>
            <b>Online Job Portal</b>
          </i>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <ul className="navbar-items">
          <li className="nav-item">
            <Link to="/aboutus" className="nav-link">
              <b>About Us</b>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contactus" className="nav-link">
              <b>Contact Us</b>
            </Link>
          </li>
        </ul>

        <RoleNav />
      </div>
    </header>
  );
};

export default Header;
