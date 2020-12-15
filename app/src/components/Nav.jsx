import React from "react";
import bowl from "../images/bowl.png";
import { FiPhoneCall } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import TemporaryDrawer from "./TemporaryDrawer";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="listItems">
        {/* <div className="img-logo">
          <img src={bowl} alt="" className="bowlImg" />
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>CHOPS-YO</h1>
          </Link>
        </div> */}
        <div className="contact-details">
          <p>
            Contact Us: <FiPhoneCall /> 484.627.9598
          </p>
          <p>lyndasantiag@gmail.com</p>
          <p>Easton PA, USA</p>
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
          <FaSearch className="search-icon" />
          <TemporaryDrawer />
        </div>
      </div>
    </nav>
  );
}
