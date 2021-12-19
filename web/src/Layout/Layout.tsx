import React from "react";
import PageTitle from "../components/PageTitle";
import { UNSAFE_ANY } from "../migration.types";
import Footer from "./Footer";
import GraphQLErrors from "./GraphQLErrors";
import Head from "./Head";
import Header from "./Header";
import "./Layout.css";

interface Props {
  errors?: UNSAFE_ANY;
  hidePageTitle?: boolean;
  title: string;
}

const Layout: React.FC<Props> = ({
  errors,
  title,
  hidePageTitle,
  children,
  ...props
}) =>
  errors ? (
    <GraphQLErrors errors={errors} />
  ) : (
    <React.Fragment>
      <Head title={title} {...props} />

      <a href="#content" className="sr-only">
        Skip to content
      </a>

      <div>
        <Header />

        <main role="main" id="content">
          {!hidePageTitle && <PageTitle>{title}</PageTitle>}

          {children}
        </main>

        <Footer></Footer>
      </div>
    </React.Fragment>
  );

export default Layout;
