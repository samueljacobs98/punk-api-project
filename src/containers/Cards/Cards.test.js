import { render } from "@testing-library/react";
import Cards from "./Cards";
import { beers } from "../../assets/mockData/mockData";

it("should match Cards component in light format snapshot", () => {
  const { container } = render(<Cards beers={beers} theme={"light"} />);

  expect(container).toMatchSnapshot();
});

it("should match Cards component in dark format snapshot", () => {
  const { container } = render(<Cards beers={beers} theme={"dark"} />);

  expect(container).toMatchSnapshot();
});
