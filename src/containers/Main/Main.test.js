import { render } from "@testing-library/react";
import { beers, emptyFunction, filters } from "../../assets/mockData/mockData";
import Main from "./Main";

it("should match Main component in light, desk format snapshot", () => {
  const { container } = render(
    <Main
      windowType={"desk"}
      beers={beers}
      filters={filters}
      handleFilter={emptyFunction}
      handleSort={emptyFunction}
      theme={"light"}
    />
  );
  expect(container).toMatchSnapshot();
});

it("should match Main component in light, mob format snapshot", () => {
  const { container } = render(
    <Main
      windowType={"mob"}
      beers={beers}
      filters={filters}
      handleFilter={emptyFunction}
      handleSort={emptyFunction}
      theme={"light"}
    />
  );
  expect(container).toMatchSnapshot();
});

it("should match Main component in dark, desk format snapshot", () => {
  const { container } = render(
    <Main
      windowType={"desk"}
      beers={beers}
      filters={filters}
      handleFilter={emptyFunction}
      handleSort={emptyFunction}
      theme={"dark"}
    />
  );
  expect(container).toMatchSnapshot();
});

it("should match Main component in dark, mob format snapshot", () => {
  const { container } = render(
    <Main
      windowType={"mob"}
      beers={beers}
      filters={filters}
      handleFilter={emptyFunction}
      handleSort={emptyFunction}
      theme={"dark"}
    />
  );
  expect(container).toMatchSnapshot();
});
