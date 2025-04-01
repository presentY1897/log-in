import LabelInput from "@/components/atoms/label-input";
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
		labelText: 'Label',
		type: 'text',
		placeholder: 'Placeholder',
	},
};

export const DarkTheme: Story = {
	args: Default.args,
	globals: {
		theme: 'dark',
	},
};
