import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomStack } from ".";

const meta = {
  title: "Components/Stack",
  component: CustomStack,
} satisfies Meta<typeof CustomStack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Spacing2: Story = {
  args: {
    spacing: 2,
    children: (
      <>
        <p>Spacing 2</p>
        <p>Spacing 2</p>
        <p>Spacing 2</p>
      </>
    ),
  },
};

export const Spacing4: Story = {
  args: {
    spacing: 4,
    children: (
      <>
        <p>Spacing 4</p>
        <p>Spacing 4</p>
        <p>Spacing 4</p>
      </>
    ),
  },
};

export const Spacing8: Story = {
  args: {
    spacing: 8,
    children: (
      <>
        <p>Spacing 8</p>
        <p>Spacing 8</p>
        <p>Spacing 8</p>
      </>
    ),
  },
};

export const Spacing16: Story = {
  args: {
    spacing: 16,
    children: (
      <>
        <p>Spacing 16</p>
        <p>Spacing 16</p>
        <p>Spacing 16</p>
      </>
    ),
  },
};

export const Spacing32: Story = {
  args: {
    spacing: 32,
    children: (
      <>
        <p>Spacing 32</p>
        <p>Spacing 32</p>
        <p>Spacing 32</p>
      </>
    ),
  },
};
