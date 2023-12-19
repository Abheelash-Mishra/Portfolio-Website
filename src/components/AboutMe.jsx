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
			className={ "w-full h-full flex flex-row my-20" }
		>
			<div className={ "w-full mx-20 my-10" }>
				<p className={ "flex flex-col items-center text-cyberpunkYellow text-xl text-justify" }>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet luctus nunc ac congue.
					Cras
					gravida lorem odio, sit amet lacinia ante malesuada mollis. Duis et magna dignissim neque cursus
					dignissim a nec nulla. Sed placerat in nibh posuere vulputate. Vivamus dictum, dolor vitae
					sollicitudin
					molestie, enim felis suscipit tellus, at lobortis velit nulla eget lacus. Etiam lacinia lectus quis
					placerat ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
					curae;
					Integer vitae ex enim. Duis vehicula arcu nec sem eleifend, quis scelerisque nibh aliquet.

					<br/>
					<br/>

					Duis vestibulum vulputate nisl ac tincidunt. Duis fringilla et lectus sed dictum. Quisque sit amet
					ante
					a nunc iaculis rhoncus. Donec egestas, sem sit amet faucibus auctor, ante velit bibendum justo, quis
					mollis purus arcu quis metus. Phasellus convallis pharetra orci, a porttitor mauris accumsan eget.
					Quisque aliquam finibus ex nec sollicitudin. Aenean feugiat, augue et venenatis facilisis, nunc
					neque
					molestie nibh, auctor laoreet velit mi id orci. Curabitur posuere ante dolor, eget aliquet mi
					consequat
					vel. In mattis, libero accumsan facilisis iaculis, urna urna vehicula ligula, in suscipit velit est
					sit
					amet urna. Donec sed enim mauris. Morbi dolor sem, ultrices pharetra justo in, semper finibus
					turpis.
					Donec risus metus, cursus non eleifend eu, vestibulum eget nisl. Integer mattis turpis at massa
					sagittis
					accumsan. In eu nisl vel massa suscipit convallis eget in tellus.

					<br/>
					<br/>

					<div className={ "w-full flex flex-row items-center justify-between px-32" }>
						<p>Anyways, get my resume here!</p>
						<motion.button
							whileHover={ { scale: 1.1 } }
							whileTap={ { scale: 0.9 } }
							className={ "border-2 border-cyberpunkYellow rounded-full px-8 py-4 hover:bg-cyberpunkYellow hover:text-black font-semibold" }
						>
							<a href="#">
								Resume <i className="fa-solid fa-download"/>
							</a>
						</motion.button>
					</div>
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