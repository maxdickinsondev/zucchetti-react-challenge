import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomIconButton } from ".";

const meta = {
  title: "Components/IconButton",
  component: CustomIconButton,
} satisfies Meta<typeof CustomIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EditIcon: Story = {
  args: {
    children: <Edit />,
  },
};

export const DeleteIcon: Story = {
  args: {
    children: <Delete />,
  },
};
