import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders test", () => {
  render(<App />);
  const element = screen.getByText(/test/i);
  expect(element).toBeInTheDocument();
});
