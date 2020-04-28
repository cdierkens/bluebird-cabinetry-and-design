import ViewCarouselIcon from "react-icons/lib/md/view-carousel";

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
