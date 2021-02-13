// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const { sanity } = require("./client-config");

console.log("Building with sanity config: ");
console.log(JSON.stringify(sanity, null, 2));

module.exports = {
  siteMetadata: {
    siteUrl: "https://bluebirdcabinetryanddesign.com/",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-root-import",
    "gatsby-plugin-react-svg",
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
