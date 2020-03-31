import { render } from "@testing-library/react";
import React from "react";
import Main from "./Main";

it("matches snapshot", () => {
  const { asFragment } = render(<Main />);

  expect(asFragment()).toMatchSnapshot();
});
