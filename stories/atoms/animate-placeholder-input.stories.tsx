import AnimatePlaceholderInput from "@/components/atoms/animate-placeholder-input";
import { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useState } from "storybook/internal/preview-api";

const meta = {
	title: "Atoms/AnimatePlaceholderInput",
	component: AnimatePlaceholderInput,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof AnimatePlaceholderInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: "text",
		placeholder: "Placeholder",
		inputValue: "",
		inputValueChange: (value: string) => {
			Default.args!.inputValue = value
		},
	},
	render: function Render(args) {
		const [inputValue, setInputValue] = useState(args.inputValue);
		function inputValueChange(value: string) {
			setInputValue(value);
		}
		useEffect(() => {
			setInputValue(args.inputValue);
		}, [args.inputValue]);

		return <AnimatePlaceholderInput {...args} inputValue={inputValue} inputValueChange={inputValueChange} />;
	},
};
