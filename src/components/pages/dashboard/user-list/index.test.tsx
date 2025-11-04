import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UserList } from "./index";
import { StatusEnum } from "../../../../services/users/types";
import { useListUsers } from "../../../../hooks/useListUsers";
import { useSelectedUser } from "../../../../contexts/selected-user/useSelectedUser";

jest.mock("../../../../hooks/useListUsers", () => ({
  useListUsers: jest.fn(),
}));

jest.mock(
  "../../../../contexts/selected-user/useSelectedUser",
  () => ({
    useSelectedUser: jest.fn(),
  }),
);

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("<UserList />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be render user list correctly", () => {
    (useListUsers as jest.Mock).mockReturnValue({
      data: [
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          status: StatusEnum.ACTIVE,
        },
      ],
    });

    (useSelectedUser as jest.Mock).mockReturnValue({
      onSelectUser: jest.fn(),
    });

    render(
      <MemoryRouter>
        <UserList />
      </MemoryRouter>,
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("Ativo")).toBeInTheDocument();
  });

  it("should be navigate to the edit page correctly", () => {
    const mockOnSelectUser = jest.fn();

    (useListUsers as jest.Mock).mockReturnValue({
      data: [
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          status: StatusEnum.ACTIVE,
        },
      ],
    });

    (useSelectedUser as jest.Mock).mockReturnValue({
      onSelectUser: mockOnSelectUser,
    });

    render(
      <MemoryRouter>
        <UserList />
      </MemoryRouter>,
    );

    const editButton = screen.getAllByRole("button")[0];
    fireEvent.click(editButton);

    expect(mockNavigate).toHaveBeenCalledWith("/user/edit/1");
  });

  it("should be call onSelectUser when click in delete button", () => {
    const mockOnSelectUser = jest.fn();

    (useListUsers as jest.Mock).mockReturnValue({
      data: [
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          status: StatusEnum.ACTIVE,
        },
      ],
    });

    (useSelectedUser as jest.Mock).mockReturnValue({
      onSelectUser: mockOnSelectUser,
    });

    render(
      <MemoryRouter>
        <UserList />
      </MemoryRouter>,
    );

    const deleteButton = screen.getAllByRole("button")[1];
    fireEvent.click(deleteButton);

    expect(mockOnSelectUser).toHaveBeenCalledWith({
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      status: StatusEnum.ACTIVE,
    });
  });
});
