import { MdPhotoAlbum as PhotoAlbumIcon } from "react-icons/md";
import { defineField, defineType } from "sanity";

const object = defineType({
  name: "designPreviewImage",
  title: "Design Preview Image",
  type: "object",
  icon: PhotoAlbumIcon,
  preview: {
    select: {
      media: "image.file",
      title: "title",
    },
  },
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Title to display in the editor preview.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "webImage",
      title: "Web Image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "colSpan",
      type: "string",
      title: "Column Span",
      options: {
        list: ["1", "2", "3"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rowSpan",
      type: "string",
      title: "Row Span",
      options: {
        list: ["1", "2", "3"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      type: "tags",
      validation: (Rule) => Rule.required().min(1).unique(),
    }),
  ],
});

export default object;
