import ClubHero from "./ClubHero.jsx";
import PopularNightClubs from "./PopularNightClubs.jsx";
import Carousel from "../components/Carousel.jsx";
import Maps from "../components/Maps.jsx";
import NearNightClubs from "./NearNightClubs.jsx";

import { ClubCarouselData } from "../constants/clubPageData.js";

const ClubPage = () => {
    return (
        <main>
            <ClubHero />
            <PopularNightClubs />
            <Carousel carouselTitle="Tonight In Lagos" carouselData={ClubCarouselData} />
            <NearNightClubs />
            <Maps />
        </main>
    )
}
export default ClubPage
