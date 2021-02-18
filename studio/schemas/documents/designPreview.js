import { MdViewQuilt as ViewQuiltIcon } from "react-icons/md";

const document = {
  name: "designPreview",
  type: "document",
  title: "Design Preview",
  icon: ViewQuiltIcon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Design Heading",
      description: "Copy to display in the Design Preview Heading",
    },
    {
      name: "description",
      type: "text",
      title: "Design Description",
      description: "Copy to describe the Design Preview",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      options: {
        editModal: "fullscreen",
      },
      of: [
        {
          type: "designPreviewImage",
        },
      ],
    },
  ],
};

export default document;
