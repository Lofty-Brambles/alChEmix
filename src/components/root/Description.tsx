"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import { Calendar, MapPin } from "lucide-react";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";

export function Description() {
	return (
		<section className="grid items-center text-center py-8 px-4 animate-[fade-in_0.5s_ease-in_1.55s_forwards] opacity-0">
			<div className="max-w-3xl">
				<div className="flex flex-col xs:flex-row items-center justify-center gap-4 text-text-secondary pb-8 sm:pb-4">
					<div className="flex items-center gap-1">
						<Calendar className="w-4 h-4 text-foreground" />
						<span className="text-text-secondary px-1">November 14–15, 2025</span>
					</div>
					<div className="flex items-center gap-1">
						<MapPin className="w-4 h-4 text-foreground" />
						<span className="text-text-secondary px-1">HL Roy Auditorium</span>
					</div>
				</div>
				<h3 className="mt-6 mb-4 text-3xl text-text-primary text-bold font-poppins animate-[darks_5s_750ms_linear_infinite] dark:animate-[lights_5s_750ms_linear_infinite] dark-glow-animation">
					#Turning Reactions Into Reality
				</h3>
				<FlipClockCountdown
					className="mb-8 mx-auto w-fit flip-clock"
					to={new Date("2025-11-14T10:00:00")}
				/>
				<p className="text-pretty pb-8 px-6">
					Alchemix 2025, the flagship event of Asia’s oldest Chemical Engineering Department at
					Jadavpur University, returns with renewed zeal—uniting students, researchers, and industry
					leaders through contests, workshops, and cultural programs that celebrate innovation,
					creativity, and collaboration between academia and industry.
				</p>
				<div className="flex flex-col xs:flex-row items-center justify-center gap-4 font-dm-sans pb-4">
					<a
						href="/events"
						className="px-6 py-3 rounded-lg bg-foreground-secondary text-text-primary font-semibold flex items-center gap-2 group duration-300"
					>
						<span className="group-hover:scale-105 transition-transform">Register Now →</span>
					</a>
					<a
						href="/faq"
						className="px-6 py-3 rounded-lg bg-foreground-secondary text-text-primary font-semibold flex items-center gap-2 group duration-300"
					>
						<span className="group-hover:scale-105 transition-transform">View FAQs︖</span>
					</a>
				</div>
			</div>
		</section>
	);
}
