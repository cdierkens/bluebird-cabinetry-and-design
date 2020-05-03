import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import { buildImageObj } from "src/lib";
import favicon from "../../images/favicon.jpg";
import { builder } from "../../lib/image-url";

const query = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
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
    ? builder.image(buildImageObj(image)).width(1200).url()
    : "";

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title === siteTitle ? "%s" : `${siteTitle} | %s`}
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
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Quicksand:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <link rel="icon" href={favicon} />
    </Helmet>
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
