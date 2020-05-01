import { Link } from "gatsby";
import React from "react";
import { useScrollPosition } from "../../hooks";
import logo from "../../logo.png";
import styles from "./Header.module.css";

const Header = () => {
  let position = useScrollPosition();

  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <div className={styles.LogoWrapper}>
          <img
            className={`${styles.Logo} ${
              position.y > 200 ? styles.LogoTransform : ""
            }`}
            src={logo}
            alt="Bluebird Logo"
          />
        </div>
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
