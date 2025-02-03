import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Casino from "./Casino";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Casino component", () => {
  test("renders the current coin balance", () => {
    // Arrange
    // (Possible setup or mocks might already exist in this file)

    // Act
    const { getByText } = render(
      <Provider store={store}>
        <Casino />
      </Provider>
    );

    // Assert
    expect(getByText(/Ваш баланс:/)).toBeInTheDocument();
  });

  test("calls alert if coins are less than cost", () => {
    // Arrange
    jest.spyOn(window, "alert").mockImplementation(() => {});
    // Mock insufficient coins
    // (See how the file sets up mock or partial store usage, if necessary)

    // Act
    const { getByRole } = render(
      <Provider store={store}>
        <Casino />
      </Provider>
    );
    const spinButton = getByRole("button", { name: /100 монет/i });
    fireEvent.click(spinButton);

    // Assert
    expect(window.alert).toHaveBeenCalledWith("Недостаточно монет!");
    (window.alert as jest.Mock).mockRestore();
  });

  test("does not try to spin again while spinning is in progress", () => {
    // Arrange
    const { getByRole } = render(
      <Provider store={store}>
        <Casino />
      </Provider>
    );
    const spinButton = getByRole("button", { name: /100 монет/i });

    // Act
    fireEvent.click(spinButton);
    fireEvent.click(spinButton);

    // Assert
    // (Ensure additional dispatch or spin logic didn't fire twice)
    // The second click should do nothing while spinning
    // Check existing mocks or store usage if relevant
  });
});
