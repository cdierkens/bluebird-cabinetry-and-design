import clsx from "clsx";
import React from "react";
import * as styles from "./Grid.module.css";

interface GridProps {
  className?: string;
}

const Grid: React.FC<React.PropsWithChildren<GridProps>> = ({ className, children }) => (
  <div className={clsx(styles.Grid, className, "gap-3")}>{children}</div>
);

export default Grid;
