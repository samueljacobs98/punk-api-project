import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("should match App component in format snapshot", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

it("should render sort selector buttons", () => {
  render(<App />);
  const sortSelector = screen.getByLabelText("Sort");
  expect(sortSelector).toBeInTheDocument();
});

it("should render all filter buttons", () => {
  render(<App />);
  const filterBtns = screen.getAllByRole("button");
  filterBtns.forEach((btn) => {
    expect(btn).toBeInTheDocument();
  });
});

it("should render relevant cards after search", () => {
  render(<App />);
  const searchInput = screen.getByLabelText("Search beers");
  act(() => userEvent.type(searchInput, "Buzz"));
  expect(screen.findByText("Buzz")).toBeInTheDocument;
});

it("should only render beers fitting criteria when filters applied", () => {
  render(<App />);
  const highABVButton = screen.getByLabelText("Filter for high ABV only");
  const classicRangeButton = screen.getByLabelText(
    "Filter for the Classic Range only"
  );
  act(() => userEvent.click(highABVButton));
  act(() => userEvent.click(classicRangeButton));
  expect(screen.findByText("Buzz")).not.toBeInTheDocument;
  expect(screen.findByText("Storm")).toBeInTheDocument;
  expect(screen.findByText("Paradox Islay")).toBeInTheDocument;
});

it("should only render beers fitting filter criteria even when in dark format", () => {
  render(<App />);
  const highABVButton = screen.getByLabelText("Filter for high ABV only");
  const classicRangeButton = screen.getByLabelText(
    "Filter for the Classic Range only"
  );
  const toggleThemeButton = screen.getByLabelText("Toggle Theme");
  act(() => userEvent.click(toggleThemeButton));
  act(() => userEvent.click(highABVButton));
  act(() => userEvent.click(classicRangeButton));
  expect(screen.findByText("Buzz")).not.toBeInTheDocument;
  expect(screen.findByText("Storm")).toBeInTheDocument;
  expect(screen.findByText("Paradox Islay")).toBeInTheDocument;
});
