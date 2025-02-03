// Language: ts
import React from "react";
import { render, screen } from "@testing-library/react";
import AnimatedHeader from "./AnimatedHeader";
import { MemoryRouter } from "react-router-dom";

describe("AnimatedHeader component", () => {
  const headerText = "Test Animated Header";

  const renderAnimatedHeader = () =>
    render(
      <MemoryRouter>
        <AnimatedHeader>{headerText}</AnimatedHeader>
      </MemoryRouter>
    );

  test("renders container with animatedHeader class", () => {
    renderAnimatedHeader();
    // Query using className selector from document, since the Box doesn't expose role by default.
    const animatedContainer = document.querySelector(".animatedHeader");
    expect(animatedContainer).toBeInTheDocument();
  });

  test("renders exactly 100 scroll items", () => {
    renderAnimatedHeader();
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(100);
  });

  test("each scroll item displays the provided children text", () => {
    renderAnimatedHeader();
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link.textContent).toBe(headerText);
    });
  });

  test("each NavLink navigates to '/'", () => {
    renderAnimatedHeader();
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link.getAttribute("href")).toBe("/");
    });
  });
});
