export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "5e8a66785ab22f9c57277b1f",
                  title: "Sanity Studio",
                  name: "bluebird-cabinetry-and-design-studio",
                  apiId: "35a21933-0638-4df5-a6fc-757529bdc61b",
                },
                {
                  buildHookId: "5e8a677d2c6796d747536869",
                  title: "Blog Website",
                  name: "bluebird-cabinetry-and-design",
                  apiId: "0bc8e9e2-da18-4e15-aac5-5f2246548f33",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/cdierkens/bluebird-cabinetry-and-design",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://bluebird-cabinetry-and-design.netlify.com",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
