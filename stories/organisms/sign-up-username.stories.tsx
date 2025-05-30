import SignUpUsername from "@/components/organisms/sing-up/sign-up-username";
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
  globals: {
    locale: "ko",
  },
};
