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
                  buildHookId: "5e7ab8e3bb4b68438d43eeed",
                  title: "Sanity Studio",
                  name: "bluebird-cabinetry-and-design-studio",
                  apiId: "f4baa358-88e2-43a7-b49c-1288b8df1a5c",
                },
                {
                  buildHookId: "5e7ab8e3a7ddb5a8ac2a2b8d",
                  title: "Blog Website",
                  name: "bluebird-cabinetry-and-design",
                  apiId: "2d3f1802-9d49-4dcb-80ff-24b828ff82e7",
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
