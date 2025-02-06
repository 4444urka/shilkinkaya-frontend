// Language: ts
import React from "react";
import { render, screen } from "@testing-library/react";
import AuthForm, { IAuthFormProps } from "./AuthForm";
// import userEvent from "@testing-library/user-event";

// Create a dummy Form component if not provided for testing
jest.mock("../Form/Form", () => {
  return ({
    children,
    sx,
    ...props
  }: {
    children: React.ReactNode;
    sx?: React.CSSProperties;
  }) => (
    <form data-testid="auth-form" style={sx} {...props}>
      {children}
    </form>
  );
});

describe("AuthForm component", () => {
  const defaultProps: Omit<IAuthFormProps, "children"> = {
    buttonText: "Submit",
    onSubmit: jest.fn(),
  };

  const renderAuthForm = (childrenText: string = "Login Form") =>
    render(<AuthForm {...defaultProps}>{childrenText}</AuthForm>);

  test("renders heading with provided children text", () => {
    const headingText = "Login Form";
    renderAuthForm(headingText);
    // Expect the heading text to be rendered inside a Typography element.
    expect(screen.getByText(headingText)).toBeInTheDocument();
  });

  test("renders username TextField with label 'Логин'", () => {
    renderAuthForm();
  });
});
