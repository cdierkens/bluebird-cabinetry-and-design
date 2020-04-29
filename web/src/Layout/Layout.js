import PropTypes from "prop-types";
import React from "react";
import Footer from "./Footer";
import GraphQLErrors from "./GraphQLErrors";
import Head from "./Head";
import Header from "./Header";
import "./Layout.css";
import styles from "./Layout.module.css";

const Layout = ({ errors, children, ...props }) =>
  errors ? (
    <GraphQLErrors errors={errors} />
  ) : (
    <React.Fragment>
      <Head {...props} />

      <div className={styles.Layout}>
        <Header />

        <main>{children}</main>

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
};

export default Layout;
