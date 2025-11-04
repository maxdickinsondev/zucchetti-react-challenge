import { render, screen } from "@testing-library/react";
import { CustomTypography } from ".";

describe("<CustomTypography />", () => {
  it("should be render h1", () => {
    render(<CustomTypography variant="h1">My Text</CustomTypography>);
    expect(screen.getByText("My Text")).toBeInTheDocument();
    expect(screen.getByText("My Text").tagName.toLowerCase()).toBe(
      "h1",
    );
  });
});
