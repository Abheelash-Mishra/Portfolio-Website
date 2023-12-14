import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
	const [isOpen, setIsOpen] = useState([]);

	const toggleDetails = (projectIndex) => {
		const newIsOpen = [...isOpen];
		newIsOpen[projectIndex] = !newIsOpen[projectIndex];
		setIsOpen(newIsOpen);
	};

	const imageVariants = {
		closed_even: {
			x: 200,
			opacity: 0,
		},

		closed_odd: {
			x: -200,
			opacity: 0,
		},
		open: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.6,
				duration: 2,
				delay: 0.2
			}
		}
	};

	const isEven = (index) => {
		return index % 2 === 0;
	}

	const expandedHeight = 500;

	const projectArray = [
		{
			"id": "01",
			"name": "Project A",
			"details": "Duis vehicula arcu nec sem eleifend, quis scelerisque nibh aliquet. Donec egestas, sem sit amet faucibus auctor, ante velit bibendum justo, quis mollis purus arcu quis metus.",
			"image": "/ProjectA_img.png",
			"tech": ["React", "TailwindCSS", "Framer Motion", "React Router", "Bootstrap", "Node.js", "Express", "MongoDB", "Three.js"],
		},
		{
			"id": "02",
			"name": "Project B",
			"details": "Dolor sit amet, consectetur adipiscing elit. Phasellus aliquet luctus nunc ac congue.",
			"image": "/ProjectA_img.png",
			"tech": ["React", "TailwindCSS", "Framer Motion", "React Router", "Bootstrap", "Node.js", "Express", "MongoDB", "Three.js"],
		},
		{
			"id": "03",
			"name": "Project C",
			"details": "Cras gravida lorem odio, sit amet lacinia ante malesuada mollis. Duis et magna dignissim neque cursus dignissim a nec nulla.",
			"image": "/ProjectA_img.png",
			"tech": ["React", "TailwindCSS", "Framer Motion", "React Router"],
		},
		{
			"id": "04",
			"name": "Project D",
			"details": "Sed placerat in nibh posuere vulputate. Vivamus dictum, dolor vitae sollicitudin molestie, enim felis suscipit tellus, at lobortis velit nulla eget lacus.",
			"image": "/ProjectA_img.png",
			"tech": ["React", "TailwindCSS", "Framer Motion", "React Router"],
		},
		{
			"id": "05",
			"name": "Project E",
			"details": "Etiam lacinia lectus quis placerat ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vitae ex enim.",
			"image": "/ProjectA_img.png",
			"tech": ["React", "TailwindCSS", "Framer Motion", "React Router", "Bootstrap", "Node.js", "Express", "MongoDB", "Three.js"],
		},
		{
			"id": "06",
			"name": "Project F",
			"details": "Duis vehicula arcu nec sem eleifend, quis scelerisque nibh aliquet. Donec egestas, sem sit amet faucibus auctor, ante velit bibendum justo, quis mollis purus arcu quis metus.",
			"image": "/ProjectA_img.png",
			"tech": ["React", "TailwindCSS", "Framer Motion", "React Router"],
		},
	];

	return (
		<div className="flex flex-col items-center w-full bg-cyberpunkYellow py-20" id={ "yellow-bg" }>
			{ projectArray.map((project, index) => (
				<motion.button
					key={ project.id }
					className="flex flex-col w-5/6  border-2 border-t-2 border-black bg-cyberpunkYellow"
					onClick={ () => toggleDetails(index) }
					animate={ { height: isOpen[index] ? expandedHeight : 250 } }
					transition={ { duration: 0.5, ease: "easeInOut" } }
				>
					{ !isOpen[index] && (
						<>
							<div className={ `w-full flex flex-row justify-between` }>
								{ isEven(index) && (
									<div className={ "w-1/3 text-xl items-center my-auto" }>
										{ project.tech.map((tech, index) => (
											<motion.div
												key={ index }
												whileHover={ { scale: 1.1 } }
												whileTap={ { scale: 0.9 } }
												className="inline-block border-2 border-black rounded-full px-6 py-2 hover:text-cyberpunkYellow hover:bg-black font-semibold m-1"
											>
												{ tech }
											</motion.div>
										)) }
									</div>
								) }


								<div className={ "w-1/4 flex flex-col px-8 py-10" }>
									<p className="text-8xl font-bold mb-2">{ project.id }</p>
									<p className="text-4xl font-semibold mb-4">/// { project.name }</p>
								</div>

								{ !isEven(index) && (
									<div className={ "w-1/3 text-xl items-center my-auto" }>
										{ project.tech.map((tech, index) => (
											<motion.div
												key={ index }
												whileHover={ { scale: 1.1 } }
												whileTap={ { scale: 0.9 } }
												className="inline-block border-2 border-black rounded-full px-6 py-2 hover:text-cyberpunkYellow hover:bg-black font-semibold m-1"
											>
												{ tech }
											</motion.div>
										)) }
									</div>
								) }
							</div>
						</>
					) }

					{ isOpen[index] && (
						<motion.div
							className="flex flex-row h-full text-xl text-gray-600"
						>
							{ isEven(index) && (
								<div className="overflow-hidden w-2/3">
									<motion.img
										src={ project.image }
										alt={ project.name }
										initial="closed_even"
										animate="open"
										variants={ imageVariants }
										className="project-image-even object-cover"
									/>
								</div>
							) }


							<div className="w-1/3 flex flex-col p-10 text-black">
								<p className="text-6xl font-bold text-left">/// { project.name }</p>
								<p className="text-xl font-semibold text-justify my-8 h-32">{ project.details }</p>

								<div className="mt-12 overflow-hidden">
									<motion.button
										whileHover={ { scale: 1.1 } }
										whileTap={ { scale: 0.9 } }
										className="border-2 border-black rounded-full px-8 py-4 hover:text-cyberpunkYellow hover:bg-black font-semibold m-3"
									>
										<a href="#">
											Github Repo <i className="fa-solid fa-up-right-from-square"></i>
										</a>
									</motion.button>

									<motion.button
										whileHover={ { scale: 1.1 } }
										whileTap={ { scale: 0.9 } }
										className="border-2 border-black rounded-full px-8 py-4 hover:text-cyberpunkYellow hover:bg-black font-semibold m-3"
									>
										<a href="">
											Live Deploy <i className="fa-solid fa-up-right-from-square"></i>
										</a>
									</motion.button>
								</div>
							</div>


							{ !isEven(index) && (
								<div className="overflow-hidden w-2/3">
									<motion.img
										src={ project.image }
										alt={ project.name }
										initial="closed_odd"
										animate="open"
										variants={ imageVariants }
										className="project-image-odd object-cover"
									/>
								</div>
							) }
						</motion.div>
					) }


				</motion.button>
			)) }
		</div>
	);
};

export default Projects;
