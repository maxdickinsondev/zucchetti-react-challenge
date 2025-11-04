import type { Meta, StoryObj } from "@storybook/react-vite";

import { ThemeButton } from "./index";
import { ThemeModeProvider } from "../../contexts/theme-mode/ThemeModeProvider";

const meta = {
  title: "Components/ThemeButton",
  component: ThemeButton,

  decorators: [
    (Story) => (
      <ThemeModeProvider>
        <Story />
      </ThemeModeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
