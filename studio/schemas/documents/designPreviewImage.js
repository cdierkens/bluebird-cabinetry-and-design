import PhotoAlbumIcon from "react-icons/lib/md/photo-album";

export default {
  name: "designPreviewImage",
  title: "Design Preview Image",
  type: "document",
  icon: PhotoAlbumIcon,
  preview: {
    select: {
      media: "image.file",
      title: "title",
    },
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Title to display in the editor preview.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "webImage",
      title: "Web Image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "colSpan",
      type: "string",
      title: "Column Span",
      options: {
        list: ["1", "2", "3"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rowSpan",
      type: "string",
      title: "Row Span",
      options: {
        list: ["1", "2", "3"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      description:
        "Add 1 or more tags that describe the image (e.g. bathroom, kitchen, other).",
      validation: (Rule) => Rule.required().min(1).unique(),
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
