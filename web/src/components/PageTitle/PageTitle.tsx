import React from "react";
import * as styles from "./PageTitle.module.css";

const PageTitle: React.FC = ({ children }) => (
  <h1 className={styles.PageTitle}>{children}</h1>
);

export default PageTitle;
