import { useTranslations } from "next-intl";


export default function Page() {
	const t = useTranslations('Common')
	return (
		<div>
			<h1>{t('Hello')}</h1>
		</div>
	);
}