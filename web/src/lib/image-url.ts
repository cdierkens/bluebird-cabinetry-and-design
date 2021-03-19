import imageUrlBuilder from "@sanity/image-url";
import clientConfig from "../../client-config";

const { dataset, projectId } = clientConfig.sanity;
export const builder = imageUrlBuilder({ dataset, projectId });
