import album from "./documents/album";
import carousel from "./documents/carousel";
import clientReview from "./documents/clientReview";
import designPreview from "./documents/designPreview";
import designer from "./documents/designer";
import portfolioImage from "./documents/portfolioImage";
import siteSettings from "./documents/siteSettings";
import designPreviewImage from "./objects/designPreviewImage";
import tags from "./objects/tags";
import webImage from "./objects/webImage";

export const schemaTypes = [
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
];
