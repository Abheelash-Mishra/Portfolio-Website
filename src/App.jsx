import Hero from "./components/Hero.jsx";
import PortfolioIntro from "./components/PortfolioIntro.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import ContactMe from "./components/ContactMe.jsx";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { MonitorV2 } from "./components/canvas/MonitorV2.jsx";

function App() {
	const [isActive, setIsActive] = useState(false)
	return (
		<div className={ "flex flex-col items-center" }>
			<Navbar/>
			<Hero/>
			<PortfolioIntro/>
			<AboutMe/>

			<div className={ "mt-32" }>
				<img src="/SectionChange.png" alt="///LOADING"/>
			</div>

			<Projects/>
			<Experience />
			<ContactMe setIsActive={setIsActive} />

			<Canvas>
				<Suspense fallback={null}>
					<OrbitControls />
					<pointLight intensity={5} position={[0,3,4]} />
					<MonitorV2 isActive={isActive} />
				</Suspense>
			</Canvas>

		</div>

	)
}

export default App
