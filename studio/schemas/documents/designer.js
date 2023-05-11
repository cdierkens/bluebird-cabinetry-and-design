import { MdPerson as DesignerIcon } from "react-icons/md";
import { defineField } from "sanity";

const document = defineField({
  name: "designer",
  type: "document",
  title: "Designer",
  icon: DesignerIcon,
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image.file",
    },
  },
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Full Name",
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Role",
      description:
        "Role to display (e.g., Owner / Kitchen & Bathroom Designer)",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "webImage",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Rich text description of the designer.",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

export default document;
