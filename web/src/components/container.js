import PropTypes from "prop-types";
import React from "react";
import styles from "./container.module.css";

const Container = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
