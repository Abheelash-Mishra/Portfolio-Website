const Navbar = () => {
	return (
		<nav
			className={ `flex flex-row justify-between items-center text-2xl pt-4 lg:px-8 sm:px-1 bg-transparent absolute top-0 w-full z-50` }
		>
			<div className={ "flex flex-row" }>
				<a href="#hero" className={ "lg:max-w-[250px] sm:max-w-[150px]" }>
					<img src={ "/yellow_sign.png" } alt="Abheelash" className={ "max-w-full transform -rotate-3" } />
				</a>
			</div>
			<div className={ "flex flex-row lg:text-2xl sm:text-lg" }>
				<a href={ "#aboutMe" } className={ `text-cyberpunkYellow items-center px-4 font-semibold` }>
					// About Me
				</a>
				<a href={ "#projects" } className={ `text-cyberpunkYellow items-center px-4 font-semibold` }>
					// Projects
				</a>
				<a href={ "#experience" } className={ `text-cyberpunkYellow items-center px-4 font-semibold` }>
					// Experience
				</a>
				<a href={ "#contact" } className={ `text-cyberpunkYellow items-center px-4 font-semibold` }>
					// Contact Me
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
