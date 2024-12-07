import Navbar from "./components/Navbar.jsx";
import { Carousel, Footer, Hero, ImageGallery, ImageServices, MainServices, TopServices } from "./sections/index.js";

const App = () => {
    return (
        <main className="font-RedHatDisplay text-blueGray">
            <Navbar />
            <Hero />
            <ImageServices />
            <TopServices />
            <MainServices />
            <Carousel />
            <ImageGallery />
            <Footer />
        </main>
    )
}

export default App