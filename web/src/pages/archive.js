import { graphql } from "gatsby";
import React from "react";
import { mapEdgesToNodes } from "src/lib";
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Layout from "../Layout";

export const query = graphql`
  query ArchivePageQuery {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  const postNodes = data?.posts && mapEdgesToNodes(data.posts);

  return (
    <Layout title="Archive" errors={errors}>
      <h1>Archive</h1>

      {postNodes?.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
    </Layout>
  );
};

export default ArchivePage;
