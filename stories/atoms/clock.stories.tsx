import Clock from "@/components/atoms/clock";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Clock",
  component: Clock,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Clock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: {
      width: 200,
      height: 200,
    },
    degree: 15,
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};
