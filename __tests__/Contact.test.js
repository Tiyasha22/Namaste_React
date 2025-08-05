import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";
test("should load contact us Component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
test("should have a button", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
test("should have placeholder-name", () => {
  render(<Contact />);
  const namePlaceholder = screen.getByPlaceholderText("name");
  expect(namePlaceholder).toBeInTheDocument();
});
