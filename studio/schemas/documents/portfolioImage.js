import { MdPhotoAlbum as PhotoAlbumIcon } from "react-icons/md";

const document = {
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
  fieldsets: [
    {
      title: "Deprecated",
      name: "deprecated",
      options: { collapsible: true, collapsed: true },
    },
    {
      title: "Metadata",
      name: "metadata",
      options: { collapsible: true, collapsed: false },
    },
  ],
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
      name: "contractor",
      type: "string",
      title: "Contractor(s)",
      fieldset: "metadata",
      description: "Name of the contractor(s).",
    },
    {
      name: "decorator",
      type: "string",
      title: "Decorator",
      description: "Name of the Decorator(s)",
    },
    {
      name: "interiorDesigner",
      type: "string",
      title: "Interior Designer(s)",
      fieldset: "metadata",
      description: "Name of the Designer(s)",
    },
    {
      name: "furnitureRefinishing",
      type: "string",
      title: "Furniture Refinishing",
      fieldset: "metadata",
      description:
        "Name of the Furniture Refinisher/Furniture Refinishing Company.",
    },
    {
      name: "software",
      type: "string",
      title: "Design Software",
      fieldset: "metadata",
      description: "Software used to create 3D rendering.",
    },
    {
      name: "labels",
      type: "tags",
      validation: (Rule) => Rule.unique(),
    },
    {
      title: "Room",
      name: "room",
      type: "string",
      options: {
        list: ["Kitchen", "Bath", "Laundry", "Office"],
      },
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      fieldset: "deprecated",
      description:
        "Caption to display (i.e. mention collaborators, contributors, or materials used).",
    },
    {
      name: "tags",
      type: "tags",
      title: "Tags",
      fieldset: "deprecated",
      description:
        "Add 1 or more tags that describe the image (e.g. bathroom, kitchen, other).",
    },
  ],
};

export default document;
