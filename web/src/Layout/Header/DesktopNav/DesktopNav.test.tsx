import { render } from "@testing-library/react";
import React from "react";
import DesktopNav from "./DesktopNav";

it("matches snapshot", () => {
  const { asFragment } = render(<DesktopNav />);

  expect(asFragment()).toMatchSnapshot();
});