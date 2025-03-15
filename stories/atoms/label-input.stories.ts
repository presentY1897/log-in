import LabelInput from "@/app/components/atom/label-input";
import { Meta, StoryObj } from "@storybook/react";


const meta = {
	title: 'Atoms/LabelInput',
	component: LabelInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LabelInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Label',
		type: 'text',
		placeholder: 'Placeholder',
	},
};