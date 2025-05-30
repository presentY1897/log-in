import Checkbox from "@/components/atoms/checkbox";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { useEffect } from "react";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: {
      control: "boolean",
    },
    onChange: {
      action: "changed",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const CheckboxRender = (args: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [checked, setChecked] = useState(args.checked);
  function onChange() {
    setChecked(!checked);
  }

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return <Checkbox checked={checked} onChange={onChange} />;
};

export const Default: Story = {
  args: {
    checked: false,
    onChange: () => {
      if (Default.args) {
        Default.args.checked = !Default.args.checked;
      }
    },
  },
  render: function Render(args: React.InputHTMLAttributes<HTMLInputElement>) {
    return CheckboxRender(args);
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    await userEvent.click(document.body);
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    onChange: () => {
      if (Checked.args) {
        Checked.args.checked = !Checked.args.checked;
      }
    },
  },
  render: function Render(args: React.InputHTMLAttributes<HTMLInputElement>) {
    return CheckboxRender(args);
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await userEvent.click(document.body);
  },
};
