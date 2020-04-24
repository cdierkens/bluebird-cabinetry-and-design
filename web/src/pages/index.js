import { graphql } from "gatsby";
import PropTypes from "prop-types";
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
      <h1>Welcome</h1>

      <p>
        Spicy jalapeno bacon ipsum dolor amet hamburger laborum ea, nisi pork
        loin ham hock sed ribeye. Enim burgdoggen turducken tongue meatloaf
        ground round tenderloin chislic consectetur pancetta. Strip steak
        proident reprehenderit enim culpa cillum ham shankle bresaola prosciutto
        burgdoggen commodo aliquip alcatra landjaeger. Capicola magna enim,
        veniam shankle drumstick biltong.
      </p>

      <p>
        Et laboris andouille, doner ut voluptate ground round bresaola in
        nostrud excepteur cow consequat. Reprehenderit ribeye alcatra, chicken
        brisket id tenderloin. Tri-tip magna sunt pig culpa jowl short loin
        tongue proident. Deserunt eiusmod in voluptate spare ribs pig ut t-bone
        kevin leberkas flank nostrud. Beef ea deserunt mollit, flank culpa
        pariatur short loin et leberkas labore esse non. Ad swine cillum rump
        cow ex porchetta aliquip landjaeger doner ullamco voluptate. Voluptate
        dolore nostrud quis sausage pastrami shoulder hamburger.
      </p>

      <p>
        Nulla pork belly nisi ut minim cupidatat porchetta qui tempor shank
        kevin aute swine ut officia. Frankfurter meatball et, in nulla ea
        officia. Qui bresaola ground round rump pastrami pariatur. Ex dolor
        corned beef, commodo picanha ullamco ut buffalo alcatra nostrud occaecat
        in esse. Non velit sed frankfurter capicola pariatur ut ribeye qui.
        Sausage proident commodo, sunt chicken meatloaf swine cupim aliquip
        drumstick t-bone strip steak dolore ut. Incididunt consectetur tongue
        duis.
      </p>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
    })
  ),
};

export default IndexPage;
