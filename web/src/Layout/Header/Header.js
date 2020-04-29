import { Link } from "gatsby";
import React from "react";
import logo from "../../logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <img className={styles.Logo} src={logo} alt="Bluebird Logo"></img>
        <div className={styles.Main}>
          <Link className={styles.NavLink} to="/">
            Home
          </Link>
          <Link className={styles.NavLink} to="/about">
            About
          </Link>
          <Link className={styles.NavLink} to="/services">
            Services
          </Link>
          <Link className={styles.NavLink} to="/portfolio">
            Portfolio
          </Link>
          <Link className={styles.Button} to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
