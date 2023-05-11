import { MdPhotoLibrary as PhotoLibraryIcon } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

const document = defineType({
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
    defineField({
      name: "title",
      type: "string",
      title: "Album Title",
      description: "Text to display as the heading of the album.",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      options: {
        layout: "grid",
      },
      of: defineArrayMember([
        {
          type: "reference",
          to: [{ type: "portfolioImage" }],
        },
      ]),
    }),
  ],
});

export default document;
