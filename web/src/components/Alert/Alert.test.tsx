import { render } from "@testing-library/react";
import React from "react";
import Alert from "./Alert";

it("matches snapshot", () => {
  const { asFragment } = render(<Alert status="success">Mock Message</Alert>);

  expect(asFragment()).toMatchSnapshot();
});
