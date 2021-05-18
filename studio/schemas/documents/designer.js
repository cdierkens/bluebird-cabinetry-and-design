import { MdPerson as DesignerIcon } from "react-icons/md";

const document = {
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
    {
      name: "name",
      type: "string",
      title: "Full Name",
    },
    {
      name: "role",
      type: "string",
      title: "Role",
      descripion: "Role to display (e.g., Owner / Kitchen & Bathroom Designer)",
    },
    {
      name: "image",
      title: "Image",
      type: "webImage",
    },
    {
      name: "description",
      title: "Description",
      descripion: "Rich text description of the designer.",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default document;
