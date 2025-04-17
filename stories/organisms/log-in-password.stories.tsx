import LogInPassword from "@/components/organisms/log-in/log-in-password";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/LogInPassword",
  component: LogInPassword,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LogInPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    username: "Username",
  },
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
