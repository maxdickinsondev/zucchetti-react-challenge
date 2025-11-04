import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomTextField } from ".";

const meta = {
  title: "Components/TextField",
  component: CustomTextField,
} satisfies Meta<typeof CustomTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Nome",
    placeholder: "Informe seu nome",
  },
};
