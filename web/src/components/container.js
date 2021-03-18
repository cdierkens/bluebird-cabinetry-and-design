import PropTypes from "prop-types";
import React from "react";
import * as styles from "./container.module.css";

const Container = ({ className, children }) => {
  return <div className={`${styles.Container} ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: "",
};

export default Container;
