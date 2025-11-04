import { render, screen, fireEvent } from "@testing-library/react";
import { CustomDialog } from "./index"; // ajuste o caminho conforme sua estrutura
import { StatusEnum, type User } from "../../../services/users/types";

describe("<CustomDialog />", () => {
  const mockUser: User = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    status: StatusEnum.ACTIVE,
  };

  const mockProps = {
    user: mockUser,
    description: "Tem certeza que deseja excluir o usuário?",
    buttonCancelText: "Cancelar",
    buttonConfirmText: "Confirmar",
    onReset: jest.fn(),
    onDelete: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be render description and buttons", () => {
    render(<CustomDialog {...mockProps} />);

    expect(
      screen.getByText("Tem certeza que deseja excluir o usuário?"),
    ).toBeInTheDocument();

    expect(screen.getByText("Cancelar")).toBeInTheDocument();
    expect(screen.getByText("Confirmar")).toBeInTheDocument();
  });

  it("should be not render dialog when user is null", () => {
    render(<CustomDialog {...mockProps} user={null} />);

    const dialog = screen.queryByRole("dialog");
    expect(dialog).not.toBeInTheDocument();
  });

  it("should be call onReset when click in cancel", () => {
    render(<CustomDialog {...mockProps} />);

    const cancelButton = screen.getByText("Cancelar");
    fireEvent.click(cancelButton);

    expect(mockProps.onReset).toHaveBeenCalledTimes(1);
  });

  it("should be call onDelete when click in confirm", () => {
    render(<CustomDialog {...mockProps} />);

    const confirmButton = screen.getByText("Confirmar");
    fireEvent.click(confirmButton);

    expect(mockProps.onDelete).toHaveBeenCalledTimes(1);
  });
});
