import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomForm, type FormProps } from "./index";
import type { CustomBoxProps } from "../../atoms/box";
import type { CustomStackProps } from "../../atoms/stack";
import type { CustomTypographyProps } from "../../atoms/typography";
import type { CustomTextFieldProps } from "../../atoms/textfield";
import type { CustomButtonProps } from "../../atoms/button";

jest.mock("../../atoms/box", () => ({
  CustomBox: ({ children }: CustomBoxProps) => (
    <div data-testid="custom-box">{children}</div>
  ),
}));

jest.mock("../../atoms/stack", () => ({
  CustomStack: ({ children }: CustomStackProps) => (
    <div data-testid="custom-stack">{children}</div>
  ),
}));

jest.mock("../../atoms/typography", () => ({
  CustomTypography: ({ children }: CustomTypographyProps) => (
    <h1 data-testid="custom-typography">{children}</h1>
  ),
}));

jest.mock("../../atoms/textfield", () => ({
  CustomTextField: ({
    label,
    value,
    helperText,
    onChange,
  }: CustomTextFieldProps) => {
    const id = (label as string)?.toLowerCase()?.replace(/\s/g, "-");
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          data-testid={`input-${label}`}
          value={value as string}
          onChange={(e) => onChange?.(e)}
        />
        {helperText && (
          <span data-testid={`error-${label}`}>{helperText}</span>
        )}
      </div>
    );
  },
}));

jest.mock("../../atoms/button", () => ({
  CustomButton: ({ children, onClick }: CustomButtonProps) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

describe("<CustomForm />", () => {
  const mockOnChange = jest.fn();
  const mockGoBack = jest.fn();
  const mockOnSave = jest.fn();

  const defaultProps: FormProps = {
    title: "Adicionar Usuário",
    form: { name: "John Doe", email: "john@example.com" },
    errors: {},
    onChange: mockOnChange,
    goBack: mockGoBack,
    onSave: mockOnSave,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be render correctly", () => {
    render(<CustomForm {...defaultProps} />);

    expect(screen.getByTestId("custom-typography")).toHaveTextContent(
      "Adicionar Usuário",
    );
    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();

    expect(screen.getByDisplayValue("John Doe")).toBeInTheDocument();
    expect(
      screen.getByDisplayValue("john@example.com"),
    ).toBeInTheDocument();
  });

  it("should be call onChange", async () => {
    render(<CustomForm {...defaultProps} />);
    const user = userEvent.setup();

    const nameInput = screen.getByTestId("input-Nome");
    await user.type(nameInput, "a");

    expect(mockOnChange).toHaveBeenCalled();
  });

  it("should be call goBack", async () => {
    render(<CustomForm {...defaultProps} />);
    const user = userEvent.setup();

    await user.click(screen.getByText("Voltar"));
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  it("should be call onSave", async () => {
    render(<CustomForm {...defaultProps} />);
    const user = userEvent.setup();

    await user.click(screen.getByText("Salvar"));
    expect(mockOnSave).toHaveBeenCalledTimes(1);
  });

  it("should be display errror messages", () => {
    render(
      <CustomForm
        {...defaultProps}
        errors={{
          name: "Nome obrigatório",
          email: "E-mail inválido",
        }}
      />,
    );

    expect(screen.getByTestId("error-Nome")).toHaveTextContent(
      "Nome obrigatório",
    );
    expect(screen.getByTestId("error-E-mail")).toHaveTextContent(
      "E-mail inválido",
    );
  });
});
