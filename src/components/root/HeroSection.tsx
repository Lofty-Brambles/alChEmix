"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Logo } from "../Logo";

export function HeroSection() {
	const barLeft = useRef<HTMLDivElement>(null);
	const barRight = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Trigger animations on mount
		if (barLeft.current) barLeft.current.classList.add("animate-sweep-left");
		if (barRight.current) barRight.current.classList.add("animate-sweep-right");
	}, []);

	return (
		<section className="relative grid mt-20 h-fit w-full pt-10 place-items-center overflow-hidden grid-bleed">
			{/* Slash bars */}
			<div className="absolute inset-0 pointer-events-none">
				<div
					id="barLeft"
					ref={barLeft}
					className="absolute top-1/2 left-[-46%] h-[120px] w-[33%] max-w-[333px] -translate-y-1/2 skew-x-[-18deg] opacity-95 bg-linear-to-r from-emerald-400/95 to-emerald-400/40"
				/>
				<div
					id="barRight"
					ref={barRight}
					className="absolute top-1/2 right-[-46%] h-[120px] w-[33%] max-w-[333px] -translate-y-1/2 skew-x-[-18deg] opacity-95 bg-linear-to-r from-emerald-400/95 to-emerald-400/40"
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center text-center">
				<div className="flex items-center justify-center mb-6">
					<div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-foreground-secondary shadow-[0_0_25px_rgba(51,204,187,0.4)] animate-logo-in opacity-0 scale-[0.92] translate-y-2.5">
						<span className="text-5xl font-bold text-background-tertiary"><Image src="/img/alchemix-square.png" alt="A square logo of the alchemix event" width={160} height={160} /></span>
						{/* @edit */}
					</div>
				</div>
				<h1 className="text-5xl md:text-6xl font-extrabold opacity-0 animate-headline-in translate-y-2">
					<Logo className="w-120 h-full" />
				</h1>
				<div className="opacity-0 animate-sub-in">
					<p className="mt-1 text-lg font-semibold translate-y-1.5 animate-[darks_5s_750ms_linear_infinite] dark:animate-[lights_5s_750ms_linear_infinite] dark-glow-animation">
						where chaos meets creativity
					</p>
				</div>
				<div className="mt-4 h-[3px] origin-left rounded bg-linear-to-r from-emerald-400 to-sky-400  animate-underline-grow" />
			</div>
		</section>
	);
}
