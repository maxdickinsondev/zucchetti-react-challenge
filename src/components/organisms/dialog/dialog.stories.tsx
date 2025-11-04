import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomDialog } from ".";
import type { User } from "../../../services/users/types";

const meta: Meta<typeof CustomDialog> = {
  title: "Components/Dialog",
  component: CustomDialog,
};

export default meta;

type Story = StoryObj<typeof CustomDialog>;

const CustomDialogWithState = () => {
  const [user] = useState<User | null>({} as User);

  return (
    <CustomDialog
      user={user}
      description={
        <>
          Tem certeza que deseja remover o usuário{" "}
          <strong>{user?.name}</strong>? Esta ação não poderá ser
          desfeita.
        </>
      }
      buttonCancelText="Cancelar"
      buttonConfirmText="Sim, remover"
      onReset={() => alert("reset")}
      onDelete={() => alert("delete")}
    />
  );
};

export const Primary: Story = {
  render: () => <CustomDialogWithState />,
};
