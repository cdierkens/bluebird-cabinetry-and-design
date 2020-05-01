import { render } from "@testing-library/react";
import React from "react";
import HeaderNav from "./HeaderNav";

it("matches snapshot", () => {
  const { asFragment } = render(<HeaderNav />);

  expect(asFragment()).toMatchSnapshot();
});
