import LogInUsernamePage from "@/components/pages/log-in/log-in-username-page";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Pages/LogInUsernamePage",
  component: LogInUsernamePage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LogInUsernamePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
  parameters: {
    locale: "en",
  },
};

export const Korean: Story = {
  ...Default,
  parameters: {
    locale: "ko",
  },
};
