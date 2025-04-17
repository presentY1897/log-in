import SignUpPassword from "@/components/organisms/sing-up/sign-up-password";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/SignUpPassword",
  component: SignUpPassword,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SignUpPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};

export const Korean: Story = {
  ...Default,
  globals: {
    locale: "ko",
  },
};
