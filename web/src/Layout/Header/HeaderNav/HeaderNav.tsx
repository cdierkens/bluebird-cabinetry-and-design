import clsx from "clsx";
import React from "react";
import * as styles from "./HeaderNav.module.css";

interface HeaderNavProps {
  className?: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ className, children }) => (
  <div className={clsx(styles.HeaderNav, className)}>{children}</div>
);

export default HeaderNav;
