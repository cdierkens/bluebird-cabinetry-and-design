import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.Header}`}>
      <nav className={`${styles.Nav} grid grid-cols-8 gap-3`}>
        {/*<Logo>*/}
        <div className="col-span-2">Logo</div>
        {/*<MainNav />*/}
        <div className="col-span-6">Nav</div>
      </nav>
    </header>
  );
};

export default Header;
