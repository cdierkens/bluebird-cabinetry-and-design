import { defineField, defineType } from "sanity";

const obj = defineType({
  name: "webImage",
  type: "object",
  title: "Web Image",
  fields: [
    defineField({
      name: "file",
      type: "image",
      title: "File",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
      description: "Briefly describe the image using one sentence.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default obj;
