import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toolbar } from ".";

const meta = {
  title: "Components/Toolbar",
  component: Toolbar,
} satisfies Meta<typeof Toolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Dashboard de Usuários",
    buttonText: "Adicinar usuário",
    onClick: () => alert("add user"),
  },
};
