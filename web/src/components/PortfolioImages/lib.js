import { builder } from "../../lib/image-url";

export const mapPortfolioImageToCarouselImage = ({
  image,
  caption,
  title,
  contractor,
  furnitureRefinishing,
  interiorDesigner,
  software,
}) => ({
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
  caption,
  title,
  contractor,
  furnitureRefinishing,
  interiorDesigner,
  software,
  alt: image.description,
});
