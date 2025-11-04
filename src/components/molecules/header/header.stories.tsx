import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from ".";
import { ThemeModeProvider } from "../../../contexts/theme-mode/ThemeModeProvider";

const meta = {
  title: "Components/Header",
  component: Header,

  decorators: [
    (Story) => (
      <ThemeModeProvider>
        <Story />
      </ThemeModeProvider>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "@Zucchetti/React-Challenge",
  },
};
