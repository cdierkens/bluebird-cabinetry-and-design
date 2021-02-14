const obj = {
  name: "tags",
  type: "array",
  title: "Tags",
  description:
    "Add 1 or more tags that describe the image (e.g. bathroom, kitchen, other).",
  validation: (Rule) => Rule.required().min(1).unique(),
  of: [
    {
      type: "string",
    },
  ],
  options: {
    layout: "tags",
  },
};

export default obj;
