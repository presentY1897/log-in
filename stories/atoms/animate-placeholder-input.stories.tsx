import AnimatePlaceholderInput from "@/components/atoms/animate-placeholder-input";
import { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "Atoms/AnimatePlaceholderInput",
  component: AnimatePlaceholderInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AnimatePlaceholderInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Placeholder",
    value: "",
    inputValueChange: (value: string) => {
      Default.args!.value = value;
    },
  },
  render: function Render(args) {
    const [value, setInputValue] = useState(args.value);
    function inputValueChange(value: string) {
      setInputValue(value);
    }
    useEffect(() => {
      setInputValue(args.value);
    }, [args.value]);

    return (
      <AnimatePlaceholderInput
        {...args}
        value={value}
        inputValueChange={inputValueChange}
      />
    );
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};
