"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher({ className }: { className?: string }) {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Avoid hydration mismatch
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			aria-label="Toggle theme"
			className={`relative flex items-center justify-center w-11 h-11 rounded-full hover:bg-foreground/20 transition-all duration-300 group ${className}`}
		>
			{/* Sun (light mode icon) */}
			<Sun
				size={20}
				className={`absolute transition-all duration-500 ${
					theme !== "dark"
						? "opacity-100 rotate-0 text-foreground"
						: "opacity-0 -rotate-90 text-text-secondary"
				}`}
			/>

			{/* Moon (dark mode icon) */}
			<Moon
				size={20}
				className={`absolute transition-all duration-500 ${
					theme === "dark"
						? "opacity-100 rotate-0 text-foreground"
						: "opacity-0 rotate-90 text-text-secondary"
				}`}
			/>
		</button>
	);
}
