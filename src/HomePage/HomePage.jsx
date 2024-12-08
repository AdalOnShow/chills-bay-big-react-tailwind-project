import Hero from "./Hero.jsx";
import ImageServices from "./ImageServices.jsx";
import TopServices from "./TopServices.jsx";
import MainServices from "./MainServices.jsx";
import Carousel from "../components/Carousel.jsx";
import ImageGallery from "./ImageGallery.jsx";

const HomePage = () => {
    return (
        <>
            <Hero />
            <ImageServices />
            <TopServices />
            <MainServices />
            <Carousel />
            <ImageGallery />
        </>
    )
}
export default HomePage
