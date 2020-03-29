import { graphql, Link, StaticQuery } from "gatsby";
import React, { useState } from "react";
import useMatchMedia from "../hooks/useMatchMedia";

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

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          );
        }

        return (
          <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">
                <Link to="/">{data.site.title}</Link>
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
                  <Link
                    to="/archive/"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                  >
                    Archive
                  </Link>
                </div>
              </div>
            )}
          </nav>
        );
      }}
    />
  );
};

export default Header;
