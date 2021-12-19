import { Options } from "react-select";
import { builder } from "../../lib/image-url";
import { UNSAFE_ANY } from "../../migration.types";

interface GetValuesForAttributeOptions {
  attr: string;
  allImages: UNSAFE_ANY[];
}

export const getValuesForAttribute = ({
  attr,
  allImages,
}: GetValuesForAttributeOptions) => {
  return Array.from(
    allImages.reduce((keys: Set<string>, node: UNSAFE_ANY) => {
      const prop = node[attr];
      if (Array.isArray(prop)) {
        prop.forEach((value) => keys.add(value));
      } else {
        keys.add(prop);
      }

      return keys;
    }, new Set())
  )
    .filter(Boolean)
    .sort();
};

export const mapPortfolioImageToCarouselImage = ({
  image,
  title,
  contractor,
  decorator,
  furnitureRefinishing,
  interiorDesigner,
  software,
}: UNSAFE_ANY) => ({
  source: {
    download: builder.image(image.file.asset.id).url(),
    fullscreen: builder
      .image(image.file.asset.id)
      .height(1080)
      .fit("clip")
      .url(),
    regular: builder.image(image.file.asset.id).height(900).fit("clip").url(),
    thumbnail: builder.image(image.file.asset.id).height(400).fit("clip").url(),
  },
  title,
  contractor,
  decorator,
  furnitureRefinishing,
  interiorDesigner,
  software,
  alt: image.description,
});

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
