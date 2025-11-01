"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
	{
		question: "Who can participate? 🌐",
		answer: "Any college/university student of any year is eligible for participation!",
	},
	{
		question: "Be honest, is there any registration fee?",
		answer: "There is no registration fee for participation.",
	},
	{
		question: "Will accommodation be provided?",
		answer: "No, accommodation will not be provided. It is sole responsibility of participants.",
	},
	{
		question: "Will certificates be provided?",
		answer: "Yes, certificates would be provided for each event.",
	},
];

export default function FAQPage() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const barLeft = useRef<HTMLDivElement>(null);
	const barRight = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Trigger animations on mount
		if (barLeft.current) barLeft.current.classList.add("animate-sweep-left");
		if (barRight.current) barRight.current.classList.add("animate-sweep-right");
	}, []);

	return (
		<section className="relative grid mt-20 h-fit w-full pt-30 pb-20 place-items-center">
			<div className="absolute inset-0 pointer-events-none">
				<div
					id="barLeft"
					ref={barLeft}
					className="absolute top-1/6 left-[-46%] h-[60px] w-[33%] max-w-[333px] -translate-y-1/2 skew-x-[-18deg] opacity-5 bg-linear-to-r from-emerald-400/10 to-emerald-400/5"
				/>
				<div
					id="barRight"
					ref={barRight}
					className="absolute top-1/6 right-[-46%] h-[60px] w-[33%] max-w-[333px] -translate-y-1/2 skew-x-[-18deg] opacity-5 bg-linear-to-r from-emerald-400/10 to-emerald-400/5"
				/>
			</div>
			{/* Subtle stars or background accent can go here if you want */}
			<div className="text-center mb-10 animate-[fade-in_0.5s_ease-in_0.4s_forwards] opacity-0">
				<div className="inline-block px-3 py-1 bg-foreground-tertiary text-background rounded-full font-medium text-sm">
					❓ What if I'm confused?
				</div>
				<h2 className="text-4xl font-poppins mt-4 animate-[darks_5s_750ms_linear_infinite] dark:animate-[lights_5s_750ms_linear_infinite] dark-glow-animation">
					#Frequently Asked Questions
				</h2>
			</div>

			<div className="max-w-3xl mx-auto space-y-4 pb-12 animate-[fade-in_0.5s_ease-in_0.4s_forwards] opacity-0">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="border border-(--foreground-secondary)/40 rounded-xl overflow-hidden transition-all"
					>
						<button
							onClick={() => setOpenIndex(openIndex === index ? null : index)}
							className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold tracking-wide text-foreground hover:text-foreground-tertiary"
						>
							<span className="flex items-center gap-2">✨ {faq.question}</span>
							<ChevronDown
								size={20}
								className={`transition-transform duration-300 ${
									openIndex === index ? "rotate-180 text-foreground-tertiary" : "rotate-0"
								}`}
							/>
						</button>

						<div
							className={`px-6 text-text-secondary leading-relaxed transition-all duration-500 ease-in-out ${
								openIndex === index
									? "max-h-40 opacity-100 pb-5"
									: "max-h-0 opacity-0 overflow-hidden"
							}`}
						>
							{faq.answer}
						</div>
					</div>
				))}
			</div>

			{/* optional subtle floating sparkles */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute w-0.5 h-0.5 bg-foreground-tertiary opacity-60 animate-pulse top-12 left-1/3"></div>
				<div className="absolute w-0.5 h-0.5 bg-foreground opacity-40 animate-pulse top-2/3 left-2/3"></div>
			</div>
		</section>
	);
}
