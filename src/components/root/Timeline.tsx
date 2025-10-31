const schedule = [
	{
		day: "Day 1 - March 15",
		events: [
			{ time: "09:00 AM", title: "Inauguration Ceremony", subtitle: "Opening" },
			{ time: "10:00 AM", title: "Keynote", subtitle: "Keynote" },
			{ time: "12:00 PM", title: "Lunch", subtitle: "Lunch" },
			{ time: "02:00 PM", title: "Poster", subtitle: "Poster" },
		],
	},
	{
		day: "Day 2 - March 16",
		events: [
			{ time: "09:00 AM", title: "Paper", subtitle: "Oral Presentation" },
			{ time: "11:00 AM", title: "Tech Talk Session", subtitle: "Expert" },
			{ time: "12:00 PM", title: "Lunch", subtitle: "Lunch" },
			{ time: "02:00 PM", title: "Prize Distribution & Closing", subtitle: "Closing" },
		],
	},
];

export function Timeline() {
	return (
		<section className="text-text-primary animate-[fade-in_0.5s_ease-in_1.55s_forwards] opacity-0">
			<div className="text-center mb-10">
				<div className="inline-block px-3 py-1 bg-foreground-tertiary text-background rounded-full font-medium text-sm">
					🗓️ Event Schedule
				</div>
				<h2 className="text-4xl font-poppins mt-4 animate-[darks_5s_750ms_linear_infinite] dark:animate-[lights_5s_750ms_linear_infinite] dark-glow-animation">
					#Fun Times
				</h2>
			</div>

			<div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
				{schedule.map((day, idx) => (
					<div
						key={idx}
						className="border border-background-tertiary rounded-2xl shadow-sm p-6 bg-background-secondary"
					>
						<h3 className="text-lg font-semibold mb-6 flex items-center">
							<span className="w-2 h-2 rounded-full bg-foreground-secondary mr-2"></span>
							{day.day}
						</h3>
						<ul className="space-y-5">
							{day.events.map((event, i) => (
								<li key={i}>
									<div className="flex items-start gap-4">
										<div className="text-foreground-tertiary font-semibold min-w-20">
											{event.time}
										</div>
										<div>
											<div className="font-semibold">{event.title}</div>
											<div className="text-sm text-text-secondary">{event.subtitle}</div>
										</div>
									</div>
									{i < day.events.length - 1 && <hr className="border-gray-100 mt-3" />}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
