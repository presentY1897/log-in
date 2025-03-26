import SingleContentTemplate from "@/components/templates/single-content-template";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Templates/SingleContentTemplate",
  component: SingleContentTemplate,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SingleContentTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titleText: "Title text",
    innerContent: <div>Inner content</div>,
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};
