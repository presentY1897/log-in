import LogInUsername from "@/components/organisms/log-in-username";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { getRouter } from "@storybook/nextjs/navigation.mock";
import { EmailUtils } from "@/utils/utils";

const meta = {
  title: "Organisms/LogInUsername",
  component: LogInUsername,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LogInUsername>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    locale: "en",
  },
};

export const DarkTheme: Story = {
  ...Default,
  globals: {
    theme: "dark",
  },
};

export const Korean: Story = {
  ...Default,
  parameters: {
    locale: "ko",
  },
};

export const EmailCheck: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("username-input");
    const button = canvas.getByTestId("username-submit-button");

    await userEvent.type(input, "test");
    await userEvent.click(button);
    await expect(getRouter().push).toHaveBeenCalled();
    await expect(localStorage.getItem("username")).toBe("test");
    await expect(localStorage.getItem("email")).toBe(
      "test@" + EmailUtils.defaultEmail
    );

    await userEvent.clear(input);
    await userEvent.type(input, "test@test.com");
    await userEvent.click(button);
    await expect(getRouter().push).toHaveBeenCalled();
    await expect(localStorage.getItem("username")).toBe("test");
    await expect(localStorage.getItem("email")).toBe("test@test.com");
  },
};
