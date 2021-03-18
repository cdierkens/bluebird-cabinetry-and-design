import PropTypes from "prop-types";
import React from "react";
import HeaderLogo from "../HeaderLogo";
import HeaderNav from "../HeaderNav";
import * as styles from "./DesktopNav.module.css";

const DesktopNav = ({ children }) => (
  <nav className={`${styles.DesktopNav} grid-cols-6 lg:grid-cols-8`}>
    <HeaderLogo className="col-span-1 lg:col-span-2" />
    <HeaderNav className="col-span-5 lg:col-span-6">{children}</HeaderNav>
  </nav>
);

DesktopNav.propTypes = {
  children: PropTypes.node,
};
export default DesktopNav;
