import { waitFor } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import ContactForm from "./ContactForm";

describe("<ContactForm />", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should show an error message when name is left blank", async () => {
    // Arrange
    const { getByLabelText, getByText } = render(<ContactForm />);
    const input = getByLabelText("Name*");

    // Act
    fireEvent.blur(input);

    // Assert
    await waitFor(() => {
      expect(getByText("Please enter your name.")).toBeInTheDocument();
    });
  });

  it("should show an error message phone number is invalid", async () => {
    // Arrange
    const { getByLabelText, getByText } = render(<ContactForm />);
    const input = getByLabelText("Phone Number");

    // Act
    fireEvent.input(input, { target: { value: "abcdefghij" } });
    fireEvent.blur(input);

    // Assert
    await waitFor(() => {
      expect(
        getByText("Please enter a 10 digit phone number")
      ).toBeInTheDocument();
    });
  });
});
