import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import carousel from "./documents/carousel";
import designPreview from "./documents/designPreview";
import portfolioImage from "./documents/portfolioImage";
import siteSettings from "./documents/siteSettings";
import designPreviewImage from "./objects/designPreviewImage";
import webImage from "./objects/webImage";

export default createSchema({
  name: "bluebird",
  types: schemaTypes.concat([
    // Documents
    siteSettings,
    portfolioImage,
    carousel,
    designPreview,
    // Objects
    designPreviewImage,
    webImage,
  ]),
});
