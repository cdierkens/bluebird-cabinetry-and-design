import { graphql } from "gatsby";
import React from "react";
import Layout from "../Layout";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  const site = data?.site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout
      errors={errors}
      title={site.title}
      description={site.description}
      keywords={site.keywords}
    >
      <h1 hidden>Welcome to {site.title}</h1>
    </Layout>
  );
};

export default IndexPage;
