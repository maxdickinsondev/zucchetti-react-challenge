import { render, screen, fireEvent } from "@testing-library/react";
import { CustomButton } from ".";
import "@testing-library/jest-dom";

describe("<CustomButton />", () => {
  it("should be render correct text", () => {
    render(<CustomButton>Click me</CustomButton>);
    expect(
      screen.getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it("should be call onClick correctly", () => {
    const handleClick = jest.fn();
    render(
      <CustomButton onClick={handleClick}>Click me</CustomButton>,
    );

    fireEvent.click(
      screen.getByRole("button", { name: /click me/i }),
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be apply props correctly", () => {
    render(
      <CustomButton color="primary" variant="contained">
        Primary
      </CustomButton>,
    );

    const button = screen.getByRole("button", { name: /primary/i });
    expect(button).toHaveClass("MuiButton-containedPrimary");
  });

  it("should be accept children correctly", () => {
    render(
      <CustomButton>
        <span data-testid="icon">⭐</span> Icon Button
      </CustomButton>,
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /icon button/i }),
    ).toBeInTheDocument();
  });
});
