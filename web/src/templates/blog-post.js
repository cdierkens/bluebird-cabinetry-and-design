import { graphql } from "gatsby";
import React from "react";
import { toPlainText } from "src/lib/helpers";
import BlogPost from "../components/blog-post";
import Layout from "../Layout";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`;

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data?.post;
  const description = post ? toPlainText(post._rawExcerpt) : "";
  const image = post?.mainImage;

  return (
    <Layout
      errors={errors}
      title={post.title || "Untitled"}
      description={description}
      image={image}
    >
      {post && <BlogPost {...post} />}
    </Layout>
  );
};

export default BlogPostTemplate;
