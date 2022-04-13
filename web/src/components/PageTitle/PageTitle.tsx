import React from "react";
import * as styles from "./PageTitle.module.css";

const PageTitle: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <h1 className={styles.PageTitle}>{children}</h1>
);

export default PageTitle;
