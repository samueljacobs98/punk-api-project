import { render } from "@testing-library/react";
import Header from "./Header";
import { emptyFunction } from "../../assets/mockData/mockData";

it("should match Header component in desktop format snapshot", () => {
  const { container } = render(
    <Header
      windowType={"desk"}
      searchTerm={""}
      handleInput={emptyFunction}
      theme={"light"}
    />
  );

  expect(container).toMatchSnapshot();
});

it("should match Header component in mobile format snapshot", () => {
  const { container } = render(
    <Header
      windowType={"mob"}
      searchTerm={""}
      handleInput={emptyFunction}
      theme={"light"}
    />
  );

  expect(container).toMatchSnapshot();
});
