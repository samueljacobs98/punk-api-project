import { render } from "@testing-library/react";
import Filter from "./Filter";
import { emptyFunction, filters } from "../../assets/mockData/mockData";

it("should match Filter component in desktop format snapshot", () => {
  const { container } = render(
    <Filter
      windowType={"desk"}
      filters={filters}
      handleFilter={emptyFunction}
      theme={"light"}
    />
  );

  expect(container).toMatchSnapshot();
});

it("should match Filter component in mobile format snapshot", () => {
  const { container } = render(
    <Filter
      windowType={"mob"}
      filters={filters}
      handleFilter={emptyFunction}
      theme={"light"}
    />
  );

  expect(container).toMatchSnapshot();
});
