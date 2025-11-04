import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import CreateUser from ".";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "../../../hooks/useCreateUser";
import { useValidate } from "../../../hooks/useValidate";
import { useForm } from "../../../hooks/useForm";
import { StatusEnum } from "../../../services/users/types";
import type { FormProps } from "../../organisms/form";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../../hooks/useCreateUser", () => ({
  useCreateUser: jest.fn(),
}));

jest.mock("../../../hooks/useValidate", () => ({
  useValidate: jest.fn(),
}));

jest.mock("../../../hooks/useForm", () => ({
  useForm: jest.fn(),
}));

jest.mock("../../organisms/form", () => ({
  CustomForm: ({ title, goBack, onSave }: FormProps) => (
    <div>
      <h1>{title}</h1>
      <button onClick={goBack}>Voltar</button>
      <button onClick={onSave}>Salvar</button>
    </div>
  ),
}));

describe("<CreateUser />", () => {
  const mockNavigate = jest.fn();
  const mockMutateAsync = jest.fn();
  const mockValidate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useCreateUser as jest.Mock).mockReturnValue({
      mutateAsync: mockMutateAsync,
    });
    (useValidate as jest.Mock).mockReturnValue({
      errors: {},
      validate: mockValidate,
    });
    (useForm as jest.Mock).mockReturnValue({
      form: { name: "John", email: "john@example.com" },
      onChange: jest.fn(),
    });
    jest.clearAllMocks();
  });

  it("should be render title correctly", () => {
    render(<CreateUser />);
    expect(screen.getByText("Adicionar usuário")).toBeInTheDocument();
  });

  it("should be go back when click in back button", () => {
    render(<CreateUser />);
    fireEvent.click(screen.getByText("Voltar"));
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("should be validate and save when is correct", async () => {
    mockValidate.mockResolvedValue(true);

    render(<CreateUser />);
    fireEvent.click(screen.getByText("Salvar"));

    await waitFor(() => {
      expect(mockValidate).toHaveBeenCalledWith({
        name: "John",
        email: "john@example.com",
      });
      expect(mockMutateAsync).toHaveBeenCalledWith({
        name: "John",
        email: "john@example.com",
        status: StatusEnum.ACTIVE,
      });
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });

  it("should be not call mutate async when validate not passed", async () => {
    mockValidate.mockResolvedValue(false);

    render(<CreateUser />);
    fireEvent.click(screen.getByText("Salvar"));

    await waitFor(() => {
      expect(mockMutateAsync).not.toHaveBeenCalled();
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });
});
