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
      name: "contractor",
      type: "string",
      title: "Contractor(s)",
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
      description: "Name of the Designer(s)",
    },
    {
      name: "furnitureRefinishing",
      type: "string",
      title: "Furniture Refinishing",
      description:
        "Name of the Furniture Refinisher/Furniture Refinishing Company.",
    },
    {
      name: "software",
      type: "string",
      title: "Design Software",
      description: "Software used to create 3D rendering.",
    },
    {
      name: "tags",
      type: "tags",
      validation: (Rule) => Rule.required().min(1).unique(),
    },
  ],
};

export default document;
