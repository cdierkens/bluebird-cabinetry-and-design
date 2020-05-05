export default {
  name: "designPreviewImage",
  title: "Design Preview Image",
  type: "object",
  fields: [
    {
      name: "webImage",
      type: "webImage",
      title: "Web Image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "colSpan",
      type: "string",
      title: "Column Span",
      options: {
        list: ["1", "2", "3"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rowSpan",
      type: "string",
      title: "Row Span",
      options: {
        list: ["1", "2"],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
