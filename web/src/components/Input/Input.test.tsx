import { render } from "@testing-library/react";
import { Formik } from "formik";
import { noop } from "lodash";
import React from "react";
import Input from "./Input";

it("matches snapshot", () => {
  const { asFragment } = render(
    <Formik initialValues={{}} onSubmit={noop}>
      <Input label="mock-label" name="mock-id" />
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
