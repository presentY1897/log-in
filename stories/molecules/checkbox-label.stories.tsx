import CheckboxLabel from "@/components/molecules/checkbox-label";
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

export const Default: Story = {
  args: {
    label: "Check me",
    checked: false,
    onChange: (e) => (Default.args!.checked = e.target.checked),
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked);
    function onChange() {
      setChecked(!checked);
    }

    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);

    return <CheckboxLabel {...args} checked={checked} onChange={onChange} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  },
};
