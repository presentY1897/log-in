import MovingCharacter from "@/components/atoms/moving-character";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/MovingCharacter",
  component: MovingCharacter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MovingCharacter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    char: "A",
    movementSpeed: 0,
    rotationSpeed: 0,
    initialPosition: { x: 0, y: 0 },
    getNextPosition: () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }),
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100px", height: "100px" }}>
        <Story />
      </div>
    ),
  ],
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};
