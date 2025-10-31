type DescribedCardProps = {
	number: number;
	description: string;
	color: string;
};

export function DescribedCard({ number, description, color }: DescribedCardProps) {
	return (
		<li className="grid place-items-center w-40 px-8 py-6 bg-background-tertiary rounded-xl shadow-[0_4px_20px_rgba(56,189,248,0.15)] hover:shadow-[0_6px_24px_rgba(56,189,248,0.25)] transition glass-shine-effect">
			<div
				className={`mb-4 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${color}`}
			>
				✦
			</div>
			<div className="text-3xl md:text-4xl font-extrabold">
				<span>{number}</span>
				<span className="ml-1 text-2xl">+</span>
			</div>
			<p className="mt-2 text-sm md:text-base text-text-secondary text-center italic">
				{description}
			</p>
		</li>
	);
}
