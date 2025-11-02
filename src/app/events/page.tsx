"use client";

import { useEffect, useRef } from "react";

const events = [
	{
		title: "The Ultimate Bond",
		image: "/img/hackathon-bg.jpg",
		link: "",
	},
	{
		title: "Hera Pheri",
		image: "/img/workshop-bg.jpg",
		link: "",
	},
	{
		title: "Kabhi Meme Kabhi Reality",
		image: "/img/talks-bg.jpg",
		link: "",
	},
	{
		title: "ChemIQ - quiz",
		image: "/img/talks-bg.jpg",
		link: "",
	},
	{
		title: "Chemovation",
		image: "/img/talks-bg.jpg",
		link: "",
	},
	{
		title: "Artify",
		image: "/img/talks-bg.jpg",
		link: "",
	},
	{
		title: "Chemflix",
		image: "/img/talks-bg.jpg",
		link: "",
	},
	{
		title: "Bhulosophy",
		image: "/img/talks-bg.jpg",
		link: "",
	},
];

export default function EventsPage() {
	const barLeft = useRef<HTMLDivElement>(null);
	const barRight = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Trigger animations on mount
		if (barLeft.current) barLeft.current.classList.add("animate-sweep-left");
		if (barRight.current) barRight.current.classList.add("animate-sweep-right");
	}, []);

	return (
		<>
			<section className="relative grid mt-20 h-fit w-full pt-30 pb-20 place-items-center">
				<div className="absolute inset-0 pointer-events-none">
					<div
						id="barLeft"
						ref={barLeft}
						className="absolute top-1/3 left-[-46%] h-[60px] w-[33%] max-w-[333px] -translate-y-1/2 skew-x-[-18deg] opacity-5 bg-linear-to-r from-emerald-400/10 to-emerald-400/5"
					/>
					<div
						id="barRight"
						ref={barRight}
						className="absolute top-1/3 right-[-46%] h-[60px] w-[33%] max-w-[333px] -translate-y-1/2 skew-x-[-18deg] opacity-5 bg-linear-to-r from-emerald-400/10 to-emerald-400/5"
					/>
				</div>
				{/* Subtle stars or background accent can go here if you want */}
				<div className="text-center mb-10 animate-[fade-in_0.5s_ease-in_0.4s_forwards] opacity-0">
					<div className="inline-block px-3 py-1 bg-foreground-tertiary text-background rounded-full font-medium text-sm">
						🎆 What is happening?
					</div>
					<h2 className="text-4xl font-poppins mt-4 animate-[darks_5s_750ms_linear_infinite] dark:animate-[lights_5s_750ms_linear_infinite] dark-glow-animation">
						#Big Events
					</h2>
				</div>
			</section>
			<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 3xl:grid-cols-3 w-full px-8 pb-20">
				{events.map((event, idx) => (
					<div
						key={idx}
						className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_var(--foreground-tertiary)] hover:-translate-y-2 transition-all duration-500 bg-background-secondary aspect-5/7"
					>
						{/* Background Image */}
						<a href={event.link}>
							<div className="absolute inset-0">
								<img
									src={event.image}
									alt={event.title}
									className="object-cover opacity-80 group-hover:opacity-50 transition-opacity duration-500"
								/>
							</div>
							{/* Title Overlay */}
							<div className="relative z-10 flex flex-col justify-end h-full p-6 text-left bg-linear-to-t from-(--background)/90 via-(--background-secondary)/50 to-transparent">
								<h3 className="text-2xl font-bold text-foreground-tertiary transform transition-all duration-500 ease-out group-hover:-translate-y-4">
									{event.title}
								</h3>
							</div>
							{/* Hover Border Glow */}
							<div className="absolute inset-0 border border-transparent group-hover:border-foreground-tertiary rounded-2xl transition-all duration-500"></div>
						</a>
					</div>
				))}
			</div>
		</>
	);
}
