import React from "react";
import logo from "../../images/logo.png";
import styles from "./Footer.module.css";

const Footer = () => (
  <>
    <div className={`${styles.Footer} text-center text-gray-light p-5`}>
      <div>
        <img className="w-40 inline-block" src={logo} alt="Bluebird Logo" />
      </div>
      <div>Bluebird Cabinetry and Design</div>
    </div>
    <div className="bg-gray-darkest p-2 text-xs text-center text-gray-light">
      &copy; 2020 Bluebird Cabinetry &amp; Design LLC. All Rights Reserved.
    </div>
  </>
);

export default Footer;
