import { useState, useEffect } from "react";

const Navbar = () => {
	const [isYellowBg, setIsYellowBg] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			setIsYellowBg(entries[0].isIntersecting);
		}, {threshold: 0.5});
		observer.observe(document.getElementById("yellow-bg"));
	}, []);

	return (
		<nav
			className={ `flex flex-row justify-between text-${
				isYellowBg ? "black" : "cyberpunkYellow"
			} items-center text-2xl pt-4 px-8 bg-transparent fixed top-0 left-0 w-full z-50` }
		>
			<div className={"flex flex-row"}>
				<a href="#hero">
					<img src={`${isYellowBg ? "/black_sign.png" : "/yellow_sign.png"}`} alt="Abheelash" className={"w-1/4 transform -rotate-3"} />
				</a>
			</div>
			<div className={"flex flex-row"}>
				<a href={"#aboutMe"} className={ `text-${isYellowBg ? "black" : "cyberpunkYellow"} items-center text-2xl px-4 font-semibold` }>About Me</a>
				<a className={ `text-${isYellowBg ? "black" : "cyberpunkYellow"} items-center text-2xl px-4 font-semibold` }>Navbar 2</a>
				<a className={ `text-${isYellowBg ? "black" : "cyberpunkYellow"} items-center text-2xl px-4 font-semibold` }>Navbar 3</a>
			</div>
		</nav>
	);
};

export default Navbar;
