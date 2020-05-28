import { render } from "@testing-library/react";
import React from "react";
import ToTheTradeForm from "./ToTheTradeForm";

it("matches snapshot", () => {
  const { asFragment } = render(<ToTheTradeForm />);

  expect(asFragment()).toMatchSnapshot();
});
