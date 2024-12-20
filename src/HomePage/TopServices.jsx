import { topSeriesData } from "../constants/homePageData.js";

const TopServices = () => {
    return (
        <section className="bg-primary-100 py-[50px] px-6 xl:px-0">
            <div className="container mx-auto max-w-[1240px]">
                <h4 className="font-bold text-2xl md:text-[32px] ">Top things to do in Lagos</h4>
                <div className="grid grid-flow-col md:grid-flow-row md:grid-cols-4 gap-2.5 md:gap-5 mt-10 overflow-y-auto scroll-auto md:overflow-x-hidden">
                    {topSeriesData.map(({ id, title, img }) => (
                        <div key={id} className="xl:mb-5 w-40 md:w-full hover:scale-105 transition-all duration-200 rounded-2xl">
                            <img src={img} alt={title}
                                className="w-full rounded-2xl object-cover object-top h-[145px] md:h-[270px] mx-auto" />
                            <h4 className="font-bold text-sm lg:text-[22px]  text-center my-3">{title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default TopServices
