import useWindowScrollPosition from "@rehooks/window-scroll-position";
import { Link } from "gatsby";
import React from "react";
import logo from "../../logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const maxWidth = 128 + 72;
  const minWidth = 165;
  let position = useWindowScrollPosition();
  const logoWidth = maxWidth - position.y * 0.1;

  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <div
          className={styles.LogoWrapper}
          style={{ width: `${logoWidth > minWidth ? logoWidth : minWidth}px` }}
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
