import {motion} from "framer-motion";

const Experience = () => {
	const expVariants = {
		offscreen: {
			opacity: 0,
		},
		onscreen: {
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 3,
				delay: 1
			}
		}
	};

	return (
		<div className={ "black-dotted-bg w-full text-cyberpunkYellow" }>
			<h1 className={ "text-xl text-aqua mt-32 mb-8 mx-8 border-b-2 border-aqua/20" }>/// EXPERIENCE.MODULE....</h1>

			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{once: true}}
				variants={ expVariants }
				className={ "flex w-full flex-row justify-start mb-8" }
			>
				<div className={ "w-1/2 mx-16 text-xl border-2 border-aqua p-4 inline-block bg-black" }>
					<div className={ "font-semibold pb-4 border-b-2 border-aqua flex justify-between" }>
						<div>
							<h1 className={ "text-2xl" }>Samsung R&D Institute India</h1>
							<h3>PRISM Intern</h3>
						</div>
						<p className={ "my-auto text-xl" }>August 2023 - Present</p>
					</div>
					<p className={ "py-4 text-justify" }>
						I am currently working alongside my team to develop a CNN model that can
						take low-light images and
						their monochrome image counterpart as inputs, and output an image that is well-lit.
					</p>
				</div>
			</motion.div>

			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{once: true}}
				variants={ expVariants }
				className={ "flex w-full flex-row justify-end my-16" }
			>
				<div className={ "w-1/2 mx-16 text-xl border-2 border-aqua p-4 inline-block bg-black" }>
					<div className={ "font-semibold pb-4 border-b-2 border-aqua flex justify-between" }>
						<div>
							<h1 className={ "text-2xl" }>ThinkDigital</h1>
							<h3>Web Developer</h3>
						</div>
						<p className={ "my-auto text-xl" }>November 2022 - Present</p>
					</div>
					<p className={ "py-4 text-justify" }>
						Honing my web development skills, I tackled diverse projects, both frontend and backend, at
						ThinkDigital. This immersive experience solidified my proficiency across the tech stack, leaving
						me eager to tackle new challenges.
					</p>
				</div>
			</motion.div>

		</div>
	);
};

export default Experience;