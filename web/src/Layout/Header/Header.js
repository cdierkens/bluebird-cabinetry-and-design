import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { useMatchMedia } from "src/hooks";
import Container from "../../components/container";
import styles from "./Header.module.css";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useMatchMedia("(min-width: 1024px)", () => setMenuOpen(true));

  const { site } = useStaticQuery(query);

  return (
    <header className={styles.Header}>
      <Container>
        <nav className={styles.Nav}>
          <div className={styles.TitleWrapper}>
            <span className="font-semibold text-xl tracking-tight">
              <Link to="/">{site.title}</Link>
            </span>
          </div>

          <div className="block lg:hidden">
            <button
              onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <Link to="/certificates/" className={styles.HeaderLink}>
                  Certificates
                </Link>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
