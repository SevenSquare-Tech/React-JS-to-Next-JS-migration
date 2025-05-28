import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders appTest", () => {
  render(<App />);
  const element = screen.getByText(/appTest/i);
  expect(element).toBeInTheDocument();
});
