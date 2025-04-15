import SelectDate from "@/components/organisms/select-date";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { getYear, getMonth, getDate } from "date-fns";

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
  parameters: {
    locale: "en",
  },
};

let testDate = new Date(0);
export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
  args: {
    startDate: new Date(1900, 0, 1),
    confirmDate: (date: Date) => {
      testDate = date;
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const clock = canvas.getByTestId("clockHandler");
    const clockDate = canvas.getByTestId("clockDate");
    const nextButton = canvas.getByRole("button");

    const rect = clock.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    await userEvent.pointer({
      keys: "[MouseLeft]",
      target: clock,
      coords: { x: centerX + 5, y: centerY },
    });
    expect(clockDate).toHaveTextContent("1931-04-24");
    await userEvent.click(nextButton);
    expect(getYear(testDate)).toBe(1931);
    expect(getMonth(testDate)).toBe(3);
    expect(getDate(testDate)).toBe(24);

    await userEvent.pointer({
      keys: "[MouseLeft]",
      target: clock,
      coords: { x: centerX - 5, y: centerY },
    });
    expect(clockDate).toHaveTextContent("1993-12-04");
    await userEvent.click(nextButton);
    expect(getYear(testDate)).toBe(1993);
    expect(getMonth(testDate)).toBe(11);
    expect(getDate(testDate)).toBe(4);

    await userEvent.pointer({
      keys: "[MouseLeft]",
      target: clock,
      coords: {
        x: centerX,
        y: Math.floor(centerY) - rect.height / 2,
      },
    });
    expect(clockDate).toHaveTextContent("1900-01-01");
    await userEvent.click(nextButton);
    expect(getYear(testDate)).toBe(1900);
    expect(getMonth(testDate)).toBe(0);
    expect(getDate(testDate)).toBe(1);
  },
};

export const DateBefore1900: Story = {
  ...Default,
  args: {
    startDate: new Date(899, 11, 31),
  },
};

export const Korean: Story = {
  ...Default,
  globals: {
    locale: "ko",
  },
};
