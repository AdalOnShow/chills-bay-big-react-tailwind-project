import { NearNightClubsData } from "../constants/clubPageData.js";
import ClubCard from "../components/ClubCard.jsx";

const NearNightClubs = () => {
    return (
        <section className="bg-black text-white py-5 md:py-16">
            <div className="container mx-auto max-w-[1240px] px-6 xl:px-0">
                <div className="pb-8 w-full flex justify-between items-center">
                    <h2 className="font-bold text-lg md:text-[32px]">Bars and Night clubs near you</h2>
                    <a href="#" className="font-semibold text-[13px] md:text-2xl text-primary hover:underline text-left">See More</a>
                </div>
                <div className="flex flex-wrap justify-evenly items-center gap-x-5 gap-y-5">
                    {NearNightClubsData.map((item, index) => (
                        <ClubCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default NearNightClubs

