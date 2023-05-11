import { MdRateReview as RateReviewIcon } from "react-icons/md";
import { defineField } from "sanity";

const document = defineField({
  name: "clientReview",
  type: "document",
  title: "Client Review",
  icon: RateReviewIcon,
  preview: {
    select: {
      title: "title",
      subtitle: "clientName",
    },
  },
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Title to display in heading of the review.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clientName",
      type: "string",
      title: "Client Name",
      description: "The name of the client who gave the kind words.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      type: "text",
      title: "Review Text",
      description: "The main review text.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default document;
