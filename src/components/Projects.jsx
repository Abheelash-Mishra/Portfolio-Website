import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
	const [isOpen, setIsOpen] = useState([]);

	const toggleDetails = (projectIndex) => {
		const newIsOpen = [...isOpen];
		newIsOpen[projectIndex] = !newIsOpen[projectIndex];
		setIsOpen(newIsOpen);
	};

	const projectArray = [
		{
			"id": "01",
			"name": "Project A",
			"details": "Duis vehicula arcu nec sem eleifend, quis scelerisque nibh aliquet. Donec egestas, sem sit amet faucibus auctor, ante velit bibendum justo, quis mollis purus arcu quis metus.",
			"image": "/ProjectA_img.png",
		},
		{
			"id": "02",
			"name": "Project B",
			"details": "Dolor sit amet, consectetur adipiscing elit. Phasellus aliquet luctus nunc ac congue.",
			"image": "/ProjectA_img.png",
		},
		{
			"id": "03",
			"name": "Project C",
			"details": "Cras gravida lorem odio, sit amet lacinia ante malesuada mollis. Duis et magna dignissim neque cursus dignissim a nec nulla.",
			"image": "/ProjectA_img.png",
		},
		{
			"id": "04",
			"name": "Project D",
			"details": "Sed placerat in nibh posuere vulputate. Vivamus dictum, dolor vitae sollicitudin molestie, enim felis suscipit tellus, at lobortis velit nulla eget lacus.",
			"image": "/ProjectA_img.png",
		},
		{
			"id": "05",
			"name": "Project E",
			"details": "Etiam lacinia lectus quis placerat ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vitae ex enim.",
			"image": "/ProjectA_img.png",
		},
		{
			"id": "06",
			"name": "Project F",
			"details": "Duis vehicula arcu nec sem eleifend, quis scelerisque nibh aliquet. Donec egestas, sem sit amet faucibus auctor, ante velit bibendum justo, quis mollis purus arcu quis metus.",
			"image": "/ProjectA_img.png",
		},
	];

	const expandedHeight = 500;

	return (
		<div className="flex flex-col items-center w-full bg-cyberpunkYellow py-20" id={ "yellow-bg" }>
			{ projectArray.map((project, index) => (
				<motion.button
					key={ project.id }
					className="flex flex-col w-3/4  border-2 border-t-2 border-black bg-cyberpunkYellow"
					onClick={ () => toggleDetails(index) }
					animate={ { height: isOpen[index] ? expandedHeight : 250 } }
					transition={ { duration: 0.5, ease: "easeInOut" } }
				>
					{ !isOpen[index] && (
						<motion.div className={ "w-full flex flex-row justify-between" }>
							<div className={ "w-1/4 flex flex-col pl-8 py-10" }>
								<p className="text-8xl font-bold mb-2">{ project.id }</p>
								<p className="text-4xl font-semibold mb-4">/// { project.name }</p>
							</div>
						</motion.div>
					) }

					{ isOpen[index] && (
						<motion.div className="flex flex-row h-full text-xl text-gray-600">
							<div className={"w-1/3 flex flex-col pl-10 py-10 text-black"}>
								<p className={"text-6xl font-bold text-left"}>/// {project.name}</p>

								<p className={"text-xl text-justify my-8 h-32"}>{project.details}</p>

								<div className={"mt-12 overflow-hidden"}>
									<motion.button
										whileHover={ { scale: 1.1 } }
										whileTap={ { scale: 0.9 } }
										className={"border-2 border-black rounded-full px-8 py-4 hover:text-black font-semibold m-4"}
									>
										<a href="#">
											Github Repo <i className="fa-solid fa-download" />
										</a>
									</motion.button>

									<motion.button
										whileHover={ { scale: 1.1 } }
										whileTap={ { scale: 0.9 } }
										className={"border-2 border-black rounded-full px-8 py-4 hover:text-black font-semibold"}
									>
										<a href="#">
											Live Deploy <i className="fa-solid fa-download" />
										</a>
									</motion.button>
								</div>

							</div>
							<div className="overflow-hidden w-2/3">
								<img
									src={ project.image }
									alt={ project.name }
									className="project-image object-cover"
								/>
							</div>
						</motion.div>
					) }

				</motion.button>
			)) }
		</div>
	);
};

export default Projects;
