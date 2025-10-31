import { Calendar, MapPin } from "lucide-react";
import { DescribedCard } from "$/components/root/DescribedCard";

export function Description() {
	return (
		<section className="grid items-center text-center py-8 px-4 animate-[fade-in_0.5s_ease-in_1.55s_forwards] opacity-0">
			<div className="max-w-3xl">
				<div className="flex flex-col xs:flex-row items-center justify-center gap-4 text-text-secondary pb-8 sm:pb-4">
					<div className="flex items-center gap-1">
						<Calendar className="w-4 h-4 text-foreground" />
						<span className="px-1">November 14–15, 2025</span>
					</div>
					<div className="flex items-center gap-1">
						<MapPin className="w-4 h-4 text-foreground" />
						<span className="px-1">HL Roy Auditorium</span>
					</div>
				</div>
				<p className="text-pretty pb-8 sm:pb-4 px-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius enim nec nibh
					volutpat, ac placerat arcu rutrum. Phasellus ultricies feugiat consectetur. Nam dolor
					justo, maximus vel commodo sit amet, pretium eu nisi.
				</p>
				<div className="flex flex-col xs:flex-row items-center justify-center gap-4 text-text-secondary pb-4">
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
