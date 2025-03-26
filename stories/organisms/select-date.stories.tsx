import SelectDate from "@/components/organisms/select-date";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Organisms/SelectDate",
  component: SelectDate,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SelectDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startDate: new Date(1900, 0, 1),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const clock = canvas.getByTestId("clockHandler");
    const clockDate = canvas.getByTestId("clockDate");

    const rect = clock.getBoundingClientRect();
    console.log(rect);
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    await userEvent.pointer({
      keys: "[MouseLeft]",
      target: clock,
      coords: { x: centerX, y: centerY },
    });
    expect(clockDate).toHaveTextContent("1931-04-24");

    await userEvent.pointer({
      keys: "[MouseLeft]",
      target: clock,
      coords: { x: centerY - 1, y: centerY },
    });
    expect(clockDate).toHaveTextContent("1993-12-04");

    await userEvent.pointer({
      keys: "[MouseLeft]",
      target: clock,
      coords: { x: Math.floor(centerX), y: Math.floor(centerY) },
    });
    expect(clockDate).toHaveTextContent("1900-01-01");
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};

export const DateBefore1900: Story = {
  ...Default,
  args: {
    startDate: new Date(899, 11, 31),
  },
};
