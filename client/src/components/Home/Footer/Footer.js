import React from "react";
import logo from "../../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaYelp } from "react-icons/fa";
import "./styles.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-wrapper">
        <img src={logo} width="250px" alt="logo" />
        <div className="footer-center">
          <h4>Hours</h4>
          <p>Mon - Sun: 10:00AM - 9:00PM</p>
          <h4>Locations</h4>
          <p>25227 Redlands Blvd A, Loma Linda, CA 92354</p>
        </div>
        <div className="footer-right">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYelp />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
