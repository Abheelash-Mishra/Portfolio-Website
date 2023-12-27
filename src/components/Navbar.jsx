import { useEffect, useState } from "react";

const Navbar = () => {
	const [navBackground, setNavBackground] = useState('transparent');

	const handleScroll = () => {
		const scrollPosition = window.scrollY;

		const changePosition = 800;

		if (scrollPosition > changePosition) {
			setNavBackground('black');
		} else {
			setNavBackground('transparent');
		}
	};

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={ `flex flex-row justify-between items-center text-2xl pt-4 lg:px-8 sm:px-1 bg-${navBackground} fixed top-0 left-0 w-full z-50 border-b-2 border-aqua` }
		>
			<div className={"flex flex-row"}>
				<a href="#hero" className={"lg:max-w-[250px] sm:max-w-[150px]"}>
					<img src={"/yellow_sign.png"} alt="Abheelash" className={"max-w-full transform -rotate-3"} />
				</a>
			</div>
			<div className={ "flex flex-row lg:text-2xl sm:text-lg" }>
				<a href={ "#aboutMe" } className={ `text-cyberpunkYellow items-center px-4 font-semibold` }>
					// About Me
				</a>
				<a href={ "" } className={ `text-cyberpunkYellow items-center px-4 font-semibold` }>
					// Projects
				</a>
				<a href={ "" } className={ `text-cyberpunkYellow items-center px-4 font-semibold` }>
					// Experience
				</a>
				<a href={ "" } className={ `text-cyberpunkYellow items-center px-4 font-semibold` }>
					// Contact Me
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
