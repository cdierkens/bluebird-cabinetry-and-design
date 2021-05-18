import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import album from "./documents/album";
import carousel from "./documents/carousel";
import clientReview from "./documents/clientReview";
import designer from "./documents/designer";
import designPreview from "./documents/designPreview";
import portfolioImage from "./documents/portfolioImage";
import siteSettings from "./documents/siteSettings";
import designPreviewImage from "./objects/designPreviewImage";
import tags from "./objects/tags";
import webImage from "./objects/webImage";

export default createSchema({
  name: "bluebird",
  types: schemaTypes.concat([
    // Documents
    album,
    carousel,
    clientReview,
    designer,
    designPreview,
    portfolioImage,
    siteSettings,
    // Objects
    designPreviewImage,
    tags,
    webImage,
  ]),
});
