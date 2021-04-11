import { render } from "@testing-library/react";
import React from "react";
import GraphQLErrors from "./GraphQLErrors";

it("matches snapshot", () => {
  const { asFragment } = render(
    <GraphQLErrors errors={[{ message: "test message " }]} />
  );

  expect(asFragment()).toMatchSnapshot();
});
