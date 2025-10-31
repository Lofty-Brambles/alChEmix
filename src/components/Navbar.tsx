"use client";

import { useState } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const links = [
		["Timeline", "/#timeline"],
		["Sponsors", "/#sponsors"],
		["Prizes", "/#prizes"],
	];

	return (
		<nav className="fixed top-0 left-0 w-full z-50 font-inter font-bold animate-[fade-in_0.5s_ease-in_0.4s_forwards] opacity-0">
			<div className="mx-auto max-w-6xl min-h-[88px] px-8 sm:px-12 py-6 flex items-center justify-between bg-transparent backdrop-blur-sm">
				<Link
					href="/"
					className="text-2xl font-poppins font-semibold tracking-tight hover:text-foreground-tertiary transition-colors"
				>
					alChEmix<span className="text-foreground-tertiary">(🧪)</span>
				</Link>
				{/* @edit */}

				<ul className="hidden md:flex text-lg min-h-10 items-center gap-4 font-medium">
					{links.map((linkset) => (
						<li
							key={linkset[0]}
							className="min-h-7 px-2 hover:border-foreground-tertiary hover:text-foreground-tertiary hover:scale-110 duration-300 transition-transform glowing-ball relative"
						>
							<Link href={linkset[1]}>{linkset[0]}</Link>
						</li>
					))}
				</ul>

				{/* Hamburger icon */}
				<button
					className="md:hidden p-2 hover:text-foreground-tertiary transition-colors border border-background-tertiary rounded"
					onClick={() => setIsOpen(true)}
					aria-label="Open menu"
				>
					<Menu size={28} />
				</button>
			</div>

			{/* Mobile overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						key="overlay"
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{
							duration: 0.6,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="fixed inset-0 z-50 bg-[#0d0f12]/95 backdrop-blur-md flex flex-col items-center justify-center h-full"
					>
						<button
							className="absolute top-8 right-8 sm:top-12 sm:right-12 text-white hover:text-foreground-tertiary transition-colors"
							onClick={() => setIsOpen(false)}
							aria-label="Close menu"
						>
							<X size={32} />
						</button>

						<ul className="space-y-8 text-3xl font-semibold tracking-wide text-center">
							{links.map((linkset, idx) => (
								<motion.li
									key={linkset[0]}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										delay: -0.05 * (linkset.length - idx),
										duration: 0.4,
										ease: [0.25, 0.8, 0.25, 1],
									}}
									className="hover:scale-110 hover:text-foreground-tertiary duration-300 transition-transform"
								>
									<Link href={linkset[1]} onClick={() => setIsOpen(false)}>
										{linkset[0]}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
