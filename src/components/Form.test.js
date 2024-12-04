import { render, screen } from "@testing-library/react";
import { act } from "react";
import Form from "./Form";

describe("Forms", () => {
  it("should render quantity", async () => {
    const component = render(<Form />);

    expect(component.getByText(/quantity/i)).toBeInTheDocument;
  });
});
test("has add button", () => {
  render(<Form />);
  const appVersion = screen.getByText(/Add/i);
  expect(appVersion).toBeInTheDocument;
});
