import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const RotatePhoneIndicator = () => {
	const [isPortrait, setIsPortrait] = useState(
		window.innerWidth < window.innerHeight && window.innerWidth < 768
	);

	useEffect(() => {
		const handleResize = () => {
			setIsPortrait(window.innerWidth < window.innerHeight && window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (!isPortrait) return null; // Show only in portrait mode

	return (
		<div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black text-white z-50">
			<motion.div
				className="text-6xl"
				initial={{ rotate: 0 }}
				animate={{ rotate: -90 }}
				transition={{ repeat: 0, duration: 2 }}
			>
				<div className={"w-[6vh] h-[10vh] border-2 border-cyberpunkYellow rounded-xl flex flex-row justify-center items-end"}>
					<div className={"w-[1.5vh] h-[1.5vh] border-2 border-cyberpunkYellow rounded-full mb-1"}></div>
				</div>

			</motion.div>
			<p className="mt-4 text-lg">Rotate your device for the best experience</p>
		</div>
	);
};

export default RotatePhoneIndicator;
