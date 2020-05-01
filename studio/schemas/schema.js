import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import carousel from "./documents/carousel";
import portfolioImage from "./documents/portfolioImage";
import siteSettings from "./documents/siteSettings";
import webImage from "./objects/webImage";

export default createSchema({
  name: "bluebird",
  types: schemaTypes.concat([
    // Documents
    siteSettings,
    portfolioImage,
    carousel,

    // Objects
    webImage,
  ]),
});
