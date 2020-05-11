import { render } from "@testing-library/react";
import React from "react";
import RadioInput from "./RadioInput";

it("matches snapshot", () => {
  const { asFragment } = render(
    <RadioInput
      label="mock-label"
      onChange={() => {}}
      checked={false}
      group="mock-group"
      value="mock-value"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
