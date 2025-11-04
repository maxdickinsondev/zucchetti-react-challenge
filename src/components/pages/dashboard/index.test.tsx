import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from "./index";
import { useNavigate } from "react-router-dom";
import type { ToolbarProps } from "../../molecules/toolbar";
import type { SelectedUserProviderProps } from "../../../contexts/selected-user/types";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("./user-list", () => ({
  UserList: () => <div data-testid="user-list">User List</div>,
}));

jest.mock("./remove-user", () => ({
  RemoveUser: () => <div data-testid="remove-user">Remove User</div>,
}));

jest.mock("../../molecules/toolbar", () => ({
  Toolbar: ({ title, buttonText, onClick }: ToolbarProps) => (
    <div>
      <h1>{title}</h1>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  ),
}));

jest.mock(
  "../../../contexts/selected-user/SelectedUserProvider",
  () => ({
    SelectedUserProvider: ({
      children,
    }: SelectedUserProviderProps) => (
      <div data-testid="selected-user-provider">{children}</div>
    ),
  }),
);

describe("<Dashboard />", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  it("should be render title and subcomponents", () => {
    render(<Dashboard />);

    expect(
      screen.getByText("Dashboard de Usuários"),
    ).toBeInTheDocument();
    expect(screen.getByText("Adicionar usuário")).toBeInTheDocument();

    expect(screen.getByTestId("remove-user")).toBeInTheDocument();
    expect(screen.getByTestId("user-list")).toBeInTheDocument();
  });

  it("should be navigate to the add user page", async () => {
    render(<Dashboard />);

    const button = screen.getByText("Adicionar usuário");
    await userEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/user/create");
  });
});
