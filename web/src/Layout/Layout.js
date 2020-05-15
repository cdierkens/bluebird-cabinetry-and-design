import PropTypes from "prop-types";
import React from "react";
import PageTitle from "../components/PageTitle";
import Footer from "./Footer";
import GraphQLErrors from "./GraphQLErrors";
import Head from "./Head";
import Header from "./Header";
import "./Layout.css";
import styles from "./Layout.module.css";

const Layout = ({ errors, hidePageTitle, children, ...props }) =>
  errors ? (
    <GraphQLErrors errors={errors} />
  ) : (
    <React.Fragment>
      <Head {...props} />

      <a href="#content" className="sr-only">
        Skip to content
      </a>

      <div className={styles.Layout}>
        <Header />

        <main role="main" id="content" className={styles.Content}>
          {!hidePageTitle && <PageTitle>{props.title}</PageTitle>}

          {children}
        </main>

        <Footer></Footer>
      </div>
    </React.Fragment>
  );

Layout.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
    })
  ),
  children: PropTypes.node,
  title: PropTypes.string,
  hidePageTitle: PropTypes.bool,
};

export default Layout;
