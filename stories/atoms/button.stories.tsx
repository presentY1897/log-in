import Button from "@/components/atoms/button";
import { expect, userEvent, within } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    onClick: () => console.log("Clicked"),
  },
};

export const DarkTheme: Story = {
  args: Default.args,
  globals: {
    theme: "dark",
  },
};

export const ClickCallback: Story = {
  args: Default.args,
  render: function Render(args) {
    const [count, setCount] = useState(0);
    function onClick() {
      setCount(count + 1);
    }
    return (
      <Button {...args} onClick={onClick}>{`Click ${count} times`}</Button>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    expect(button).toHaveTextContent("Click 1 times");
    await userEvent.click(button);
    expect(button).toHaveTextContent("Click 2 times");

    await userEvent.click(document.body);
  },
};

export const PressedCallback: Story = {
  args: {
    ...Default.args,
    width: "150px",
  },
  render: function Render(args) {
    const [isPressed, setIsPressed] = useState(false);
    function onMouseDown() {
      setIsPressed(true);
    }
    function onMouseUp() {
      setIsPressed(false);
    }
    function onKeyDown() {
      setIsPressed(true);
    }
    function onKeyUp() {
      setIsPressed(false);
    }
    return (
      <Button
        {...args}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      >
        {isPressed ? "Pressed" : "Not pressed"}
      </Button>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.pointer([
      {
        keys: "[MouseLeft>]",
        target: button,
      },
    ]);
    expect(button).toHaveTextContent("Pressed");
    await userEvent.pointer([
      {
        keys: "[MouseLeft]",
        target: button,
      },
    ]);
    expect(button).toHaveTextContent("Not pressed");

    await userEvent.click(document.body);
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: function Render(args) {
    const [count, setCount] = useState(0);
    function onClick() {
      setCount(count + 1);
    }
    return (
      <Button {...args} onClick={onClick}>{`Click ${count} times`}</Button>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(button).toHaveTextContent("Click 0 times");
  },
};
