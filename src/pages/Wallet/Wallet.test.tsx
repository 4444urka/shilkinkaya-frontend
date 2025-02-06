// Language: ts
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Wallet from "./Wallet";

describe("Wallet component", () => {
  const mockStore = configureStore([]);

  const renderWallet = (initialCoins: number) => {
    const store = mockStore({
      coins: { value: initialCoins },
    });
    return {
      ...render(
        <Provider store={store}>
          <Wallet />
        </Provider>
      ),
      store,
    };
  };

  test("renders the balance header", () => {
    renderWallet(0);
    expect(screen.getByText("Баланс")).toBeInTheDocument();
  });

  test("displays the current coin balance", () => {
    const initialCoins = 42;
    renderWallet(initialCoins);
    expect(screen.getByText(initialCoins)).toBeInTheDocument();
  });

  test("increments coin balance on button click", () => {
    const initialCoins = 5;
    const { getByRole, store } = renderWallet(initialCoins);
    const tapButton = getByRole("button", { name: "Тап" });
    fireEvent.click(tapButton);
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toBe("coins/increment");
  });
});
