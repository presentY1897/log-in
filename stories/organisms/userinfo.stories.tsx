import Userinfo from "@/components/organisms/userinfo";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/Userinfo",
  component: Userinfo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Userinfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    locale: "en",
  },
  args: {
    username: "John Doe",
    email: "test@email.com",
    created: "2023-10-01",
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
