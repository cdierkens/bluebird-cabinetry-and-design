import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  type: "document",
  title: "About Page",
  preview: {
    select: {},
    prepare: () => ({
      title: "About Page",
    }),
  },
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    defineField({
      name: "pageSections",
      type: "pageSections",
      title: "Page Sections",
    }),
  ],
});
