import LogInPasswordPage from "@/components/pages/log-in/log-in-password-page";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Pages/LogInPasswordPage",
  component: LogInPasswordPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LogInPasswordPage>;

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
