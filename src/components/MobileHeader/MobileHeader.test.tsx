// Language: ts
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MobileHeader from "./MobileHeader";
import { MemoryRouter } from "react-router-dom";

describe("MobileHeader component", () => {
  const headerText = "Mobile Header Test";

  const renderMobileHeader = () =>
    render(
      <MemoryRouter>
        <MobileHeader>{headerText}</MobileHeader>
      </MemoryRouter>
    );

  test("renders provided children text inside header", () => {
    renderMobileHeader();
    expect(screen.getByText(headerText)).toBeInTheDocument();
  });

  test("renders account IconButton with correct aria-label", () => {
    renderMobileHeader();
    const accountButton = screen.getByLabelText("account of current user");
    expect(accountButton).toBeInTheDocument();
  });

  test("opens menu when account icon is clicked", () => {
    renderMobileHeader();
    const accountButton = screen.getByLabelText("account of current user");
    fireEvent.click(accountButton);
    // Check if menu items are rendered
    expect(screen.getByText("Вход")).toBeInTheDocument();
    expect(screen.getByText("Регистрация")).toBeInTheDocument();
  });

  test("closes menu when a menu item is clicked", () => {
    renderMobileHeader();
    const accountButton = screen.getByLabelText("account of current user");
    fireEvent.click(accountButton);
    const loginMenuItem = screen.getByText("Вход");
    fireEvent.click(loginMenuItem);
    // After clicking, the menu should be closed;
    // if the menu closes, the menu items should not be visible.
    expect(loginMenuItem).not.toBeVisible();
  });

  test("renders AppBar and Toolbar components", () => {
    renderMobileHeader();
    // AppBar doesn't have a role by default, but the Toolbar component is a div.
    // Check for the presence of common elements like the menu icon.
    const menuIcon = screen.getByLabelText("menu");
    expect(menuIcon).toBeInTheDocument();
  });
});
