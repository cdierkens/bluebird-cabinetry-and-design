import { render } from "@testing-library/react";
import React from "react";
import GraphQLErrors from "./GraphQLErrors";

it("matches snapshot", () => {
  const { asFragment } = render(<GraphQLErrors />);

  expect(asFragment()).toMatchSnapshot();
});
