import { defineArrayMember, defineType } from "sanity";

const obj = defineType({
  name: "pageSections",
  type: "array",
  title: "Page Sections",
  of: defineArrayMember([
    {
      type: "pageSection",
    },
  ]),
});

export default obj;
