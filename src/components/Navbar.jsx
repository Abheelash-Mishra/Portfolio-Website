import { motion } from 'framer-motion';

const Navbar = () => {
	return (
		<motion.div
			// initial = {{ opacity: 0 }}
			// whileInView={{ opacity: 1 }}
			className={ "flex flex-row justify-between text-cyberpunkYellow items-center text-2xl py-4 px-8 bg-transparent fixed top-0 left-0 w-full z-50" }
		>
			<div className={"flex flex-row"}>
				My Sign
			</div>
			<div className={"flex flex-row"}>
				<p className={ "text-cyberpunkYellow items-center text-2xl px-4" }>Navbar 1</p>
				<p className={ "text-cyberpunkYellow items-center text-2xl px-4" }>Navbar 2</p>
				<p className={ "text-cyberpunkYellow items-center text-2xl px-4" }>Navbar 3</p>
			</div>
		</motion.div>
	);
};

export default Navbar;