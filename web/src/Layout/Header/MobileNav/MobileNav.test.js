import { render } from "@testing-library/react";
import React from "react";
import MobileNav from "./MobileNav";

it("matches snapshot", () => {
  const { asFragment } = render(<MobileNav />);

  expect(asFragment()).toMatchSnapshot();
});
