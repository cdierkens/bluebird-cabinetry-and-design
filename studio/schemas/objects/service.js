import { defineField, defineType } from "sanity";

const obj = defineType({
  name: "service",
  title: "service",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
  ],
});

export default obj;
