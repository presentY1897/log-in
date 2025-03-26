import CaptchaFindWord from "@/components/organisms/captcha-find-word";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/CaptchaFindWord",
  component: CaptchaFindWord,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CaptchaFindWord>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    word: "word",
    initialPositions: [
      { x: 0, y: 0 },
      { x: 10, y: 10 },
      { x: 20, y: 20 },
      { x: 30, y: 30 },
    ],
    difficulty: 0,
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
