import { withPropsStream } from "react-props-stream";
import { withRouterHOC } from "sanity/router";
import { StructureMenuWidget } from "./components";
import { toPropsStream } from "./props";

export default {
  name: "structure-menu",
  component: withRouterHOC(withPropsStream(toPropsStream, StructureMenuWidget)),
  layout: { width: "full" },
};
