import { defineField, defineType } from "sanity";

const obj = defineType({
  name: "pageSection",
  title: "Page Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "quote",
      type: "text",
      title: "Quote Text",
    }),
    defineField({
      name: "image",
      type: "webImage",
      title: "Image",
    }),
    defineField({
      name: "layout",
      type: "string",
      title: "Layout",
      options: {
        list: [
          { title: "Text Left", value: "left" },
          { title: "Text Right", value: "right" },
        ],
      },
    }),
  ],
});

export default obj;
