export default {
  name: "webImage",
  type: "object",
  title: "WebImage",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "description",
      type: "string",
      title: "Image Description",
      description: "Briefly describe the image using one sentence.",
    },
  ],
};
