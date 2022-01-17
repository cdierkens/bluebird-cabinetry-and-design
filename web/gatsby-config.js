// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const { sanity } = require("./client-config");

console.log(
  "Building with sanity config:",
  Object.entries(sanity).reduce(
    (config, [key, value]) => `${config}\n  ${key}: ${value}`,
    ""
  )
);

module.exports = {
  siteMetadata: {
    siteUrl: "https://bluebirdcabinetryanddesign.com/",
  },
  plugins: [
    "gatsby-plugin-graphql-codegen",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-root-import",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanity,
        token: process.env.SANITY_READ_TOKEN,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
  ],
};
