import { MdPhotoLibrary as PhotoLibraryIcon } from "react-icons/md";

const document = {
  name: "album",
  type: "document",
  title: "Image Album",
  icon: PhotoLibraryIcon,
  preview: {
    select: {
      title: "title",
      media: "images.0.image.file",
    },
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Album Title",
      description: "Text to display as the heading of the album.",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [
        {
          type: "reference",
          to: [{ type: "portfolioImage" }],
        },
      ],
    },
  ],
};

export default document;
