import CheckboxLabel, {
  CheckboxLabelProps,
} from "@/components/molecules/checkbox-label";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { useEffect, useState } from "react";

const meta = {
  title: "Molecules/CheckboxLabel",
  component: CheckboxLabel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CheckboxLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

const CheckboxLabelRender = (args: CheckboxLabelProps) => {
  const [checked, setChecked] = useState(args.checked);
  function onChange() {
    setChecked(!checked);
  }

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return <CheckboxLabel {...args} checked={checked} onChange={onChange} />;
};

export const Default: Story = {
  args: {
    label: "Check me",
    checked: false,
    onChange: (e) => (Default.args!.checked = e.target.checked),
  },
  render: function Render(args) {
    return CheckboxLabelRender(args);
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
    label: "Check me",
    checked: true,
    onChange: (e) => (Checked.args!.checked = e.target.checked),
  },
  render: function Render(args) {
    return CheckboxLabelRender(args);
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    const textDiv = canvas.getByText("Check me");
    await userEvent.click(textDiv);
    expect(checkbox).not.toBeChecked();
    await userEvent.click(textDiv);
    expect(checkbox).toBeChecked();

    await userEvent.click(document.body);
  },
};
