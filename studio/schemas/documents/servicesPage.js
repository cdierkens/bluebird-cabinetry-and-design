import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicesPage",
  type: "document",
  title: "Services Page",
  preview: {
    select: {},
    prepare: () => ({
      title: "Services Page",
    }),
  },
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    defineField({
      name: "services",
      type: "services",
      title: "Services",
    }),
  ],
});
