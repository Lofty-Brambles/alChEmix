"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer() {
	const { theme } = useTheme();

	return (
		<footer className="w-full grid-bleed bg-background text-text-primary pt-16 pb-6 border-t border-background-tertiary animate-[fade-in_0.5s_ease-in_0.4s_forwards] opacity-0">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-evenly items-center px-6 md:px-12 gap-10 md:gap-0">
				{/* Left: Logo */}
				<div className="flex items-center gap-2">
					<div className="relative glowing-ball">
						<img src="/img/iiche-logo.png" alt="IIChE Logo" className="h-12 w-auto" />
					</div>
					<p className="text-sm text-text-secondary text-center md:text-left">
						On Campus • Jadavpur University
					</p>
				</div>

				{/* Right: Socials */}
				<div className="flex flex-col items-center">
					<h3 className="font-dm-sans tracking-wider text-sm uppercase mb-3 text-text-secondary">
						Stay Connected
					</h3>
					<div className="flex gap-4">
						{[{ icon: "/img/instagram.svg", href: "#" }].map(({ icon, href }, i) => (
							<a
								key={i}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center w-10 h-10 rounded-full border border-(--foreground-secondary)/40 hover:border-foreground hover:text-foreground transition-all duration-300"
							>
								<Image
									src={icon}
									alt={icon.split("/").pop()?.split(".")[0] + " icon"}
									width={20}
									height={20}
									className="filter-invert"
								/>
							</a>
						))}
					</div>
				</div>
			</div>

			{/* Bottom Line */}
			<div className="border-t border-background-tertiary mt-12 pt-4 text-center text-xs text-text-secondary">
				Copyright © 2025 — All rights reserved by{" "}
				<span className="text-foreground font-medium">JU IIChE</span>
			</div>
		</footer>
	);
}
