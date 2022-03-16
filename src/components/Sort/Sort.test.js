import { render } from "@testing-library/react";
import Sort from "./Sort";
import { emptyFunction } from "../../assets/mockData/mockData";

it("should match Sort component in desktop format snapshot", () => {
  const { container } = render(
    <Sort windowType={"desk"} handleSort={emptyFunction} theme={"light"} />
  );

  expect(container).toMatchSnapshot();
});

it("should match Sort component in mobile format snapshot", () => {
  const { container } = render(
    <Sort windowType={"mob"} handleSort={emptyFunction} theme={"light"} />
  );

  expect(container).toMatchSnapshot();
});
