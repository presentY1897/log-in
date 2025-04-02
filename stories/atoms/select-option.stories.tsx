import SelectOption from "@/components/atoms/select-option";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/SelectOption",
  component: SelectOption,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SelectOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    initialSelectedOption: "Option 1",
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};
