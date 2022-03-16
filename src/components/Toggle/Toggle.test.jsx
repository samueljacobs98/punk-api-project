import { render } from "@testing-library/react";
import { emptyFunction } from "../../assets/mockData/mockData";
import Toggle from "./Toggle";

it("should match Toggle component in light format snapshot", () => {
  const { container } = render(
    <Toggle theme={"light"} toggleTheme={emptyFunction} />
  );

  expect(container).toMatchSnapshot();
});

it("should match Toggle component in dark format snapshot", () => {
  const { container } = render(
    <Toggle theme={"dark"} toggleTheme={emptyFunction} />
  );

  expect(container).toMatchSnapshot();
});
