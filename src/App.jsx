import Hero from "./components/Hero.jsx";
import { useScroll } from "framer-motion";
import PortfolioIntro from "./components/PortfolioIntro.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
    const { scrollY } = useScroll();
    return (
        <div className={"flex flex-col"}>
            <Navbar />
            <Hero/>
            <PortfolioIntro />

            <div>
                <img src="/SectionChange.png" alt="///LOADING" />
            </div>

            <div className={"bg-cyberpunkYellow"}>
                <h1>TEstt</h1>
            </div>
        </div>

    )
}

export default App
