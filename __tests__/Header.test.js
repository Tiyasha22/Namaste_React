import { Provider } from "react-redux";
import Header from "../src/components/Header";
import { render, screen } from "@testing-library/react";
import appStore from "../src/utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render Header Component with a login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const checkButton = screen.getByRole("button", { name: "Login" });
  expect(checkButton).toBeInTheDocument();
});
test("should have 0 cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText("Cart (0 items)");
  expect(cartItem).toBeInTheDocument();
});
