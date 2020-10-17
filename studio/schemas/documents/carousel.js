import { MdViewCarousel as ViewCarouselIcon } from "react-icons/md";

export default {
  name: "carousel",
  type: "document",
  title: "Carousel",
  icon: ViewCarouselIcon,
  // __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "portfolioImage" }],
        },
      ],
    },
  ],
};
