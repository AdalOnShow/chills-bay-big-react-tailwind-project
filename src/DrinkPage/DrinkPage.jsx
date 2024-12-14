import { DrinkCarouselData } from "../constants/drinkPageData.js";

import Carousel from "../components/Carousel.jsx";
import { DrinkHero, FindPlaces, PopularRestaurantsCards, NearbyRestaurantsCards, Maps } from "../DrinkPage/index.js";

const DrinkPage = () => {
    return (
        <div>
            <DrinkHero />
            <FindPlaces />
            <PopularRestaurantsCards />
            <Carousel carouselTitle="Upcoming Eat & Drink Events" carouselData={DrinkCarouselData} />
            <NearbyRestaurantsCards />
            <Maps />
        </div>
    )
}
export default DrinkPage
