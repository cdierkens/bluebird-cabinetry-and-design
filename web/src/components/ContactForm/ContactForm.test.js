import { render } from "@testing-library/react";
import React from "react";
import ContactForm from "./ContactForm";

it("matches snapshot", () => {
  const { asFragment } = render(<ContactForm />);

  expect(asFragment()).toMatchSnapshot();
});
