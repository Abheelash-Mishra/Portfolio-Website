import { motion } from "framer-motion";

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
				duration: 2,
				delay: 1
			}
		}
	};

	return (
		<div className={ "black-dotted-bg w-full text-cyberpunkYellow py-8" } id={"experience"}>
			<h1 className={ "xs:text-2xl text-xl font-bold text-aqua mt-36 mb-8 mx-8 border-b-2 border-aqua/20 bg-black" }>/// EXPERIENCE.MODULE....</h1>

			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={ { once: true } }
				variants={ expVariants }
				className={ "flex w-full flex-row justify-start mb-8" }
			>
				<div className={ "lg:w-1/2 md:w-2/3 w-full xs:mx-16 mx-6 text-xl border-2 border-aqua p-4 inline-block bg-black" }>
					<div className={ "font-semibold pb-4 border-b-2 border-aqua flex justify-between" }>
						<div>
							<h1 className={ "xs:text-2xl text-lg" }>Baton Systems</h1>
							<h3 className={ "xs:text-2xl text-lg" }>Industrial Trainee - Software Engineer</h3>
						</div>
						<p className={ "my-auto xs:text-xl text-lg text-right" }>February 2025 - Present</p>
					</div>
					<p className={ "py-4 text-justify xs:text-xl text-base" }>
						I am currently being trained on developing enterprise-level software with clean, maintainable code and a solid architecture.
						I follow industry best practices to keep things scalable and efficient, with effective logging for easy monitoring and debugging.
						I have worked hands-on with Test-Driven Development (TDD), unit testing, and integration testing to ensure everything runs smoothly and reliably.
						And I'm not done yet ;)
					</p>
				</div>
			</motion.div>

			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={ { once: true } }
				variants={ expVariants }
				className={ "flex w-full flex-row justify-end my-16" }
			>
				<div className={ "lg:w-1/2 md:w-2/3 w-full xs:mx-16 mx-6 text-xl border-2 border-aqua p-4 inline-block bg-black" }>
					<div className={ "font-semibold pb-4 border-b-2 border-aqua flex justify-between" }>
						<div>
							<h1 className={ "xs:text-2xl text-lg" }>Samsung R&D Institute India</h1>
							<h3 className={ "xs:text-2xl text-lg" }>PRISM Intern</h3>
						</div>
						<p className={ "my-auto xs:text-xl text-lg text-right" }>August 2023 - May 2024</p>
					</div>
					<p className={ "py-4 text-justify xs:text-xl text-base" }>
						I worked with my team to develop a machine learning model using a CNN architecture to convert monochrome and low-light images into
						high-quality images. We optimized performance, achieving an MSE value of 0.0090, an SSIM value of 0.7890, and a PSNR value of 74.88.
					</p>
				</div>
			</motion.div>



			{/*Left then right*/}

			{/*<motion.div*/}
			{/*	initial="offscreen"*/}
			{/*	whileInView="onscreen"*/}
			{/*	viewport={ { once: true } }*/}
			{/*	variants={ expVariants }*/}
			{/*	className={ "flex w-full flex-row justify-start mb-8" }*/}
			{/*>*/}
			{/*	<div className={ "lg:w-1/2 md:w-2/3 w-full xs:mx-16 mx-6 text-xl border-2 border-aqua p-4 inline-block bg-black" }>*/}
			{/*		<div className={ "font-semibold pb-4 border-b-2 border-aqua flex justify-between" }>*/}
			{/*			<div>*/}
			{/*				<h1 className={ "xs:text-2xl text-lg" }>Samsung R&D Institute India</h1>*/}
			{/*				<h3 className={ "xs:text-2xl text-lg" }>PRISM Intern</h3>*/}
			{/*			</div>*/}
			{/*			<p className={ "my-auto xs:text-xl text-lg text-right" }>August 2023 - Present</p>*/}
			{/*		</div>*/}
			{/*		<p className={ "py-4 text-justify xs:text-xl text-base" }>*/}
			{/*			I am currently working alongside my team to develop a CNN model that can take low-light*/}
			{/*			images and their monochrome image counterpart as inputs, and output an image that is well-lit.*/}
			{/*		</p>*/}
			{/*	</div>*/}
			{/*</motion.div>*/}

			{/*<motion.div*/}
			{/*	initial="offscreen"*/}
			{/*	whileInView="onscreen"*/}
			{/*	viewport={ { once: true } }*/}
			{/*	variants={ expVariants }*/}
			{/*	className={ "flex w-full flex-row justify-end my-16" }*/}
			{/*>*/}
			{/*	<div className={ "lg:w-1/2 md:w-2/3 w-full xs:mx-16 mx-6 text-xl border-2 border-aqua p-4 inline-block bg-black" }>*/}
			{/*		<div className={ "font-semibold pb-4 border-b-2 border-aqua flex justify-between" }>*/}
			{/*			<div>*/}
			{/*				<h1 className={ "xs:text-2xl text-lg" }>ThinkDigital</h1>*/}
			{/*				<h3 className={ "xs:text-2xl text-lg" }>Web Developer</h3>*/}
			{/*			</div>*/}
			{/*			<p className={ "my-auto xs:text-xl text-lg text-right" }>November 2022 - Present</p>*/}
			{/*		</div>*/}
			{/*		<p className={ "py-4 text-justify xs:text-xl text-base" }>*/}
			{/*			Honing my web development skills, I tackled diverse projects, both frontend and backend, at*/}
			{/*			ThinkDigital. This immersive experience solidified my proficiency across the tech stack, leaving*/}
			{/*			me eager to tackle new challenges.*/}
			{/*		</p>*/}
			{/*	</div>*/}
			{/*</motion.div>*/}

		</div>
	);
};

export default Experience;