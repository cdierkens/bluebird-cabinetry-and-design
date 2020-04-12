import PropTypes from "prop-types";
import React from "react";
import styles from "./Main.module.css";

const Main = ({ children }) => <div className={styles.Main}>{children}</div>;

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
