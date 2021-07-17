import { Link } from "gatsby";
import React from "react";
import { useMatchMedia } from "../../hooks";
import { theme } from "../../lib/tailwind.js";
import DesktopNav from "./DesktopNav";
import * as styles from "./Header.module.css";
import MobileNav from "./MobileNav";

const Links: React.FC = () => (
  <>
    <Link className={styles.Link} activeClassName={styles.LinkActive} to="/">
      Home
    </Link>
    <Link
      className={styles.Link}
      activeClassName={styles.LinkActive}
      to="/about"
    >
      About
    </Link>
    <Link
      className={styles.Link}
      activeClassName={styles.LinkActive}
      to="/designers"
    >
      Designers
    </Link>
    <Link
      className={styles.Link}
      activeClassName={styles.LinkActive}
      to="/services"
    >
      Services
    </Link>
    <Link
      className={styles.Link}
      activeClassName={styles.LinkActive}
      to="/portfolio"
    >
      Portfolio
    </Link>
    <Link
      className={styles.Link}
      activeClassName={styles.LinkActive}
      to="/contact"
    >
      Contact
    </Link>
  </>
);

const Header: React.FC = () => {
  const isMobile = useMatchMedia(`(max-width: ${theme.screens.md})`);

  return (
    <header className={styles.Header}>
      {isMobile ? (
        <MobileNav>
          <Links />
        </MobileNav>
      ) : (
        <DesktopNav>
          <Links />
        </DesktopNav>
      )}
    </header>
  );
};

export default Header;
