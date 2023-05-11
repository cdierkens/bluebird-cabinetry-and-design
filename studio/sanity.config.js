import { dashboardTool } from "@sanity/dashboard";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas/schema";
import { defaultDocumentNode, structure } from "./src/structure/deskStructure";

export default defineConfig({
  name: "default",
  title: "Bluebird Cabinetry and Design",
  projectId: "5sj6awst",
  dataset: "production",
  env: {
    development: {
      api: {
        dataset: "development",
      },
    },
  },
  plugins: [
    dashboardTool({
      widgets: [
        documentListWidget({
          title: "Some documents",
        }),
        netlifyWidget({
          title: "Netlify Deploys",
          sites: [
            {
              buildHookId: "5e8a66785ab22f9c57277b1f",
              title: "Sanity Studio",
              name: "bluebird-cabinetry-and-design-studio",
              apiId: "35a21933-0638-4df5-a6fc-757529bdc61b",
            },
            {
              buildHookId: "5e8a677d2c6796d747536869",
              title: "Website",
              name: "bluebird-cabinetry-and-design",
              apiId: "0bc8e9e2-da18-4e15-aac5-5f2246548f33",
            },
          ],
        }),
      ],
    }),
    deskTool({
      structure,
      defaultDocumentNode,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
