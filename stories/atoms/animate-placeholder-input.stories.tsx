import { AnimatePlaceholderInput } from "@/components/atoms/animate-placeholder-input";
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
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      Default.args!.value = e.target.value;
    },
  },
  render: function Render(args: Story["args"]) {
    const [value, setInputValue] = useState(args?.value);
    useEffect(() => {
      setInputValue(args?.value);
    }, [args?.value]);

    return (
      <AnimatePlaceholderInput
        {...args}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
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
    await userEvent.tab();
    expect(input).not.toHaveFocus();
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
    value: "some text",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      TypedSomthing.args!.value = e.target.value;
    },
  },
};
