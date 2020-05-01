import { render } from "@testing-library/react";
import React from "react";
import HeaderLogo from "./HeaderLogo";

it("matches snapshot", () => {
  const { asFragment } = render(<HeaderLogo />);

  expect(asFragment()).toMatchSnapshot();
});
