import Hero from "./components/Hero.jsx";
import PortfolioIntro from "./components/PortfolioIntro.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import ContactMe from "./components/ContactMe.jsx";

import { MonitorModel } from "./components/canvas/Monitor.jsx";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

function App() {
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
			<ContactMe />

			<Canvas shadows>
				<Suspense fallback={null}>
					<OrbitControls />
					<ambientLight intensity={1} />
					<MonitorModel />
				</Suspense>
			</Canvas>

		</div>

	)
}

export default App
