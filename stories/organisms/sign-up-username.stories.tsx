import SignUpUsername from "@/components/organisms/sign-up-username";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/SignUpUsername",
  component: SignUpUsername,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SignUpUsername>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};
