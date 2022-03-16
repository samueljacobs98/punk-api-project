import { render } from "@testing-library/react";
import { emptyFunction, filters } from "../../assets/mockData/mockData";
import Aside from "./Aside";

it("should match Aside component in light, desk format snapshot", () => {
  const { container } = render(
    <Aside
      windowType={"desk"}
      filters={filters}
      handleFilter={emptyFunction}
      handleSort={emptyFunction}
      theme={"light"}
    />
  );

  expect(container).toMatchSnapshot();
});

it("should match Aside component in light, mob format snapshot", () => {
  const { container } = render(
    <Aside
      windowType={"mob"}
      filters={filters}
      handleFilter={emptyFunction}
      handleSort={emptyFunction}
      theme={"light"}
    />
  );

  expect(container).toMatchSnapshot();
});

it("should match Aside component in dark, desk format snapshot", () => {
  const { container } = render(
    <Aside
      windowType={"desk"}
      filters={filters}
      handleFilter={emptyFunction}
      handleSort={emptyFunction}
      theme={"dark"}
    />
  );

  expect(container).toMatchSnapshot();
});

it("should match Aside component in dark, mob format snapshot", () => {
  const { container } = render(
    <Aside
      windowType={"mob"}
      filters={filters}
      handleFilter={emptyFunction}
      handleSort={emptyFunction}
      theme={"dark"}
    />
  );

  expect(container).toMatchSnapshot();
});
