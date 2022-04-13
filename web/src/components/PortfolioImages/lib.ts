import { Options } from "react-select";
import { PortfolioImagesQuery } from "../../../graphql-types";
import { builder } from "../../lib/image-url";
import { invariant } from "../../lib/invariant";

interface GetValuesForAttributeOptions {
  attr: string;
  allImages: PortfolioImage[];
}

export const getValuesForAttribute = ({
  attr,
  allImages,
}: GetValuesForAttributeOptions) => {
  return Array.from(
    allImages.reduce((keys: Set<string>, node: PortfolioImage) => {
      const prop = node[attr as keyof PortfolioImage];

      if (Array.isArray(prop)) {
        prop.forEach((value) => {
          invariant(value);

          keys.add(value);
        });
      } else if (typeof prop === "string") {
        keys.add(prop);
      }

      return keys;
    }, new Set())
  )
    .filter(Boolean)
    .sort();
};

export type PortfolioImage =
  PortfolioImagesQuery["allSanityPortfolioImage"]["nodes"][number];
export type CarouselImage = Pick<
  PortfolioImage,
  | "title"
  | "contractor"
  | "decorator"
  | "furnitureRefinishing"
  | "interiorDesigner"
  | "software"
> & {
  source: {
    download: string;
    fullscreen: string;
    regular: string;
    thumbnail: string;
  };
  alt?: string | null;
};

export const mapPortfolioImageToCarouselImage = ({
  image,
  title,
  contractor,
  decorator,
  furnitureRefinishing,
  interiorDesigner,
  software,
}: PortfolioImage): CarouselImage => {
  invariant(image?.file?.asset?.id);

  return {
    source: {
      download: builder.image(image.file.asset.id).url(),
      fullscreen: builder
        .image(image.file.asset.id)
        .height(1080)
        .fit("clip")
        .url(),
      regular: builder.image(image.file.asset.id).height(900).fit("clip").url(),
      thumbnail: builder
        .image(image.file.asset.id)
        .height(400)
        .fit("clip")
        .url(),
    },
    title,
    contractor,
    decorator,
    furnitureRefinishing,
    interiorDesigner,
    software,
    alt: image?.description,
  };
};

export const getArrayFromQueryParam = (
  value: string | string[] | null
): string[] => {
  if (Array.isArray(value)) {
    return value;
  }

  switch (typeof value) {
    case "string":
      return decodeURI(value).split(",").sort();
    default:
      return [];
  }
};

export const getQueryStringFromOption = (values: Options<any>): string => {
  return values
    .map(({ value }) => value)
    .sort()
    .join(",");
};
