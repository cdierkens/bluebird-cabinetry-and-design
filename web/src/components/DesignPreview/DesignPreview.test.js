import { render } from "@testing-library/react";
import React from "react";
import DesignPreview from "./DesignPreview";

it("matches snapshot", () => {
  const { asFragment } = render(<DesignPreview />);

  expect(asFragment()).toMatchSnapshot();
});
