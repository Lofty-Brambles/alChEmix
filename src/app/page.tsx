import { HeroSection } from "$/components/root/HeroSection";
import { Description } from "$/components/root/Description";
import { DescribedCard } from "$/components/root/DescribedCard";
import { Gallery } from "$/components/root/Gallery";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Description />
			<div className="grid place-items-center gap-20">
				<div className="">
					<DescribedCard number={9} description="Fun events" color="bg-cyan-800/30 text-cyan-300" />
				</div>
				<Gallery />
			</div>
			{/* - Item described cards
					- Timeline
			    - Gallery
					- Sponsors
					- Footer (https://hokfokk.vercel.app/)
					- /events
					- /faq */}
		</>
	);
}
