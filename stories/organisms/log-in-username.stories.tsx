import LogInUsername from "@/components/organisms/log-in-username";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/LogInUsername",
  component: LogInUsername,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LogInUsername>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
