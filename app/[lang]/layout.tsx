import "../globals.css";

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	return (
		<html lang={(await params).lang}>
			<body
				className={`antialiased`}
			>
				{children}
			</body>
		</html>
	);
}