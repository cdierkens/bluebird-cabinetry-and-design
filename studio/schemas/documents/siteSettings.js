import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your Site for search engines and social media.",
    }),
    defineField({
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your Site.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
  ],
});
