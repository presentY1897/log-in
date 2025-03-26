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
    initialPositions: [
      { x: 0, y: 0 },
      { x: 10, y: 10 },
      { x: 20, y: 20 },
      { x: 30, y: 30 },
    ],
    movementSpeed: 0,
    rotationSpeed: 0,
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
