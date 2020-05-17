import { render } from "@testing-library/react";
import { Formik } from "formik";
import React from "react";
import Select from "./Select";

it("matches snapshot", () => {
  const { asFragment } = render(
    <Formik>
      <Select label="mock-label" name="mock-name" />
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
