import Hero from "./components/Hero.jsx";
import PortfolioIntro from "./components/PortfolioIntro.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./components/AboutMe.jsx";

function App() {
    return (
        <div className={"flex flex-col items-center"}>
            <Navbar />
            <Hero/>
            <PortfolioIntro />
            <AboutMe />

            <div>
                <img src="/SectionChange.png" alt="///LOADING" />
            </div>

            <div className={"bg-cyberpunkYellow"}>
                <h1>Test</h1>
            </div>
        </div>

    )
}

export default App
