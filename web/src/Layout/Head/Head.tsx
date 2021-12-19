import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { DefaultSeoQueryQuery } from "../../graphql-types";
import favicon from "../../images/favicon.jpg";

const query = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

interface Props {
  title: string;
  lang?: string;
}

const Head: React.FC<Props> = ({ title, lang = "en" }) => {
  const { site } = useStaticQuery<DefaultSeoQueryQuery>(query);

  const description = site?.description || "";
  const siteTitle = site?.title || "";
  const keywords = site?.keywords || [];

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title === siteTitle ? "%s" : `${siteTitle} | %s`}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:keywords",
          content: keywords.join(","),
        },
        {
          property: "og:type",
          content: "website",
        },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Quicksand:wght@400;500&family=Cookie&display=swap"
        rel="stylesheet"
      />

      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export default Head;
