import { render } from "@testing-library/react";
import Card from "./Card";
import { beer } from "../../assets/mockData/mockData";

it("should match Card component snapshot", () => {
  const { container } = render(<Card beer={beer} />);

  expect(container).toMatchSnapshot();
});
