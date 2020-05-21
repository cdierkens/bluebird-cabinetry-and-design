import PhotoAlbumIcon from "react-icons/lib/md/photo-album";

export default {
  name: "portfolioImage",
  type: "document",
  title: "Portfolio Image",
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
      title: "Image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      description:
        "Caption to display (i.e. mention collaborators, contributors, or materials used).",
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
