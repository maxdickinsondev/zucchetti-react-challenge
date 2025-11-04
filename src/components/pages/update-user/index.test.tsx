import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateUser } from "../../../hooks/useUpdateUser";
import { useValidate } from "../../../hooks/useValidate";
import { useForm } from "../../../hooks/useForm";
import { findUserById } from "../../../services/users";
import { StatusEnum } from "../../../services/users/types";
import UpdateUser from "./index";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock("../../../hooks/useUpdateUser");
jest.mock("../../../hooks/useValidate");
jest.mock("../../../hooks/useForm");
jest.mock("../../../services/users");

const mockNavigate = jest.fn();
const mockMutateAsync = jest.fn();
const mockValidate = jest.fn();
const mockSetForm = jest.fn();
const mockOnChange = jest.fn();

describe("<UpdateUser />", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useParams as jest.Mock).mockReturnValue({ id: "123" });

    (useUpdateUser as jest.Mock).mockReturnValue({
      mutateAsync: mockMutateAsync,
    });

    (useValidate as jest.Mock).mockReturnValue({
      errors: {},
      validate: mockValidate,
    });

    (useForm as jest.Mock).mockReturnValue({
      form: { name: "John", email: "john@email.com" },
      setForm: mockSetForm,
      onChange: mockOnChange,
    });
  });

  it("should be fetch user on mount", async () => {
    (findUserById as jest.Mock).mockResolvedValue({
      name: "Alice",
      email: "alice@email.com",
    });

    render(<UpdateUser />);

    await waitFor(() => {
      expect(findUserById).toHaveBeenCalledWith("123");
      expect(mockSetForm).toHaveBeenCalledWith({
        name: "Alice",
        email: "alice@email.com",
      });
    });
  });

  it("should be call goBack and navigate to '/'", async () => {
    render(<UpdateUser />);

    const goBackButton = screen.getByRole("button", {
      name: /voltar/i,
    });
    await userEvent.click(goBackButton);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("should be validate user and save", async () => {
    mockValidate.mockResolvedValue(true);
    render(<UpdateUser />);

    const saveButton = screen.getByRole("button", {
      name: /salvar/i,
    });
    await userEvent.click(saveButton);

    await waitFor(() => {
      expect(mockValidate).toHaveBeenCalledWith({
        name: "John",
        email: "john@email.com",
      });

      expect(mockMutateAsync).toHaveBeenCalledWith({
        id: "123",
        name: "John",
        email: "john@email.com",
        status: StatusEnum.ACTIVE,
      });

      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });

  it("should be not save user if validation failed", async () => {
    mockValidate.mockResolvedValue(false);
    render(<UpdateUser />);

    const saveButton = screen.getByRole("button", {
      name: /salvar/i,
    });
    await userEvent.click(saveButton);

    await waitFor(() => {
      expect(mockMutateAsync).not.toHaveBeenCalled();
      expect(mockNavigate).not.toHaveBeenCalledWith("/");
    });
  });
});
