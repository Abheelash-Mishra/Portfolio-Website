const Footer = () => {
	const randomLines = [
		"My laptop can finally rest from its job as a room heater. Thanks Blender!",
		"Heard about Outer Wilds? Trust me, it's phenomenal. Peak world-building and game design.",
		"Oh Wow! Looks like the random function chose you to see this little easter egg. Click",
		"UV Unwrapping awaits those in the deepest parts of the afterlife.",
		"Ever had a piece of code just NOT work, spend hours trying to debug it, only to somehow fix it by simply rerunning the dev environment? I need a break.",
		"Fus Ro Dah!",
	]

	const idx = Math.floor(Math.random() * randomLines.length);
	return (
		<div className={ "flex flex-col justify-center items-center bg-black text-cyberpunkYellow h-[200px] w-full text-2xl m-2" }>
			<div className={ "w-full" }>
				<h1 className={ "text-2xl text-aqua mb-8 mx-8 border-b-2 border-aqua/20" }></h1>
			</div>
			<h1 className={ "m-2" }>
				Made with Caffeine & Javascript Magic <i className="fa-solid fa-wand-magic-sparkles text-xl"/>
			</h1>
			<h1 className={ "w-2/3 m-2 text-center flex justify-center" }>
				{ randomLines[idx] }
				{ idx === 2 && (
					<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
						<span className={ "pl-1 text-aqua" }> Here</span>
					</a>
				) }
			</h1>

			<div className={ "w-full" }>
				<h1 className={ "text-2xl text-aqua mt-8 mx-8 border-b-2 border-aqua/20" }></h1>
			</div>
		</div>
	);
};

export default Footer;