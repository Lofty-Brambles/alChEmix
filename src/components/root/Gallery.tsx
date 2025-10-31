export function Gallery() {
	return (
		<div className="grid place-items-center animate-[fade-in_0.5s_ease-in_1.55s_forwards] opacity-0">
			<h2 className="mb-10 text-4xl text-text-primary font-poppins animate-[darks_5s_750ms_linear_infinite] dark:animate-[lights_5s_750ms_linear_infinite] dark-glow-animation">
				#Gallery
			</h2>
			<div className="w-[30vmin] aspect-5/7 relative group">
				<img className="w-[12vmin] aspect-5/7 bg-foreground/10 absolute rounded-[2vmin] ease-in-out duration-700 left-1/2 top-1/2 -translate-1/2  group-hover:translate-x-[200%] group-hover:translate-y-[-160%] group-hover:-rotate-15"></img>
				<img className="w-[30vmin] aspect-5/7 bg-foreground/10 absolute rounded-[1vmin] ease-in-out duration-700 translate-x-[-10%] -rotate-1 group-hover:translate-x-[-75%] group-hover:translate-y-[16%] group-hover:rotate-[-24deg]"></img>
				<img className="w-[12vmin] aspect-5/7 bg-foreground/10 absolute rounded-[2vmin] ease-in-out duration-700 left-1/2 top-1/2 -translate-1/2  group-hover:translate-x-[160%] group-hover:translate-y-[170%] group-hover:rotate-15"></img>
				<img className="w-[30vmin] aspect-5/7 bg-foreground/10 absolute rounded-[1vmin] ease-in-out duration-700 rotate-2 group-hover:translate-x-[-25%] group-hover:translate-y-[8%] group-hover:rotate-[-8deg]"></img>
				<img className="w-[12vmin] aspect-5/7 bg-foreground/10 absolute rounded-[2vmin] ease-in-out duration-700 left-1/2 top-1/2 -translate-1/2  group-hover:translate-x-[-200%] group-hover:translate-y-[-170%] group-hover:rotate-15"></img>
				<img className="w-[30vmin] aspect-5/7 bg-foreground/10 absolute rounded-[1vmin] ease-in-out duration-700 translate-x-[-6%] -rotate-3 group-hover:translate-x-[25%] group-hover:translate-y-[8%] group-hover:rotate-[8deg]"></img>
				<img className="w-[12vmin] aspect-5/7 bg-foreground/10 absolute rounded-[2vmin] ease-in-out duration-700 left-1/2 top-1/2 -translate-1/2  group-hover:translate-x-[-280%] group-hover:translate-y-[140%] group-hover:-rotate-15"></img>
				<img className="w-[30vmin] aspect-5/7 bg-foreground/10 absolute rounded-[1vmin] ease-in-out duration-700 translate-x-[10%] translate-y-[3%] rotate-5 group-hover:translate-x-[75%] group-hover:translate-y-[16%] group-hover:rotate-24"></img>
			</div>
		</div>
	);
}
