import React from "react";
import Footer from "./Footer";
import GraphQLErrors from "./GraphQLErrors";
import Head from "./Head";
import Header from "./Header";
import "./Layout.css";
import styles from "./Layout.module.css";
import Main from "./Main";

const Layout = ({ errors, children, ...props }) =>
  errors ? (
    <GraphQLErrors errors={errors} />
  ) : (
    <>
      <Head {...props} />

      <div className={styles.Layout}>
        <Header />

        <Main>{children}</Main>

        <Footer></Footer>
      </div>
    </>
  );

export default Layout;
