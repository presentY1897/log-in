import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	if(!routing.locales.includes((await params).lang as any)) {
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