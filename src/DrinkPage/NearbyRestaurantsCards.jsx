import { NearbyRestaurantsCardsData } from "../constants/drinkPageData.js";
import DrinkCard from "../components/DrinkCard.jsx";

const NearbyRestaurantsCards = () => {
    return (
        <section className="bg-[#f5faff] py-5 md:py-16">
            <div className="container mx-auto max-w-[1240px] px-6 xl:px-0">
                <div className="pb-8 w-full flex justify-between items-center">
                    <h2 className="font-bold text-lg md:text-[32px]">Restaurants nearby</h2>
                    <a href="#" className="font-semibold text-[13px] md:text-2xl text-primary hover:underline text-left">See More</a>
                </div>
                <div className="flex flex-wrap justify-evenly items-center gap-y-5">
                    {NearbyRestaurantsCardsData.map((item, index) => (
                        <DrinkCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default NearbyRestaurantsCards

