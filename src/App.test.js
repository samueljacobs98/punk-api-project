import { render } from "@testing-library/react";
import App from "./App";

it("should match App component in format snapshot", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
