import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes';
import nextIntl from './next-intl';
import '../app/globals.css'

const preview: Preview = {
	decorators: [
		withThemeByClassName({
			themes: {
				light: 'light',
				dark: 'dark',
			},
			defaultTheme: 'light',
		}),
	],
	parameters: {
		docs: {
			canvas: {
				className: '!bg-background',
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		nextIntl,
		nextjs: {
			appDirectory: true,
		},
	},
	initialGlobals: {
		locale: 'en',
		locales: {
			en: 'English',
			ko: '한국어',
		},
	},
};

export default preview;