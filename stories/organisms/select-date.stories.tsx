import SelectDate from "@/components/organisms/select-date";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/SelectDate",
  component: SelectDate,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SelectDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startDate: new Date(1900, 0, 1),
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};

export const DateBefore1900: Story = {
  ...Default,
  args: {
    startDate: new Date(899, 11, 31),
  },
};
