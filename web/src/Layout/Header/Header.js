import useWindowScrollPosition from "@rehooks/window-scroll-position";
import { Link } from "gatsby";
import React from "react";
import logo from "../../logo.png";
import styles from "./Header.module.css";

const Header = () => {
  let position = useWindowScrollPosition();
  console.log(position.y);

  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <div
          className={`${styles.LogoWrapper} ${
            position.y > 200 ? styles.LogoWrapperTransform : ""
          }`}
        >
          <img className={styles.Logo} src={logo} alt="Bluebird Logo" />
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
