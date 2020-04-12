import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { mapEdgesToNodes } from "src/lib/helpers";
import CertificatePreviewGrid from "../components/certificates-preview-grid";
import Layout from "../Layout";

export const query = graphql`
  {
    # site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" })
    certificates: allSanityCertification(
      limit: 8
      sort: { fields: _id, order: DESC }
    ) {
      edges {
        node {
          id
          image {
            crop {
              _key
              _type
              bottom
              left
              right
              top
            }
            hotspot {
              _key
              _type
              height
              width
              x
              y
            }
            asset {
              _id
            }
          }
          title
        }
      }
    }
  }
`;

const CertificatesPage = (props) => {
  const { data, errors } = props;
  // const site = data?.site;
  const certificateNodes = data?.certificates
    ? mapEdgesToNodes(data.certificates)
    : [];

  return (
    <Layout title="Certificates" errors={errors}>
      {certificateNodes && (
        <CertificatePreviewGrid title="Certificates" nodes={certificateNodes} />
      )}
    </Layout>
  );
};

CertificatesPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
    })
  ),
};

export default CertificatesPage;
