import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders travel", () => {
  render(<App />);
  const linkElement = screen.getByText(/travel/i);
  expect(linkElement).toBeInTheDocument;
});

test("contains quantity", () => {
  render(<App />);
  const appVersion = screen.getByText(/quantity/i);
  expect(appVersion).toBeInTheDocument;
});
