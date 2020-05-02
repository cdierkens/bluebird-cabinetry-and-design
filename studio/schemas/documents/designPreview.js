export default {
  name: "designPreview",
  type: "document",
  title: "Design Preview",
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
      of: [
        {
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
        },
      ],
    },
  ],
};
