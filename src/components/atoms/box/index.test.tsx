import { render, screen } from "@testing-library/react";
import { CustomBox } from ".";

describe("<Box />", () => {
  it("should be render box correctly", () => {
    render(<CustomBox>Hello World</CustomBox>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
