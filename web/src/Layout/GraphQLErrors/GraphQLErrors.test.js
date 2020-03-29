import GraphQLErrors from "./GraphQLErrors";
import { render } from "./node_modules/@testing-library/react";
import React from "./node_modules/react";

it("matches snapshot", () => {
  const { asFragment } = render(<GraphQLErrors />);

  expect(asFragment()).toMatchSnapshot();
});
