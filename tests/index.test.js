import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

test("renders Home component", () => {
    render(<Home />);
    const homeElement = screen.getByTestId("home");
    expect(homeElement).toBeInTheDocument();
  });
  
  test("clicking button increments counter", () => {
    render(<Home />);
    const buttonElement = screen.getByTestId("increment-button");
    const counterElement = screen.getByTestId("counter");
    fireEvent.click(buttonElement);
    expect(counterElement).toHaveTextContent("1");
  });