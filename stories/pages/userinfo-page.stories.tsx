import UserinfoPage from "@/components/pages/userinfo-page";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Pages/UserinfoPage",
  component: UserinfoPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UserinfoPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    locale: "en",
  },
  args: {
    userInfo: {
      username: "John Doe",
      email: "test@email.com",
      created: "2023-10-01",
    },
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
