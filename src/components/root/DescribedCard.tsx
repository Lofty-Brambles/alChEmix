export function DescribedCard({ children }: { children: React.ReactNode }) {
	return (
		<li className="grid items-center p-6 bg-background-tertiary rounded-xl shadow-[0_4px_20px_rgba(56,189,248,0.15)] hover:shadow-[0_6px_24px_rgba(56,189,248,0.25)] transition">
			{children}
		</li>
	);
}
