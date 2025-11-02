import { HeroSection } from "$/components/root/HeroSection";
import { Description } from "$/components/root/Description";
import { DescribedCard } from "$/components/root/DescribedCard";
import { Gallery } from "$/components/root/Gallery";
import { Timeline } from "$/components/root/Timeline";
import { Sponsors } from "$/components/root/Sponsors";
import { MapEmbed } from "$/components/root/MapEmbed";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Description />
			<div className="grid place-items-center gap-20">
				<div className="mt-8 h-[3px] origin-left rounded bg-linear-to-r from-emerald-400 to-sky-400 animate-underline-grow" />
				<div className="pt-4 px-8 flex flex-wrap justify-center gap-8 animate-[fade-in_0.5s_ease-in_1.55s_forwards] opacity-0">
					<DescribedCard
						number={9}
						description="Fun events to be at"
						color="bg-cyan-800/30 text-cyan-300"
					/>
					<DescribedCard
						number={48}
						description="Hours of fun activities"
						color="bg-lime-800/30 text-lime-300"
					/>
					<DescribedCard
						number={10}
						description="Grand Prizes to be won"
						color="bg-rose-800/30 text-rose-300"
					/>
				</div>
				<div className="mt-8 h-[3px] origin-left rounded bg-linear-to-r from-emerald-400 to-sky-400 animate-underline-grow" />
				<MapEmbed />
				<div className="mt-8 h-[3px] origin-left rounded bg-linear-to-r from-emerald-400 to-sky-400 animate-underline-grow" />
				<Timeline />
				<div className="mt-8 h-[3px] origin-left rounded bg-linear-to-r from-emerald-400 to-sky-400 animate-underline-grow" />
				<Gallery />
				<div className="mt-8 h-[3px] origin-left rounded bg-linear-to-r from-emerald-400 to-sky-400  animate-underline-grow" />
				<Sponsors />
			</div>
		</>
	);
}
