import { carouselData } from "../constants/homePageData.js";

import Carousel from "../components/Carousel.jsx";
import { Hero, ImageGallery, ImageServices, MainServices, TopServices } from './index.js'

const HomePage = () => {
    return (
        <>
            <Hero />
            <ImageServices />
            <TopServices />
            <MainServices />
            <Carousel carouselHeading="See How People are Chilling On Chillsbay" carouselTitle="Upcoming events this weekend" carouselData={carouselData} />
            <ImageGallery />
        </>
    )
}
export default HomePage
