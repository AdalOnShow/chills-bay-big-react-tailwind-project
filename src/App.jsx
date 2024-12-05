import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import ImageServices from "./sections/ImageServices.jsx";
import TopServices from "./sections/TopServices.jsx";
import MainServices from "./sections/MainServices.jsx";
import Carousel from "./sections/Carousel.jsx";

const App = () => {
    return (
        <main className="font-RedHatDisplay">
            <Navbar />
            <Hero />
            <ImageServices />
            <TopServices />
            <MainServices />
            <Carousel />
        </main>
    )
}

export default App