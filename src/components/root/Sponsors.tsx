const sponsors = [
	{ name: "Canon", img: "bg-[url('/img/canon-logo.png')]", link: "https://in.canon/en/consumer" },
	{
		name: "Edugraph",
		img: "bg-[url('/img/edugraph-logo.svg')] bg-contain!",
		link: "https://www.telegraphindia.com/edugraph",
	},
];

export function Sponsors() {
	return (
		<section className="pb-20 text-text-primary animate-[fade-in_0.5s_ease-in_1.55s_forwards] opacity-0">
			<div className="text-center mb-10">
				<div className="inline-block px-3 py-1 bg-foreground-tertiary text-background rounded-full font-medium text-sm">
					🤝 Our Sponsors
				</div>
				<h2 className="text-4xl font-poppins mt-4 animate-[darks_5s_750ms_linear_infinite] dark:animate-[lights_5s_750ms_linear_infinite] dark-glow-animation">
					#Supporters
				</h2>
			</div>

			{/* Grid */}
			<div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
				{sponsors.map((sponsor) => (
					<a
						key={sponsor.name}
						href={sponsor.link}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative w-50 rounded-2xl bg-background-secondary hover:bg-background-tertiary p-1 transition-all duration-500 hover:shadow-[0_0_25px_var(--foreground-secondary)]"
					>
						{/* Hover Text */}
						<div className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs tracking-wide text-text-secondary opacity-0 group-hover:opacity-100 transition-all duration-500">
							Visit <span className="text-foreground-secondary">{sponsor.name}</span>
						</div>

						{/* Card Inner */}
						<div
							className={`h-28 w-48 rounded-xl bg-background-tertiary transition-transform duration-500 group-hover:scale-[1.03] ${sponsor.img} bg-cover bg-center bg-no-repeat`}
						></div>
					</a>
				))}
			</div>
		</section>
	);
}
