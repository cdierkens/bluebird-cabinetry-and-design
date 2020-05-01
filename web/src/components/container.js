import PropTypes from "prop-types";
import React from "react";
import styles from "./container.module.css";

const Container = ({ className = "", children }) => {
  return <div className={`${styles.Container} ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
