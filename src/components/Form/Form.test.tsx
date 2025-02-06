// Language: tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form, { IFormProps } from "./Form";

describe("Form component", () => {
  const setup = (props?: Partial<IFormProps>) => {
    const onSubmit = jest.fn();
    const utils = render(
      <Form onSubmit={onSubmit} data-testid="form" {...props}>
        <input name="testInput" placeholder="Enter text" />
        <button type="submit">Submit</button>
      </Form>
    );
    const input = screen.getByPlaceholderText("Enter text") as HTMLInputElement;
    const button = screen.getByRole("button", { name: /submit/i });
    return { onSubmit, input, button, ...utils };
  };

  test("renders children elements", () => {
    setup();
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("updates input value on change", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("hello");
  });

  test("calls onSubmit with form values when submitted", () => {
    const { input, onSubmit } = setup();
    fireEvent.change(input, { target: { value: "test value" } });
    fireEvent.submit(input.form!);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ testInput: "test value" });
  });

  test("does not override children elements without a name prop", () => {
    // Render a static element (a paragraph) without a name prop.
    const staticText = "Static content";
    render(
      <Form onSubmit={jest.fn()}>
        <p>{staticText}</p>
      </Form>
    );
  });
});
