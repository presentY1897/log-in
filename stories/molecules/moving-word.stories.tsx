import MovingWord from "@/components/molecules/moving-word";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/MovingWord",
  component: MovingWord,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MovingWord>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    word: "word",
    movementSpeed: 10,
    rotationSpeed: 10,
    width: 100,
    height: 100,
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};
