const isProd = process.env.NODE_ENV === "production";

module.exports = {
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || "5sj6awst",
    dataset: process.env.GATSBY_SANITY_DATASET || "production",
    tag: process.env.GATSBY_SANITY_TAG || "default",
    watchMode: !isProd,
    overlayDrafts: !isProd,
  },
};
