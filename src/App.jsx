// import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PortfolioIntro from "./components/PortfolioIntro.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Footer from "./components/Footer.jsx";
import RotatePhoneIndicator from "./components/RotatePhoneIndicator.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
	return (
		<div className={ "flex flex-col items-center" }>
			<Navbar />
			<RotatePhoneIndicator />
			<Hero/>
			<PortfolioIntro/>
			<AboutMe/>

			<div className={ "mt-32" } id={"projects"}>
				<img src="/SectionChange.png" alt="///LOADING"/>
			</div>

			<Projects/>
			<Experience/>
			<ContactMe/>
			<Footer/>
		</div>

	)
}

export default App
