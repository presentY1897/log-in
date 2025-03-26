import LinkWrapper from "@/components/atoms/link-wrapper";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/LinkWrapper",
  component: LinkWrapper,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LinkWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    children: "Link Wrapper",
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};
