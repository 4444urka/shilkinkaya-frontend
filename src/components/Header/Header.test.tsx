// Language: ts
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
  const renderHeader = (children?: React.ReactNode) =>
    render(
      <MemoryRouter>
        <Header>{children}</Header>
      </MemoryRouter>
    );

  test("renders header with children text", () => {
    renderHeader("Test Header");
    expect(screen.getByText("Test Header")).toBeInTheDocument();
  });

  test("renders navigation buttons", () => {
    renderHeader("Test Header");
    expect(screen.getByRole("button", { name: "Главная" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Аккаунт" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Кошелёк" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Слоты" })).toBeInTheDocument();
  });

  test("opens and closes account menu", () => {
    renderHeader("Test Header");

    // Open menu by clicking "Аккаунт" button
    const accountButton = screen.getByRole("button", { name: "Аккаунт" });
    fireEvent.click(accountButton);

    // Check that menu items are rendered
    const loginMenuItem = screen.getByText("Вход");
    const registerMenuItem = screen.getByText("Регистрация");
    expect(loginMenuItem).toBeInTheDocument();
    expect(registerMenuItem).toBeInTheDocument();

    // Close menu by clicking on a menu item
    fireEvent.click(loginMenuItem);
    expect(loginMenuItem).not.toBeVisible();
  });
});

// Принять: "Рекомендуем установить расширение для прогона jest тестов."
