import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import ImageServices from "./sections/ImageServices.jsx";
import TopServices from "./sections/TopServices.jsx";

const App = () => {
    return (
        <main className="font-RedHatDisplay">
            <Navbar />
            <Hero />
            <ImageServices />
            <TopServices />
        </main>
    )
}

export default App