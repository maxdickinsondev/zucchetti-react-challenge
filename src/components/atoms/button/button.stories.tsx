import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomButton } from ".";

const meta = {
  title: "Components/Button",
  component: CustomButton,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "info",
        "error",
        "inherit",
      ],
      description: "Define a cor do botão",
    },
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
      description: "Define o tipo de variante visual",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Define o tamanho do botão",
    },
    children: {
      control: "text",
      description:
        "Conteúdo interno do botão (texto ou elemento JSX)",
    },
  },
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
