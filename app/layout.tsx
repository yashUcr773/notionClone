import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/features/providers/themeProvider";
import ConvexClientProvider from "@/features/providers/convexProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Notion",
	description: "Your connected workspace for wiki, docs & projects | Notion",
	icons: {
		icon: [{ url: "/logo.svg", href: "/logo.svg" }],
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ConvexClientProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
						storageKey="notion-theme">
						{children}
					</ThemeProvider>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
