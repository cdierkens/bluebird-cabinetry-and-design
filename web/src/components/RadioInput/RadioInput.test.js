import { render } from "@testing-library/react";
import { Formik } from "formik";
import React from "react";
import RadioInput from "./RadioInput";

it("matches snapshot", () => {
  const { asFragment } = render(
    <Formik>
      <RadioInput label="mock-label" name="mock-group" value="mock-value" />
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
