import type { Metadata } from "next";
import { Poppins, Inter, DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Navbar } from "$/components/Navbar";
import { Footer } from "$/components/Footer";

import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["700"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400", "700"],
});

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "AlChEmix",
	description: "Lorem ipsum dolor sit amet", // @edit
	robots: "index, follow",
	alternates: {
		canonical: "https://www.alchemix.com/", // @edit
	},
	openGraph: {
		type: "website",
		title: "AlChEmix",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", // @edit
		url: "https://www.alchemix.com/", // @edit
		siteName: "AlChEmix", // @edit
		images: [
			{
				url: "https://www.alchemix.com/og-image.jpg", // @edit
				width: 1200, // @edit
				height: 630, // @edit
				alt: "AlChEmix Open Graph Image", // @edit
			},
		],
	},
};

type ChildrenOnlyProps = Readonly<{
	children: React.ReactNode;
}>;

export default function RootLayout({ children }: ChildrenOnlyProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head></head>
			<body
				className={`${poppins.variable} ${inter.variable} ${dmSans.variable} grid grid-cols-[1fr_min(45rem,100%)_1fr] *:col-2 font-inter`}
			>
				<ThemeProvider>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
