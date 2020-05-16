import { render } from "@testing-library/react";
import { Formik } from "formik";
import React from "react";
import Input from "./Input";

it("matches snapshot", () => {
  const { asFragment } = render(
    <Formik>
      <Input label="mock-label" name="mock-id" />
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
