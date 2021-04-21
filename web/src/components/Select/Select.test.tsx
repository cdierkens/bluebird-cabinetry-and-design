import { render } from "@testing-library/react";
import { Formik } from "formik";
import { noop } from "lodash";
import React from "react";
import Select from "./Select";

it("matches snapshot", () => {
  const { asFragment } = render(
    <Formik initialValues={{}} onSubmit={noop}>
      <Select label="mock-label" name="mock-name" />
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
