import LogInUsernamePage from "@/components/pages/log-in-username-page";
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
