import { GoogleMapsEmbed } from "@next/third-parties/google";

export function MapEmbed() {
	return (
		<div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg animate-[fade-in_0.5s_ease-in_1.2s_forwards] opacity-0">
			<div className="text-center mb-10">
				<div className="inline-block px-3 py-1 bg-foreground-tertiary text-background rounded-full font-medium text-sm">
					📍 Location
				</div>
				<h2 className="text-4xl font-poppins mt-4 animate-[darks_5s_750ms_linear_infinite] dark:animate-[lights_5s_750ms_linear_infinite] dark-glow-animation">
					#Where we are
				</h2>
			</div>
			<GoogleMapsEmbed
				apiKey={process.env.GOOGLE_API_KEY || ""}
				height={200}
				width="100%"
				mode="place"
				q="Brooklyn+Bridge,New+York,NY"
			/>
		</div>
	);
}
