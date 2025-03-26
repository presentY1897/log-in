import ClockHandler from "@/components/molecules/clock-handler";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/ClockHandler",
  component: ClockHandler,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ClockHandler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: {
      width: 200,
      height: 200,
    },
    initialDegree: 15,
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};
