import { MdViewCarousel as ViewCarouselIcon } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "carousel",
  type: "document",
  title: "Carousel",
  icon: ViewCarouselIcon,
  fields: defineField([
    {
      title: "Images",
      name: "images",
      type: "array",
      of: defineArrayMember([
        {
          type: "reference",
          to: [{ type: "portfolioImage" }],
        },
      ]),
    },
  ]),
});
