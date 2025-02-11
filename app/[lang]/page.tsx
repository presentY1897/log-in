

export default async function Page({
	params,
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	return (
		<div>
			<h1>{lang}</h1>
		</div>
	);
}