/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Chat from "./Chat";

// src/pages/Chat/Chat.test.tsx

const mockStore = configureStore([]);

Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
  writable: true,
  value: jest.fn()
});

describe("Chat component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      messages: {
        messages: [
          { ownerId: 2, text: "Hello", date: "2023-01-01" },
          { ownerId: 1, text: "Test", date: "2023-01-01" },
        ],
      },
    });
    store.dispatch = jest.fn();
  });

  function renderChat() {
    return render(
      <Provider store={store}>
        <MemoryRouter>
          <Chat />
        </MemoryRouter>
      </Provider>
    );
  }

  test("renders chat container", () => {
    renderChat();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("displays initial messages", () => {
    renderChat();
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("does not render DownButton when fewer than 12 messages", () => {
    renderChat();
    expect(screen.queryByRole("button", { name: /down/i })).toBeNull();
  });

  test("renders DownButton if many messages and user not at bottom", () => {
    store = mockStore({
      messages: {
        messages: Array.from({ length: 12 }, (_, i) => ({
          ownerId: 1,
          text: `Message ${i}`,
          date: `2023-01-0${i + 1}`,
        })),
      },
    });
    renderChat();
    // By default we assume not at bottom until scrolled
    expect(screen.getByRole("button", { name: /directions/i })).toBeInTheDocument();
  });
});
