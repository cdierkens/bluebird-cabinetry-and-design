import { MdPhotoAlbum as PhotoAlbumIcon } from "react-icons/md";
import { defineField, defineType } from "sanity";

const document = defineType({
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
      description: "Metadata to show on full screen view.",
      options: { collapsible: true, collapsed: false },
    },
    {
      title: "Filters",
      name: "filters",
      description:
        "Filterable attributes like room, label, finishes, or cabinetry.",
      options: { collapsible: true, collapsed: false },
    },
  ],
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
      title: "Image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contractor",
      type: "string",
      title: "Contractor(s)",
      fieldset: "metadata",
      description: "Name of the contractor(s).",
    }),
    defineField({
      name: "decorator",
      type: "string",
      title: "Decorator",
      fieldset: "metadata",
      description: "Name of the Decorator(s)",
    }),
    defineField({
      name: "interiorDesigner",
      type: "string",
      title: "Interior Designer(s)",
      fieldset: "metadata",
      description: "Name of the Designer(s)",
    }),
    defineField({
      name: "furnitureRefinishing",
      type: "string",
      title: "Furniture Refinishing",
      fieldset: "metadata",
      description:
        "Name of the Furniture Refinisher/Furniture Refinishing Company.",
    }),
    defineField({
      name: "software",
      type: "string",
      title: "Design Software",
      fieldset: "metadata",
      description: "Software used to create 3D rendering.",
    }),
    defineField({
      name: "labels",
      type: "tags",
      fieldset: "filters",
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      title: "Finish",
      name: "finish",
      description: "Name of finish or finishes shown in the photo.",
      type: "tags",
      fieldset: "filters",
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      title: "Cabinetry",
      name: "cabinetry",
      description: "Cabinetry shown in the photo.",
      type: "tags",
      fieldset: "filters",
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      title: "Room",
      name: "room",
      type: "string",
      fieldset: "filters",
      options: {
        list: ["Kitchen", "Bath", "Laundry", "Office", "Social Spaces"],
      },
    }),
    defineField({
      name: "caption",
      type: "string",
      title: "Caption",
      fieldset: "deprecated",
      description:
        "Caption to display (i.e. mention collaborators, contributors, or materials used).",
    }),
    defineField({
      name: "tags",
      type: "tags",
      title: "Tags",
      fieldset: "deprecated",
      description:
        "Add 1 or more tags that describe the image (e.g. bathroom, kitchen, other).",
    }),
  ],
});

export default document;
