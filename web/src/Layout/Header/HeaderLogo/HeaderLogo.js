import { Link } from "gatsby";
import { PropTypes } from "prop-types";
import React from "react";
import { useScrollPosition } from "../../../hooks";
import logo from "../../../logo.png";
import styles from "./HeaderLogo.module.css";

const HeaderLogo = ({ className = "" }) => {
  const position = useScrollPosition();

  return (
    <div className={`${styles.HeaderLogo} ${className}`}>
      <Link to="/">
        <img
          className={`${styles.Logo} ${
            position.y > 200 ? styles.LogoTransform : ""
          }`}
          src={logo}
          alt="Bluebird Logo"
        />
      </Link>
    </div>
  );
};

HeaderLogo.propTypes = {
  className: PropTypes.string,
};

export default HeaderLogo;
