/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const development = ["/icons"];

exports.onCreatePage = ({ page, actions: { deletePage } }) => {
  if (
    process.env.NODE_ENV === "production" &&
    development.startsWith(page.path)
  ) {
    deletePage(page);
  }
};
