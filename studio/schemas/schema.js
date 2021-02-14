import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import carousel from "./documents/carousel";
import designPreview from "./documents/designPreview";
import designPreviewImage from "./documents/designPreviewImage";
import portfolioImage from "./documents/portfolioImage";
import siteSettings from "./documents/siteSettings";
import tags from "./objects/tags";
import webImage from "./objects/webImage";

export default createSchema({
  name: "bluebird",
  types: schemaTypes.concat([
    // Documents
    siteSettings,
    portfolioImage,
    carousel,
    designPreview,
    designPreviewImage,
    // Objects
    webImage,
    tags,
  ]),
});
