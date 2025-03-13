import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "@/app/globals.css";

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	if (!routing.locales.includes((await params).lang as never)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={(await params).lang}>
			<body
				className={`antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}