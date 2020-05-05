import PropTypes from "prop-types";
import React from "react";
import styles from "./Grid.module.css";

const Grid = ({ className = "", children }) => (
  <div className={`${styles.Grid} gap-3 ${className}`}>{children}</div>
);

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Grid;
