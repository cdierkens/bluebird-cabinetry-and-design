import imageUrlBuilder from "@sanity/image-url";
import clientConfig from "../../client-config";

export const builder = imageUrlBuilder(clientConfig.sanity);
