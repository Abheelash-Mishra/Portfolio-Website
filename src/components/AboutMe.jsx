import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutMe = () => {
	const [isPlaying, setIsPlaying] = useState(true);
	const [scale, setScale] = useState(1);

	// Disabling right-click
	const videoContainer = document.getElementById("video-container");

	useEffect(() => {
		if (videoContainer) {
			videoContainer.addEventListener("contextmenu", (event) => {
				event.preventDefault();
			});
		}
	}, [videoContainer]);


	const handleHover = () => {
		setIsPlaying(false);
		setScale(1.1);
	};

	const handleHoverOut = () => {
		setIsPlaying(true);
		setScale(1);
	};

	const aboutMeVariants = {
		offscreen: {
			x: 200,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 2,
				delay: 1
			}
		}
	};

	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={ { once: true } }
			variants={ aboutMeVariants }
			className={ "w-full h-full flex lg:flex-row flex-col lg:my-20 my-12" }
		>
			<div className={ "lg:w-full w-fit lg:mx-20 xs:mx-12 xs:my-10 mx-6 my-5" }>
				<p className={ "flex flex-col items-center text-cyberpunkYellow lg:text-xl text-base text-justify" }>

					Hey everyone! I am Abheelash Mishra, a full-stack developer currently in my final year at SRMIST and am currently interning at Baton Systems
					as a software engineer. I chose computer science as I found computers fascinating as a kid, and I always did love solving a good problem!
					I figured I should dabble in web development as designing the backend architecture is some of the most fun I have had in coding!

					<br />
					<br />

					As for my tech stack, I utilize React.js for my frontend, alongside with Three.js occasionally, to create visually stunning sites. As for my
					backend, I use Node.js or Spring frameworks to power my application. Next.js has been great too! I am also
					familiar Docker, alongside with cloud infrastructures such as Amazon Web Services, Oracle Cloud Infrastructure, and Google
					Cloud Platform. I am a strong problem solver and debugger, quickly adaptable to new tech stacks that I have not used before, and am
					well-versed in my computer fundamentals.

					<br />
					<br />

					Do check out my socials and maybe reach out to me! :)


					{/*<div className={ "w-full flex flex-row items-center justify-between px-32" }>*/ }
					{/*	<p>Anyways, get my resume here!</p>*/ }
					{/*	<motion.button*/ }
					{/*		whileHover={ { scale: 1.1 } }*/ }
					{/*		whileTap={ { scale: 0.9 } }*/ }
					{/*		className={ "border-2 border-cyberpunkYellow rounded-full px-8 py-4 hover:bg-cyberpunkYellow hover:text-black font-semibold" }*/ }
					{/*	>*/ }
					{/*		<a href="#">*/ }
					{/*			Resume <i className="fa-solid fa-download"/>*/ }
					{/*		</a>*/ }
					{/*	</motion.button>*/ }
					{/*</div>*/ }
				</p>
			</div>
			<motion.div
				onMouseEnter={ handleHover }
				onMouseLeave={ handleHoverOut }
			>
				<motion.video
					src="/Desktop.mkv"
					autoPlay={ isPlaying }
					muted
					loop
					className={ "w-full object-cover" }
					id={ "video-container" }
					style={ { scale, transition: "transform 1s ease-in-out" } }
				/>
			</motion.div>
		</motion.div>
	);
};

export default AboutMe;