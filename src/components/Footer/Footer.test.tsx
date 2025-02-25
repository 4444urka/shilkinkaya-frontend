// Language: ts
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

// Mock the useAppMedia hook to return a fixed value (e.g., false) for testing
jest.mock("../../hooks/hooks", () => ({
  useAppMedia: () => false,
}));

describe("Footer component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("renders 'О нас' section with description", () => {
    const aboutHeading = screen.getByText("О нас");
    const aboutText = screen.getByText("Здесь самые умные мысли. И Коробец.");
    expect(aboutHeading).toBeInTheDocument();
    expect(aboutText).toBeInTheDocument();
  });

  test("renders 'Контакты' section with contact details", () => {
    const contactsHeading = screen.getByText("Контакты");
    const addressText = screen.getByText(
      "Адрес: ул. Шилкинская, 21, Владивосток"
    );
    const phoneText = screen.getByText("+7 (995) 867-02-08");
    expect(contactsHeading).toBeInTheDocument();
    expect(addressText).toBeInTheDocument();
    expect(phoneText).toBeInTheDocument();
  });

  test("renders 'Социальные сети' section with Telegram button link", () => {
    const socialHeading = screen.getByText("Социальные сети");
    expect(socialHeading).toBeInTheDocument();

    // The link wrapping the Telegram button
    const telegramLink = screen.getByRole("link", { name: /telegram/i });
    expect(telegramLink).toBeInTheDocument();
    expect(telegramLink).toHaveAttribute(
      "href",
      "https://t.me/+u_ScG3ygy3QyYTcy"
    );
    expect(telegramLink).toHaveAttribute("target", "_blank");
    expect(telegramLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("renders footer with current year copyright", () => {
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      new RegExp(`© ${currentYear} Шилкинская 21. Все права защищены.`)
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
