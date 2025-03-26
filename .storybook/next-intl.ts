import en from '../messages/en.json';
import ko from '../messages/ko.json';

const messagesByLocale: Record<string, any> = {en, ko};

const nextIntl = {
	defaultLocale: 'en',
	messagesByLocale,
}

export default nextIntl;