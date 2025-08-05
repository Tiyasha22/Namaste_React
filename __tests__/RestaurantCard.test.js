import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withAggregatedDiscount,
} from "../src/components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
test("should render RestaurantCard component with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});
test("should have promoted label", () => {
  const DiscountedCard = withAggregatedDiscount(RestaurantCard);
  render(<DiscountedCard resData={MOCK_DATA} />);
  const discount = screen.getByLabelText("Discount Available");
  expect(discount).toBeInTheDocument();
});
