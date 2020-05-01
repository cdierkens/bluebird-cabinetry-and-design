import { PropTypes } from "prop-types";
import React from "react";
import styles from "./HeaderNav.module.css";

const HeaderNav = ({ className = "", children }) => (
  <div className={`${styles.HeaderNav} ${className}`}>{children}</div>
);

HeaderNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default HeaderNav;
