import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import { buildImageObj, imageUrlFor } from "src/lib";

const query = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
      keywords
    }
  }
`;

function Head({
  description,
  title,
  image,
  lang = "en",
  meta = [],
  keywords = [],
}) {
  const { site } = useStaticQuery(query);

  const metaDescription = description || site?.description || "";
  const siteTitle = site?.title || "";
  const metaImage = image?.asset
    ? imageUrlFor(buildImageObj(image)).width(1200).url()
    : "";

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: metaImage,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : []
        )
        .concat(meta)}
    />
  );
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
};

export default Head;
