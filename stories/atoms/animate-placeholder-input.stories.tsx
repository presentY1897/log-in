import AnimatePlaceholderInput from "@/components/atoms/animate-placeholder-input";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { useEffect, useState } from "react";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("animate-placeholder-input");
    await userEvent.type(input, "Hello");
    expect(input).toHaveValue("Hello");
    await userEvent.clear(input);
    expect(input).toHaveValue("");
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};

export const TypedSomthing: Story = {
  args: {
    type: "text",
    placeholder: "Placeholder",
    value: "123",
    inputValueChange: (value: string) => {
      TypedSomthing.args!.value = value;
    },
  },
};
