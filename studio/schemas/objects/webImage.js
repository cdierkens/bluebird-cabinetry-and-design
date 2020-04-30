export default {
  name: "webImage",
  type: "object",
  title: "Web Image",
  fields: [
    {
      name: "file",
      type: "image",
      title: "File",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      description: "Briefly describe the image using one sentence.",
      validation: (Rule) => Rule.required(),
    },
  ],
};
