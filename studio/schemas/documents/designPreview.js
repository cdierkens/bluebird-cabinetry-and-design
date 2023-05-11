import { MdViewQuilt as ViewQuiltIcon } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

const document = defineType({
  name: "designPreview",
  type: "document",
  title: "Design Preview",
  icon: ViewQuiltIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Design Heading",
      description: "Copy to display in the Design Preview Heading",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Design Description",
      description: "Copy to describe the Design Preview",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      options: {
        modal: "fullscreen",
      },
      of: defineArrayMember([
        {
          type: "designPreviewImage",
        },
      ]),
    }),
  ],
});

export default document;
