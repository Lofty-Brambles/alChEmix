"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function Logo({ className }: { className?: string }) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure the component only renders after mount (to avoid SSR mismatch)
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// Return a placeholder or nothing until the theme is known
		return (
			<div className="flex items-center gap-2">
				<img src="/img/alchemix-light.png" alt="Alchemix Logo Placeholder" className={className} />
			</div>
		);
	}

	return (
		<div className="flex items-center gap-2">
			<img
				src={theme === "light" ? "/img/alchemix-light.png" : "/img/alchemix-dark.png"}
				alt="Alchemix Logo"
				className={className}
			/>
		</div>
	);
}
