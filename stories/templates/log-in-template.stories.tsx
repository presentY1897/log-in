import LogInTemplate from "@/components/templates/log-in-template";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Templates/LogInTemplate",
  component: LogInTemplate,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LogInTemplate>;

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
