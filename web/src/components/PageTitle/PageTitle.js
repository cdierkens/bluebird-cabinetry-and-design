import PropTypes from "prop-types";
import React from "react";
import * as styles from "./PageTitle.module.css";

const PageTitle = ({ children }) => (
  <h1 className={styles.PageTitle}>{children}</h1>
);

PageTitle.propTypes = {
  children: PropTypes.node,
};

export default PageTitle;
