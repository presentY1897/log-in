import CaptchaFindWord from "@/components/organisms/captcha-find-word";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/CaptchaFindWord",
  component: CaptchaFindWord,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CaptchaFindWord>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    word: "word",
    difficulty: 1,
    size: {
      width: 300,
      height: 300,
    },
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};
