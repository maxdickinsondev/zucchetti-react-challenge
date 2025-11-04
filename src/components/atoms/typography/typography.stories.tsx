import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomTypography } from ".";

const meta = {
  title: "Components/Typography",
  component: CustomTypography,
} satisfies Meta<typeof CustomTypography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Body1: Story = {
  args: {
    color: "primary",
    variant: "body1",
    children: <p>My Text</p>,
  },
};

export const Body2: Story = {
  args: {
    color: "primary",
    variant: "body2",
    children: <p>My Text</p>,
  },
};

export const Button: Story = {
  args: {
    color: "primary",
    variant: "button",
    children: <p>My Text</p>,
  },
};

export const Caption: Story = {
  args: {
    color: "primary",
    variant: "caption",
    children: <p>My Text</p>,
  },
};

export const H1: Story = {
  args: {
    color: "primary",
    variant: "h1",
    children: <p>My Text</p>,
  },
};

export const H2: Story = {
  args: {
    color: "primary",
    variant: "h2",
    children: <p>My Text</p>,
  },
};

export const H3: Story = {
  args: {
    color: "primary",
    variant: "h3",
    children: <p>My Text</p>,
  },
};

export const H4: Story = {
  args: {
    color: "primary",
    variant: "h4",
    children: <p>My Text</p>,
  },
};

export const H5: Story = {
  args: {
    color: "primary",
    variant: "h5",
    children: <p>My Text</p>,
  },
};

export const H6: Story = {
  args: {
    color: "primary",
    variant: "h6",
    children: <p>My Text</p>,
  },
};

export const Inherit: Story = {
  args: {
    color: "primary",
    variant: "inherit",
    children: <p>My Text</p>,
  },
};

export const Overline: Story = {
  args: {
    color: "primary",
    variant: "overline",
    children: <p>My Text</p>,
  },
};

export const Subtitle1: Story = {
  args: {
    color: "primary",
    variant: "subtitle1",
    children: <p>My Text</p>,
  },
};

export const Subtitle2: Story = {
  args: {
    color: "primary",
    variant: "subtitle2",
    children: <p>My Text</p>,
  },
};
