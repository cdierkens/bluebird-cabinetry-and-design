import { defineArrayMember, defineType } from "sanity";

const obj = defineType({
  name: "services",
  type: "array",
  title: "services",
  of: defineArrayMember([
    {
      type: "service",
    },
  ]),
});

export default obj;
