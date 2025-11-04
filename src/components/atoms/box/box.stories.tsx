import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomBox } from ".";
import { CustomTypography } from "../typography";

const meta = {
  title: "Components/Box",
  component: CustomBox,
} satisfies Meta<typeof CustomBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    sx: {
      padding: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      border: "1px solid #000",
    },
    children: <CustomTypography>Text</CustomTypography>,
  },
};
