import AnimatePlaceholderInput from "@/app/components/atom/animate-placeholder-input";
import { Meta, StoryObj } from "@storybook/react";


const meta = {
	title: 'Atoms/AnimatePlaceholderInput',
	component: AnimatePlaceholderInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AnimatePlaceholderInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: 'text',
		placeholder: 'Placeholder',
	},
};