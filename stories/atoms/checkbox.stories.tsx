import Checkbox from "@/components/atoms/checkbox";
import { Meta, StoryObj } from "@storybook/react";
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    onChange: () => (Default.args.checked = !Default.args.checked),
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked);
    function onChange() {
      setChecked(!checked);
    }

    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);

    return <Checkbox checked={checked} onChange={onChange} />;
  },
};
