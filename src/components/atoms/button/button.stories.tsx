import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomButton } from ".";

const meta = {
  title: "Components/Button",
  component: CustomButton,
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    variant: "contained",
    size: "medium",
    children: <p>My Button</p>,
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    variant: "contained",
    children: <p>My Button</p>,
  },
};

export const Success: Story = {
  args: {
    color: "success",
    variant: "contained",
    children: <p>My Button</p>,
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    variant: "contained",
    children: <p>My Button</p>,
  },
};

export const Info: Story = {
  args: {
    color: "info",
    variant: "contained",
    children: <p>My Button</p>,
  },
};

export const Inherit: Story = {
  args: {
    color: "inherit",
    variant: "contained",
    children: <p>My Button</p>,
  },
};

export const Error: Story = {
  args: {
    color: "error",
    variant: "contained",
    children: <p>My Button</p>,
  },
};
