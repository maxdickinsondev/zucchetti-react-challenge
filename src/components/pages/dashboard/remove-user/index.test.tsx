import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RemoveUser } from "./index";
import { useRemoveUser } from "../../../../hooks/useRemoveUser";
import { useSelectedUser } from "../../../../contexts/selected-user/useSelectedUser";
import type { CustomDialogProps } from "../../../organisms/dialog";

jest.mock("../../../../hooks/useRemoveUser");
jest.mock("../../../../contexts/selected-user/useSelectedUser");
jest.mock("../../../organisms/dialog", () => ({
  CustomDialog: ({
    user,
    description,
    buttonCancelText,
    buttonConfirmText,
    onReset,
    onDelete,
  }: CustomDialogProps) => (
    <div>
      <p data-testid="dialog-description">{description}</p>
      <button onClick={onReset}>{buttonCancelText}</button>
      <button onClick={onDelete}>{buttonConfirmText}</button>
      <span>{user?.name}</span>
    </div>
  ),
}));

describe("<RemoveUser />", () => {
  const mockMutateAsync = jest.fn();
  const mockOnSelectUser = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRemoveUser as jest.Mock).mockReturnValue({
      mutation: { mutateAsync: mockMutateAsync },
    });
  });

  it("should be render with description", () => {
    (useSelectedUser as jest.Mock).mockReturnValue({
      user: { id: "1", name: "Alice" },
      onSelectUser: mockOnSelectUser,
    });

    render(<RemoveUser />);

    expect(
      screen.getByTestId("dialog-description"),
    ).toHaveTextContent(
      "Tem certeza que deseja remover o usuário Alice",
    );
  });

  it("should be call onReset when click in 'Cancelar'", async () => {
    (useSelectedUser as jest.Mock).mockReturnValue({
      user: { id: "1", name: "Alice" },
      onSelectUser: mockOnSelectUser,
    });

    render(<RemoveUser />);

    await userEvent.click(screen.getByText("Cancelar"));

    expect(mockOnSelectUser).toHaveBeenCalledWith(null);
  });

  it("should be remove user and reset state", async () => {
    (useSelectedUser as jest.Mock).mockReturnValue({
      user: { id: "1", name: "Alice" },
      onSelectUser: mockOnSelectUser,
    });

    render(<RemoveUser />);

    await userEvent.click(screen.getByText("Sim, remover"));

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalledWith({ id: "1" });
      expect(mockOnSelectUser).toHaveBeenCalledWith(null);
    });
  });

  it("should be not call mutateAsync when has not user selected", async () => {
    (useSelectedUser as jest.Mock).mockReturnValue({
      user: null,
      onSelectUser: mockOnSelectUser,
    });

    render(<RemoveUser />);

    await userEvent.click(screen.getByText("Sim, remover"));

    await waitFor(() => {
      expect(mockMutateAsync).not.toHaveBeenCalled();
      expect(mockOnSelectUser).not.toHaveBeenCalled();
    });
  });
});
