import LogInUsername from "@/components/organisms/log-in-username";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/LogInUsername",
  component: LogInUsername,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LogInUsername>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    locale: "en",
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};

export const Korean: Story = {
  ...Default,
  parameters: {
    locale: "ko",
  },
};
